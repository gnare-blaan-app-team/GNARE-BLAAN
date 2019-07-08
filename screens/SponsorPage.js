import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, TouchableWithoutFeedback} from "react-native";
import Video from "react-native-video";
import {AsyncStorage} from 'react-native';
import { withNavigation } from 'react-navigation'; 
import sponsorVid_video from './IntroVideos/Sponsor_Intro.mp4';
import cultureandarts_BG from './CultureandArts/cultureandartsImages/cultureandarts_BG.jpg';



class SponsorPage extends Component {
    
    constructor () {
        super();
        this.state = {
            changeVideo: false,
            videoFile: sponsorVid_video,
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

            myKey: true,
        };

      
    }

    static navigationOptions = {
        header:null,
    }

    async getKey() {
        try {
          const value = await AsyncStorage.getItem('@MySuperStore:key');
          this.setState({myKey: value});
        } catch (error) {
            alert('test');
        }
      }
    
    // async saveKey(value) {
    //     try {
    //       await AsyncStorage.setItem('@MySuperStore:key', value);
    //     } catch (error) {
    //       console.log("Error saving data" + error);
    //     }
    //   }

    handleMainButtonTouch = () => {
        if (this.state.progress >= 1) {
            this.player.seek(0);
        }

        this.setState(state => {
        return {
            paused: !state.paused,
        };
        });
    };

    handleProgressPress = e => {
        
        let position = e.nativeEvent.locationX;
        let progress = (position / 300) * this.state.duration;
        this.player.seek(progress);
    };

    handleBackward = () => {

        const currentProgress = this.state.progress * this.state.duration;
        const backward = currentProgress - 10;
        this.player.seek(backward);
    }

    handleForward = () => {
        
        const currentProgress = this.state.progress * this.state.duration;
        const forward = currentProgress + 10;
        this.player.seek(forward);
    }


    handleProgress = progress => {
        this.setState({
            progress: progress.currentTime / this.state.duration,
        });
    };

    handleEnd = () => {
        this.setState({ paused: true});
        this.props.navigation.navigate('home');
    };


    hideControl = () => {
        this.setState({
            controlHide: this.state.controlHide == 0 ? -1000 : 0,
            vidSkip: this.state.vidSkip == '3%' ? '-1000%' : '3%',
            hideSub: this.state.hideSub == '-1000%'  ? '3%' : '-1000%',
        })
    }
    

    render() {

        return (
            
            <ImageBackground style={videoStyle.container}>
                <View style={{position: 'absolute', width: '100%', height: '100%', top: this.state.hideStory, opacity: this.state.opacityVideo}}>
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
                    <View style={{backgroundColor: "rgba(0, 0, 0, 0.8)",
                        height: '15%',
                        left: 0,
                        bottom: this.state.controlHide,
                        right: 0,
                        position: "absolute",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingHorizontal: 10,}}>
                    </View>
                </View>

                <Image source={cultureandarts_BG} style={{position: 'absolute', top: this.state.hideVideo, opacity: this.state.opacityNext, width: '100%', height: '100%'}} />

            </ImageBackground>
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

const EndStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '15%',
        left: '45%',
        width: '40%',
        height: '60%',
    },

    imageTab: {
        width: '90%',
        height: '25%',
        margin: '5%',
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    homeContainer: {
        position: 'absolute',
        left: '85%',
        top: '-2%',
    },
});


export default withNavigation(SponsorPage);