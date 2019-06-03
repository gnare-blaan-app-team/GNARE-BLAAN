import React, { Component } from 'react';
import { View, Image, ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet';

class TracingH extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('../lettersImage/letter_H.gif')}
            >
            </ImageBackground>
        )
    }
}

export default withNavigation(TracingH);