import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import AddButton from "../components/AddButton";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { setImageProfile } from "../features/Auth/AuthSlice";
import { usePostProfileImageMutation } from "../services/shopServices";
import { colors } from "../global/colors";

const ImageSelectorScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const localId = useSelector((state) => state.auth.localId);
  const [triggerSaveProfileImage] = usePostProfileImageMutation();
  const dispatch = useDispatch();

  const verifyCameraPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("Se requiere permiso para usar la cámara");
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermission();
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.2,
      });

      if (!result.canceled) {
        const imageUri = `data:image/jpeg;base64,${result.assets[0].base64}`;
        setImage(imageUri);
      }
    }
  };

  const confirmImage = async () => {
    dispatch(setImageProfile(image));
    await triggerSaveProfileImage({ image, localId });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {image === null ? (
        <>
          <View style={styles.noImgContainer}>
            <Text style={styles.noImgText}>No hay ninguna foto...</Text>
          </View>
          <AddButton title="Tomar una foto" onPress={pickImage} />
        </>
      ) : (
        <>
          <Image source={{ uri: image }} style={styles.img} />
          <AddButton title="Tomar otra foto" onPress={pickImage} />
          <AddButton title="Confirmar foto" onPress={confirmImage} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: colors.purpleLight,
    padding: 20,
  },
  noImgContainer: {
    height: 200,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: colors.gray700,
    backgroundColor: colors.gray800,
    borderRadius: 12,
  },
  noImgText: {
    color: colors.white,
    fontSize: 16,
  },
  img: {
    height: 200,
    width: 200,
    marginBottom: 20,
    borderRadius: 12,
  },
});

export default ImageSelectorScreen;
