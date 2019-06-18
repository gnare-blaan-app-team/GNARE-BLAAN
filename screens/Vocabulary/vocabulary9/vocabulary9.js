import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';
import Vocab9BG from './vocabulary9Images/calendarBG.png';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import januaryAsset from './vocabulary9Images/item_january.png';
import februaryAsset from './vocabulary9Images/item_february.png';
import MarchAsset from './vocabulary9Images/Item_march.png';
import AprilAsset from './vocabulary9Images/item_april.png';
import MayAsset from './vocabulary9Images/item_may.png';
import JuneAsset from './vocabulary9Images/item_june.png';
import JulyAsset from './vocabulary9Images/item_july.png';
import AugustAsset from './vocabulary9Images/item_august.png';
import SeptemberAsset from './vocabulary9Images/item_september.png';
import OctoberAsset from './vocabulary9Images/item_october.png';
import NovemberAsset from './vocabulary9Images/item_november.png';
import DecemberAsset from './vocabulary9Images/item_december.png';
import Month1 from './vocabulary9Images/january.png';
import Month2 from './vocabulary9Images/february.png';
import Month3 from './vocabulary9Images/march.png';
import Month4 from './vocabulary9Images/april.png';
import Month5 from './vocabulary9Images/may.png';
import Month6 from './vocabulary9Images/june.png';
import Month7 from './vocabulary9Images/july.png';
import Month8 from './vocabulary9Images/august.png';
import Month9 from './vocabulary9Images/september.png';
import Month10 from './vocabulary9Images/october.png';
import Month11 from './vocabulary9Images/november.png';
import Month12 from './vocabulary9Images/december.png';
import Day1 from './vocabulary9Images/monday.png';
import Day2 from './vocabulary9Images/tuesday.png';
import Day3 from './vocabulary9Images/wednesday.png';
import Day4 from './vocabulary9Images/thursday.png';
import Day5 from './vocabulary9Images/friday.png';
import Day6 from './vocabulary9Images/saturday.png';
import Day7 from './vocabulary9Images/sunday.png';
import NextIcon from '../../images/Next_Icon.png';
import PrevIcon from '../../images/Prev_Icon.png';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const calendarList = [
    januaryAsset,
    februaryAsset,
    MarchAsset,
    AprilAsset,
    MayAsset,
    JuneAsset,
    JulyAsset,
    AugustAsset,
    SeptemberAsset,
    OctoberAsset,
    NovemberAsset,
    DecemberAsset
];

const monthList = [
    Month1,
    Month2,
    Month3,
    Month4,
    Month5,
    Month6,
    Month7,
    Month8,
    Month9,
    Month10,
    Month11,
    Month12
]


class Vocabulary9 extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            prevTop:'40%',
            changeCalendar:januaryAsset,
            counter:0,
            BackgroundImage:Vocab9BG,
            calendarTop:'18%',
            NextTop: '40%',
        }
    }

    gotoNextPage = () => {
        const index = this.state.counter + 1;
        if(index <= 11){
            this.setState({
                counter: index,
                changeCalendar: calendarList[index],
            });
        }else{
            this.setState({
                counter: 0,
                changeCalendar: calendarList[0],
            });
        }     
    }
    gotoMonth = () => {
        const index = this.state.counter;
        this.setState({
            BackgroundImage:monthList[index],
            calendarTop:'1000%',
            NextTop:'1000%',
            prevTop:'1000%',
        })
    }
    goPrev = () => {
        const index = this.state.counter - 1;
        if (index >= 0) {
            this.setState({
                counter: index,
                changeCalendar: calendarList[index],
            });
        } else {
            this.setState({
                counter: 11,
                changeCalendar: calendarList[11],
            });
        }
    }

    goBack = () => {
       if(this.state.BackgroundImage == 323){
        this.props.navigation.navigate('vocabularyMenu')
       }
        this.setState({
            BackgroundImage: Vocab9BG,
            calendarTop: '18%',
            NextTop: '40%',
            prevTop: '40%',
        })
    }
    gotoMainMenu = () =>{
        this.props.navigation.navigate('mainMenu')
    }

    day = () => {
       alert('okay')
    }
    render() {

        return (
          <ImageBackground source={Vocab9BG} style={{
              flex: 1, 
              width: '100%', 
              height: '100%', 
              resizeMode: 'stretch',
              justifyContent:'center',
              alignItems:'center'
              }}>
                <View style={{ position: 'absolute', top: '0%', width: '100%', height: '100%' }}>
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

                <View style={{
                    position: 'absolute',
                    top: this.state.calendarTop
                }}>
                    <TouchableOpacity onPress={this.gotoMonth}>
                        <Image
                            source={this.state.changeCalendar}
                            style={{
                                height: hp('75%'),
                                width: wp('50%'),
                                resizeMode: 'contain',
                            }}
                        ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        this.day();
                    }} style={{
                        position:'absolute',
                        left:'12.50%',
                        top:'40%',
                        width: '11%', 
                        height: '11%', 
                        borderColor: 'red', 
                        borderWidth: 1 }}>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    left: '83%',
                    top: this.state.NextTop,
                    width: '12%',
                    height: '24%',
                }}>
                    <TouchableOpacity onPress={this.gotoNextPage}>
                        <Image
                            source={NextIcon}
                            style={globalStyleSheet.next}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    left: '5%',
                    top: this.state.prevTop,
                    width: '12%',
                    height: '24%',
                }}>
                    <TouchableOpacity onPress={this.goPrev}>
                        <Image
                            source={PrevIcon}
                            style={{
                                width: '75%',
                                height: '75%',
                                resizeMode: 'contain',}}
                        ></Image>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        )
    }
}

export default withNavigation(Vocabulary9);
