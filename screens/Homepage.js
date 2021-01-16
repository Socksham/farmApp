import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: " ",
      password: " ",
      confirmPassword: " ",
    };
  }
  render() {
    return (
      <View>
        <Text style={styles.text}>Create an account</Text>
        <TextInput style={styles.emailInput} placeholder="Email" 
        onChangeText={(email) => {
            this.setState({email: email})
        }} value={this.state.email}/>

        <TextInput style={styles.passwordInput} placeholder="Password"
        onChangeText={(password) => {
            this.setState({password: password})
        }} value={this.state.password}/>

        <TextInput style={styles.passwordInput} placeholder="Confirm Password"
        onChangeText={(password2) => {
            this.setState({confirmPassword: password2})
        }} value={this.state.confirmPassword}/>

        <Button title="Sign up"/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 18,
        margin: 14,
    },
    emailInput : {
        borderWidth: 1,
        padding: 10,
        margin: 5,
        width: 200,
    },
    passwordInput : {
        borderWidth: 1,
        padding: 10,
        margin: 5,
        width: 200,
    },
})
