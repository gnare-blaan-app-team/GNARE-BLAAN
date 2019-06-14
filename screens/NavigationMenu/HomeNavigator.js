import React, { Component } from 'react';
import { View, Image, ImageBackground, BackHandler, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';

import { globalStyleSheet as styles } from '../globalStyleSheet/globalStyleSheet';

Sound.setCategory('Playback');

class HomeNavigator extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            
            <View style={styles.homeContainer}>
                <TouchableOpacity onPress={this.props.gotoMainMenu}>
                    <Image
                        source={this.props.HomeIcon}
                        style={styles.home}
                    ></Image>
                </TouchableOpacity>
            </View>
           
        )
    }
}

export default withNavigation(HomeNavigator);
