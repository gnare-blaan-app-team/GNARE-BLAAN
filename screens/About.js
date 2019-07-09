import React,{Component} from 'react';
import { ImageBackground, TouchableOpacity, View, Image, Text} from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from './globalStyleSheet/globalStyleSheet.js';

import AboutBackground from './images/About.jpg';

class About extends Component{

    static navigationOptions = {
        header:null,
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    gotoHome = () => {
        this.props.navigation.navigate('home');
    }

    render(){
        return(
            <ImageBackground style={styles.image} source={AboutBackground}>
                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoHome}>
                        <Image
                            source={require('./images/Home_icon.png')}
                            style={styles.home}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}


export default withNavigation(About);