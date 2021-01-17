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
import { updateEmail, updatePassword, signup, updateRF, updateAddress, login, getUser } from "../actions/user";

class HomePage extends React.Component {

  render() {
    const POSTS = [
      {
        title: "The Path of Food",
        subtitle:
          "By learning the path food takes from the farm to our tables, we can get a better understanding of how we can directly support farmers",
        source: {
          uri:
            "https://th.bing.com/th/id/OIP.2sF9ityck7r0RKOoxGLTsAHaE6?pid=Api&rs=1",
        },
        link:
          "https://www.rebootwithjoe.com/from-farm-to-plate-the-journey-of-your-produce/",
        id: "1",
      },
      {
        title: "The Numbers Behind Farm Waste",
        subtitle:
          "See how much food is wasted on farms and how you can help reduce this number",
        source: {
          uri:
            "https://th.bing.com/th/id/OIP.wDH6yFoeLCvOw9v5NEYZSAHaFi?pid=Api&rs=1",
        },
        link:
          "http://www.thetruthdenied.com/news/2014/11/16/united-states-throws-away-40-of-its-food/",
        id: "2",
      },
      {
        title: "Apple Varieties",
        subtitle:
          "Learn about different varities of apples grown by your local farmers",
        source: {
          uri:
            "https://files.growingproduce.com/growingproduce/wp-content/uploads/2014/02/MODI.jpg",
        },
        link: "https://www.orangepippin.com/orchards/united-states/illinois",
        id: "3",
      },
      {
        title: "Supporting Local Farmers",
        subtitle:
          "Farmers are facing more hardships as our industry evolves, and we need to support them",
        source: {
          uri:
            "https://static01.nyt.com/images/2012/10/04/us/jp-FARMERS/jp-FARMERS-superJumbo.jpg",
        },
        link:
          "http://www.let.rug.nl/usa/outlines/history-1963/the-era-of-expansion-and-reform/farmers-face-hardships.php#:~:text=Farmers%20face%20hardships.%20Yet%20despite%20these%20advances,%20the,and%20lack%20of%20adequate%20legislative%20protection%20and%20aid.",
        id: "4",
      },
      {
        title: "Farming Techniques",
        subtitle:
          "Learn how farmers are able to bring high-quality food to our tables",
        source: {
          uri:
            "https://media.pri.org/s3fs-public/styles/story_main/public/story/images/No-till%20farming%20800px-NRCSIA99225_-_Iowa_(3145)(NRCS_Photo_Gallery).jpg?itok=97x6mzGB",
        },
        link: "http://www.agricultureinnepal.com/farming-techniques",
        id: "5",
      },
      {
        title: "The Science of GMOs",
        subtitle:
          "GMOs have been a controversial agricultural topic in recent years. Learn the science and the effect they have on society",
        source: {
          uri: "https://i.huffpost.com/gen/1416238/thumbs/o-GMO-facebook.jpg",
        },
        link:
          "https://www.nationalgeographic.org/encyclopedia/genetically-modified-organisms/",
        id: "6",
      },
      {
        title: "Bread Basics",
        subtitle:
          "Learn how fresh farm ingredients can elevate the quality of bread",
        source: {
          uri:
            "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0375FC32-2896-40AF-9ACD-6E904EC7116E/Derivates/4EB8635B-A00A-4E88-9A28-E3C9BB6BEC90.jpg",
        },
        link: "https://heartscontentfarmhouse.com/farmhouse-white-bread/",
        id: "7",
      },
      {
        title: "Best Restuarant Dishes Using Fresh Produce",
        subtitle:
          "Learn how to use fresh produce to create more natural dishes for your restaurant",
        source: {
          uri:
            "https://ibakeheshoots.com/wp-content/uploads/2013/12/Food-Photography-simulated-natural-light-1024x819.jpg",
        },
        link:
          "https://marker32.com/how-quality-ingredients-improve-the-taste-of-a-restaurant-meal/",
        id: "8",
      },
      {
        title: "The Rise of Beyond Meat",
        subtitle:
          "Beyond meat has made a huge advancement in the food industry, but some people have differing opinions. Click to learn more",
        source: {
          uri:
            "https://th.bing.com/th/id/OIP.FQT5TNusncuu78npEFW1iQHaE8?pid=Api&rs=1",
        },
        link:
          "https://th.bing.com/th/id/OIP.FQT5TNusncuu78npEFW1iQHaE8?pid=Api&rs=1",
        id: "9",
      },
    ];

    return (
      <Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: colors.primary }} />
        <SafeAreaView style={{ flex: 1 }}>
          <Text>{this.props.user.rf}</Text>
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
              source={require("../assets/logo.png")}
            ></Image>
          </View>
          <FlatList
            data={POSTS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => Linking.openURL(item.link)}
                >
                  <ImageBackground
                    source={item.source}
                    style={styles.postElement}
                  >
                    <Text style={styles.postTitle}>{item.title}</Text>
                    <Text style={styles.postSubtitle}>{item.subtitle}</Text>
                  </ImageBackground>
                </TouchableWithoutFeedback>
              );
            }}
          />
        </SafeAreaView>
        
      </Fragment>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
