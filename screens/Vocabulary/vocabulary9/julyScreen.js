import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import Vocab9BG from './vocabulary9Images/calendarBG.png';


import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import julyAsset from './vocabulary9Images/item_july.png'
import NextIcon from '../../images/Next_Icon.png';
import PrevIcon from '../../images/Prev_Icon.png';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class julyScreen extends Component {
    static navigationOptions = {
        header: null,
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    handleBackPress = () => {
        this.number1.pause();
    }

    goBack = () => {
        this.props.navigation.navigate('vocabularyMenu');
    }

    gotoJuly = () => {
        this.props.navigation.navigate('july');
    }

    gotoNextPage = () => {
        this.props.navigation.navigate('augustScreen');
    }

    goPrev = () => {
        this.props.navigation.navigate('juneScreen');
    }

    gotoSunday = () => {
        this.props.navigation.navigate('sunday');
    }

    gotoMonday = () => {
        this.props.navigation.navigate('monday');
    }

    gotoTuesday = () => {
        this.props.navigation.navigate('tuesday');
    }

    gotoWednesday = () => {
        this.props.navigation.navigate('wednesday');
    }

    gotoThursday = () => {
        this.props.navigation.navigate('thursday');
    }

    gotoFriday = () => {
        this.props.navigation.navigate('friday');
    }

    gotoSaturday = () => {
        this.props.navigation.navigate('saturday');
    }

    render() {

        return (
            <ImageBackground style={globalStyleSheet.image}
                source={Vocab9BG}>
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

                <View style={styles.calendarBorder}>
                    <TouchableOpacity onPress={this.gotoJuly}>
                        <Image
                            source={julyAsset}
                            style={styles.calendarImage}
                        ></Image>
                    </TouchableOpacity>
                </View>



                <View style={{position: "absolute", height: hp('6%'), width: wp('5.65%'), left: '31.3%', top: '46%'}}>
                    <TouchableOpacity  onPress={this.gotoSunday}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('6%'), width: wp('5.65%'), left: '36.8%', top: '46%'}}>
                    <TouchableOpacity  onPress={this.gotoMonday}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('6%'), width: wp('5.65%'), left: '42.3%', top: '46%'}}>
                    <TouchableOpacity  onPress={this.gotoTuesday}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('6%'), width: wp('5.65%'), left: '47.8%', top: '46%'}}>
                    <TouchableOpacity  onPress={this.gotoWednesday}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('6%'), width: wp('5.65%'), left: '53.3%', top: '46%'}}>
                    <TouchableOpacity  onPress={this.gotoThursday}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('6%'), width: wp('5.65%'), left: '58.8%', top: '46%'}}>
                    <TouchableOpacity  onPress={this.gotoFriday}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('6%'), width: wp('5.65%'), left: '64.3%', top: '46%'}}>
                    <TouchableOpacity  onPress={this.gotoSaturday}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>



                <View style={globalStyleSheet.nextContainer}>
                    <TouchableOpacity onPress={this.gotoNextPage}>
                        <Image
                            source={NextIcon}
                            style={globalStyleSheet.next}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={globalStyleSheet.prevContainer}>
                    <TouchableOpacity onPress={this.goPrev}>
                        <Image
                            source={PrevIcon}
                            style={globalStyleSheet.prev}
                        ></Image>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({

  calendarBorder: {
    position: 'absolute',
    top: wp('10%'),
  },

    calendarImage: {
      height: hp('75%'),
      width: wp('50%'),
      resizeMode: 'contain',
    },
});

export default withNavigation(julyScreen);
