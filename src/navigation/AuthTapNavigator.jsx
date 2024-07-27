import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/Login";
import SignUpScreen from "../screens/SignUp";
import Header from "../components/Header";
import { colors } from "../global/colors";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const AuthTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        header: () => {
          return <Header />;
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome5
                name="lock"
                size={24}
                color={focused ? colors.white : colors.lightGray}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome5
                name="user-plus"
                size={24}
                color={focused ? colors.white : colors.lightGray}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.green700,
    height: 60,
  },
});
