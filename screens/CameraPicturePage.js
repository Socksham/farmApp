import React, {useState, useEffect } from 'react';
import { Button, Input, ListItem, List } from 'react-native-elements'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from "../config/colors"
import { color } from 'react-native-reanimated';

let results = []

export default function CameraPictureScreen(){
    let start = "https://api.scaleserp.com/search?api_key=4EA59F5AB8A1436290675DE6F9B92FD8&q=";
    const navigation = useNavigation();
    const route = useRoute();
    const { prediction } = route.params;
    console.log(prediction)
    const [data, setData] = useState(results);

    const search = (query) => {
    console.log("IN SEARCH")
    let url = start + query;

    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    request.onload = () => {
      if (request.status == 200) {
        let obj = JSON.parse(request.response);
        results = obj.organic_results;
        navigation.navigate("CameraSearch", {results: results})
        console.log(results);
      } else {
        console.log(`error ${request.status} ${request.statusText}`);
      }
    };
  };
    // dict = take(3, dict.iteritems())
    console.log(prediction)

    const actionRow = (item) => {
        console.log('Selected Item :',item.name);
        search(item.name)
    }

    return (
        <SafeAreaView style={styles.container}>
                {/* <FlatList 
                    data = {prediction} 
                    keyExtractor = {(item) => item.id}
                    renderItem = {({item}) => (
                            <TouchableWithoutFeedback onPress={() => actionRow(item)}>
                                <Text>{item.name}</Text>
                            </TouchableWithoutFeedback>
                        )}

                /> */}
                <FlatList
                data = {prediction} 
                keyExtractor = {(item) => item.id}
                renderItem = {( {item} ) => { 
                    return (
                        <View style={styles.view}>
                            <TouchableWithoutFeedback onPress={() => actionRow(item)}>
                                <View style={styles.postElement}>
                                    <Text style = {styles.postTitle}>{item.name}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        
                    );
                }}
                />
            
        </SafeAreaView>
    )
}
//LOAD the model


const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: colors.secondary

    },
    view:{
        height: 50,
        flexDirection: "column",
        justifyContent: "center"
    },
    headerView: {
        height: 80, 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: colors.primary,
        bottom: 20
    },
    flatlistView: {
        flex: 1
    },
    postElement: {
        width: "100%",
        height: "100%",
        borderRadius: 15,
        borderWidth: 1,
        borderColor:  colors.secondary,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
    },
    postTitle: {
        fontSize: 24,
        fontWeight: "bold",  
        color: "white",
        opacity: .8
    },
    postSubtitle: {
        fontSize: 14,
        color: "white",
        backgroundColor: colors.primary,
        opacity: .8
    }
  });