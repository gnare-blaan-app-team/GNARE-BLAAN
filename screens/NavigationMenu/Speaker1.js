import React, { Component } from 'react';
import { View, Image, ImageBackground, BackHandler, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';

import { globalStyleSheet as styles } from '../globalStyleSheet/globalStyleSheet';

Sound.setCategory('Playback');

class Speaker1 extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            
            <View style={styles.A_Speaker_Container}>
                <TouchableOpacity onPress={this.props.playAsound}>
                    <Image
                        source={this.props.SpeakerIcon}
                        style={styles.A_Speaker}
                    ></Image>
                </TouchableOpacity>
            </View>
           
        )
    }
}

export default withNavigation(Speaker1);
