import React, {useState} from "react"
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"

function Login() {
  const [username, setUsername] = useState("")
  const [passwerd, setPassword] = useState("")

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContentContainer}
      style={styles.scrollView}
    >
      <TextInput
        accessibilityLabel="username-input"
        onChangeText={setUsername}
        placeholder="Username"
        style={styles.input}
        value={username}
      />

      <View style={styles.spacing10} />

      <TextInput
        accessibilityLabel="password-input"
        onChangeText={setPassword}
        placeholder="Password"
        style={styles.input}
        value={passwerd}
      />

      <TouchableOpacity
        testID="login-button"
        disabled={username.trim() == "" || passwerd.trim() == ""}
        style={styles.loginButtonContainer}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollViewContentContainer: {
    backgroundColor: "lightgray",
    justifyContent: "center",
    flexGrow: 1,
    padding: 20,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  spacing10: {
    height: 10,
  },
  loginButtonContainer: {
    backgroundColor: "green",
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
})

export default Login
