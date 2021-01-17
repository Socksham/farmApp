import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import HomePage from '../screens/HomePage';
import Routes from '../screens/Routes'

const SwitchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
    Routes: {
      screen: Routes,
    },
  },
  {
    initialRouteName: "Login",
  }
);

export default createAppContainer(SwitchNavigator);
