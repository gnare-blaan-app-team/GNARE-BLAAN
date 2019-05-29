import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';

class SentenceA extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('../images/BG.jpg')}
            >
                <View style={styles.container}>
                    <Image
                        style={styles.main}
                        source={require('./sentenceImage/sentenceA.png')}
                    ></Image>
                </View>
                <View style={styles.black}>
                
                </View> 
                <View style={styles.labelcontainer}>
                    <Text style={styles.label}>Blaan:</Text>
                    <Text style={styles.label}>Filipino:</Text>
                    <Text style={styles.label}>English:</Text>
                </View>
                <View style={styles.sentencecontainer}>
                    <Text style={styles.sentence}>Fankaan gu anuk.</Text>
                    <Text style={styles.sentence}>Pinapakain ko ang manok.</Text>
                    <Text style={styles.sentence}>I feed the chicken.</Text>
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
    main: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    container:{
        left: '37.5%',
        top: '23%',   
        width:'25%',
        height:'35%'
    },
    black: {
        top: '57%',
        left: '12.7%',
        position:'absolute',
        width: '75%',
        height: '30%',
        backgroundColor: 'black',
        opacity: 0.2,
    },
    labelcontainer: {
        position: 'absolute',
        top: '60%',
        left: '15%'
    }, 
    label: {
        color: 'white'
    },
    sentencecontainer: {
        position: 'absolute',
        top: '60%',
        left: '30%'
    },
    sentence: {
        color: 'white'
    }

})

export default withNavigation(SentenceA);