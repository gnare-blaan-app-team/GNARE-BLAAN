import React,{Component} from 'react';
import { ImageBackground, TouchableOpacity, ViewPagerAndroid, View, Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js';

import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import Flalok_BG from '../flalokImages/Flalok_BG.jpg';

class Story extends Component {
    static navigationOptions = {
        header:null,
    }

    gotoStory1 = () => {
        this.props.nagivation.navigate('story1');
    }

    gotoStory2 = () => {
        this.props.nagivation.navigate('story2');
    }

    gotoStory3 = () => {
        this.props.nagivation.navigate('story3');
    }

    gotoStory4 = () => {
        this.props.nagivation.navigate('story4');
    }

    gotoStory5 = () => {
        this.props.nagivation.navigate('story5');
    }
                                                                                                                                                                              
    gotoStory6 = () => {
        this.props.nagivation.navigate('story6');
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    goBack = () => {
        this.props.navigation.navigate('mainMenu');
    }

    

    render(){
        return(
           <ImageBackground style={styles.image} source={Flalok_BG} blurRadius={1}>

                <ViewPagerAndroid initialPage={0}>
                    <View key='1' style={{width: '100%', height: '100%', bakcgroundColor: 'red'}}>
                        </View>
                        <View key='2'>
                        </View>
                </ViewPagerAndroid>
                
                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={Back_icon}
                            style={styles.back}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={Home_icon}
                            style={styles.home}
                        ></Image>
                    </TouchableOpacity>
                </View>
           </ImageBackground>
        );
    }
}



export default withNavigation(Story);