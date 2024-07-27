import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: colors.darkBlue, // Cambia esto al color oscuro de tu paleta
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white, // Cambia esto al color claro que contraste bien
    fontSize: 22,
    fontFamily: "Josefin", // Asegúrate de que esta fuente esté bien cargada y disponible
  },
});
