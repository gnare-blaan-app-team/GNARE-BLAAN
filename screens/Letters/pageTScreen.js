import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, TouchableHighlight, BackHandler, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';

class PageT extends Component {
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
        this.hello = new Sound('letter_t.mp3', Sound.MAIN_BUNDLE, (error) => {
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
    }
    gotoSentenceA = () => {
        this.hello.pause();
        this.props.navigation.navigate('sentenceT');
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
                    source={require('./lettersImage/T_(1).png')}
                ></Image>
                <View style={styles.sentenceIconContainer}>
                    <TouchableOpacity onPress={this.gotoSentenceA}>
                        <Image
                        source={require('./lettersImage/Letters_Info_Icon.png')}
                        style={styles.sentenceIcon}
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
    pencil: {
        width: '30%',
        height: '6%',
        bottom: '22%',
        left: '51%'
    },
    main: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    sentenceIconContainer:{
        left:'85%',
        top:'18%'
    },
    sentenceIcon:{
        width:'8%',
        height:'52%'
    }
})

export default withNavigation(PageT);