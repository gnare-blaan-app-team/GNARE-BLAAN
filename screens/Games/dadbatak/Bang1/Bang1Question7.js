import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {globalStyleSheet} from '../../../globalStyleSheet/globalStyleSheet';
import GnareIcon from '../../gameImages/GnareMain.png';
import GameBG from '../../gameImages/GameBG.png';
import Q7 from '../../gameImages/DB_Bang1Images/bang1Q7.png';
import W from '../../gameImages/DB_Bang1Images/w.png';
import H from '../../gameImages/DB_Bang1Images/h.png';
import N from '../../gameImages/DB_Bang1Images/n.png';
import L from '../../gameImages/DB_Bang1Images/l.png';
import Home_icon from '../../../images/Home_icon.png';

class Bang1Question7 extends Component {
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
                <View style={globalStyleSheet.questionStyle}>
                    <Image
                        source={Q7}
                        style={styles.image}
                    >
                    </Image>
                </View>
                <View style={globalStyleSheet.db_b1_choice1Style}>
                    <TouchableOpacity>
                        <Image
                            source={W}
                            style={styles.image}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.db_b1_choice2Style}>
                    <TouchableOpacity>
                        <Image
                            source={H}
                            style={styles.image}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.db_b1_choice3Style}>
                    <TouchableOpacity>
                        <Image
                            source={N}
                            style={styles.image}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.db_b1_choice4Style}>
                    <TouchableOpacity>
                        <Image
                            source={L}
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

export default withNavigation(Bang1Question7);