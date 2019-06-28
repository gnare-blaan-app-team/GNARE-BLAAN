import React, { Component } from 'react';
import { AsyncStorage, View, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { globalStyleSheet } from '../../../globalStyleSheet/globalStyleSheet';
import GameBG from '../../gameImages/GameBG.png';
import Home_icon from '../../../images/Home_icon.png';
import GnareIcon from '../../gameImages/GnareMain.png';
import Gufadyan from '../../gameImages/gufadyan.png';
import Bang1BoardQ8 from '../../gameImages/DS_bang1Q8.png';
import DSB1Sfalo from '../../gameImages/sfalo.png';
import DSB1Walu from '../../gameImages/walu.png';
import DSB1Nam from '../../gameImages/nam.png';
import DSB1Syem from '../../gameImages/syem.png';
import TransparentSfalo from '../../gameImages/tranparentSfalo.png';
import TransparentWalu from '../../gameImages/correctWalu.png';
import TransparentNam from '../../gameImages/tranparentNam.png';
import TransparentSyem from '../../gameImages/tranparentSyem.png';
import EmptyChoices from '../../gameImages/emptyChoices.png';
import C8 from '../../gameImages/bang1A8.png';
import * as Animatable from 'react-native-animatable';
import stars from '../../gameImages/12Icon_Star.png';
import emptyStars from '../../gameImages/13Icon_EmptyStar.png';
import FadlugIcon from '../../gameImages/fadlug_icon.png';
import LamwaIcon from '../../gameImages/lamwa_icon.png';
import GufadyanIcon from '../../gameImages/gufadyan_icon.png';
import { starStyle } from '../star';


const answer1List = [TransparentNam, TransparentSyem, TransparentWalu, TransparentSfalo];

const choices = [DSB1Nam, DSB1Syem, DSB1Walu, DSB1Sfalo];

const Key = '@MyApp:key';
const Star1 = '@MyApp:Star1';
const Star2 = '@MyApp:Star2';
const Star3 = '@MyApp:Star3';

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
            blackboard: Bang1BoardQ8,
            blackboardHeight: '50%',
            blackboardWidth: '60%',
            star1Top: '1%',
            star2Top: '1%',
            star3Top: '1%',
            goMinus: '',
            emptystar1Top: '1000%',
            emptystar2Top: '1000%',
            emptystar3Top: '1000%',
            fadlugTop: '1000%',
            gufadyanTop: '1000%',
            lamwaTop: '1000%',
            smallgofadyanTop: '85%',
            allstarTop: '1%',
        }
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu')
    }

    MinusStar = async (permit) => {
        const star1 = await AsyncStorage.getItem(Star1);
        const star2 = await AsyncStorage.getItem(Star2);
        const star3 = await AsyncStorage.getItem(Star3);
        if (permit == 'allowed') {
            if (star1 == null) {
                this.setState({
                    star3Top: '1000%',
                    emptystar3Top: '1%',
                })
                await AsyncStorage.setItem(Star1, 'wrong');
            } else {
                if (star2 == null) {
                    this.setState({
                        star2Top: '1000%',
                        emptystar2Top: '1%',
                    })
                    await AsyncStorage.setItem(Star2, 'wrong');
                } else {
                    if (star3 == null) {
                        setTimeout(() => {
                            this.setState({
                                emptystar1Top: '1%',
                                fadlugTop: '19%',
                                gufadyanTop: '19%',
                                lamwaTop: '56%',
                                choices1Top: '1000%',
                                choices2Top: '1000%',
                                choices3Top: '1000%',
                                choices4Top: '1000%',
                                emptyChoice: '1000%',
                                blackboardHeight: '0%',
                                blackboardWidth: '0%',
                                smallgofadyanTop: '1000%',
                                allstarTop: '1000%',
                            })
                        }, 1000)
                        await AsyncStorage.setItem(Star3, 'wrong');

                    }
                }
            }
        }

        if (star1 == 'wrong') {
            this.setState({
                star3Top: '1000%',
                emptystar3Top: '1%',
            })
        }
        if (star2 == 'wrong') {
            this.setState({
                star2Top: '1000%',
                emptystar2Top: '1%',
            })
        }
        if (star3 == 'wrong') {
            setTimeout(() => {
                this.setState({
                    emptystar1Top: '1%',
                    fadlugTop: '19%',
                    gufadyanTop: '19%',
                    lamwaTop: '56%',
                    choices1Top: '1000%',
                    choices2Top: '1000%',
                    choices3Top: '1000%',
                    choices4Top: '1000%',
                    emptyChoice: '1000%',
                    blackboardHeight: '0%',
                    blackboardWidth: '0%',
                    smallgofadyanTop: '1000%',
                    allstarTop: '1000%',
                })
            }, 1000)
        }
    }

    componentWillMount() {
        this.MinusStar();
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
                    blackboard: C8,
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
                    this.props.navigation.push('bang', { change: 'change' });
                }, 2000)
            }, 1000)
        } else {
            const open = 'allowed';
            this.wrong();
            this.MinusStar(open);
        }
        if (number == 0) {
            this.setState({
                choices1Top: '1000%',
                emptyChoice: '18%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                    choices1Top: '68%',
                    emptyChoice: '1000%',
                });
            }, 1000)
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
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                    choices2Top: '68%',
                    emptyChoice: '1000%',
                });
            }, 1000)
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
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                    choices4Top: '68%',
                    emptyChoice: '1000%',
                });
            }, 1000)
        } else {
            this.setState({
                choices4Top: '68%',
            })
        }
    }

    onSave = async () => {
        await AsyncStorage.removeItem(Star1);
        await AsyncStorage.removeItem(Star2);
        await AsyncStorage.removeItem(Star3);
    }

    retry = () => {
        this.onSave();
        setTimeout(() => {
            this.setState({
                choices1Top: '68%',
                choices2Top: '68%',
                choices3Top: '68%',
                choices4Top: '68%',
                allstarTop: '1%',
                smallgofadyanTop: '85%',
                fadlugTop: '1000%',
                gufadyanTop: '1000%',
                lamwaTop: '1000%',
                blackboardHeight: '50%',
                blackboardWidth: '60%',
                blackboard: Bang1BoardQ8,
                star1Top: '1%',
                star2Top: '1%',
                star3Top: '1%',
                emptystar1Top: '1000%',
                emptystar2Top: '1000%',
                emptystar3Top: '1000%',
            })
        }, 1000)
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
                        <Image source={DSB1Nam} style={styles.image}></Image>
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
                        this.answer(1, 'wrong');
                    }}>
                        <Image source={DSB1Syem} style={styles.image}></Image>
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
                        this.answer(2, 'correct');
                    }}>
                        <Image source={DSB1Walu} style={styles.image}></Image>
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
                        <Image source={DSB1Sfalo} style={styles.image}></Image>
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
                <View style={{
                    width: '10%',
                    height: '10%',
                    position: 'absolute',
                    top: this.state.allstarTop,
                    left: '20%'
                }}>
                    <Image source={stars} style={[starStyle.Star1, { top: this.state.star1Top }]}></Image>
                    <Image source={stars} style={[starStyle.Star2, { top: this.state.star2Top }]}></Image>
                    <Image source={stars} style={[starStyle.Star3, { top: this.state.star3Top }]}></Image>
                    <Image source={emptyStars} style={[starStyle.Star1, { top: this.state.emptystar1Top }]}></Image>
                    <Image source={emptyStars} style={[starStyle.Star2, { top: this.state.emptystar2Top }]}></Image>
                    <Image source={emptyStars} style={[starStyle.Star3, { top: this.state.emptystar3Top }]}></Image>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.fadlugTop,
                    left: '18%',
                    height: '31%',
                    width: '30%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.retry();
                    }}>
                        <Image source={FadlugIcon} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.gufadyanTop,
                    left: '55%',
                    height: '31%',
                    width: '30%',
                }}>
                    <TouchableOpacity>
                        <Image source={GufadyanIcon} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.lamwaTop,
                    left: '36%',
                    height: '33%',
                    width: '32%',
                }}>
                    <TouchableOpacity>
                        <Image source={LamwaIcon} style={styles.image}></Image>
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
    answerContainer: {
        position: 'absolute',
        left: '47%',
        width: '10%',
        height: '10%',
    }
})


export default withNavigation(DSBang1Question3);