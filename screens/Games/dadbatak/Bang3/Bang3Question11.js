import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {globalStyleSheet} from '../../../globalStyleSheet/globalStyleSheet';
import GnareIcon from '../../gameImages/GnareMain.png';
import GameBG from '../../gameImages/GameBG.png';
import Home_icon from '../../../images/Home_icon.png';
import Bang3Q11 from '../../gameImages/bang3Images/db_bang3Q11.png';
import Cooker from '../../gameImages/bang3Images/cooker.png';
import Cook from '../../gameImages/bang3Images/cook.png';
import Coke from '../../gameImages/bang3Images/coke.png';

class Bang3Question11 extends Component {
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
                        source={Bang3Q11}
                        style={styles.image}
                    >
                    </Image>
                </View>
                <View style={globalStyleSheet.db_b3_choice1Style}>
                    <TouchableOpacity>
                        <Image
                            source={Cooker}
                            style={styles.image}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.db_b3_choice2Style}>
                    <TouchableOpacity>
                        <Image
                            source={Cook}
                            style={styles.image}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.db_b3_choice3Style}>
                    <TouchableOpacity>
                        <Image
                            source={Coke}
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

export default withNavigation(Bang3Question11);