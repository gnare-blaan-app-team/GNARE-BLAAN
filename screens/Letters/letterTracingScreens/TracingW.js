import React, { Component } from 'react';
import { View, Image, ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet';

class TracingW extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('../lettersImage/letter_W.gif')}
            >
            </ImageBackground>
        )
    }
}

export default withNavigation(TracingW);