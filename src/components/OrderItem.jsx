import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";

const OrderItem = ({ order }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.total}>Total: ${order.total.toFixed(2)}</Text>
      {order.cartItems.map((item, index) => (
        <View key={index} style={styles.itemCard}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemText}>Quantity: {item.quantity}</Text>
          <Text style={styles.itemText}>Price: ${item.price.toFixed(2)}</Text>
        </View>
      ))}
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: colors.gray400,
    padding: 20,
    marginVertical: 12,
    borderRadius: 12,
    backgroundColor: colors.gray800,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
    marginBottom: 15,
  },
  itemCard: {
    padding: 15,
    backgroundColor: colors.gray700,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.white,
    marginBottom: 4,
  },
  itemText: {
    fontSize: 14,
    color: colors.white,
  },
});
