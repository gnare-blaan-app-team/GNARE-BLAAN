import React, { Component } from 'react';
import { View, Image, ImageBackground, BackHandler, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';

import { globalStyleSheet as styles } from '../globalStyleSheet/globalStyleSheet';

Sound.setCategory('Playback');

class PrevNavigator extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            
            <View style={styles.prevContainer}>
                <TouchableOpacity onPress={this.props.goPrev}>
                    <Image
                        source={this.props.PrevIcon}
                        style={styles.prev}
                    ></Image>
                </TouchableOpacity>
            </View>
           
        )
    }
}

export default withNavigation(PrevNavigator);
