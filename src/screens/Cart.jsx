import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  ActivityIndicator,
  Modal,
} from "react-native";
import CartItem from "../components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { usePostOrderMutation } from "../services/shopServices";
import { clearCart } from "../features/Cart/CartSlice";
import { colors } from "../global/colors";
import { addOrderItem } from "../features/Order/OrderSlice";
import { useState } from "react";

const CartScreen = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const total = useSelector((state) => state.cart.value.total);
  const user = useSelector((state) => state.auth.user);
  const [postOrder, { isLoading, isError }] = usePostOrderMutation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.value.items);

  const confirmCart = async () => {
    try {
      dispatch(addOrderItem({ total, cartItems, user }));
      await postOrder({ total, cartItems, user });

      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        dispatch(clearCart());
      }, 3000);
    } catch (error) {
      setErrorMessage("Error al confirmar la orden: " + error.message);
      setShowErrorMessage(true);
    }
  };

  const closeModal = () => {
    setShowSuccessMessage(false);
    setShowErrorMessage(false);
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.green500} />
        </View>
      )}
      {!isLoading && !isError && (
        <View style={styles.cartContent}>
          {cartItems.length === 0 ? (
            <View style={styles.emptyCartContainer}>
              <Text style={styles.emptyCartText}>
                No hay productos en el carrito
              </Text>
            </View>
          ) : (
            <>
              <FlatList
                data={cartItems}
                renderItem={({ item }) => <CartItem cartItem={item} />}
                keyExtractor={(item) => item.id}
              />

              <View style={styles.orderSummary}>
                <Pressable style={styles.confirmButton} onPress={confirmCart}>
                  <Text style={styles.confirmButtonText}>Confirmar Orden</Text>
                </Pressable>
                <Text style={styles.totalText}>Total: $ {total}</Text>
              </View>
            </>
          )}
        </View>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showSuccessMessage || showErrorMessage}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {showSuccessMessage && (
              <Text style={styles.successText}>
                ¡Orden confirmada exitosamente!
              </Text>
            )}
            {showErrorMessage && (
              <Text style={styles.errorText}>{errorMessage}</Text>
            )}
            <Pressable style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: colors.purpleLight, // Mantiene el fondo
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  successText: {
    fontSize: 18,
    color: colors.white,
    textAlign: "center",
    fontFamily: "Josefin",
  },
  errorText: {
    fontSize: 18,
    color: colors.red,
    textAlign: "center",
    fontFamily: "Josefin",
  },
  emptyCartContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyCartText: {
    fontSize: 18,
    color: colors.white, // Texto en blanco para buen contraste
    fontFamily: "Josefin",
  },
  cartContent: {
    flex: 1,
  },
  orderSummary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.navyBlue,
    padding: 15,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  confirmButton: {
    backgroundColor: colors.green300,
    padding: 10,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Josefin",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
    fontFamily: "Josefin",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.navyBlue,
    alignItems: "center",
    elevation: 5,
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.green300,
    borderRadius: 5,
  },
  closeButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Josefin",
  },
});
