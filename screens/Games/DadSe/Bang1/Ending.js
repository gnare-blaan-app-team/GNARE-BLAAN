import React, { Component } from "react";
import { StyleSheet, AsyncStorage, View, Image, ImageBackground, TouchableWithoutFeedback, TouchableOpacity} from "react-native";

import Video from "react-native-video";
import EndingVideo from "../../gameImages/ending.mp4";
import { sound } from '../../../HomePage';
import { withNavigation } from 'react-navigation'; 

import Skip_icon from '../../../images/skip.png'
import Bang1Icon from '../../gameImages/bang1_icon.png';
import Bang2Icon from '../../gameImages/bang2_icon.png';
import Bang3Icon from '../../gameImages/12Icon_Bang3Lock.png';
import GnareIcon from '../../gameImages/GnareMain.png';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {globalStyleSheet as styles} from '../../../globalStyleSheet/globalStyleSheet.js';

const RandomKey = '@MyApp:RandomKey';
const Stage2 = '@MyApp:Stage2';

class Ending extends Component {
    
    constructor () {
        super();
        this.state = {

            opacityVideo: 1,
            paused: false,
            progress: 0,
            duration: 0,
            muted: false,
            volume: 1,
        };
    }

    onSave = async () => { 
        await AsyncStorage.removeItem(RandomKey);
    }

    static navigationOptions = {
        header:null,
    }

    componentDidMount(){
        try {
            sound.setVolume(0);
            sound.play();
        } catch(error) {
            
        }
    }

    handleEnd = async () => {
        try {
            sound.setVolume(0.2);
            sound.play();
        } catch(error) {
            
        }
        this.onSave();
        this.props.navigation.push('gameMenu', { show: 'Dadse' });
        const store = 'unlock';
        await AsyncStorage.setItem(Stage2, store);
    }

    gotoGameScreen = () => {
        try {
            sound.setVolume(0.2);
            sound.play();
        } catch(error) {
            
        }
        this.setState({paused: true, volume: 0, muted: true});
        this.props.navigation.replace('gameMenu', { showDadseBang: 'show' });
    }

    gotoHome = () => {
        this.props.navigation.navigate('home');
    }

    render() {

        return (
            <ImageBackground style={videoStyle.container}>
                <View style={{position: 'absolute', width: '100%', height: '100%',}}>
                    <TouchableWithoutFeedback onPress={this.hideControl}>
                        <Video
                            paused={this.state.paused}
                            source={EndingVideo}
                            
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

                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoGameScreen}>
                        <Image source={Skip_icon} style={styles.home} />
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top: hp('22%'),
                    left: wp('63%'),
                    height: hp('16%'),
                    width: wp('28%'),
                }}>
                    <Image source={Bang1Icon} style={styles.image}></Image>
                </View>
                <View style={{
                    position: 'absolute',
                    left: wp('63%'),
                    top: hp('40%'),
                    height: hp('16%'),
                    width: wp('28%'),
                }}>
                    <Image source={Bang2Icon} style={styles.image}></Image>
                </View>
                <View style={{
                    position: 'absolute',
                    left: wp('63%'),
                    top: hp('59%'),
                    height: hp('16%'),
                    width: wp('28%'),
                }}>
                    <Image source={Bang3Icon} style={styles.image}></Image>
                </View>
                
                <View style={{position: 'absolute',
                    top: hp('5%'),
                    left: wp('2%'),
                    height: hp('12%'),
                    width: wp('10%'),}
                }>
                    <TouchableOpacity onPress={this.gotoHome}>
                        <Image source={GnareIcon} style={{width: '100%',
                            height: '100%',
                            resizeMode: 'stretch'
                        }}></Image>
                    </TouchableOpacity>
                </View>
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

export default withNavigation(Ending);