import React from "react";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Puedes cambiar a otro icono si lo prefieres
import { colors } from "../global/colors";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../features/Cart/CartSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const onTrash = async () => {
    try {
      dispatch(removeCartItem(cartItem));
    } catch (error) {
      Alert.alert("Failed to remove cart item: ", error.message);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {cartItem.title} x{cartItem.quantity}
        </Text>
        <Text style={styles.text2}>{cartItem.brand}</Text>
        <Text style={styles.text2}>${cartItem.price}</Text>
      </View>
      <Pressable onPress={onTrash}>
        <MaterialIcons name="delete" size={30} color={colors.red} />
      </Pressable>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  card: {
    height: 100,
    backgroundColor: colors.navyBlue,
    padding: 15,
    margin: 10,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: colors.gray500,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  textContainer: {
    width: "70%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    fontFamily: "Josefin",
    fontSize: 18,
    color: colors.white,
  },
  text2: {
    fontFamily: "Josefin",
    fontSize: 14,
    color: colors.silverGray,
  },
});
