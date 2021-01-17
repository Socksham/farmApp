import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Button,
} from "react-native";
import Firebase from "../config/Firebase";
import colors from "../config/colors.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateEmail, updatePassword, signup, updateRF } from "../actions/user";

class Signup extends React.Component {
  handleSignUp = () => {
    this.props.signup();
    this.props.navigation.navigate("Routes");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/logoCircle.png")}
          style={{ height: "27%" }}
        />
        <TextInput
          style={styles.inputBox}
          value={this.props.user.email}
          onChangeText={(email) => this.props.updateEmail(email)}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputBox}
          value={this.props.user.password}
          onChangeText={(password) => this.props.updatePassword(password)}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.inputBox}
          value={this.props.user.rf}
          onChangeText={(rf) => this.props.updateRF(rf)}
          placeholder="Restaurant Or Farm"
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
        <Button
          title="Already Have An Account? Log In"
          color={colors.secondary}
          onPress={() => this.props.navigation.navigate("Login")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    width: "85%",
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    textAlign: "center",
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderColor: "#FFA611",
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonSignup: {
    fontSize: 12,
  },
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { updateEmail, updatePassword, updateRF, signup },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
