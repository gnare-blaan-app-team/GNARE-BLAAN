import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground, TouchableOpacity, BackHandler } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import Vocab6BG from './vocabulary6Images/vocab6.png';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import WallAsset from './vocabulary6Images/wallAsset.png';
import RoofAsset from './vocabulary6Images/roofAsset.png';
import DoorAsset from './vocabulary6Images/doorAsset.png';
import WindowAsset from './vocabulary6Images/windowAsset.png';
import BedroomAsset from './vocabulary6Images/bedroomAsset.png';
import KitchenAsset from './vocabulary6Images/kitchenAsset.png';
import FloorAsset from './vocabulary6Images/floorAsset.png';
import LadderAsset from './vocabulary6Images/ladderAsset.png';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Vocabulary6 extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            BackgroundImage: Vocab6BG,
        }
    }


    handleBackPress = () => {
        this.number1.pause();
    }

    goBack = () => {
        this.props.navigation.navigate('vocabularyMenu');
    }
    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    gotoHouse = () => {
        this.props.navigation.navigate('house');
    }
    gotoWall = () => {
        this.props.navigation.navigate('wall');
    }
    gotoRoof = () => {
        this.props.navigation.navigate('roof');
    }
    gotoDoor = () => {
        this.props.navigation.navigate('door');
    }
    gotoWindow = () => {
        this.props.navigation.navigate('window');
    }
    gotoBedroom = () => {
        this.props.navigation.navigate('bedroom');
    }
    gotoKitchen = () => {
        this.props.navigation.navigate('kitchen');
    }
    gotoFloor = () => {
        this.props.navigation.navigate('floor');
    }
    gotoLadder = () => {
        this.props.navigation.navigate('ladder');
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

                <View style={{position: "absolute", height: hp('78%'), width: wp('65%'), left: '20%', top: '18%'}}>
                    <TouchableOpacity  onPress={this.gotoHouse}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('41%'), width: wp('6.5%'), left: '31.5%', top: '50%'}}>
                    <TouchableOpacity  onPress={this.gotoWall}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('25%'), width: wp('47%'), left: '29.5%', top: '20%'}}>
                    <TouchableOpacity  onPress={this.gotoRoof}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('39%'), width: wp('3%'), left: '51%', top: '43%'}}>
                    <TouchableOpacity  onPress={this.gotoDoor}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('35%'), width: wp('19%'), left: '57%', top: '45%'}}>
                    <TouchableOpacity  onPress={this.gotoWindow}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('25%'), width: wp('11%'), left: '57%', top: '48%'}}>
                    <TouchableOpacity  onPress={this.gotoBedroom}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('14%'), width: wp('6.5%'), left: '38%', top: '60%'}}>
                    <TouchableOpacity  onPress={this.gotoKitchen}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('10%'), width: wp('13%'), left: '38%', top: '73%'}}>
                    <TouchableOpacity  onPress={this.gotoFloor}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('5.5%'), width: wp('6%'), left: '43%', top: '68%', transform: [{ rotate: '-60deg' }]}}>
                    <TouchableOpacity  onPress={this.gotoLadder}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        )
    }
}

export default withNavigation(Vocabulary6);
