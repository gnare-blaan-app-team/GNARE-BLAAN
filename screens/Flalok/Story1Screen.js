import React,{Component} from 'react';
import { StyleSheet, ImageBackground, View, Image, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import Video from 'react-native-video';
import Story1_EN from './flalokVideos/Story1_EN.mp4';
import Story1_FL from './flalokVideos/Story1_FL.mp4';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

 class Story1Screen extends Component<Props> {

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

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }
    

    render(){
        return(
           <ImageBackground style={styles.image} source={require('./flalokImages/Flalok_BG.jpg')}>

                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={() => this.setState({paused: !this.state.paused, toPlay: 'EN'})}>
                        <Video ref={(ref: Video) => {this.video = ref}}
                            source={Story1_FL}
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
                
                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={require('./flalokImages/Home_icon.png')}
                            style={styles.home}
                        ></Image>
                    </TouchableOpacity>
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
    },

    homeContainer: {
        position: 'absolute',
        left: '85%',
        top: '-2%',
    },
    home: {
        width: wp('14%'),
        height: hp('28%')
    },
})

export default withNavigation(Story1Screen);