import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';
import DadseBG from '../gameImages/DadSeBG.png';
import GnareIcon from '../gameImages/GnareMain.png';
import TanbuIcon from '../gameImages/tanbu_icon.png';


class DadSeTanbu4 extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <ImageBackground
                source={DadseBG}
                style={globalStyleSheet.image}
            >
                <View style={styles.gnareIconStyle}>
                    <Image
                        source={GnareIcon}
                        style={styles.image}
                    >
                    </Image>
                </View>
                <View style={styles.tanbuStyle}>
                    <Image
                        source={TanbuIcon}
                        style={styles.image}
                    >
                    </Image>
                </View>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    gnareIconStyle: {
        position: 'absolute',
        top: hp('5%'),
        left: wp('2%'),
        height: hp('12%'),
        width: wp('10%'),
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    tanbuStyle: {
        position: 'absolute',
        top: '30%',
        left: '48%',
        height: hp('40%'),
        width: wp('50%'),
    },
})


export default withNavigation(DadSeTanbu4);