import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {globalStyleSheet} from '../../../globalStyleSheet/globalStyleSheet';
import GnareIcon from '../../gameImages/GnareMain.png';
import GameBG from '../../gameImages/GameBG.png';
import Home_icon from '../../../images/Home_icon.png';
import Bang2Q5 from '../../gameImages/DB_Bang2Images/db_bang2Q5.png';
import Lamok from '../../gameImages/DB_Bang2Images/lamok.png';
import Lamik from '../../gameImages/DB_Bang2Images/lamik.png';
import Lamuk from '../../gameImages/DB_Bang2Images/lamuk.png';
import Gufadyan from '../../gameImages/gufadyan.png';
import Coinbank from '../../gameImages/Coinbank.png';

class Bang2Question5 extends Component {
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
                            source={Bang2Q5}
                            style={styles.image}
                        >
                        </Image>
                </View>
                <View style={globalStyleSheet.db_b2_choice1Style}>
                    <TouchableOpacity>
                        <Image
                            source={Lamok}
                            style={styles.image}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.db_b2_choice2Style}>
                    <TouchableOpacity>
                        <Image
                            source={Lamuk}
                            style={styles.image}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.db_b2_choice3Style}>
                    <TouchableOpacity>
                        <Image
                            source={Lamik}
                            style={styles.image}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.gufadyan}>
                    <TouchableOpacity>
                        <Image source={Gufadyan} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.coinbankBang}>
                    <Image source={Coinbank} style={styles.image}></Image>
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

export default withNavigation(Bang2Question5);