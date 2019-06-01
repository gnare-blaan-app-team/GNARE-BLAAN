import React, { Component } from 'react';
import { View, Image, ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet';

class TracingB extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('../lettersImage/letter_B.gif')}
            >
            </ImageBackground>
        )
    }
}

export default withNavigation(TracingB);