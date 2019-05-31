import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';


class TracingA extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('./lettersImage/lettertracing_a.gif')}
            >
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
})

export default withNavigation(TracingA);