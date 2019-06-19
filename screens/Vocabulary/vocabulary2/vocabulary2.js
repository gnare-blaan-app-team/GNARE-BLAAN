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
            view1Height: hp('0%'),
            view1Width: wp('0%'),
            image1Height: hp('0%'),
            image1Width: wp('0%'),
            toValue:.5,
            View1Left:'300%',
            view1Top:'19%',
            show:'',
            view2Height: hp('0%'),
            view2Width: wp('0%'),
            image2Height: hp('0%'),
            image2Width: wp('0%'),
            View2Left:'300%',
            view2Top:'19%',
            showView1:false,
            showView2: false,
            view3Height: hp('0%'),
            view3Width: wp('0%'),
            image3Height: hp('0%'),
            image3Width: wp('0%'),
            View3Left: '300%',
            view3Top: '19%',
            boyTop:'22%',
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
            boyTop: '22%',
            boyLeft: '20%',
            view2Top: '1000%',
            View2Left: '1000%',
            view3Top: '1000%',
            View3Left: '1000%',
            view2Height: hp('0%'),
            view2Width: wp('0%'),
            view3Height: hp('0%'),
            view3Width: wp('0%'),
            view1Height: hp('80%'),
            view1Width: wp('50%'),
            image1Height: hp('80%'),
            image1Width: wp('70%'),
            View1Left:'40%',
            view1Top: '19%',

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
            boyTop: '22%',
            boyLeft: '20%',
            view1Top: '1000%',
            View1Left: '1000%',
            view3Top: '1000%',
            View3Left: '1000%',
            view3Height: hp('0%'),
            view3Width: wp('0%'),
            view2Height: hp('80%'),
            view2Width: wp('50%'),
            image2Height: hp('60%'),
            image2Width: wp('30%'),
            view2Top: '19%',
            View2Left: '40%',

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
            boyTop: '22%',
            boyLeft: '20%',
            view1Height: hp('0%'),
            view1Width: wp('0%'),
            view1Top: '1000%',
            View1Left: '1000%',
            view2Top: '1000%',
            View2Left: '1000%',
            view2Height: hp('0%'),
            view2Width: wp('0%'),
            view3Height: hp('80%'),
            view3Width: wp('50%'),
            image3Height:400,
            image3Width: 200,
            view3Top: '20%',
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
                    view1Height: hp('80%'),
                    view1Width: wp('50%'),
                    View1Left: '40%',
                    view1Top: '19%',
                    clearBackground:'goVocabMenu',
                })
            }
            if (this.state.stillView == 'View2') {
                this.setState({
                    view2Height: hp('80%'),
                    view2Width: wp('50%'),
                    View2Left: '40%',
                    view2Top: '19%',
                    clearBackground: 'goVocabMenu',
                })
            }
            if (this.state.stillView == 'View3') {
                this.setState({
                    view3Height: hp('80%'),
                    view3Width: wp('50%'),
                    View3Left: '40%',
                    view3Top: '19%',
                    clearBackground: 'goVocabMenu',
                })
            }
            this.setState({
                BackgroundImage: BG, 
                boyTop: '22%',
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
                       }}>
                           <Image source={require('./vocabulary2Images/TO_ulo.png')}/>
                        </TouchableOpacity>
                    <TouchableOpacity onPress={this.view2} style={{
                        top:'22.22%',
                        position: 'absolute',
                        left:'4%'
                    }}>
                        <Image source={require('./vocabulary2Images/TO_dibdib.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.view3} style={{
                            position: 'absolute',
                            top: '39%',
                            left: '22.60%'
                    }}>
                        <Image source={require('./vocabulary2Images/TO_paa.png')}/>
                    </TouchableOpacity>
                    </View>
                <Animated.View 
                style={{
                    position: 'absolute',
                    width: this.state.view1Width,
                    height: this.state.view1Height,
                    left: this.state.View1Left,
                    top:this.state.view1Top,
                    justifyCotent:'center'
                }}>
                
                    <TouchableOpacity style={{ position: 'absolute', top: '5%', left: '18%' }} onPress={this.gotoHead}>
                        <Image source={require('./vocabulary2Images/ulo1.png')} style={{
                            width: wp('25.50%'),
                            height: hp('30.90%'),
                        }}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '38.90%', left: '60%' }} onPress={this.gotoHair}>
                        <Image source={require('./vocabulary2Images/ulo3.png')} style={{
                            width: wp('2.90%'),
                            height: hp('10%'),
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '38.90%', left: '20%' }} onPress={this.gotoHair}>
                        <Image source={require('./vocabulary2Images/ulo4.png')} style={{
                            width: wp('2.90%'),
                            height: hp('10%'),
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '45%', left: '59.60%' }} onPress={this.gotoEars}>
                        <Image source={require('./vocabulary2Images/ulo7.png')} style={{
                            width: wp('4%'),
                            height: hp('15%'),
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '45%', left: '18%' }} onPress={this.gotoEars}>
                        <Image source={require('./vocabulary2Images/ulo8.png')} style={{
                            width: wp('4%'),
                            height: hp('15%'),
                        }} />
                    </TouchableOpacity>
                    <Image source={require('./vocabulary2Images/ulo5.png')} style={{
                        width: wp('19%'),
                        height: hp('22%'),
                        position: 'absolute',
                        top: '51.90%',
                        left: '23.50%'
                    }} />
                    <TouchableOpacity style={{position: 'absolute',top:'38.20%',left:'24%' }} onPress={this.gotoEyes}>
                        <Image source={require('./vocabulary2Images/ulo2.png')} style={{
                            width: wp('19%'),
                            height: hp('15%'),
                        }} /> 
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '58%', left: '35%' }} onPress={this.gotoNose}>
                        <Image source={require('./vocabulary2Images/ulo9.png')} style={{
                            width: wp('7%'),
                            height: hp('3%'),
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '63%', left: '29%' }} onPress={this.gotoMouth}>
                        <Image source={require('./vocabulary2Images/ulo10.png')} style={{
                            width: wp('13%'),
                            height: hp('8.20%'),
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '73%', left: '30%' }} onPress={this.gotoLeeg}>
                        <Image source={require('./vocabulary2Images/ulo11.png')} style={{
                            width: wp('12.90%'),
                            height: hp('8.20%'),
                        }} />
                    </TouchableOpacity>     
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
                    <TouchableOpacity style={{ position: 'absolute', top: '15.70%', left: '16%'}} onPress={this.gotoBalikat}>
                        <Image source={require('./vocabulary2Images/dibdib3.png')} style={{
                            width: wp('3.50%'),
                            height: hp('16%')
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '15%', left: '52.50%' }} onPress={this.gotoBalikat}>
                        <Image source={require('./vocabulary2Images/dibdib2.png')} style={{
                            width: wp('4%'),
                            height: hp('16%')
                        }} />
                    </TouchableOpacity>
                    <Image source={require('./vocabulary2Images/dibdib4.png')} style={{
                        width: wp('15%'),
                        height: hp('18%'),
                        position: 'absolute', 
                        top: '34.60%', 
                        left: '22.50%'
                    }} />
                    <TouchableOpacity style={{ position: 'absolute', top: '10%', left: '20%' }} onPress={this.gotoDibdib}>
                        <Image source={require('./vocabulary2Images/dibdib1.png')} style={{
                            width: wp('18%'),
                            height: hp('20%')
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '26.50%', left: '6%' }} onPress={this.gotoKamay}>
                        <Image source={require('./vocabulary2Images/dibdib5.png')} style={{
                            width: wp('8'),
                            height: hp('40%'),
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '29.80%', left: '53.20%' }} onPress={this.gotoKamay}>
                        <Image source={require('./vocabulary2Images/dibdib6.png')} style={{
                           width: wp('6.50'),
                            height: hp('37.50%'),
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '75%', left: '58%' }} onPress={this.gotoDaliri}>
                        <Image source={require('./vocabulary2Images/dibdib7.png')} style={{
                            width: wp('5%'),
                            height: hp('10%'),
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '75.90%', left: '5.90%' }} onPress={this.gotoDaliri}>
                        <Image source={require('./vocabulary2Images/dibdib8.png')} style={{
                            width: wp('4%'),
                            height: hp('7.50%'),
                        }} />
                    </TouchableOpacity>
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
                    <TouchableOpacity onPress={this.gotoBaywang} style={{position:'absolute',top:'7%'}}>
                        <Image source={require('./vocabulary2Images/paa1.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '18%',left:'37.80%'}} onPress={this.gotoBinti}>
                        <Image source={require('./vocabulary2Images/paa2.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '38.90%',left:'37.40%'}} onPress={this.gotoTuhod}>
                        <Image source={require('./vocabulary2Images/paa3.png')}/>
                    </TouchableOpacity>
                    <Image source={require('./vocabulary2Images/paa5.png')} style={{
                        position:'absolute',
                        top:'53.90%',
                        left: '38.30%'
                    }} />
                    <TouchableOpacity style={{ position: 'absolute', top: '70%', left: '35.20%'}} onPress={this.gotoPaa}>
                        <Image source={require('./vocabulary2Images/paa6.png')} />
                    </TouchableOpacity>
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