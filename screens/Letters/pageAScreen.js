import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, Button, BackHandler, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';
 
class PageA extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props)

        this.state = {
            pause: true,
        };
    }

    componentDidMount() {
        this.hello = new Sound('letter_a.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }else{
                this.hello.play(); 
            }
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        }); 
        this.A = new Sound('letter_play_a.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            } else {
                this.hello.play();
            }
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        });  
    }    


    handleBackPress = () => {
        this.hello.pause(); 
        this.A.play();
    }

    gotoSentenceA = () => {
        this.hello.pause();
        this.props.navigation.navigate('sentenceA');
    }

    playAsound = () => {
        this.A.play();
        this.hello.pause();
    }

    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('../images/BG.jpg')}
            >
                <View style={styles.black}>
                </View>
                <Image
                    style={styles.main}
                    source={require('./lettersImage/A(1).png')}
                ></Image>
                <View style={styles.sentenceIconContainer}>
                    <TouchableOpacity onPress={this.gotoSentenceA}>
                        <Image
                        source={require('./lettersImage/Letters_Info_Icon.png')}
                        style={styles.sentenceIcon}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.A_Speaker_Container}>
                    <TouchableOpacity onPress={this.playAsound}>
                        <Image
                            source={require('./lettersImage/Speaker_icon.png')}
                            style={styles.A_Speaker}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    black: {
        top: '24%',
        left: '15%',
        width: '35%',
        height: '61%',
        backgroundColor: 'black',
        opacity: 0.2,
    },
    main: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    sentenceIconContainer:{
        position: 'absolute',
        left:'85%',
        top:'80%',
    },
    sentenceIcon:{
        width:54,
        height:54
    },
    A_Speaker_Container:{
        position:'absolute',
        left:'42%',
        top:'27%',
    },
    A_Speaker:{
         height: 35, 
         width: 35 
    }
})

export default withNavigation(PageA);