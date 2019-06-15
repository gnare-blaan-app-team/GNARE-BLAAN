import React, { Component } from 'react';
import { View, Image, ImageBackground, BackHandler, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';

import { globalStyleSheet as styles } from '../globalStyleSheet/globalStyleSheet';

Sound.setCategory('Playback');

class NextNavigator extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            
            <View style={styles.pencilContainer}>
                <TouchableOpacity onPress={this.props.gotoTracing}>
                    <Image
                        source={this.props.PencilIcon}
                        style={styles.pencil}
                    ></Image>
                </TouchableOpacity>
            </View>
           
        )
    }
}

export default withNavigation(NextNavigator);
