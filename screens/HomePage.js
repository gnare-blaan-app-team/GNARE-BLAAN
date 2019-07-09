import React,{Component} from 'react';
import { ImageBackground, TouchableOpacity, View, Image, Text, StatusBar, AsyncStorage, Animated, Easing, BackHandler} from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from './globalStyleSheet/globalStyleSheet.js';

import HomepageBackground from './images/GnareMain.gif';
import About_icon from "./images/Icon_About.png";
import Like_icon from "./images/Icon_Like.png";
import Share_icon from "./images/Icon_Share.png";

import Sound from 'react-native-sound';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export let sound = new Sound('blaanbg.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        alert('failed to load the sound', error);
        return;
    } else {
        try{
            sound.setVolume(0.2);
            sound.play();
            sound.setNumberOfLoops(-1);
        } catch(error) {
            
        }
}});

class Homescreen extends Component{

    static navigationOptions = {
        header:null,
    }

    constructor(props) {
        super(props);
        this.state = {
            yValue: new Animated.Value(0),
        }
        this.backHandler = null;
    }

    _moveAnimation = () => {
        Animated.timing(this.state.yValue, {
          toValue: hp('90%'),
          duration: 4500,
          easing: Easing.linear,
        }).start();
    
      }

    

    componentDidMount() {
        StatusBar.setHidden(true);
        try{
            sound.setVolume(0.2);
            sound.play();
        } catch(error) {
            
        }
        if (this.backHandler == null) {
            this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress); 
        }
        
    }


    handleBackPress = () => {
        this.goBack();
    }

    goBack = () =>{
        sound.stop();
        BackHandler.exitApp();
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
        this.backHandler.remove();
    }

    render(){
        return(
            <ImageBackground style={styles.image} source={HomepageBackground}>
                <View style={{position: "absolute", width:"100%", height:"100%"}}>
                    <TouchableOpacity  onPress={this.gotoMainMenu}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                    </View>
                    <Animated.View style={[{bottom: this.state.yValue}]}>
                      <View style={{
                      bottom: hp('-132%'),
                      height: hp('30%'),
                      left: wp('1.5%'),
                      }}>
                          {this._moveAnimation()}
                            <View style={styles.row}>
                                <View style={styles.HomePageItems} >
                                    <TouchableOpacity>
                                        <Image style={styles.imageSizeStoryMenu} source={Like_icon} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.HomePageItems} >
                                    <TouchableOpacity>
                                        <Image style={styles.imageSizeStoryMenu} source={Share_icon} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.HomePageItems} >
                                    <TouchableOpacity>
                                        <Image style={styles.imageSizeStoryMenu} source={About_icon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                          </View>
                    </Animated.View>
            </ImageBackground>
        );
    }
}


export default withNavigation(Homescreen);