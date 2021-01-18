// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Icon } from 'react-native-elements'
// import { FileSystem } from 'expo-file-system';
import * as FileSystem from "expo-file-system";
import * as tf from '@tensorflow/tfjs'
import {decodeJpeg, fetch} from '@tensorflow/tfjs-react-native';
import { connect } from "react-redux";
import Firebase from "../config/Firebase";
import colors from "../config/colors.js";
import { bindActionCreators } from "redux";
import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Platform, } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {
    FontAwesome,
    Ionicons,
    MaterialCommunityIcons,
  } from "@expo/vector-icons";
import * as ImageManipulator from 'expo-image-manipulator'
import {
  updateEmail,
  updatePassword,
  signup,
  updateRF,
  updateAddress,
  updateLAT,
  updateLNG,
  login,
  getUser,
} from "../actions/user";
// import * as ImageManipulator from 'expo-image-manipulator'
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";
import axios from 'axios'; 
import { sharedStyles } from '../../SHARED/_shared';

const Clarifai = require('clarifai');
const clarifai = new Clarifai.App({
    apiKey: '78862fcd85b94280941e158a27dec5a5',
});

class CameraPage extends React.Component {
    state = {
      hasPermission: null,
      cameraType: Camera.Constants.Type.back,
    }


  
    async componentDidMount() {
      this.getPermissionAsync()
    }

    getAxios=()=>{
        axios.get(`${url}`).then((response)=>{
            console.log("succes axios :",response);
        }).catch((error)=>{
            console.log("fail axios :", error);
        });
    };

    getFetch=()=>{
        fetch(url).then((response)=>{
            console.log("succes fetch :",response)
        }).catch((error)=>{
            console.log("fail fetch :",error)
        })
    }
  
    getPermissionAsync = async () => {
      // Camera roll Permission 
      if (Platform.OS === 'ios') {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
      // Camera Permission
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({ hasPermission: status === 'granted' });
    }
  
    handleCameraType=()=>{
      const { cameraType } = this.state
  
      this.setState({cameraType:
        cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
      })
    }

    resize = async (photo) => {
        let manipulatedImage = await ImageManipulator.manipulateAsync(
          photo,
          [{ resize: { height: 300, width: 300 } }],
          { base64: true }
        );
        return manipulatedImage.base64;
    };

    predict = async (image) => {
        let predictions = await clarifai.models.predict(
          Clarifai.FOOD_MODEL,
          image
        );
        return predictions;
      };
    
  
    takePicture = async () => {
      if (this.camera) {
        let photo = await this.camera.takePictureAsync();
        const fileUri = photo.uri;
        console.log("GOT URI")
        const imgB64 = await FileSystem.readAsStringAsync(fileUri, { encoding: FileSystem.EncodingType.Base64, });
        console.log("IMG64 DONE")
        await tf.ready()
        const imgBuffer = tf.util.encodeString(imgB64, 'base64').buffer;
        console.log("IMG BUFFER DONE")
        const raw = new Uint8Array(imgBuffer)
        console.log("RAW")
        const imageTensor = decodeJpeg(raw);
        console.log(imageTensor)
        // let resized = await this.resize(fileUri);
        // let prediction = await this.predict(resized)
        // console.log(prediction)
      }
    }
  
    pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images
      });
    }
    
  
    render(){
      const { hasPermission } = this.state
      if (hasPermission === null) {
        return <View />;
      } else if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      } else {
        return (
            <View style={{ flex: 1 }}>
              <Camera style={{ flex: 1 }} type={this.state.cameraType}  ref={ref => {this.camera = ref}}>
                <View style={{flex:1, flexDirection:"row",justifyContent:"space-between",margin:30}}>
                  <TouchableOpacity
                    style={{
                      alignSelf: 'flex-end',
                      alignItems: 'center',
                      backgroundColor: 'transparent'                 
                    }}
                    onPress={()=>this.pickImage()}>
                    <Ionicons
                        name="ios-photos"
                        style={{ color: "#fff", fontSize: 40}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      alignSelf: 'flex-end',
                      alignItems: 'center',
                      backgroundColor: 'transparent',
                    }}
                    onPress={()=>this.takePicture()}
                    >
                    <FontAwesome
                        name="camera"
                        style={{ color: "#fff", fontSize: 40}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      alignSelf: 'flex-end',
                      alignItems: 'center',
                      backgroundColor: 'transparent',
                    }}
                    onPress={()=>this.handleCameraType()}
                    >
                    <MaterialCommunityIcons
                        name="camera-switch"
                        style={{ color: "#fff", fontSize: 40}}
                    />
                  </TouchableOpacity>
                </View>
              </Camera>
          </View>
        );
      }
    }
    
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  innerCameraView: {
    width: "93%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: 10,
  },
  flipIcon: {},
  snapIcon: {},
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateEmail,
      updatePassword,
      updateRF,
      updateAddress,
      updateLAT,
      updateLNG,
      signup,
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CameraPage);

var url = "https://newnamefarmapp.herokuapp.com/";

export default class PrevCommune extends Component {
    constructor(props){
        super(props);
        this.navigation=this.props.navigation;
    };

    getAxios=()=>{
        axios.get(`${url}`).then((response)=>{
            console.log("succes axios :",response);
        }).catch((error)=>{
            console.log("fail axios :", error);
        });
    };

    getFetch=()=>{
        fetch(url).then((response)=>{
            console.log("succes fetch :",response)
        }).catch((error)=>{
            console.log("fail fetch :",error)
        })
    }

    render(){
        return (
            <View style={sharedStyles.mainContainer}>
                <Button onPress={()=>this.getAxios()} title={"get axios"}></Button>

                <Button onPress={()=>this.getFetch()} title={"get fetch"}></Button>
                </View>
        )}
}

