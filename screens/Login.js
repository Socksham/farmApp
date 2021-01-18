import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
  Image,
} from "react-native";
import * as firebase from "firebase";
import colors from "../config/colors.js";
import { withOrientation } from "react-navigation";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateEmail, updatePassword, signup, updateRF, updateAddress, updateLAT, updateLNG, login, getUser } from "../actions/user";
import Firebase from "../config/Firebase";
class Login extends React.Component {
  componentDidMount = () => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.getUser(user.uid);
        if (this.props.user != null) {
          this.props.navigation.navigate("Routes");
        }
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/logoCircle.png")}
          style={{ height: "27%", resizeMode:"contain" }}
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.login()}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Button
          title="Don't have an account yet? Sign up"
          color={colors.secondary}
          onPress={() => this.props.navigation.navigate("Signup")}
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
    borderColor: "#F6820D",
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
    color: colors.secondary,
  },
  topView: {
    width: "100%",
    height: "7%",
    backgroundColor: colors.primary,
  },
  logoIcon: {
    height: "30%",
  },
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { updateEmail, updatePassword, updateRF, updateAddress, updateLAT, updateLNG, signup, getUser, login },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// export default Login
// import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import { updateEmail, updatePassword, login, getUser, updateRF } from '../actions/user'
// import Firebase from '../config/Firebase'

// class Login extends React.Component {
// 	componentDidMount = () => {
// 		Firebase.auth().onAuthStateChanged(user => {
// 			if (user) {
// 				this.props.getUser(user.uid)
// 				if (this.props.user != null) {
// 					this.props.navigation.navigate('Profile')
// 				}
// 			}
// 		})
// 	}

// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<TextInput
// 					style={styles.inputBox}
// 					value={this.props.user.email}
// 					onChangeText={email => this.props.updateEmail(email)}
// 					placeholder='Email'
// 					autoCapitalize='none'
// 				/>
// 				<TextInput
// 					style={styles.inputBox}
// 					value={this.props.user.password}
// 					onChangeText={password => this.props.updatePassword(password)}
// 					placeholder='Password'
// 					secureTextEntry={true}
// 				/>
// 				<TouchableOpacity style={styles.button} onPress={() => this.props.login()}>
// 					<Text style={styles.buttonText}>Login</Text>
// 				</TouchableOpacity>
// 				<Button
// 					title="Don't have an account yet? Sign up"
// 					onPress={() => this.props.navigation.navigate('Signup')}
// 				/>
// 			</View>
// 		)
// 	}
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'center'
// 	},
// 	inputBox: {
// 		width: '85%',
// 		margin: 10,
// 		padding: 15,
// 		fontSize: 16,
// 		borderColor: '#d3d3d3',
// 		borderBottomWidth: 1,
// 		textAlign: 'center'
// 	},
// 	button: {
// 		marginTop: 30,
// 		marginBottom: 20,
// 		paddingVertical: 5,
// 		alignItems: 'center',
// 		backgroundColor: '#F6820D',
// 		borderColor: '#F6820D',
// 		borderWidth: 1,
// 		borderRadius: 5,
// 		width: 200
// 	},
// 	buttonText: {
// 		fontSize: 20,
// 		fontWeight: 'bold',
// 		color: '#fff'
// 	},
// 	buttonSignup: {
// 		fontSize: 12
// 	}
// })

// const mapDispatchToProps = dispatch => {
// 	return bindActionCreators({ updateEmail, updatePassword, updateRF, login, getUser }, dispatch)
// }

// const mapStateToProps = state => {
// 	return {
// 		user: state.user
// 	}
// }

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(Login)
