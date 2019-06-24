import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {globalStyleSheet} from '../../../globalStyleSheet/globalStyleSheet';
import GameBG from '../../gameImages/GameBG.png';
import Home_icon from '../../../images/Home_icon.png';
import GnareIcon from '../../gameImages/GnareMain.png';
import Gufadyan from '../../gameImages/gufadyan.png';
import Bang1BoardQ1 from '../../gameImages/DS_bang1Q1.png';
import DSB1Lwe from '../../gameImages/lwe.png';
import DSB1Fat from '../../gameImages/fat.png';
import DSB1Lime from '../../gameImages/lime.png';
import DSB1Satu from '../../gameImages/satu.png';
import TransparentIwe from '../../gameImages/tranparentIwe.png';
import TransparentFat from '../../gameImages/tranparentFat.png';
import TransparentLime from '../../gameImages/tranparentLime.png';
import TransparentSatu from '../../gameImages/tranparentSatu.png';
import EmptyChoices from '../../gameImages/emptyChoices.png';
import C1 from '../../gameImages/Q1_Correct.png';
import * as Animatable from 'react-native-animatable';
import Q1 from './DSBang1Question1';
import Q2 from './DSBang1Question2';

class Bang extends Component {
    static navigationOptions = {
        header: null,
    }

    onLoad = async () => {
        const quesion = await AsyncStorage.getItem(Key);
        this.setState({ quesion });
        if (quesion == 'Level1') {
            alert('asdasdsa');
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            question:Q1,
        }
    }

    render() {
        return (
                <this.state.question/>
        )
           
    }
}




export default withNavigation(Bang);