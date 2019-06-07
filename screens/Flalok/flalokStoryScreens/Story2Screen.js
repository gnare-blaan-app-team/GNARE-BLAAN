import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity} from "react-native";

import Video from "react-native-video";
import ProgressBar from "react-native-progress/Bar";
import { withNavigation } from 'react-navigation'; 
import Icon from "react-native-vector-icons/FontAwesome";

import Story2_FL from '../flalokVideos/Story2_FL.mp4';
import Story2_EN from '../flalokVideos/Story2_EN.mp4';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';

import NextStory from '../flalokImages/NextStory.png';
import Prayer from '../flalokImages/Prayer.png';
import Vocabulary from '../flalokImages/Vocabulary.png';
import flalokAfterStory_BG from '../flalokImages/flalokAfterStory_BG.png';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js';

function secondsToTime(time) {
    return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + time % 60;
}

class Story2Screen extends Component {
    
    constructor () {
        super();
        this.state = {
            changeVideo: false,
            videoFile: Story2_FL,
            opacityVideo: 1,
            opacityNext: 0,
            hideVideo: -1200,
            hideTabs: '-100%',
            hideHome: '-100%',

            controlHide: -1000,
    
            progressHeight: 48,
            paused: false,
            progress: 0,
            duration: 0,
            muted: false,
            volume: 1,
        };
    }

    static navigationOptions = {
        header:null,
    }

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
        let progress = (position / 250) * this.state.duration;
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
        this.setState({ paused: true, opacityVideo: 0, opacityNext: 1, hideVideo: 0, hideTabs: '15%', hideHome: '-2%'});
        //his.props.navigation.navigate('endstory');
    };

    handleLoad = meta => {
        this.setState({
            duration: meta.duration,
        });
    };

    goBack = () => {
        this.props.navigation.pop();
    }


    gotoNextStory = () => {
        this.props.navigation.navigate('story3');
    }

    gotoVocabulary = () => {
        this.props.navigation.navigate('story3');
    }

    gotoPrayers = () => {
        this.props.navigation.navigate('cultureandarts');
    }
    

    render() {

        return (
            <View style={videoStyle.container}>
                <View style={{opacity: this.state.opacityVideo}}>
                    <TouchableWithoutFeedback onPress={() => {
                        this.setState({
                            controlHide: this.state.controlHide == 0 ? -1000 : 0,
                        })
                    }}>
                        <Video
                            paused={this.state.paused}
                            source={this.state.videoFile}
                            
                            style={{ width: "100%", height: '100%' }}
                            resizeMode="contain"
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

                    <View style={{backgroundColor: "rgba(0, 0, 0, 0.5)",
                        height: 45,
                        left: 0,
                        bottom: this.state.controlHide,
                        right: 0,
                        position: "absolute",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingHorizontal: 10,}}>

                        <TouchableWithoutFeedback onPress={this.handleMainButtonTouch}>
                            <Icon name={!this.state.paused ? "pause" : "play"} size={30} color="#FFF" />
                        </TouchableWithoutFeedback>

                        <View style={{marginRight: '3%', marginLeft: '18%'}}>
                            <TouchableWithoutFeedback onPress={this.handleBackward}>
                                <Icon name={"backward"} size={25} color="#FFF" />
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={{marginRight: '2%', marginLeft: '2%'}}>
                            <TouchableWithoutFeedback onPress={this.handleProgressPress}>
                                    <ProgressBar
                                        progress={this.state.progress}
                                        color="#FFF"
                                        unfilledColor="rgba(255,255,255,.5)"
                                        borderColor="#FFF"
                                        width={250}
                                        height={20}
                                    />
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={{marginRight: '18%', marginLeft: '3%'}}>
                            <TouchableWithoutFeedback onPress={this.handleForward}>
                                <Icon name={"forward"} size={25} color="#FFF" />
                            </TouchableWithoutFeedback>
                        </View>

                        <Text style={videoStyle.duration}>
                            {secondsToTime(Math.floor(this.state.progress * this.state.duration))}
                        </Text>
                    </View>

                    <View style={{position: 'absolute', top: this.state.controlHide, left: 0}}>
                        <TouchableOpacity onPress={this.goBack}>
                            <Image
                                source={Back_icon}
                                style={styles.back}
                            ></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{position: 'absolute', top: this.state.controlHide, left: '85%'}}>
                        <TouchableOpacity onPress={() => {
                            //toggleProgress = this.state.progress;
                            this.setState({
                                videoFile: this.state.videoFile == Story2_FL ? Story2_EN : Story2_FL,
                            });

                            this.handleProgressPress;
                        }}>
                            <Image
                                source={Home_icon}
                                style={styles.home}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <Image source={flalokAfterStory_BG} style={{position: 'absolute', top: this.state.hideVideo, opacity: this.state.opacityNext, width: '100%', height: '100%'}} />
                    <View style={{position: 'absolute', top: this.state.hideTabs, left: '45%', width: '40%', height: '60%',}}>
                        <View style={EndStyles.imageTab}>
                            <TouchableOpacity onPress={this.gotoNextStory}>
                                <Image
                                    source={NextStory}
                                    style={EndStyles.image}
                                ></Image>
                            </TouchableOpacity>
                        </View>

                        <View style={EndStyles.imageTab}>
                            <TouchableOpacity onPress={this.gotoPrayers}>
                                <Image
                                    source={Prayer}
                                    style={EndStyles.image}
                                ></Image>
                            </TouchableOpacity>
                        </View>

                        <View style={EndStyles.imageTab}>
                            <TouchableOpacity onPress={this.gotoVocabulary}>
                                <Image
                                    source={Vocabulary}
                                    style={EndStyles.image}
                                ></Image>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={{position: 'absolute', left: '85%', top: this.state.hideHome,}}>
                        <TouchableOpacity onPress={this.gotoMainMenu}>
                            <Image
                                source={Home_icon}
                                style={styles.home}
                            ></Image>
                        </TouchableOpacity>
                    </View>         
            </View>
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


export default withNavigation(Story2Screen);