import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import HrLogin from "./components/HrLogin";
import SeekerLogin from "./components/SeekerLogin";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="welcome" component={WelcomeScreen}></Stack.Screen>
        <Stack.Screen name="hrLogin" component={HrLogin}></Stack.Screen>
        <Stack.Screen name="seekerLogin" component={SeekerLogin}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
