import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import number4 from '../numberBackground/number4.png';
import Speaker_icon from '../numbersImage/Speaker_icon.png';
import Letters_Info_Icon from '../../images/Letters_Info_Icon.png';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import PencilIcon from '../../images/Pencil_icon.png';
import NextIcon from '../../images/Next_Icon.png';
import PrevIcon from '../../images/Prev_Icon.png';
import * as Animatable from 'react-native-animatable';

class Page4 extends Component {
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
        this.number4 = new Sound('number_4.mp3', Sound.MAIN_BUNDLE, (error) => {
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
        this.number4.pause();
    }

    playAsound_2 = () => {
        this.number4.play();
    }
    gotoSentence4 = () => {
        this.props.navigation.replace('sentence4');
        this.number4.pause();
    }

    goBack = () => {
        this.props.navigation.replace('numbers');
        this.number4.pause();
    }

    gotoMainMenu = () => {
        this.props.navigation.replace('mainMenu');
        this.number4.pause();
    }

    gotoTracingB = () => {
        this.props.navigation.replace('tracingB');
        this.number4.pause();
    }

    gotoNextPage = () => {
        this.props.navigation.replace('page5');
        this.number4.pause();
    }

    goPrev = () => {
        this.props.navigation.replace('page3', { prevTransition: 'slideInRight', });
        this.number4.pause();
    }
    

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('prevTransition', 'NO-ID');
        this.state.prevTrans = itemId;
        return (
            <Animatable.View animation={this.state.Transition} style={globalStyleSheet.image2}>
            <ImageBackground style={globalStyleSheet.image}
                source={number4}
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
                    <TouchableOpacity onPress={this.gotoSentence4}>
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

export default withNavigation(Page4);