import { StyleSheet, Text, Pressable, View } from "react-native";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/Shop/ShopSlice";
import { colors } from "../global/colors";

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch();

  const handleNavigate = () => {
    dispatch(setCategorySelected(category));
    navigation.navigate("ItemListCategory");
  };

  return (
    <Pressable onPress={handleNavigate} style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.text}>{category}</Text>
      </View>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 12,
    marginVertical: 8,
    backgroundColor: colors.navyBlue,
    borderRadius: 20,
    padding: 20,
    elevation: 8,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    transform: [{ scale: 0.98 }],
  },
  cardContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 22,
    textAlign: "center",
    color: colors.white,
    fontFamily: "JosefinSans", // Asegúrate de que la fuente esté disponible
    fontWeight: "600",
  },
});
