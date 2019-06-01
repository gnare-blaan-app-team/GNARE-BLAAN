import React,{Component} from 'react';
import { StyleSheet, ImageBackground, View, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { withNavigation } from 'react-navigation';
import Video from 'react-native-video';
import Story6_EN from '../flalokVideos/Story6_EN.mp4';
import Story6_FL from '../flalokVideos/Story6_FL.mp4';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    goBack = () => {
        this.props.navigation.navigate('flalok');
    }

    render(){
        return(
           <ImageBackground style={styles.image} source={require('../flalokImages/Flalok_BG.jpg')}>

                <View style={styles.container}>
                    <Image source={require('../flalokImages/Story6_FL_THUMBNAIL.png')}  style={styles.thumbnail}/>
                    <Image source={require('../flalokImages/Story6_EN_THUMBNAIL.png')}  style={styles.thumbnail}/>
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

    thumbnail: {
        width: '35%',
        height: '100%',
        resizeMode: 'contain',
    },

    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        //
    },

    itemSize: {
        margin: 10,
        marginBottom: 0,
        flexDirection: 'row',
        width: '30%',
        height: '35%',
    },

    container: {
        //backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: '100%',
        height: '60%',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    backContainer: {
        position: 'absolute',
         left: '1%',
         top: '-2%',
    },
    back: {
        width: wp('14%'),
        height: hp('28%')
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

export default withNavigation(Story6Screen);