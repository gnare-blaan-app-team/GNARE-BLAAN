import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {globalStyleSheet} from '../../../globalStyleSheet/globalStyleSheet';
import GnareIcon from '../../gameImages/GnareMain.png';
import GameBG from '../../gameImages/GameBG.png';
import Q6 from '../../gameImages/bang1Q6.png';
import E from '../../gameImages/e.png';
import Uaccent from '../../gameImages/u-accent.png';
import Oaccent from '../../gameImages/o-accent.png';
import Iaccent from '../../gameImages/i-accent.png';
import Home_icon from '../../../images/Home_icon.png';

class Bang1Question6 extends Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        return (
            <ImageBackground
                source={GameBG}
                style={globalStyleSheet.image}
            >
                <View style={globalStyleSheet.gnareIconStyle}>
                    <Image
                        source={GnareIcon}
                        style={styles.image}
                    >
                    </Image>
                </View>
                <View style={globalStyleSheet.questionStyle}>
                    <Image
                        source={Q6}
                        style={styles.image}
                    >
                    </Image>
                </View>
                <View style={globalStyleSheet.db_b1_choice1Style}>
                    <TouchableOpacity>
                        <Image
                            source={E}
                            style={styles.image}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.db_b1_choice2Style}>
                    <TouchableOpacity>
                        <Image
                            source={Uaccent}
                            style={styles.image}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.db_b1_choice3Style}>
                    <TouchableOpacity>
                        <Image
                            source={Oaccent}
                            style={styles.image}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.db_b1_choice4Style}>
                    <TouchableOpacity>
                        <Image
                            source={Iaccent}
                            style={styles.image}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={Home_icon}
                            style={globalStyleSheet.home}
                        ></Image>
                    </TouchableOpacity>
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
    
})

export default withNavigation(Bang1Question6);