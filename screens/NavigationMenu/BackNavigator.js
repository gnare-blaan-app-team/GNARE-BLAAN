import React, { Component } from 'react';
import { View, Image, ImageBackground, BackHandler, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';

import { globalStyleSheet as styles } from '../globalStyleSheet/globalStyleSheet';

Sound.setCategory('Playback');

class BackNavigator extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            
                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={this.props.goBack}>
                        <Image
                            source={this.props.GoBackIcon}
                            style={styles.back}
                        ></Image>
                    </TouchableOpacity>
                </View>
           
        )
    }
}

export default withNavigation(BackNavigator);
