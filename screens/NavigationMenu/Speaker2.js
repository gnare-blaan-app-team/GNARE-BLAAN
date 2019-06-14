import React, { Component } from 'react';
import { View, Image, ImageBackground, BackHandler, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';

import { globalStyleSheet as styles } from '../globalStyleSheet/globalStyleSheet';

Sound.setCategory('Playback');

class Speaker2 extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            
            <View style={styles.A_Speaker_Container_2}>
                    <TouchableOpacity onPress={this.props.playAsound_2}>
                        <Image
                            source={this.props.SpeakerIcon}
                            style={styles.A_Speaker_2}
                        ></Image>

                    </TouchableOpacity>
                </View>
           
        )
    }
}

export default withNavigation(Speaker2);
