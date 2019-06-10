import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import number3 from '../numberBackground/number3.png';
import Speaker_icon from '../numbersImage/Speaker_icon.png';
import Letters_Info_Icon from '../../images/Letters_Info_Icon.png';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import PencilIcon from '../../images/Pencil_icon.png';
import NextIcon from '../../images/Next_Icon.png';
import PrevIcon from '../../images/Prev_Icon.png';
import * as Animatable from 'react-native-animatable';

class Page3 extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            Transition: "slideInLeft",
            prevTrans: '',
        }
    }

    componentDidMount() {
        this.forceUpdate();
        var show = this.state.prevTrans;
        if (show == 'slideInRight') {
            this.setState({ Transition: 'slideInRight' })
        }
        this.number3 = new Sound('number_3.mp3', Sound.MAIN_BUNDLE, (error) => {
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
        this.number3.pause();
    }

    playAsound_2 = () => {
        this.number3.play();
    }
    gotoSentence3 = () => {
        this.props.navigation.replace('sentence3');
        this.number3.pause();
    }

    goBack = () => {
        this.props.navigation.replace('numbers');
        this.number3.pause();
    }

    gotoMainMenu = () => {
        this.props.navigation.replace('mainMenu');
        this.number3.pause();
    }

    gotoTracingB = () => {
        this.props.navigation.replace('tracingB');
        this.number3.pause();
    }

    gotoNextPage = () => {
        this.props.navigation.replace('page4');
        this.number3.pause();
    }

    goPrev = () => {
        this.props.navigation.replace('page2', { prevTransition: 'slideInRight', });
        this.number3.pause();
    }

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('prevTransition', 'NO-ID');
        this.state.prevTrans = itemId;
        return (
            <Animatable.View animation={this.state.Transition} style={globalStyleSheet.image2}>
            <ImageBackground style={globalStyleSheet.image}
                source={number3}
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
                    <TouchableOpacity onPress={this.gotoSentence3}>
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
                    <TouchableOpacity onPress={this.gotoTracingB}>
                        <Image
                            source={PencilIcon}
                            style={globalStyleSheet.pencil}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.prevContainer}>
                    <TouchableOpacity onPress={this.goPrev}>
                        <Image
                            source={PrevIcon}
                            style={globalStyleSheet.prev}
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
            </ImageBackground>
            </Animatable.View>
        )
    }
}

export default withNavigation(Page3);