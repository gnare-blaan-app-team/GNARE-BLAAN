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


    handleBackPress = () => {
        this.number1.pause();
    }

    goBack = () => {
        this.props.navigation.navigate('vocabularyMenu');
    }
    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
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
            <ImageBackground style={globalStyleSheet.image}
                source={Vocab6BG}
            >
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
                <View style={styles.windowStyle}>
                    <TouchableOpacity onPress={this.gotoWindow}>
                        <Image
                            source={WindowAsset}
                            style={styles.windowImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.bedroomStyle}>
                    <TouchableOpacity onPress={this.gotoBedroom}>
                        <Image
                            source={BedroomAsset}
                            style={styles.bedroomImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.floorStyle}>
                    <TouchableOpacity onPress={this.gotoFloor}>
                        <Image
                            source={FloorAsset}
                            style={styles.floorImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.ladderStyle}>
                    <TouchableOpacity onPress={this.gotoLadder}>
                        <Image
                            source={LadderAsset}
                            style={styles.ladderImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.kitchenStyle}>
                    <TouchableOpacity onPress={this.gotoKitchen}>
                        <Image
                            source={KitchenAsset}
                            style={styles.kitchenImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.doorStyle}>
                    <TouchableOpacity onPress={this.gotoDoor}>
                        <Image
                            source={DoorAsset}
                            style={styles.doorImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.wallStyle}>
                    <TouchableOpacity onPress={this.gotoWall}>
                        <Image
                            source={WallAsset}
                            style={styles.wallImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.roofStyle}>
                    <TouchableOpacity onPress={this.gotoRoof}>
                        <Image
                            source={RoofAsset}
                            style={styles.roofImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    wallStyle: {
        position: 'absolute',
        top: '49.2%',
        left: '31.2%',
    },
    wallImage: {
        width: wp('8%'),
        height: hp('38%'),
        resizeMode: 'contain', 
    },
    roofStyle: {
        position: 'absolute',
        top: '12%',
        left: '28.5%',
    },
    roofImage: {
        width: wp('49.6%'),
        height: hp('42%'),
        resizeMode: 'contain', 
    },
    doorStyle: {
        position: 'absolute',
        top: '40.2%',
        left: '33.8%',
        borderWidth: 0.5,
        borderColor: 'red',
    },
    doorImage: {
        width: wp('40%'),
        height: hp('40%'),
        resizeMode: 'contain', 
    },
    windowStyle: {
        position: 'absolute',
        top: '41.5%',
        left: '49%',
    },
    windowImage: {
        width: wp('35%'),
        height: hp('37%'),
        resizeMode: 'contain', 
    },
    bedroomStyle: {
        position: 'absolute',
        top: '47%',
        left: '40.9  %',
    },
    bedroomImage: {
        width: wp('44.8%'),
        height: hp('24%'),
        resizeMode: 'contain', 
    },
    kitchenStyle: {
        position: 'absolute',
        top: '59%',
        left: '21.5%',
    },
    kitchenImage: {
        width: wp('44.8%'),
        height: hp('19%'),
        resizeMode: 'contain', 
    },
    floorStyle: {
        position: 'absolute',
        top: '73%',
        left: '38.5%',
    },
    floorImage: {
        width: wp('14%'),
        height: hp('10%'),
        resizeMode: 'contain', 
    },
    ladderStyle: {
        position: 'absolute',
        top: '65.5%',
        left: '39.3%',
    },
    ladderImage: {
        width: wp('15%'),
        height: hp('11%'),
        resizeMode: 'contain', 
    },
});

export default withNavigation(Vocabulary6);