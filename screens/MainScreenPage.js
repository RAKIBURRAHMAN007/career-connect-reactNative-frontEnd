import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AuthContext } from "../Auth/AuthProvider";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const MainScreenPage = () => {
  const { logOut } = useContext(AuthContext);
  const navigation = useNavigation(); // Initialize navigation

  const handleLogout = () => {
    logOut(); // Log out the user
    navigation.navigate("welcome"); // Navigate to the welcome screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textt}>Main page on process</Text>

      {/* TouchableOpacity for Logout */}
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textt: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#9475d6",
  },
  logoutButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#9475d6",
    borderRadius: 5,
  },
  logoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default MainScreenPage;
