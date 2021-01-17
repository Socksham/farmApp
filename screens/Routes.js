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
import CameraPage from "../screens/CameraPage"
import colors from "../config/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from "@expo/vector-icons";
import MapsPage from "./MapsPage";

const Tabs = createBottomTabNavigator();

function Home() {
  return <HomePage />;
}

function Camera(){
  return <CameraPage />
}

function Maps(){
  return <MapsPage />
}

function Logout(){
  return <LogoutPage />
}

class Routes extends React.Component {
  render() {
    return (
       <NavigationContainer>
        <Tabs.Navigator initialRouteName="Home">
            <Tabs.Screen name="Home" component={Home}/>
            <Tabs.Screen name="Camera" component={Camera}/>
            <Tabs.Screen name="Maps" component={Maps}/>
         </Tabs.Navigator>
      </NavigationContainer>
    );
  }
}


// export const Routes = ({}) => {
//   return (
    
//     <Tabs.Navigator
//       initialRouteName="Home"
//       // screenOptions={({ route }) => ({
//       //   tabBarIcon: ({ focused, color, size }) => {
//       //     let iconName;
//       //     if (route.name === "HomePage") {
//       //       iconName = focused ? "camera" : "camera";
//       //     }

//         //   return <Ionicons name={iconName} size={size} color={color} />;
//         // },
//       // })}
//       tabBarOptions={{
//         activeTintColor: colors.secondary,
//         inactiveTintColor: colors.primary,
//       }}
//     >
//       <Tabs.Screen name="Home" component={Home} />
//       {/* <Tabs.Screen
//           options={{ title: "Camera" }}
//           name="CameraStack"
//           component={CameraStack}
//         />
//         <Tabs.Screen
//           options={{ title: "Search Recipe" }}
//           name="SearchRecipe"
//           component={SearchRecipe}
//         /> */}
//     </Tabs.Navigator>
//   );
// };

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: colors.primary,
  },
});

export default Routes
