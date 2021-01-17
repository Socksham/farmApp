import React, { Fragment } from "react";
import { SafeAreaView, Text, Linking, Button, TouchableHighlightBase } from "react-native";
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
import Firebase, {db} from "../config/Firebase";
import colors from "../config/colors.js";
import { bindActionCreators } from "redux";
import { updateEmail, updatePassword, signup, updateRF, updateAddress, login, getUser } from "../actions/user";
import { ThemeProvider } from "@react-navigation/native";

class MapsPage extends React.Component {
    handleSignout = () => {
        Firebase.auth().signOut();
      };
    constructor(props){
      super(props)
      this.getUser();
      // this.getUsersAtt();
    }
    getUser = async () => {
      // const userDocument = await db.collection("users").doc("752KbiydUqbX2P7fytOmUW1ivos1").get()
      // console.log(userDocument)
      db.collection('users').get().then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
          console.log('User ID: ', documentSnapshot.id,
          documentSnapshot.data().address)
        })
      })
    }

    getUsersAtt = async () => {
      const users = await db.collection('users').where('rf', '==', 'Farm').get()
      console.log(users)
    }

    render() {
      if(this.props.user.rf == "Restaurant"){
        return (
            
          <View style={styles.bottomColor}>
              <Text>FARM</Text>
              <Button
                  color={colors.secondary}
                  title="Logout"
                  onPress={this.handleSignout}
              />
          </View>
      );
      }else{
                    
        <View style={styles.bottomColor}>
        <Text>RESTAURANT</Text>
        <Button
            color={colors.secondary}
            title="Logout"
            onPress={this.handleSignout}
        />
      </View>
      }

      }
        
    }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    bottomColor: {
      backgroundColor: colors.primary,
      alignItems: "center",
      justifyContent: "center",
    },
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
      { updateEmail, updatePassword, updateRF, login, getUser },
      dispatch
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(MapsPage);