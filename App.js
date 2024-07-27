import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  Alert,
} from "react-native";
import { useFonts } from "expo-font";
import { colors } from "./src/global/colors";
import Navigator from "./src/navigation/Navigator";
import { Provider } from "react-redux";
import store from "./src/store";
import { initSessionsDb } from "./src/db/sessions";

const App = () => {
  const [fontsLoaded] = useFonts({
    Josefin: require("./assets/JosefinSans-Regular.ttf"),
  });

  useEffect(() => {
    const initializeDB = async () => {
      try {
        await initSessionsDb();
      } catch (error) {
        Alert.alert("Database Initialization Error", error.message);
      }
    };

    initializeDB();
  }, []);

  if (!fontsLoaded) {
    return <View style={styles.loadingContainer} />;
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Navigator />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkBlue,
  },
});

export default App;
