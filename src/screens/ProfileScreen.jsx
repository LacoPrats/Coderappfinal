import React, { useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { colors } from "../global/colors";
import AddButton from "../components/AddButton";
import { useGetProfileImageQuery } from "../services/shopServices";
import { setImageProfile, setLogout } from "../features/Auth/AuthSlice";
import { logoutSession, querySessions } from "../db/sessions";
import { clearCart } from "../features/Cart/CartSlice";

const ProfileScreen = ({ navigation }) => {
  const user = useSelector((state) => state.auth.user);
  const localId = useSelector((state) => state.auth.localId);
  const profileImage = useSelector((state) => state.auth.profileImage);
  const { data, isLoading } = useGetProfileImageQuery(localId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data && data.image) {
      dispatch(setImageProfile(data.image));
    } else {
      dispatch(setImageProfile(null));
    }
  }, [data]);

  const handleLogout = async () => {
    try {
      const sessions = await querySessions();
      if (sessions.length > 0) {
        const localId = sessions[0].localId;
        await logoutSession(localId);
        dispatch(clearCart());
        dispatch(setLogout());
        dispatch(setImageProfile(null));
        Alert.alert("Sesión cerrada con éxito");
      } else {
        Alert.alert("No se encontraron sesiones.");
      }
    } catch (error) {
      Alert.alert("Error al cerrar sesión:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={
          profileImage
            ? { uri: profileImage }
            : require("../../assets/user.png")
        }
        style={styles.img}
      />
      <View style={styles.buttonContainer}>
        <AddButton
          title="Agregar foto de perfil"
          onPress={() => navigation.navigate("ImageSelector")}
        />
        <AddButton title="Cerrar Sesión" onPress={handleLogout} />
      </View>
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.green700} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.purpleLight,
    padding: 20,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: colors.green700,
    marginBottom: 20,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
  },
  emailText: {
    fontSize: 16,
    color: colors.gray800,
    textAlign: "center",
    marginTop: 10,
  },
  emailLabel: {
    fontWeight: "bold",
    color: colors.green900,
  },
  emailValue: {
    color: colors.green700,
  },
});

export default ProfileScreen;
