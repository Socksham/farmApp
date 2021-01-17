import React, { Fragment } from "react";
import { SafeAreaView, Text, Linking, Button } from "react-native";
import { View, TextInput, StyleSheet, ImageBackground, Image } from "react-native";
import { FlatList, TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Marker from 'react-native-maps';
import { connect } from "react-redux";
import Firebase from "../config/Firebase";
import colors from "../config/colors.js";

class MapsPage extends React.Component {

  state = { reports: [] }

  componentDidMount() {
    fetch('https://enigmatic-reaches-55405.herokuapp.com/reports')
      .then(res => res.json())
      .then(data => {
        this.setState({ reports: data.reports })
      })
      .catch(console.error)
  }

  mapMarkers = () => {
    return this.state.reports.map((report) => <MapView.Marker
      key={report.id}
      coordinate={{ latitude: report.lat, longitude: report.lon }}
      title={report.location}
      description={report.comments}
    />)
  }

    render() {

        return (
          <Fragment>
            <SafeAreaView style={{ flex: 0, backgroundColor: colors.primary }} />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{height: "10%", justifyContent: "center", alignItems: "center", backgroundColor: colors.primary}}>
                    <Image style = {{resizeMode: "contain", height: "80%"}} source = {require('../assets/logo.png')}></Image>
                </View>
                <MapView
                  style={{ flex: 1 }}
                  provider={PROVIDER_GOOGLE}
                  showsUserLocation
                  initialRegion={{
                    latitude: 37.1,
                    longitude: -95.7,
                    latitudeDelta: 10,
                    longitudeDelta: 45
                  }}>
                    {this.mapMarkers()}
                  </MapView>
            </SafeAreaView>
          </Fragment>
        );
    }
}

const styles = StyleSheet.create({
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
      height: 200,
      borderRadius: 20,
      resizeMode: "cover",
      paddingTop: 20
  },
  postTitle: {
      fontSize: 24,
      fontWeight: "bold",  
      color: "white",
      backgroundColor: colors.primary,
      opacity: .8
  },
  postSubtitle: {
      fontSize: 14,
      color: "white",
      backgroundColor: colors.primary,
      opacity: .8
  }
});

export default MapsPage