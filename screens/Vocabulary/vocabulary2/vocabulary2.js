import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler,Animated } from 'react-native';
import { withNavigation } from 'react-navigation';
import { globalStyleSheet } from '../../globalStyleSheet/globalStyleSheet'
import * as Animatable from 'react-native-animatable';
import BG2 from '../../images/BG.jpg';
import BG from '../../images/boy.png';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import Head from './vocabulary2Images/ulo.png';
import Eyes from './vocabulary2Images/mata.png';
import Hair from './vocabulary2Images/buhok.png';
import Nose from './vocabulary2Images/ilong.png';
import Mouth from './vocabulary2Images/bunganga.png';
import Ears from './vocabulary2Images/tainga.png';
import Neck from './vocabulary2Images/leeg.png';
import Shoulder from './vocabulary2Images/balikat.png';
import Chest from './vocabulary2Images/dibdib.png';
import Hand from './vocabulary2Images/kamay.png';
import Hips from './vocabulary2Images/baywang.png';
import Fingers from './vocabulary2Images/daliri.png';
import Legs from './vocabulary2Images/binti.png';
import Knees from './vocabulary2Images/tuhod.png';
import Toes from './vocabulary2Images/paa.png';
import SpeakerIcon from '../../images/Speaker_icon.png';

const partList=[Head,Eyes]

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class vocabulary2 extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.moveAnimation = new Animated.ValueXY({ x: 400, y: 100 })
        this.state = {
            BackgroundImage: BG,
            view1Height: '0%',
            view1Width:'0%',
            image1Height:'0%',
            image1Width:'0%',
            toValue:.5,
            View1Left:'300%',
            view1Top:'19%',
            show:'',
            view2Height:'0%',
            view2Width:'0%',
            image2Height:'0%',
            image2Width:'0%',
            View2Left:'300%',
            view2Top:'19%',
            showView1:false,
            showView2: false,
            view3Height: '0%',
            view3Width: '0%',
            image3Height: '0%',
            image3Width: '0%',
            View3Left: '300%',
            view3Top: '19%',
            boyTop:'20%',
            boyLeft:'40%',
            stillView:'',
            speakerTop:'1000%',
            clearBackground:'goVocabMenu',
        }
    }

    view1 =()=>{
        Animated.spring(this.moveAnimation, {
            toValue: { x: 200, y: 100 }
        }).start()
        Animated.spring(this.animatedValue, {
            toValue: 1,
        }).start()
        this.setState({
            boyTop: '20%',
            boyLeft: '20%',
            view2Top: '1000%',
            View2Left: '1000%',
            view3Top: '1000%',
            View3Left: '1000%',
            view2Height: '0%',
            view2Width: '0%',
            view3Height: '0%',
            view3Width: '0%',
            view1Height: '80%',
            view1Width: '50%',
            image1Height: '80%',
            image1Width: '70%',
            View1Left:'37%',
            view1Top: '25%',

        })
        
    }
    view2 = () => {
        Animated.spring(this.moveAnimation, {
            toValue: { x: 200, y: 100 }
        }).start()
        Animated.spring(this.animatedValue, {
            toValue: 1,
        }).start()
        this.setState({
            boyTop: '20%',
            boyLeft: '20%',
            view1Top: '1000%',
            View1Left: '1000%',
            view3Top: '1000%',
            View3Left: '1000%',
            view3Height: '0%',
            view3Width: '0%',
            view2Height:'80%',
            view2Width: '50%',
            image2Height:'60%',
            image2Width: '30%',
            view2Top: '10%',
            View2Left: '35%',

        })

    }
    view3 = () => {
        Animated.spring(this.moveAnimation, {
            toValue: { x: 200, y: 100 }
        }).start()
        Animated.spring(this.animatedValue, {
            toValue: 1,
        }).start()
        this.setState({
            boyTop: '20%',
            boyLeft: '20%',
            view1Height: '0%',
            view1Width: '0%',
            view1Top: '1000%',
            View1Left: '1000%',
            view2Top: '1000%',
            View2Left: '1000%',
            view2Height: '0%',
            view2Width: '0%',
            view3Height: '80%',
            view3Width: '50%',
            image3Height:400,
            image3Width: 200,
            view3Top: '13%',
            View3Left: '35%',
        })

    }

    componentWillMount(){
        this.animatedValue = new Animated.Value(1);
        Animated.spring(this.animatedValue,{
            toValue: 0.5
         }).start()
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    goBack = () => {
        const clear = this.state.clearBackground;
        if (clear == 'goVocabMenu'){
            this.props.navigation.navigate('vocabularyMenu')
        }
        if (clear == 'clear'){
            Animated.spring(this.animatedValue, {
                toValue: 1,
            }).start()
            if(this.state.stillView == 'View1'){
                this.setState({
                    view1Height: '80%',
                    view1Width:'50%',
                    View1Left: '37%',
                    view1Top: '25%',
                    clearBackground:'goVocabMenu',
                })
            }
            if (this.state.stillView == 'View2') {
                this.setState({
                    view2Height: '80%',
                    view2Width: '50%',
                    clearBackground: 'goVocabMenu',
                    view2Top: '10%',
                    View2Left: '35%',
                })
            }
            if (this.state.stillView == 'View3') {
                this.setState({
                    view3Height: '80%',
                    view3Width: '50%',
                    view3Top: '13%',
                    View3Left: '35%',
                    clearBackground: 'goVocabMenu',
                })
            }
            this.setState({
                BackgroundImage: BG, 
                boyTop: '20%',
                boyLeft: '20%',
                speakerTop:'1000%',
            })
            Animated.spring(this.moveAnimation, {
                toValue: { x: 200, y: 100 }
            }).start()
        }
    }

    gotoEyes = () =>{
        Animated.spring(this.moveAnimation, {
            toValue: { x: -1000, y: 100 }
        }).start()
        this.setState({
            BackgroundImage: Eyes,
            view1Top: '1000%',
            view2Top: '1000%',
            view3Top: '1000%',
            boyTop: '1000%',
            stillView:'View1',
            speakerTop:'20%',
            clearBackground: 'clear'
        })
    }

    gotoNose = () => {
        Animated.spring(this.moveAnimation, {
            toValue: { x: -1000, y: 100 }
        }).start()
        this.setState({
            BackgroundImage: Nose,
            view1Top: '1000%',
            view2Top: '1000%',
            view3Top: '1000%',
            stillView: 'View1',
            boyTop: '1000%',
            speakerTop: '20%',
            clearBackground: 'clear',
        })
    }

    gotoMouth = () => {
        Animated.spring(this.moveAnimation, {
            toValue: { x: -1000, y: 100 }
        }).start()
        this.setState({
            BackgroundImage: Mouth,
            view1Top: '1000%',
            view2Top: '1000%',
            view3Top: '1000%',
            stillView: 'View1',
            boyTop: '1000%',
            speakerTop:'20%',
            clearBackground: 'clear',
        })
    }

    gotoLeeg = () => {
        Animated.spring(this.moveAnimation, {
            toValue: { x: -1000, y: 100 }
        }).start()
        this.setState({
            BackgroundImage: Neck,
            view1Top: '1000%',
            view2Top: '1000%',
            view3Top: '1000%',
            stillView: 'View1',
            boyTop: '1000%',
            speakerTop: '20%',
            clearBackground: 'clear',
        })
    }

    gotoHair = () => {
        Animated.spring(this.moveAnimation, {
            toValue: { x: -1000, y: 100 }
        }).start()
        this.setState({
            BackgroundImage: Hair,
            view1Top: '1000%',
            view2Top: '1000%',
            view3Top: '1000%',
            stillView: 'View1',
            boyTop: '1000%',
            speakerTop: '20%',
            clearBackground: 'clear',
        })
    }
    gotoEars = () => {
        Animated.spring(this.moveAnimation, {
            toValue: { x: -1000, y: 100 }
        }).start()
        this.setState({
            BackgroundImage: Ears,
            view1Top: '1000%',
            view2Top: '1000%',
            view3Top: '1000%',
            stillView: 'View1',
            boyTop: '1000%',
            speakerTop: '20%',
            clearBackground: 'clear',
        })
    }
    gotoHead = () => {
        Animated.spring(this.moveAnimation, {
            toValue: { x: -1000, y: 100 }
        }).start()
        this.setState({
            BackgroundImage: partList[0],
            view1Top: '1000%',
            view2Top: '1000%',
            view3Top: '1000%',
            boyTop:'2%',
            stillView: 'View1',
            boyTop: '1000%',
            speakerTop: '20%',
            clearBackground:'clear',   
        })
    }
    gotoBalikat = () => {
        Animated.spring(this.moveAnimation, {
            toValue: { x: -1000, y: 100 }
        }).start()
        this.setState({
            BackgroundImage: Shoulder,
            view1Top: '1000%',
            view2Top: '1000%',
            view3Top: '1000%',
            stillView: 'View2',
            boyTop: '1000%',
            speakerTop: '20%',
            clearBackground: 'clear',
        })
    }
    gotoDibdib = () => {
        Animated.spring(this.moveAnimation, {
            toValue: { x: -1000, y: 100 }
        }).start()
        this.setState({
            BackgroundImage: Chest,
            view1Top: '1000%',
            view2Top: '1000%',
            view3Top: '1000%',
            stillView: 'View2',
            boyTop: '1000%',
            speakerTop: '20%',
             clearBackground:'clear',
        })
    }
     gotoKamay = () => {
         Animated.spring(this.moveAnimation, {
             toValue: { x: -1000, y: 100 }
         }).start()
         this.setState({
             BackgroundImage: Hand,
             view1Top: '1000%',
             view2Top: '1000%',
             view3Top: '1000%',
             stillView: 'View2',
             boyTop: '1000%',
             speakerTop: '20%',
              clearBackground:'clear',
         })
    }
    gotoBaywang = () => {
        Animated.spring(this.moveAnimation, {
            toValue: { x: -1000, y: 100 }
        }).start()
        this.setState({
            BackgroundImage: Hips,
            view1Top: '1000%',
            view2Top: '1000%',
            view3Top: '1000%',
            boyTop: '2%',
            stillView: 'View3',
            boyTop: '1000%',
            speakerTop: '20%',
            clearBackground: 'clear',
        })
    }
    gotoDaliri = () => {
        Animated.spring(this.moveAnimation, {
            toValue: { x: -1000, y: 100 }
        }).start()
        this.setState({
            BackgroundImage: Fingers,
            view1Top: '1000%',
            view2Top: '1000%',
            view3Top: '1000%',
            stillView: 'View2',
            boyTop: '1000%',
            speakerTop: '20%',
             clearBackground:'clear',
        })
    }
    gotoBinti = () => {
        Animated.spring(this.moveAnimation, {
            toValue: { x: -1000, y: 100 }
        }).start()
        this.setState({
            BackgroundImage: Legs,
            view1Top: '1000%',
            view2Top: '1000%',
            view3Top: '1000%',
            stillView: 'View3',
            boyTop: '1000%',
            speakerTop: '20%',
            clearBackground: 'clear',
        })
    }
    gotoTuhod = () => {
        Animated.spring(this.moveAnimation, {
            toValue: { x: -1000, y: 100 }
        }).start()
        this.setState({
            BackgroundImage: Knees,
            view1Top: '1000%',
            view2Top: '1000%',
            view3Top: '1000%',
            stillView: 'View3',
            boyTop: '1000%',
            speakerTop:'20%',
             clearBackground:'clear',
        })
    }
    gotoPaa = () => {
        Animated.spring(this.moveAnimation, {
            toValue: { x: -1000, y: 100 }
        }).start()
        this.setState({
            BackgroundImage: Toes,
            view1Top: '1000%',
            view2Top: '1000%',
            view3Top: '1000%',
            stillView: 'View3',
            boyTop: '1000%',
            speakerTop: '20%',
             clearBackground:'clear',
        })
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'stretch' }}
                source={BG}
            >
                <View style={{ position: 'absolute', top: '0%', width: '100%', height: '100%' }}>
                    <Image source={BG} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}></Image>
                </View>
                <View style={{ position: 'absolute',width: '100%', height: '100%' }}>
                    <Image source={this.state.BackgroundImage} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}></Image>
                </View>
                    <View style={{
                        position: 'absolute',
                        width: wp('17%'),
                        height: hp('77%'),
                        justifyCotent: 'center',
                        alignItems:'center',
                        top:this.state.boyTop,
                        left: this.state.boyLeft,
                        }}>
                    <TouchableOpacity onPress={this.view1} style={{
                        position: 'relative',
                        top:'-3%' 
                       }}>
                           <Image source={require('./vocabulary2Images/TO_ulo.png')}
                            style={{
                            height: hp('18%'),
                            width: wp('7%')
                           }}/>
                        </TouchableOpacity>
                    <TouchableOpacity onPress={this.view2} style={{
                        top:'20%',
                        position: 'absolute',
                        left:'3%',
                    }}>
                        <Image source={require('./vocabulary2Images/TO_dibdib.png')}
                            style={{
                                height: hp('29%'),
                                width: wp('15%')
                            }}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.view3} style={{
                            position: 'absolute',
                            top: '39%',
                            left: '20.25%'
                    }}>
                        <Image source={require('./vocabulary2Images/TO_paa.png')} 
                            style={{
                                height: hp('42.70%'),
                                width: wp('10.40%')
                            }}/>
                    </TouchableOpacity>
                    </View>
                <Animated.View 
                style={{
                    position: 'absolute',
                    width: this.state.view1Width,
                    height: this.state.view1Height,
                    left: this.state.View1Left,
                    top:this.state.view1Top,
                    justifyCotent:'center',
                    alignItems:'center',
                }}> 
                    <View style={{ position: 'absolute', width: '23.80%', height: '40%', top: '25.88%', left: '37.90%' }}>
                        <Image source={require('./vocabulary2Images/ulo5.png')}
                            style={{
                                resizeMode: 'contain',
                                height: '100%',
                                width: '100%'
                            }}
                        />
                    </View>
                   
                    <View style={{ position: 'absolute', width: '23%', height: '30%', top: '18.91%', left: '38%' }}>
                        <TouchableOpacity onPress={this.gotoEyes}>
                            <Image source={require('./vocabulary2Images/ulo2.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '7%', height: '12%', top: '27.47%', left: '59%' }}>
                        <TouchableOpacity onPress={this.gotoHair}>
                            <Image source={require('./vocabulary2Images/ulo3.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '7%', height: '12%',top: '27.47%', left: '33.20%'}}>
                        <TouchableOpacity onPress={this.gotoHair}>
                            <Image source={require('./vocabulary2Images/ulo4.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ position: 'absolute', width: '35%', height: '27%', top: '5%' }}>
                        <TouchableOpacity onPress={this.gotoHead}>
                            <Image source={require('./vocabulary2Images/ulo1.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '9%', height: '13%', top: '34%', left: '58.65%' }}>
                        <TouchableOpacity onPress={this.gotoEars}>
                            <Image source={require('./vocabulary2Images/ulo7.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '9%', height: '13%', top: '34%', left: '31.65%' }}>
                        <TouchableOpacity onPress={this.gotoEars}>
                            <Image source={require('./vocabulary2Images/ulo8.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={{ position: 'absolute', width: '9%', height: '13%', top: '36%', left: '45%' }}>
                        <TouchableOpacity onPress={this.gotoNose}>
                            <Image source={require('./vocabulary2Images/ulo9.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '12%', height: '9%', top: '43.50%', left: '43.50%'}}>
                        <TouchableOpacity onPress={this.gotoMouth}>
                            <Image source={require('./vocabulary2Images/ulo10.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '15%', height: '7%', top: '50%', left: '42%',}}>
                        <TouchableOpacity onPress={this.gotoLeeg}>
                            <Image source={require('./vocabulary2Images/ulo11.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>   
                </Animated.View>
                <View style={globalStyleSheet.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={Back_icon}
                            style={globalStyleSheet.back}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <Animated.View
                    style={{
                        position: 'absolute',
                        width: this.state.view2Width,
                        height: this.state.view2Height,
                        left: this.state.View2Left,
                        top: this.state.view2Top,
                        justifyCotent: 'center',
                    }}>
                    <View style={{ position: 'absolute', width: '15%', height: '16.50%', top: '29%', left: '34.20%',}}>
                        <TouchableOpacity onPress={this.gotoBalikat}>
                            <Image source={require('./vocabulary2Images/dibdib3.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '15%', height: '16.50%', top: '29%', left: '65.40%',}}>
                        <TouchableOpacity onPress={this.gotoBalikat}>
                            <Image source={require('./vocabulary2Images/dibdib2.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '27%', height: '50%', top: '28%', left: '43.50%',}}>
                            <Image source={require('./vocabulary2Images/dibdib4.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                    </View>
                    <View style={{ position: 'absolute', width: '30%', height: '50%', top: '10%', left: '42%',}}>
                        <TouchableOpacity onPress={this.gotoDibdib}>
                            <Image source={require('./vocabulary2Images/dibdib1.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '15%', height: '40%', top: '37.47%', left: '29.95%',}}>
                        <TouchableOpacity onPress={this.gotoKamay}>
                            <Image source={require('./vocabulary2Images/dibdib5.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '15%', height: '35%', top: '41.47%', left: '68.06%',}}>
                        <TouchableOpacity onPress={this.gotoKamay}>
                            <Image source={require('./vocabulary2Images/dibdib6.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute',width: '8%', height: '10%', top: '75.30%', left: '73.92%', }}>
                        <TouchableOpacity onPress={this.gotoDaliri}>
                            <Image source={require('./vocabulary2Images/dibdib7.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', width: '8%', height: '10%', top: '77d%', left: '29.70%', }}>
                        <TouchableOpacity onPress={this.gotoDaliri}>
                            <Image source={require('./vocabulary2Images/dibdib8.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </Animated.View>
                <View style={{
                    position: 'absolute',
                    left: '80%',
                    top:this.state.speakerTop,
                    width: '6%',
                    height: '10%',
                }}>
                    <TouchableOpacity>
                        <Image
                            source={SpeakerIcon}
                            style={globalStyleSheet.A_Speaker_2}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <Animated.View
                    style={{
                        position: 'absolute',
                        width: this.state.view3Width,
                        height: this.state.view3Height,
                        left: this.state.View3Left,
                        top: this.state.view3Top,
                        justifyCotent: 'center',
                        alignItems:'center',
                    }}>
                    <View style={{ position: 'absolute', width: '30%', height: '16%', top: '5%', left: '29.70%', }}>
                        <TouchableOpacity onPress={this.gotoBaywang}>
                            <Image source={require('./vocabulary2Images/paa1.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                     <View style={{ position: 'absolute',width: '35%', height: '25%', top: '19.45%', left: '27.43%', }}>
                        <TouchableOpacity onPress={this.gotoBinti}>
                            <Image source={require('./vocabulary2Images/paa2.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                      <View style={{position: 'absolute',width: '32%', height: '21%', top: '42.60%', left: '28.90%', }}>
                        <TouchableOpacity onPress={this.gotoTuhod}>
                            <Image source={require('./vocabulary2Images/paa3.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{position: 'absolute', width: '30%', height: '21%', top: '62%', left: '30.33%', }}>
                            <Image source={require('./vocabulary2Images/paa5.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                    </View>
                    <View style={{position: 'absolute', width: '37.50%', height: '16%', top: '80%', left: '26.40%', }}>
                        <TouchableOpacity onPress={this.gotoTuhod}>
                            <Image source={require('./vocabulary2Images/paa6.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </Animated.View>       
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


export default withNavigation(vocabulary2);