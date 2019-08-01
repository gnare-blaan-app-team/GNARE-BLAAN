import React,{Component} from 'react';
import { TouchableWithoutFeedback, StyleSheet, ImageBackground, TouchableOpacity, View, Image, Text, StatusBar, AsyncStorage, Animated, Easing, BackHandler, AppState} from 'react-native';
import { withNavigation } from 'react-navigation';
import Video from "react-native-video";
import {globalStyleSheet as styles} from './globalStyleSheet/globalStyleSheet.js';

import HomepageBackground from './images/GnareMain.gif';
import About_icon from "./images/Icon_About.png";
import Like_icon from "./images/Icon_Like.png";
import Share_icon from "./images/Icon_Share.png";
import sponsorVid_video from './IntroVideos/Sponsor_Intro.mp4';

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
            // setInterval(() => {
            //     sound.setVolume(0.2);
            //     sound.play();
            // }, (60 * 1000)*3);
        } catch(error) {
            
        }
}});

// export function increaseBGVolume() {
//     if (sound.getVolume() < 1){
//         sound.setVolume(sound.getVolume() + 0.1);
//         alert('Volume: ' + sound.getVolume());
//     } else if(sound.getVolume() >= 1) {
//         alert('Volume is at Maximum! ' + sound.getVolume())
//     }
// }

// export function decreaseBGVolume() {
//     if (sound.getVolume() > 0){
//         sound.setVolume(sound.getVolume() - 0.1);
//         alert('Volume: ' + sound.getVolume());
//     } else if(sound.getVolume() <= 0){
//         alert('Volume is at Minimum! ' + sound.getVolume())
//     }
// }

class Homescreen extends Component{

    static navigationOptions = {
        header:null,
    }

    constructor(props) {
        super(props);
        this.state = {
            yValue: new Animated.Value(0),
            changeVideo: false,
            videoFile: sponsorVid_video,
            changeScene: 0,
            opacityVideo: 1,
            opacityNext: 0,
            hideVideo: '-1200%',
            hideTabs: '-1000%',
            hideHome: '-1000%',
            hideStory: '0%',
            hideSub: '-1000%',

            controlHide: '-1000%',
            vidSkip: '-1000%',
            
            progressHeight: 48,
            paused: false,
            progress: 0,
            duration: 0,
            muted: false,
            volume: 1,

            animDuration: 4500,
        }
    }

    _storeData = async () => {
        try {
          await AsyncStorage.setItem('@MyApp:FreshOpen', 'I have watched the sponsor page');
        } catch (error) {
          // Error saving data
        }
      };

    _retrieveData = async () => {
        try {
        const value = await AsyncStorage.getItem('@MyApp:FreshOpen');
        if (value !== null) {
            this.state.changeScene = 1;
        } else {
            this._storeData();
        }
        } catch (error) {
        // Error retrieving data
        }
    };

    

    _moveAnimation = () => {
        Animated.timing(this.state.yValue, {
          toValue: hp('90%'),
          duration: this.state.animDuration,
          easing: Easing.linear,
        }).start();
    
      }

    componentDidMount() {
        this._retrieveData();
        StatusBar.setHidden(true);
        try{
            sound.setVolume(0.2);
            sound.play();
        } catch(error) {
            
        }
        AppState.addEventListener('change', this._handleAppStateChange);
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        sound.stop();
        BackHandler.exitApp();
    }
    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    _handleAppStateChange = (currentAppState) => {
        if(currentAppState == "background") {
            sound.pause();
        } 
        if(currentAppState == "active") {
            sound.play();
        }
      }


    handleProgressPress = e => {
        
        let position = e.nativeEvent.locationX;
        let progress = (position / 300) * this.state.duration;
        this.player.seek(progress);
    };



    handleProgress = progress => {
        this.setState({
            progress: progress.currentTime / this.state.duration,
        });
    };

    handleEnd = () => {
        this.setState({ paused: true, opacityVideo: 0, opacityNext: 1, 
            hideVideo: 0, hideTabs: '15%', hideHome: '3%',
            hideStory: '-1000%'});
            this.state.changeScene = 1;
    };

    removeItem = () => {
        AsyncStorage.clear();
        alert('Storage Cleared!');
    }

    sceneShow() {
        if (this.state.changeScene == 0){
            return <ImageBackground style={videoStyle.container}>
            <View>
            <StatusBar hidden={true} />
                <TouchableWithoutFeedback>
                    <Video
                        paused={this.state.paused}
                        source={this.state.videoFile}
                        
                        style={{ width: "100%", height: '100%' }}
                        resizeMode="stretch"
                        volume={this.state.volume}
                        muted={this.state.muted}
                        onLoad={this.handleLoad}
                        onProgress={this.handleProgress}
                        onEnd={this.handleEnd}
                        onLoadStart={this.handleLoadStart}
                        ref={ref => {
                        this.player = ref;
                        }}
                    />
                </TouchableWithoutFeedback>
            </View>
        </ImageBackground>;
        } else if (this.state.changeScene == 1) {
            return <ImageBackground style={styles.image} source={HomepageBackground}>
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
                                <TouchableOpacity onPress={this.removeItem}>
                                    <Image style={styles.imageSizeStoryMenu} source={Share_icon} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.HomePageItems} >
                                <TouchableOpacity  onPress={this.gotoAbout}>
                                    <Image style={styles.imageSizeStoryMenu} source={About_icon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                      </View>
                </Animated.View>
        </ImageBackground>;
        }
        sound.play();
    }


    hideControl = () => {
        this.setState({
            controlHide: this.state.controlHide == 0 ? -1000 : 0,
            vidSkip: this.state.vidSkip == '3%' ? '-1000%' : '3%',
            hideSub: this.state.hideSub == '-1000%'  ? '3%' : '-1000%',
        })
    }

    gotoMainMenu = () => {
        if (this.state.animDuration == 4500) {
            this.setState({
                animDuration: 0,
            })
        }
        this.props.navigation.navigate('mainMenu');
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }
    gotoAbout = () => {
      this.props.navigation.navigate('about');
    }

    render(){
        console.disableYellowBox = true; 
        return(
        this.sceneShow()
        );
    }
}

const videoStyle = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },

    duration: {
        color: "#FFF",
        marginLeft: 15,
    },
});


export default withNavigation(Homescreen);