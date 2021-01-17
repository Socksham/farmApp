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

class CameraPage extends React.Component {
    render() {
        return (
             <Text>CAMERA PAGE</Text>
        );
    }
}

export default CameraPage