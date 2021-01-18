import { useRoute, useIsFocused } from "@react-navigation/native";
import React, { Fragment, useState, useEffect } from "react";
import { Button } from "react-native";
import { ImageBackground } from "react-native";
import { SafeAreaView, Text, FlatList,TouchableOpacity,TouchableWithoutFeedback, Linking } from "react-native";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { SearchBar } from "react-native-elements";
import colors from "../src/config/colors.js";

let start = "http://www.recipepuppy.com/api/?q=";
let results = [];

const CameraSearchPage = () => {
    console.log("HELLO")
  const route = useRoute()
  const [data, setData] = useState(results);
  const { results } = route.params
  console.log("RESULTSSSSSSSS")
  console.log(results)

  //   },[]);
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: colors.primary }} />

      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            height: "10%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.primary,
          }}
        >
          <Image
            style={{ resizeMode: "contain", height: "80%" }}
            source={require("../pictures/logo2.jpg")}
          ></Image>
        </View>
        {/* <SafeAreaView style={styles.container}>
          <SearchBar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            onSubmitEditing={() => {
              search(searchQuery);
            }}
          />
        </SafeAreaView> */}
        <FlatList
          data={results}
          extraData={results}
          keyExtractor={(item) => item.thumbnail}
          renderItem={({ item }) => {
            return (
              <TouchableWithoutFeedback onPress={() => Linking.openURL(item.href)}>
                <ImageBackground
                blurRadius={1}
        o        source={{uri:item.thumbnail}}
                style={styles.postElement}
                >
                <Text style={styles.postTitle}>{item.title}</Text>
                <Text style={styles.postSubtitle}>Main Ingredients: {item.ingredients}</Text>
                </ImageBackground>
              </TouchableWithoutFeedback>
            );
          }}
        />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: colors.secondary,
    opacity: 0.7,
  },
  postSubtitle: {
    fontSize: 14,
    color: "white",
    backgroundColor: colors.secondary,
    opacity: 0.7,
  },
});
export default CameraSearchPage;
