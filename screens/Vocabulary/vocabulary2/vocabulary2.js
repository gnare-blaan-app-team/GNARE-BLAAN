import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler,Animated } from 'react-native';
import { withNavigation } from 'react-navigation';
import { globalStyleSheet } from '../../globalStyleSheet/globalStyleSheet'
import * as Animatable from 'react-native-animatable';
import BG from '../../images/boy.png';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class vocabulary2 extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.moveAnimation = new Animated.ValueXY({ x: 420, y: 100 })
        this.state = {
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
            image2Height: hp('0'),
            image2Width: wp('0%'),
            view2Height: hp('0%'),
            view2Width: wp('0%'),
            image3Height: hp('0'),
            image3Width: wp('0%'),
            view3Height: hp('0%'),
            view3Width: wp('0%'),
            view1Height: hp('80%'),
            view1Width: wp('50%'),
            image1Height: hp('80%'),
            image1Width: wp('70%'),
            View1Left:'40%',

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
            image1Height: hp('0'),
            image1Width: wp('0%'),
            view1Height: hp('0%'),
            view1Width: wp('0%'),
            image3Height: hp('0'),
            image3Width: wp('0%'),
            view3Height: hp('0%'),
            view3Width: wp('0%'),
            view2Height: hp('80%'),
            view2Width: wp('50%'),
            image2Height: hp('60%'),
            image2Width: wp('30%'),
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
            image1Height: hp('0'),
            image1Width: wp('0%'),
            view1Height: hp('0%'),
            view1Width: wp('0%'),
            image2Height: hp('0'),
            image2Width: wp('0%'),
            view2Height: hp('0%'),
            view2Width: wp('0%'),
            view3Height: hp('80%'),
            view3Width: wp('50%'),
            image3Height: hp('70%'),
            image3Width: wp('30%'),
            View3Left: '40%',

        })

    }

    componentWillMount(){
        this.animatedValue = new Animated.Value(1);
        Animated.spring(this.animatedValue,{
            toValue: 0.5
         }).start()
    }

    componentDidMount(){
        if(this.state.show == 'show'){
            Animated.spring(this.moveAnimation, {
                toValue: { x: 200, y: 100 }
            }).start()
            Animated.spring(this.animatedValue, {
                toValue: 1,
            }).start()
            this.setState({
                view1Height: hp('80%'),
                view1Width: wp('50%'),
                image1Height: hp('80%'),
                image1Width: wp('70%'),
                View1Left: '40%',
            })

        }

    }
    goBack = () => {
        this.props.navigation.navigate('vocabularyMenu');
    }

    gotoEyes = () =>{
        this.props.navigation.navigate('mata')
    }

    gotoNose = () => {
        this.props.navigation.navigate('ilong')
    }

    gotoMouth = () => {
        this.props.navigation.navigate('bunganga')
    }

    gotoLeeg = () => {
        this.props.navigation.navigate('leeg')
    }

    gotoHair = () => {
        this.props.navigation.navigate('buhok')
    }
    gotoEars = () => {
        this.props.navigation.navigate('tainga')
    }
    gotoHead = () => {
        this.props.navigation.navigate('ulo')
    }
    gotoBalikat = () => {
        this.props.navigation.navigate('balikat')
    }
    gotoDibdib = () => {
        this.props.navigation.navigate('dibdib')
    }
     gotoKamay = () => {
        this.props.navigation.navigate('kamay')
    }
    gotoBaywang = () => {
        this.props.navigation.navigate('baywang')
    }
    gotoDaliri = () => {
        this.props.navigation.navigate('daliri')
    }
    gotoBinti = () => {
        this.props.navigation.navigate('binti')
    }
    gotoTuhod = () => {
        this.props.navigation.navigate('tuhod')
    }
    gotoPaa = () => {
        this.props.navigation.navigate('paa')
    }

    render() {
        const animatedStyle = {
            transform: [{scale:this.animatedValue}]
        }
        const { navigation } = this.props;
        const stillShow = navigation.getParam('show', 'NO-ID');
        this.state.show = stillShow;
        return (
            <ImageBackground style={globalStyleSheet.image}
                source={BG}
            >
                <Animated.View style={[{
                    position: 'absolute',
                    width: wp('17%'),
                    height: hp('77%'),
                    },this.moveAnimation.getLayout()]}>
                    <Image
                        style={{position:'absolute',width:wp('17%'),height:hp('77%')}}
                        source={require('./vocabulary2Images/KaitoFrontView.png')}
                    />
                    <TouchableOpacity onPress={this.view1} style={{
                        position: 'absolute', 
                        top: '1%', 
                        left: '10%', 
                       }}>
                            <View style={{
                                width: wp('13%'),
                                height: hp('17%'),
                                
                            }}></View>
                        </TouchableOpacity>
                    <TouchableOpacity onPress={this.view2} style={{
                        position: 'absolute',
                        top: '23%',
                        left: '10%',
                    }}>
                        <View style={{
                            width: wp('13%'),
                            height: hp('17%'),

                        }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.view3} style={{
                        position: 'absolute',
                        top: '46%',
                        left: '21%',

                    }}>
                        <View style={{
                            width: wp('9%'),
                            height: hp('35%'),

                        }}></View>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View 
                style={[{
                    position: 'absolute',
                    width: this.state.view1Width,
                    height: this.state.view1Height,
                    left: this.state.View1Left,
                    top:this.state.view1Top,
                    justifyCotent:'center'
                }, animatedStyle]}>
                <Image 
                        style={{
                            width: this.state.image1Width,
                            height: this.state.image1Height,
                            left:'-20%',
                        }}
                source={require('./vocabulary2Images/Item_ulo.png')}
                >
                </Image>
                    <TouchableOpacity style={{ position: 'absolute', top: '5%', left: '18%' }} onPress={this.gotoHead}>
                        <View style={{
                            width: wp('29%'),
                            height: hp('27%'),
                        }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{position: 'absolute',top:'40%',left:'26%' }} onPress={this.gotoEyes}>
                        <View style={{
                            width: wp('19%'),
                            height: hp('16%'),
                        }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '61%', left: '37%' }} onPress={this.gotoNose}>
                        <View style={{
                            width: wp('8%'),
                            height: hp('6%'),
                        }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '69%', left: '37%' }} onPress={this.gotoMouth}>
                        <View style={{
                            width: wp('10%'),
                            height: hp('8%'),
                        }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '80%', left: '32%' }} onPress={this.gotoLeeg}>
                        <View style={{
                            width: wp('15%'),
                            height: hp('10%'),
                        }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '40%', left: '65%' }} onPress={this.gotoHair}>
                        <View style={{
                            width: wp('3%'),
                            height: hp('10%'),
                        }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '40%', left: '20%' }} onPress={this.gotoHair}>
                        <View style={{
                            width: wp('3%'),
                            height: hp('10%'),
                        }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '50%', left: '19%' }} onPress={this.gotoEars}>
                        <View style={{
                            width: wp('3%'),
                            height: hp('15%'),
                        }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '50%', left: '65%' }} onPress={this.gotoEars}>
                        <View style={{
                            width: wp('4%'),
                            height: hp('15%'),
                        }}></View>
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
                    style={[{
                        position: 'absolute',
                        width: this.state.view2Width,
                        height: this.state.view2Height,
                        left: this.state.View2Left,
                        top: this.state.view2Top,
                        justifyCotent: 'center',
                    }, animatedStyle]}>
                    <Image
                        style={{
                            width: this.state.image2Width,
                            height: this.state.image2Height,
                            left: '20%',
                            top:'10%'
                        }}
                        source={require('./vocabulary2Images/View2.png')}
                    >
                    </Image>
                    <TouchableOpacity style={{position:'absolute',top:'10%',left:'29%'}} onPress={this.gotoBalikat}>
                    <View style={{
                        transform: [{ rotate: '25deg' }],
                        width:wp('4%'),
                        height:hp('19%'),
                    }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '10%', left: '61%' }} onPress={this.gotoBalikat}>
                        <View style={{
                            transform: [{ rotate: '160deg' }],
                            width: wp('4%'),
                            height: hp('19%'),
                        }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '10%', left: '40%' }} onPress={this.gotoDibdib}>
                        <View style={{
                            width: wp('10%'),
                            height: hp('19%'),
                        }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '48%', left: '69%' }} onPress={this.gotoKamay}>
                        <View style={{
                            transform: [{ rotate: '175deg' }],
                            width: wp('4%'),
                            height: hp('20%'),
                        }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '48%', left: '20%' }} onPress={this.gotoKamay}>
                        <View style={{
                            transform: [{ rotate: '185deg' }],
                            width: wp('4%'),
                            height: hp('20%'),
                        }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '73%', left: '18%' }} onPress={this.gotoDaliri}>
                        <View style={{
                            transform: [{ rotate: '185deg' }],
                            width: wp('4%'),
                            height: hp('8%'),
                        }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '73%', left: '70%' }} onPress={this.gotoDaliri}>
                        <View style={{
                            transform: [{ rotate: '175deg' }],
                            width: wp('4%'),
                            height: hp('8%'),
                        }}></View>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View
                    style={[{
                        position: 'absolute',
                        width: this.state.view3Width,
                        height: this.state.view3Height,
                        left: this.state.View3Left,
                        top: this.state.view3Top,
                        justifyCotent: 'center',
                    }, animatedStyle]}>
                    <Image
                        style={{
                            width: this.state.image3Width,
                            height: this.state.image3Height,
                            left: '20%',
                            top: '5%'
                        }}
                        source={require('./vocabulary2Images/View3.png')}
                    >
                    </Image>
                    <TouchableOpacity style={{ position: 'absolute', top: '9%', left: '32%' }} onPress={this.gotoBaywang}>
                        <View style={{
                            width: wp('15%'),
                            height: hp('10%'),
                        }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '22%', left: '32%' }} onPress={this.gotoBinti}>
                        <View style={{
                            width: wp('15%'),
                            height: hp('20%'),
                        }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '48%', left: '32%' }} onPress={this.gotoTuhod}>
                        <View style={{
                            width: wp('7%'),
                            height: hp('12%'),
                        }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '48%', left: '50%' }} onPress={this.gotoTuhod}>
                        <View style={{
                            width: wp('7%'),
                            height: hp('12%'),
                        }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '77%', left: '52%' }} onPress={this.gotoPaa}>
                        <View style={{
                            width: wp('7%'),
                            height: hp('12%'),
                        }}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: '77%', left: '30%' }} onPress={this.gotoPaa}>
                        <View style={{
                            width: wp('7%'),
                            height: hp('12%'),
                        }}></View>
                    </TouchableOpacity>
                </Animated.View>       
            </ImageBackground>
        )
    }
}


export default withNavigation(vocabulary2);