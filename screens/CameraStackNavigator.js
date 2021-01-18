import React, { Fragment } from 'react'
import { connect } from "react-redux";
import { View, TextInput, StyleSheet, ImageBackground, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import CameraSearchPage from '../screens/CameraSearchPage'
import CameraPage from '../screens/CameraPage'
import CameraPicturePage from '../screens/CameraPicturePage'
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import {updateEmail, updatePassword, signup, updateRF, updateAddress, updateLAT, updateLNG, login, getUser,}from "../actions/user";
import { bindActionCreators } from "redux";

const StackNavigator = createStackNavigator();

function Camera({navigation}){
    return <CameraPage />
}

function CameraSearch({navigation}){
    return <CameraSearchPage />
}

function CameraPicture({navigation}){
    return <CameraPicturePage />
}

export default function CameraStackNavigator(){
    return(
        <NavigationContainer independent={true}>
            <StackNavigator.Navigator>
                <StackNavigator.Screen name="Camera" component={Camera}></StackNavigator.Screen>
                <StackNavigator.Screen name="CameraPicture" component={CameraPicture}></StackNavigator.Screen>
                <StackNavigator.Screen name="CameraSearch" component={CameraSearch}></StackNavigator.Screen>
            </StackNavigator.Navigator>
        </NavigationContainer>
    )
}
