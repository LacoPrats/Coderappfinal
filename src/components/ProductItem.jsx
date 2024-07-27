import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Card from "./Card";
import { colors } from "../global/colors";

const ProductItem = ({ product, navigation }) => {
  const handleNavigate = () => {
    navigation.navigate("ItemDetail", { productId: product.id });
  };

  return (
    <Card style={styles.card}>
      <Pressable style={styles.content} onPress={handleNavigate}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: product.thumbnail }}
        />
        <View style={styles.info}>
          <Text style={styles.title}>{product.title}</Text>
        </View>
      </Pressable>
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  card: {
    height: 180,
    width: "100%",
    marginVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.navyBlue,
    borderRadius: 16,
    shadowColor: colors.gray700,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    overflow: "hidden",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    padding: 10,
  },
  info: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.white,
    flexShrink: 1,
  },
  image: {
    height: 140,
    width: 140,
    borderRadius: 12,
    backgroundColor: colors.gray100,
  },
});
