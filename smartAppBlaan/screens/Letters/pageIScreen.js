import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';

class pageI extends Component {
    static navigationOptions = {
        header: null,
    }

    goHome = () => {
        this.props.navigation.navigate('main');
    }
    next = () => {
        this.props.navigation.navigate('pageK');
    }
    back = () => {
        this.props.navigation.navigate('letters');
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
                    source={require('./lettersImage/I(1).png')}
                ></Image>
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
        top: '15%',
        left: '15%',
        width: '61%',
        height: '35%',
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
})

export default withNavigation(pageI);