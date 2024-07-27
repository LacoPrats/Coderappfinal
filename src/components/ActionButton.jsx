import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../global/colors";

const ActionButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 16,
    alignItems: "center",
    borderRadius: 12,
    marginTop: 20,
    borderWidth: 1,
    borderColor: colors.green300,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default ActionButton;
