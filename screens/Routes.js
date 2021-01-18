import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../screens/HomePage";
import CameraStackNavigator from "../screens/CameraStackNavigator"
import colors from "../config/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from "@expo/vector-icons";
import MapsPage from "./MapsPage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateEmail, updatePassword, signup, updateRF, updateAddress, updateLAT, updateLNG, login, getUser } from "../actions/user";

const Tabs = createBottomTabNavigator();

function Home() {
  return <HomePage />;
}

function CameraStack(){
  return <CameraStackNavigator />
}

function Maps(){
  return <MapsPage />
}

class Routes extends React.Component {
  render() {
    return (
       <NavigationContainer>
        <Tabs.Navigator initialRouteName="Home">
            <Tabs.Screen name="Home" component={Home}/>
            <Tabs.Screen name="CameraStack" component={CameraStack}/>
            <Tabs.Screen name="Maps" component={Maps}/>
         </Tabs.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: colors.primary,
  },
});

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

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
