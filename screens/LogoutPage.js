import React, { Fragment } from "react";
import { SafeAreaView, Text, Linking, Button } from "react-native";
import {
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import {
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { connect } from "react-redux";
import Firebase, { db } from "../config/Firebase";
import colors from "../config/colors.js";
import { bindActionCreators } from "redux";
import {
  updateEmail,
  updatePassword,
  signup,
  updateRF,
  updateAddress,
  updateLAT,
  updateLNG,
  login,
  getUser,
} from "../actions/user";
import { ThemeProvider } from "@react-navigation/native";
import { add } from "react-native-reanimated";
import util from "react-native-util";

class LogoutPage extends React.Component {
  handleSignout = () => {
    Firebase.auth().signOut();
  };

//   constructor(props) {
//     super(props);
//     this.state = {
//       array: [],
//     };
//     this.getTodos = this.getTodos.bind(this);
//   }

//   componentDidMount() {
//     this.getTodos();
//   }

//   async getTodos() {
// 	let arr = [];
// 	if(this.props.user.rf == "Restaurant"){
// 		db.collection("users").where('rf', '==', 'Farm')
// 		.get()
// 		.then((querySnapshot) => {
// 		  querySnapshot.forEach((documentSnapshot) => {
// 			arr.push(documentSnapshot.data())
// 			this.setState({ todos: arr });
// 		  });
// 		});
// 	}else{
// 		db.collection("users").where('rf', '==', 'Restaurant')
// 		.get()
// 		.then((querySnapshot) => {
// 		  querySnapshot.forEach((documentSnapshot) => {
// 			arr.push(documentSnapshot.data())
// 			this.setState({ todos: arr });
// 		  });
// 		});
// 	}

//   }

  render() {
    // const { todos } = this.state;
    // console.log("RENDER");
    return (
        <SafeAreaView style={{alignContent: "center", justifyContent: "center"}}>
            <Button title="Logout" onPress={this.handleSignout} />
        </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  headerView: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    bottom: 20,
  },
  flatlistView: {
    flex: 1,
  },
  postElement: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    resizeMode: "cover",
    paddingTop: 20,
  },
  postTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    backgroundColor: colors.primary,
    opacity: 0.8,
  },
  postSubtitle: {
    fontSize: 14,
    color: "white",
    backgroundColor: colors.primary,
    opacity: 0.8,
  },
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateEmail,
      updatePassword,
      updateRF,
      updateAddress,
      updateLAT,
      updateLNG,
      signup,
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutPage);
