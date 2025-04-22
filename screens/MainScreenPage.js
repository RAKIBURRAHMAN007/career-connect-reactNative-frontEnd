import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons"; // for icons
import { View, Text, StyleSheet } from "react-native";

// Temporary placeholder components for the screens
const Dashboard = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Dashboard</Text>
  </View>
);

const Profile = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Profile</Text>
  </View>
);

const Settings = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Settings</Text>
  </View>
);

const Drawer = createDrawerNavigator();

const MainScreenPage = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9475d6",
        },
        headerTintColor: "#fff",
        drawerActiveBackgroundColor: "#9475d6",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#555",
        drawerLabelStyle: {
          fontSize: 16,
          marginLeft: -10,
        },
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard} // Temporary placeholder component
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile} // Temporary placeholder component
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings} // Temporary placeholder component
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

// Styles for temporary screens
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screenText: {
    fontSize: 24,
    color: "#9475d6",
  },
});

export default MainScreenPage;
