import React, { Component } from 'react';
import { View, Image, ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet';

class TracingY extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('../lettersImage/letter_Y.gif')}
            >
            </ImageBackground>
        )
    }
}

export default withNavigation(TracingY);