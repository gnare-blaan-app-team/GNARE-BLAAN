import React,{Component} from 'react';
import { StyleSheet, ImageBackground, View, TouchableWithoutFeedback} from 'react-native';
import { withNavigation } from 'react-navigation';
import Video from 'react-native-video';
import Story1_EN from './flalokVideos/Story1_EN.mp4';
import Story6_FL from './flalokVideos/Story6_FL.mp4';

 class Story6Screen extends Component<Props> {

    constructor(props) {
        super(props);

        this.state = {
            repeat: false,
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'contain',
            duration: 0.0,
            progress: 0.0,
            currentTime: 0.0,
            paused: true,
            rateText: '1.0',
            pausedText: 'Play',
            hideControls: false,
            toPlay: 'EN',
        };
    }

    static navigationOptions = {
        header:null,
    }

    

    render(){
        return(
           <ImageBackground style={styles.image} source={require('./flalokImages/Flalok_BG.jpg')}>

                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={() => this.setState({paused: !this.state.paused})}>
                        <Video ref={(ref: Video) => {this.video = ref}}
                            source={Story6_FL}
                            repeat={this.state.repeat}
                            rate={this.state.rate}
                            volume={this.state.volume}
                            muted={this.state.muted}
                            resizeMode={this.state.resizeMode}
                            paused={this.state.paused}
                            onLoad={this.onLoad}
                            onProgress={this.onProgress}
                            onEnd={this.onEnd}
                            onPress={this.onPress}
                            style={styles.backgroundVideo}
                        />
                    </TouchableWithoutFeedback>
                </View>
                
           </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({

    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
        padding: 10,
    },

    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    itemSize: {
        margin: 10,
        marginBottom: 0,
        flexDirection: 'row',
        width: '30%',
        height: '35%',
    },

    container: {
        borderWidth: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderColor: 'black',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
    },
    contain: {
        flexDirection: 'column',
    }
})

export default withNavigation(Story6Screen);