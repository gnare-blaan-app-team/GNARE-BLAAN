import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import number1 from '../numberBackground/number1.png';
import Speaker_icon from '../numbersImage/Speaker_icon.png';
import Letters_Info_Icon from '../../images/Letters_Info_Icon.png';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import PencilIcon from '../../images/Pencil_icon.png';
import NextIcon from '../../images/Next_Icon.png';
import GoBackIcon from '../../images/Back_icon.png';
import * as Animatable from 'react-native-animatable';


class Page1 extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props){
        super(props);
        this.state={
            Transition: "slideInLeft",
            prevTrans:'',
        }
    }

    componentDidMount() {
        this.forceUpdate();
        var show = this.state.prevTrans;
        if (show == 'slideInRight'){
            this.setState({ Transition:'slideInRight'})
        }
        this.play_number1 = new Sound('number_1.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        });
        this.mute = new Sound('mute.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        });
    }


    handleBackPress = () => {
        this.play_number1.pause();
    }

    playAsound_2 = () => {
        this.play_number1.play();
    }

    gotoSentence1 = () => {
        this.props.navigation.replace('sentence1');
        this.play_number1.pause();
    }

    goBack = () => {
        this.props.navigation.replace('numbers', { prevTransition: 'slideInRight', });
        this.play_number1.pause();
    }

    gotoMainMenu = () => {
        this.props.navigation.replace('mainMenu');
        this.play_number1.pause();
    }

    gotoTracingB = () => {
        this.props.navigation.replace('tracingB');
        this.play_number1.pause();
    }

    gotoNextPage = () => {
        this.props.navigation.replace('page2');
        this.play_number1.pause();
    }


    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('prevTransition', 'NO-ID');
        this.state.prevTrans = itemId;
        return (
        <Animatable.View animation={this.state.Transition} style={globalStyleSheet.image2}>
            <ImageBackground style={globalStyleSheet.image}
                source={number1}
            >
                
                <View style={globalStyleSheet.A_Speaker_Container_2}>
                    <TouchableOpacity onPress={this.playAsound_2}>
                        <Image
                            source={Speaker_icon}
                            style={globalStyleSheet.A_Speaker_2}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.sentenceIconContainer}>
                    <TouchableOpacity onPress={this.gotoSentence1}>
                        <Image
                            source={Letters_Info_Icon}
                            style={globalStyleSheet.sentenceIcon}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={Back_icon}
                            style={globalStyleSheet.back}
                        ></Image>
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
                <View style={globalStyleSheet.pencilContainer}>
                    <TouchableOpacity onPress={this.gotoTracingA}>
                        <Image
                        source={PencilIcon}
                            style={globalStyleSheet.pencil}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={globalStyleSheet.nextContainer}>
                    <TouchableOpacity onPress={this.gotoNextPage}>
                        <Image
                            source={NextIcon}
                            style={globalStyleSheet.next}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={globalStyleSheet.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={GoBackIcon}
                            style={globalStyleSheet.back}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.pencilContainer}>
                    <TouchableOpacity onPress={this.gotoTracingB}>
                        <Image
                            source={PencilIcon}
                            style={globalStyleSheet.pencil}
                        ></Image>
                    </TouchableOpacity>
                </View>
                
            </ImageBackground>
            </Animatable.View>
        )
    }
}

export default withNavigation(Page1);