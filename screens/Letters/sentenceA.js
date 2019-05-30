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
                    <View style={styles.labelcontainer}>
                        <Text style={styles.label}>Blaan:    Fankaan gu anuk.</Text>
                        <Text style={styles.label}>Filipino: Pinapakain ko ang manok.</Text>
                        <Text style={styles.label}>English: I feed the chicken.</Text>
                    </View>
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
        position: 'absolute',
        top: '60%',
        left: '35%'
    },
    sentence: {
        color: 'white',
        fontSize:18
    }

})

export default withNavigation(SentenceA);