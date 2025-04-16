import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import anim from "../src/animation/Animation - 1744827972100.json";
const HrLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const handleLogin = () => {
    console.log("Logged in as HR");
  };

  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          style={styles.animation}
          autoPlay
          loop
          source={anim}
        ></LottieView>
      </View>
      <Text style={styles.title}>HR Login </Text>
      <Text style={styles.subtitle}>
        Welcome back! Please log in to your account.
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <View style={styles.passwordWrapper}>
          <TextInput
            style={[styles.input2, { flex: 1, marginBottom: 0 }]}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword} //if true show password else not
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.toggleButton}
          >
            <Text style={styles.toggleText}>
              {showPassword ? "Hide" : "Show"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>New to Career Connect?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("register")}>
          <Text style={styles.registerNow}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#F7F9FC",
  },
  animationContainer: {
    marginBottom: 3,
  },
  animation: {
    width: 260,
    height: 200,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#9475d6",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  input2: {
    height: 50,
    borderRadius: 30,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  toggleButton: {
    padding: 10,
  },
  toggleText: {
    color: "#9475d6",
    fontWeight: "600",
  },
  loginButton: {
    backgroundColor: "#9475d6",
    paddingVertical: 12,
    borderRadius: 30,
    width: "80%",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  registerText: {
    fontSize: 14,
    color: "#666",
  },
  registerNow: {
    fontSize: 14,
    color: "#9475d6",
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default HrLogin;
