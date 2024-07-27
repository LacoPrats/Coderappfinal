import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import CartStackNavigator from "./CartStackNavigator";
import OrderStackNavigator from "./OrderStackNavigator";
import Header from "../components/Header";
import { colors } from "../global/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import ProfileStackNavigator from "./ProfileStackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => <Header title={getTitle(route.name)} />,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Cart") {
            iconName = "shopping-cart";
          } else if (route.name === "Orders") {
            iconName = "receipt";
          } else if (route.name === "Favorites") {
            iconName = "heart";
          } else if (route.name === "Profile") {
            iconName = "user-alt";
          }

          return (
            <View style={styles.tabIcon}>
              <FontAwesome5
                name={iconName}
                size={size}
                color={focused ? colors.white : colors.lightGray}
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Cart" component={CartStackNavigator} />
      <Tab.Screen name="Orders" component={OrderStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

const getTitle = (routeName) => {
  switch (routeName) {
    case "Home":
      return "Home";
    case "Cart":
      return "Cart";
    case "Orders":
      return "Orders";
    case "Favorites":
      return "Favorites";
    case "Profile":
      return "Profile";
    default:
      return routeName;
  }
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.darkBlue,
    height: 60,
    borderTopColor: colors.navyBlue,
    borderTopWidth: 1,
  },
  tabIcon: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default BottomTabNavigator;
