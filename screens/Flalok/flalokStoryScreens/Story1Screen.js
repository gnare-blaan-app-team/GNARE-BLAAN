import React,{Component} from 'react';
import { ImageBackground, View, Image, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import Video from 'react-native-video';
import Story1_EN from '../flalokVideos/Story1_EN.mp4';
import Story1_FL from '../flalokVideos/Story1_FL.mp4';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js';


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
            //toPlay: 'EN',

            repeat2: false,
            rate2: 1,
            volume2: 1,
            muted2: false,
            resizeMode2: 'contain',
            duration2: 0.0,
            progress2: 0.0,
            currentTime2: 0.0,
            paused2: true,
            rateText2: '1.0',
            pausedText2: 'Play',
            hideControls2: false,
            //toPlay: 'EN',
        };
    }

    static navigationOptions = {
        header:null,
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    goBack = () => {
        this.props.navigation.navigate('flalok');
    }
    

    render(){
        return(
           <ImageBackground style={styles.imageStoryScreen} source={require('../flalokImages/Flalok_BG.jpg')}>

                <View style={styles.storiesContainer}>
                    <Image source={require('../flalokImages/Story1_FL_THUMBNAIL.png')}  style={styles.thumbnail}/>
                    <Image source={require('../flalokImages/Story1_EN_THUMBNAIL.png')}  style={styles.thumbnail}/>
                </View>
                
                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={require('../../images/Back_icon.png')}
                            style={styles.back}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={require('../../images/Home_icon.png')}
                            style={styles.home}
                        ></Image>
                    </TouchableOpacity>
                </View>
           </ImageBackground>



        );
    }
}

/*

<View style={styles.container}>
                    <TouchableWithoutFeedback onPress={() => this.setState({paused: !this.state.paused, toPlay: 'EN'})}>
                        <Video ref={(ref: Video) => {this.video = ref}}
                            source={Story1_EN}
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
                    <Text>Blaan to Filipino</Text>
                </View>

                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={() => this.setState({paused2: !this.state.paused2, toPlay: 'EN'})}>
                        <Video ref={(ref: Video) => {this.video = ref}}
                            source={Story1_FL}
                            repeat={this.state.repeat2}
                            rate={this.state.rate2}
                            volume={this.state.volume2}
                            muted={this.state.muted2}
                            resizeMode={this.state.resizeMode2}
                            paused={this.state.paused2}
                            onLoad={this.onLoad}
                            onProgress={this.onProgress}
                            onEnd={this.onEnd}
                            onPress={this.onPress}
                            style={styles.backgroundVideo}
                        />
                    </TouchableWithoutFeedback>
                    <Text>Blaan to Filipino</Text>
                </View>

*/

/*
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
}
*/

export default withNavigation(Story1Screen);