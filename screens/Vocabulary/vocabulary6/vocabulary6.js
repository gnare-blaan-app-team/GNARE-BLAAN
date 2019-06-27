import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground, TouchableOpacity, BackHandler, } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import Vocab6BG from './vocabulary6Images/vocab6.png';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';

import Bedroom from './vocabulary6Images/bedroom.png';
import Door from './vocabulary6Images/door.png';
import Floor from './vocabulary6Images/floor.png';
import House from './vocabulary6Images/house.png';
import Kitchen from './vocabulary6Images/kitchen.png';  
import Ladder from './vocabulary6Images/ladder.png';
import Roof from './vocabulary6Images/roof.png';  
import Wall from './vocabulary6Images/wall.png';
import Window from './vocabulary6Images/window.png';
import abu_icon from './vocabulary6Images/Abu.png';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const backgroundList = [Bedroom,Door,Floor,House,Kitchen,Ladder,Roof,Wall,Window];


class Vocabulary6 extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            BackgroundImage: Vocab6BG,
            houseTop:'18%',
            wallTop: '50%',
            roofTop: '20%',
            doorTop: '43%',
            windowTop: '45%',
            bedroomTop: '48%',
            kitchenTop: '60%',
            floorTop:'73%',
            ladderTop:'68%',
            clearBackground:'gotoVocab6Menu',
            kitchenBtnTop:'1000%'
        }
    }

    goBack = () => {
        const clear = this.state.clearBackground;
        if (clear == 'gotoVocab6Menu') {
            this.props.navigation.navigate('vocabularyMenu')
        }
        if (clear == 'clear') {
            this.setState({
                BackgroundImage: Vocab6BG,
                houseTop: '18%',
                wallTop: '50%',
                roofTop: '20%',
                doorTop: '43%',
                windowTop: '45%',
                bedroomTop: '48%',
                kitchenTop: '60%',
                floorTop: '73%',
                ladderTop: '68%',
                kitchenBtnTop:'1000%',
                clearBackground: 'gotoVocab6Menu'
            })
        }
    }

    gotoVocabulary7 = () => {
        this.props.navigation.navigate('vocabulary7')
    }

    changeBackground = (index) => {
        this.setState({
            BackgroundImage:backgroundList[index],
            houseTop: '1000%',
            wallTop: '1000%',
            roofTop: '1000%',
            doorTop: '1000%',
            windowTop: '1000%',
            bedroomTop: '1000%',
            kitchenTop: '1000%',
            floorTop: '1000%',
            ladderTop: '1000%',
            clearBackground: 'clear'
        })
    }

    render() {

        return (
            <ImageBackground style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'stretch' }}
                source={Vocab6BG}
            >
                <View style={{ position: 'absolute', top: '0%', width: '100%', height: '100%' }}>
                    <Image source={Vocab6BG} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}></Image>
                </View>
                <View style={{ position: 'absolute', width: '100%', height: '100%' }}>
                    <Image source={this.state.BackgroundImage} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}></Image>
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

                <View style={{position: "absolute", height: hp('78%'), width: wp('65%'), left: '20%', top:this.state.houseTop}}>
                    <TouchableOpacity  onPress={() => {
                        this.changeBackground(3);
                    }}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('41%'), width: wp('6.5%'), left: '31.5%', top:this.state.wallTop}}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(7);
                    }}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('25%'), width: wp('47%'), left: '29.5%', top:this.state.roofTop}}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(6);
                    }}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('39%'), width: wp('3%'), left: '51%', top:this.state.doorTop}}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(1);
                    }}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('35%'), width: wp('19%'), left: '57%', top:this.state.windowTop}}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(8);
                    }}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('25%'), width: wp('11%'), left: '57%', top:this.state.bedroomTop}}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(0);
                    }}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('14%'), width: wp('6.5%'), left: '38%', top:this.state.kitchenTop}}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(4);
                        this.setState({
                            kitchenBtnTop:'72%'
                        })
                    }}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position:'absolute',top:this.state.kitchenBtnTop, left: '20.8%'}}>
                    <TouchableOpacity onPress={this.gotoVocabulary7}>
                        <Image source={abu_icon} style={{height: hp('10%'), resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('10%'), width: wp('13%'), left: '38%', top:this.state.floorTop}}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(2);
                    }}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('5.5%'), width: wp('6%'), left: '43%', top:this.state.ladderTop, transform: [{ rotate: '-60deg' }]}}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(5);
                    }}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        )
    }
}

export default withNavigation(Vocabulary6);