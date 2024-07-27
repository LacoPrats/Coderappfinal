import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { colors } from "../global/colors";

const InputText = ({
  error,
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
  secureTextEntry = false,
  style,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, error && styles.inputError, style]}
        placeholder={placeholder}
        placeholderTextColor={colors.lightGray}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
    paddingHorizontal: 10, // Added padding for container
  },
  input: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: colors.darkGray, // Updated to darker color for better contrast
    borderRadius: 10, // Increased borderRadius for a more rounded look
    backgroundColor: colors.white, // Changed background color for dark theme
    color: colors.white, // Text color for dark background
  },
  inputError: {
    borderColor: colors.red,
  },
  errorText: {
    color: colors.red,
    marginTop: 5,
    fontSize: 12, // Adjusted font size for error text
    marginHorizontal: 5, // Adjusted margin for better alignment
  },
});

export default InputText;
