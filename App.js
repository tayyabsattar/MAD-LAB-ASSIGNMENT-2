import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";



export default function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (

    <View style={styles.container}>

      <Image style={styles.image} source={require('./assets/MetaLogo.jpg')} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor={'black'}
          color='black'
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor={'black'}
          secureTextEntry={true}
          color='black'
          
        />

      </View>

      <TouchableOpacity style={styles.loginBtn} >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.ForgotBtn}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <Text style={{ fontSize:15 }}>-------------------------------OR-------------------------------</Text> 

      <TouchableOpacity style={styles.CreateNewFacebookBtn} >
        <Text style={styles.loginText}>Create New Facebook account</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontWeight:'bold',

  },

  image: {

    marginBottom: 20,
    marginTop: -50,
    maxWidth: 400,
    maxHeight: 200,
    backgroundColor: 'blue',
  },

  inputView: {

    marginTop: 20,
    width: "80%",
    borderBottomWidth: 1,
    height: 42,
    
  },

  TextInput: {

    height: 50,
    flex: 1,
    fontSize:15,
  },

  loginBtn: {
    
    height: 50,
    marginTop: 30,
    borderRadius: 15,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E90FF",
  },

  ForgotBtn: {

    height: 50,
    marginTop: 25,
    borderRadius: 15,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",

  },

  CreateNewFacebookBtn: {
    
    height: 50,
    marginTop: 30,
    borderRadius: 15,
    width: "65%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#32CD32",
    color: "#FFFFFF",
  },
});
