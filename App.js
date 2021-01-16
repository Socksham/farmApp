import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './screens/Dashboard';
import Homepage from './screens/Homepage';
import * as firebase from 'firebase';
import apiKeys from './config/keys';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoaded: true,
      isAuthenticationReady: false,
      isAuthenticated: false
    }
    //load firebase
    if(!firebase.default.apps.length){
      firebase.default.initializeApp(apiKeys.firebaseConfig)
      firebase.default.auth().onAuthStateChanged((user) => {
        this.setState({isAuthenticationReady: true})
        this.setState({isAuthenticated:!!user})
      })
    }
  }
  render(){
    return (
      <View style={styles.container}>
        {(this.state.isAuthenticated) ? <Dashboard /> : <Homepage />}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
