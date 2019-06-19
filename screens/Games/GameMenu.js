import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {globalStyleSheet} from '../globalStyleSheet/globalStyleSheet';
import Slide1 from './gameImages/Slide1.png';
import DadBatak from './gameImages/1Icon_DadBatak.png';
import DadSe from './gameImages/1Icon_DadSe.png';
import GnareIcon from './gameImages/GnareMain.png';

class GameMenu extends Component {
    static navigationOptions = {
        header: null,
    }

    gotoDadBatak = () => {
        this.props.navigation.navigate('dadbatak')
    }

    gotoDadSe = () => {
        this.props.navigation.navigate('dadse')
    }

    render() {
        return (
            <ImageBackground
                source={Slide1}
                style={globalStyleSheet.image}
            >
                <View style={styles.gnareIconStyle}>
                    <Image
                        source={GnareIcon}
                        style={styles.image}
                    >
                    </Image>
                </View>
                <View style={styles.DadBatakStyle}>
                    <TouchableOpacity onPress={this.gotoDadBatak}>
                        <Image
                            source={DadBatak}
                            style={styles.image}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.DadSeStyle}>
                    <TouchableOpacity onPress={this.gotoDadSe}>
                        <Image
                            source={DadSe}
                            style={styles.image}
                        >
                        </Image>
                    </TouchableOpacity>
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
    DadBatakStyle: {
        position: 'absolute',
        top: hp('7%'),
        left: wp('20.5%'),
        height: hp('13.5%'),
        width: wp('20%'),
    },
    DadSeStyle: {
        position: 'absolute',
        top: hp('7%'),
        right: wp('16%'),
        height: hp('13.5%'),
        width: wp('20%'),
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    }
})


export default withNavigation(GameMenu);