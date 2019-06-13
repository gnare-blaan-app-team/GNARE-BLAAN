import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler,Animated } from 'react-native';
import { withNavigation } from 'react-navigation';
import { globalStyleSheet } from '../../globalStyleSheet/globalStyleSheet'
import * as Animatable from 'react-native-animatable';
import BG from '../../images/BG.jpg';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class vocabulary2 extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            view1Height: hp('0%'),
            view1Width: wp('0%'),
            image1Height: hp('0%'),
            image1Width: wp('0%'),
            toValue:.5,
            View1Left:'300%',
            view1Top:'19%',
            show:''
        }
    }

    view1 =()=>{
        Animated.spring(this.animatedValue, {
            toValue: 1,
        }).start()
        this.setState({
            view1Height: hp('80%'),
            view1Width: wp('50%'),
            image1Height: hp('80%'),
            image1Width: wp('70%'),
            View1Left:'40%',

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
        this.props.navigation.replace('ulo')
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
                <View style={{top:'5%'}}>
                    <Image
                        style={{ width: wp('78%'), height: hp('76%')}}
                    source={require('./vocabulary2Images/boy.png')}
                    />
                </View>
                <TouchableOpacity style={{top:'22%',left:'22%',position:'absolute'}} onPress={this.view1}>
                    <View style={{
                        width:wp('13%'),
                        height:hp('17%')
                        }}></View>
                </TouchableOpacity>
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
            
            </ImageBackground>
        )
    }
}


export default withNavigation(vocabulary2);