import React,{Component} from 'react';
import { ImageBackground, TouchableOpacity, View, Image, Text} from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from './globalStyleSheet/globalStyleSheet.js';

import HomepageBackground from './images/GnareMain.gif';
import About_icon from "./images/Icon_About.png";
import Like_icon from "./images/Icon_Like.png";
import Share_icon from "./images/Icon_Share.png";

class Menuscreen extends Component{
    static navigationOptions = {
        header:null,
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    render(){
        return(
           <ImageBackground style={styles.image} source={HomepageBackground}>
               <View style={{position: "absolute", width:"100%", height:"100%"}}>
                   <TouchableOpacity  onPress={this.gotoMainMenu}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.HomePageContainer}>
                        <View style={styles.Hometouch}>
                            <TouchableOpacity  onPress={this.gotoMainMenu} />
                        </View>
                        <View style={styles.row}>
                            <View style={styles.HomePageItems} >
                                <TouchableOpacity  onPress={() => this.props.navigation.navigate('')} >
                                    <Image style={styles.imageSizeStoryMenu} source={Like_icon} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.HomePageItems} >
                                <TouchableOpacity  onPress={() => this.props.navigation.navigate('')} >
                                    <Image style={styles.imageSizeStoryMenu} source={Share_icon} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.HomePageItems} >
                                <TouchableOpacity  onPress={() => this.props.navigation.navigate('')} >
                                    <Image style={styles.imageSizeStoryMenu} source={About_icon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>    
           </ImageBackground>
        );
    }
}


export default withNavigation(Menuscreen);