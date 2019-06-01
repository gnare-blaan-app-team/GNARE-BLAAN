import React,{Component} from 'react';
import { ImageBackground, View, Image, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import Video from 'react-native-video';
import Story2_EN from '../flalokVideos/Story2_EN.mp4';
import Story2_FL from '../flalokVideos/Story2_FL.mp4';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet';

 class Story2Screen extends Component<Props> {

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

    goBack = () => {
        this.props.navigation.navigate('flalok');
    }
    

    render(){
        return(
           <ImageBackground style={styles.imageStoryScreen} source={require('../flalokImages/Flalok_BG.jpg')}>

                <View style={styles.storiesContainer}>
                    <Image source={require('../flalokImages/Story2_FL_THUMBNAIL.png')}  style={styles.thumbnail}/>
                    <Image source={require('../flalokImages/Story2_EN_THUMBNAIL.png')}  style={styles.thumbnail}/>
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

export default withNavigation(Story2Screen);