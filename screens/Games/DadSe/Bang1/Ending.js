import React, { Component } from "react";
import { StyleSheet, AsyncStorage, View, Image, ImageBackground, TouchableWithoutFeedback, TouchableOpacity} from "react-native";

import Video from "react-native-video";
import EndingVideo from "../../gameImages/ending.mp4";

import { withNavigation } from 'react-navigation'; 

const Key = '@MyApp:key';

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
        await AsyncStorage.setItem(prevKey, null); 
    }

    static navigationOptions = {
        header:null,
    }

    handleEnd = () => {
        this.onSave();
        this.props.navigation.push('gameMenu', { show: 'Dadse' });
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