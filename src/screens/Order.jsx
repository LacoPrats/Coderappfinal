import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import OrderItem from "../components/OrderItem";
import { useGetOrdersByUserQuery } from "../services/shopServices";
import { useDispatch, useSelector } from "react-redux";
import { setOrders } from "../features/Order/OrderSlice";
import { colors } from "../global/colors";

const Order = () => {
  const user = useSelector((state) => state.auth.user);
  const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();

  const { data: orderData, isLoading, error } = useGetOrdersByUserQuery(user);

  useEffect(() => {
    if (orderData && orderData.length > 0) {
      dispatch(setOrders(orderData));
    }
  }, [orderData, dispatch]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error fetching orders: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {orders && orders.length > 0 ? (
        <FlatList
          data={orders}
          keyExtractor={(orderItem, index) => index.toString()}
          renderItem={({ item }) => <OrderItem order={item} />}
        />
      ) : (
        <View style={styles.noOrders}>
          <Text style={styles.contentText}>
            No se encontaron ordenes de compra
          </Text>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: colors.purpleLight,
  },
  noOrders: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentText: {
    fontSize: 18,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
