import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {globalStyleSheet} from '../../../globalStyleSheet/globalStyleSheet';
import DadBatakBG from '../../gameImages/DadBatakBG.png';

class Question1 extends Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        return (
            <ImageBackground
                source={DadBatakBG}
                style={globalStyleSheet.image}
            >
                <View style={styles.question1Style}>
                    <Image
                        source={Question1}
                        style={styles.image}
                    >
                    </Image>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    question1Style: {
        position: 'absolute'
    }
})

export default withNavigation(Question1);