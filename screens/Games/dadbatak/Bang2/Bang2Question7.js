import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {globalStyleSheet} from '../../../globalStyleSheet/globalStyleSheet';
import GnareIcon from '../../gameImages/GnareMain.png';
import GameBG from '../../gameImages/GameBG.png';
import Home_icon from '../../../images/Home_icon.png';
import Bang2Q7 from '../../gameImages/DB_Bang2Images/db_bang2Q7.png';
import Paruparu from '../../gameImages/DB_Bang2Images/paru-paru.png';
import Paroparo from '../../gameImages/DB_Bang2Images/paro-paro.png';
import Parapara from '../../gameImages/DB_Bang2Images/para-para.png';

class Bang2Question7 extends Component {
    static navigationOptions = {
        header: null,
    }

    gotoMainMenu = () =>{
        this.props.navigation.navigate('mainMenu')
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
                <View style={globalStyleSheet.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={Home_icon}
                            style={globalStyleSheet.home}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.questionStyle}>
                        <Image
                            source={Bang2Q7}
                            style={styles.image}
                        >
                        </Image>
                </View>
                <View style={globalStyleSheet.db_b2_choice1Style}>
                    <TouchableOpacity>
                        <Image
                            source={Paruparu}
                            style={styles.image}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.db_b2_choice2Style}>
                    <TouchableOpacity>
                        <Image
                            source={Paroparo}
                            style={styles.image}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.db_b2_choice3Style}>
                    <TouchableOpacity>
                        <Image
                            source={Parapara}
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
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
})

export default withNavigation(Bang2Question7);