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
import Firebase from "../config/Firebase";
import colors from "../config/colors.js";

class LogoutPage extends React.Component {
    handleSignout = () => {
        Firebase.auth().signOut();
        this.props.navigation.navigate("Login");
      };
    render() {
        return (
            <SafeAreaView>
                <Text>LOGOUT PAGE</Text>
                <Button
                    color={colors.secondary}
                    title="Logout"
                    onPress={this.handleSignout}
                />
            </SafeAreaView>
             
        );
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };
  
export default connect(mapStateToProps)(LogoutPage);