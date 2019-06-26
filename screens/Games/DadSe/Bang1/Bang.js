import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ImageBackground, AsyncStorage} from 'react-native';
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
import Q3 from './DSBang1Question3';
import Q4 from './DSBang1Question4';
import Q5 from './DSBang1Question5';
import Q6 from './DSBang1Question6';
import Q7 from './DSBang1Question7';
import Q8 from './DSBang1Question8';
import Q9 from './DSBang1Question9';
import Q10 from './DSBang1Question10';
import Ending from './Ending';
import Background from './InitiatingPage';

const Key = '@MyApp:key';
const prevKey = '@MyApp:prevkey';

const RandomQuestion = [Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10];

const alreadyShowed = [];

class Bang extends Component {
    static navigationOptions = {
        header: null,
    }

    onSave = async () => {
        const storedValue = await AsyncStorage.getItem(Key);
        await AsyncStorage.setItem(prevKey, storedValue); 
    }

    onLoad = async () => {
        const storedValue = await AsyncStorage.getItem(Key);
        const preValue = await AsyncStorage.getItem(prevKey);
        this.setState({
            questionStage: RandomQuestion[storedValue],
        })
        if(alreadyShowed.length == 5){
            this.setState({
                questionStage:Ending,
            })
        }
    }
        

    componentWillMount(){
        this.onLoad();

    }

    constructor(props) {
        super(props);
        this.state = {
            questionStage: Background,
            index: 0,
            alreadyAnswered:0,
        }
    }

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('index', 'NO-ID');
        this.state.index = itemId;
        return (
                <this.state.questionStage/>
        )
           
    }
}




export default withNavigation(Bang);