import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';

class SentenceB extends Component {
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
                        source={require('./sentenceImage/sentenceB.png')}
                    ></Image>
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
        justifyContent:'center',
        alignItems:'center',
    },
    main: {
        width: '100%',
        height: '100%',
    },
    container:{
        position:'absolute',
        right:'25%',
        width:'38%',
        height:'25%'
    }
})

export default withNavigation(SentenceB);