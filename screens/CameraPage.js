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
import { bindActionCreators } from "redux";
import { updateEmail, updatePassword, signup, updateRF, updateAddress, updateLAT, updateLNG, login, getUser } from "../actions/user";

class CameraPage extends React.Component {
    render() {
        return (
             <Text>CAMERA PAGE</Text>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { updateEmail, updatePassword, updateRF, updateAddress, updateLAT, updateLNG, signup },
      dispatch
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(CameraPage);