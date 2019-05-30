import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler} from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

class SentenceA extends Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        this.forceUpdate();
        this.letter_sentence_a = new Sound('sentence_letter_a.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        });
    }

    playAsound_2 = () => {
        this.letter_sentence_a.play();
    }

    handleBackPress = () => {
        this.letter_sentence_a.pause();
    }


    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('../images/sentenceA.png')}
            >
                <View style={styles.A_Speaker_Container_2}>
                    <TouchableOpacity onPress={this.playAsound_2}>
                        <Image
                            source={require('./lettersImage/Speaker_icon.png')}
                            style={styles.A_Speaker_2}
                        ></Image>
                    </TouchableOpacity>
                </View>
<<<<<<< HEAD
                <View style={styles.black}>
                    <View style={styles.labelcontainer}>
                        <Text style={styles.label}>Blaan:    Fankaan gu anuk.</Text>
                        <Text style={styles.label}>Filipino: Pinapakain ko ang manok.</Text>
                        <Text style={styles.label}>English: I feed the chicken.</Text>
                    </View>
                </View> 
                

=======
>>>>>>> 9cc3918a7742ac8a5b804ff99e2fb60e5b562fc6
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
    
    main: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
<<<<<<< HEAD
    container:{
        left: '37.5%',
        top: '23%',   
        width:'25%',
        height:'35%'
    },
    black: {
        top: '57%',
        left: '15%',
        position:'absolute',
        width: '70%',
        height: '30%',
        backgroundColor: 'rgba(0,0,0, 0.2)',
        //opacity: 0.2,
    },
    labelcontainer: {
        position: 'absolute',
        top: '60%',
        left: '20%'
    }, 
    label: {
        color: 'white',
        fontSize: 18
    },
    sentencecontainer: {
=======
    A_Speaker_Container_2: {
>>>>>>> 9cc3918a7742ac8a5b804ff99e2fb60e5b562fc6
        position: 'absolute',
        left: '80%',
        top: '27%',
    },
    A_Speaker_2: {
        height: 35,
        width: 35
    }
})

export default withNavigation(SentenceA);