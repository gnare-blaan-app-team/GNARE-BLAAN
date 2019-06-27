import React, { Component } from 'react';
import { AsyncStorage, View, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { globalStyleSheet } from '../../../globalStyleSheet/globalStyleSheet';
import GameBG from '../../gameImages/GameBG.png';
import Home_icon from '../../../images/Home_icon.png';
import GnareIcon from '../../gameImages/GnareMain.png';
import Gufadyan from '../../gameImages/gufadyan.png';
import Bang1BoardQ6 from '../../gameImages/DS_bang1Q6.png';
import DSB1Fitu from '../../gameImages/fitu.png';
import DSB1Nam from '../../gameImages/nam.png';
import DSB1Tlu from '../../gameImages/tlu.png';
import DSB1Syem from '../../gameImages/syem.png';
import TransparentFitu from '../../gameImages/tranparentFitu.png';
import TransparentNam from '../../gameImages/correctNam.png';
import TransparentTlu from '../../gameImages/tranparentTlu.png';
import TransparentSyem from '../../gameImages/tranparentSyem.png';
import EmptyChoices from '../../gameImages/emptyChoices.png';
import C6 from '../../gameImages/bang1A6.png';
import * as Animatable from 'react-native-animatable';


const answer1List = [TransparentFitu, TransparentNam, TransparentTlu, TransparentSyem];

const choices = [DSB1Fitu, DSB1Nam, DSB1Tlu, DSB1Syem];

const Key = '@MyApp:key';

class DSBang1Question3 extends Component {
    handleViewRef = ref => this.view = ref;
    wrong = () => this.view.tada();
    correct = () => this.view.pulse();

    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            answerTop: '1000%',
            answerImage: answer1List[0],
            choices1Top: '68%',
            choices2Top: '68%',
            choices3Top: '68%',
            choices4Top: '68%',
            emptyChoice: '1000%',
            blackboard: Bang1BoardQ6,
            blackboardHeight: '50%',
            blackboardWidth: '60%',
        }
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu')
    }

    onSave = async () => {
        const next = Math.floor(Math.random() * 10);
        const convert = JSON.stringify(next);
        await AsyncStorage.setItem(Key, convert);
    }

    answer(number, status) {
        this.setState({
            answerTop: '49%',
            answerImage: answer1List[number]
        });
        if (status == 'correct') {
            this.correct();
            setTimeout(() => {
                this.setState({
                    blackboard: C6,
                    choices1Top: '1000%',
                    choices2Top: '1000%',
                    choices3Top: '1000%',
                    choices4Top: '1000%',
                    emptyChoice: '1000%',
                    answerTop: '1000%',
                    blackboardHeight: '60%',
                    blackboardWidth: '60%',
                })
                setTimeout(() => {
                    this.props.navigation.push('bang');
                }, 2000)
            }, 1000)
        } else {
            this.wrong();
        }
        if (number == 0) {
            this.setState({
                choices1Top: '1000%',
                emptyChoice: '18%',
            })
        } else {
            this.setState({
                choices1Top: '68%',
            })
        }
        if (number == 1) {
            this.setState({
                choices2Top: '1000%',
                emptyChoice: '35%',
            })
        } else {
            this.setState({
                choices2Top: '68%',
            })
        }
        if (number == 2) {
            this.setState({
                choices3Top: '1000%',
                emptyChoice: '53%',
            })
        } else {
            this.setState({
                choices3Top: '68%',
            })
        }
        if (number == 3) {
            this.setState({
                choices4Top: '1000%',
                emptyChoice: '70%',
            })
        } else {
            this.setState({
                choices4Top: '68%',
            })
        }
    }

    render() {
        return (
            <ImageBackground
                source={GameBG}
                style={globalStyleSheet.image}
            >
                <View style={globalStyleSheet.gnareIconStyle}>
                    <Image source={GnareIcon} style={styles.image}></Image>
                </View>
                <View style={globalStyleSheet.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image source={Home_icon} style={globalStyleSheet.home}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: '11.5%',
                    left: '23%',
                    height: this.state.blackboardHeight,
                    width: this.state.blackboardWidth,
                }}>
                    <Image source={this.state.blackboard} style={styles.image}></Image>
                </View>

                <View style={{
                    position: 'absolute',
                    top: this.state.choices1Top,
                    left: '18%',
                    height: hp('10%'),
                    width: wp('14%'),
                }}>
                    <TouchableOpacity onPress={() => {
                        this.answer(0, 'wrong');
                    }}>
                        <Image source={DSB1Fitu} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.choices2Top,
                    left: '35%',
                    height: hp('10%'),
                    width: wp('14%'),
                }}>
                    <TouchableOpacity onPress={() => {
                        this.answer(1, 'correct');
                    }}>
                        <Image source={DSB1Nam} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.choices3Top,
                    left: '53%',
                    height: hp('10%'),
                    width: wp('14%'),
                }}>
                    <TouchableOpacity onPress={() => {
                        this.answer(2, 'wrong');
                    }}>
                        <Image source={DSB1Tlu} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.choices4Top,
                    left: '70%',
                    height: hp('10%'),
                    width: wp('14%'),
                }}>
                    <TouchableOpacity onPress={() => {
                        this.answer(3, 'wrong');
                    }}>
                        <Image source={DSB1Syem} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.gufadyan}>
                    <Image source={Gufadyan} style={styles.image}></Image>
                </View>
                <Animatable.View ref={this.handleViewRef} style={[styles.answerContainer, { top: this.state.answerTop }]}>
                    <Image source={this.state.answerImage} style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain'
                    }}></Image>
                </Animatable.View>
                <View style={{
                    top: '68%',
                    left: this.state.emptyChoice,
                    position: 'absolute',
                    height: hp('10%'),
                    width: wp('14%'),
                }}>
                    <Image source={EmptyChoices} style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain'
                    }}></Image>
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
    answerContainer: {
        position: 'absolute',
        left: '47%',
        width: '10%',
        height: '10%',
    }
})


export default withNavigation(DSBang1Question3);