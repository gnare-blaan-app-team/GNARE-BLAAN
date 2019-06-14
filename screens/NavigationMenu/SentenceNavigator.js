import React, { Component } from 'react';
import { View, Image, ImageBackground, BackHandler, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';

import { globalStyleSheet as styles } from '../globalStyleSheet/globalStyleSheet';

Sound.setCategory('Playback');

class SentenceNavigator extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
                <View style={styles.sentenceIconContainer}>
                    <TouchableOpacity onPress={this.props.gotoSentence}>
                        <Image
                            source={this.props.SentenceIcon}
                            style={styles.sentenceIcon}
                        ></Image>
                    </TouchableOpacity>
                </View>
        )
    }
}

export default withNavigation(SentenceNavigator);
