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
            
            <View style={styles.nextContainer}>
                <TouchableOpacity onPress={this.props.gotoNextPage}>
                    <Image
                        source={this.props.NextIcon}
                        style={styles.next}
                    ></Image>
                </TouchableOpacity>
            </View>
           
        )
    }
}

export default withNavigation(NextNavigator);
