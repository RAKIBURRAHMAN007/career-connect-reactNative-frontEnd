import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AuthContext } from "../Auth/AuthProvider";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleLogout = () => {
    logOut();
    navigation.navigate("welcome");
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={styles.profileTitle}>Profile</Text>
        <Text style={styles.profileInfo}>
          Name: {user?.displayName || "Not available"}
        </Text>
        <Text style={styles.profileInfo}>
          Email: {user?.email || "Not available"}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f9",
    justifyContent: "center",
    padding: 20,
  },
  profileContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  profileTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#9475d6",
    textAlign: "center",
    marginBottom: 10,
  },
  profileInfo: {
    fontSize: 18,
    color: "#555",
    marginVertical: 5,
    textAlign: "left",
  },
  buttonContainer: {
    alignItems: "center",
  },
  logoutButton: {
    backgroundColor: "#9475d6",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Profile;
