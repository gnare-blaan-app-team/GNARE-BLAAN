import React, { Component } from 'react';
import { View, Image, ImageBackground, BackHandler, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';

import LetterBackground from '../../images/BG.jpg';


import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet';

Sound.setCategory('Playback');

class Loader extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <ImageBackground style={styles.image}
                source={LetterBackground}
            >
            </ImageBackground>
        )
    }
}

export default withNavigation(Loader);
