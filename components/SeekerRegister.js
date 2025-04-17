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
import anim from "../src/animation/Animation - 1744873309025.json";
const SeekerRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const handleRegister = () => {
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
      <Text style={styles.title}>Job Seeker Register </Text>
      <Text style={styles.subtitle}>
        create your Job Seeker account to get started.
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
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

      <TouchableOpacity onPress={handleRegister} style={styles.loginButton}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already Have Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("seekerLogin")}>
          <Text style={styles.loginNow}>Login Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", //horaizontaly center
    justifyContent: "center", //vertically center
    paddingHorizontal: 20, //padding from left right
    backgroundColor: "#F7F9FC",
  },
  animationContainer: {
    marginBottom: 1,
  },
  animation: {
    width: 300,
    height: 220,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#9475d6",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 12,
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
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginText: {
    fontSize: 14,
    color: "#666",
  },
  loginNow: {
    fontSize: 14,
    color: "#9475d6",
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default SeekerRegister;
