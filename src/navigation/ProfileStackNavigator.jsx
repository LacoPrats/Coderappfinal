import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import ImageSelectorScreen from "../screens/ImageSelectorScreen";

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyProfile"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="MyProfile" component={ProfileScreen} />
      <Stack.Screen name="ImageSelector" component={ImageSelectorScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
