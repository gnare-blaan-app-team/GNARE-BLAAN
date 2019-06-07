import React,{Component} from 'react';
import { ImageBackground, TouchableOpacity, View, Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from '../globalStyleSheet/globalStyleSheet.js';

import Back_icon from '../images/Back_icon.png';
import Home_icon from '../images/Home_icon.png';
import MembersFamily_icon from './vocabularyMenuImages/V1.png';
import BodyParts_icon from './vocabularyMenuImages/V2.png';
import FishingTools_icon from './vocabularyMenuImages/V3.png';
import FarmingTools_icon from './vocabularyMenuImages/V4.png';
import Mountains_icon from './vocabularyMenuImages/V5.png';
import HouseParts_icon from './vocabularyMenuImages/V6.png';
import KitchenUtensils_icon from './vocabularyMenuImages/V7.png';
import GreetingsHeavenlyBodies_icon from './vocabularyMenuImages/V8.png';
import Calendar_icon from './vocabularyMenuImages/V9.png';
import Kastifun_icon from './vocabularyMenuImages/V10-11.png';
import vocabulary_BG from './vocabularyMenuImages/vocabulary_BG.jpg';


class vocabularyMenu extends Component {
    static navigationOptions = {
        header:null,
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    goBack = () => {
        this.props.navigation.navigate('mainMenu');
    }

    

    render(){
        return(
           <ImageBackground style={styles.image} source={vocabulary_BG} blurRadius={1}>
                <View style={{position: 'absolute', top: '18%', width: '100%', height: '80%'}}>
                    <View style={{width: '100%', height: '30%', flexDirection: 'row', marginBottom: '2%', justifyContent: 'center'}}>
                        <View style={{width: '25%', height: '100%'}}>
                            <TouchableOpacity>
                                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={MembersFamily_icon} />
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '25%', height: '100%'}}>
                            <TouchableOpacity>
                                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={BodyParts_icon} />
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '25%', height: '100%'}}>
                            <TouchableOpacity>
                                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={FishingTools_icon} />
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '25%', height: '100%'}}>
                            <TouchableOpacity>
                                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={FarmingTools_icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{width: '100%', height: '30%', flexDirection: 'row', marginBottom: '2%', justifyContent: 'center'}}>
                        <View style={{width: '25%', height: '100%'}}>
                            <TouchableOpacity>
                                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={Mountains_icon} />
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '25%', height: '100%'}}>
                            <TouchableOpacity>
                                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={HouseParts_icon} />
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '25%', height: '100%'}}>
                            <TouchableOpacity>
                                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={KitchenUtensils_icon} />
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '25%', height: '100%'}}>
                            <TouchableOpacity>
                                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={GreetingsHeavenlyBodies_icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{width: '100%', height: '30%', flexDirection: 'row', marginBottom: 5, justifyContent: 'center'}}>
                        <View style={{width: '25%', height: '100%'}}>
                            <TouchableOpacity>
                                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={Calendar_icon} />
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '25%', height: '100%'}}>
                            <TouchableOpacity>
                                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={Kastifun_icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


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



export default withNavigation(vocabularyMenu);