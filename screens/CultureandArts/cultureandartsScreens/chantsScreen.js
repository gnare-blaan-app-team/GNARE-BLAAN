import React,{Component} from 'react';
import { ImageBackground, TouchableOpacity, View, Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js';

import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import Chant1_icon from '../cultureandartsImages/Chant1.png';
import Chant2_icon from '../cultureandartsImages/Chant2.png';
import Chant3_icon from '../cultureandartsImages/Chant3.png';
import cultureandarts_BG from '../../images/Flalok_BG.jpg';

class chantsScreen extends Component {
    static navigationOptions = {
        header:null,
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    goBack = () => {
        this.props.navigation.navigate('cultureandarts');
    }

    

    render(){
        return(
           <ImageBackground style={styles.image} source={cultureandarts_BG} blurRadius={1}>
               <View style={styles.CultureandArtsContainer}>
                    <View style={styles.row}>
                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('')} >
                                <Image style={styles.imageSizeStoryMenu} source={Chant1_icon} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('')} >
                                <Image style={styles.imageSizeStoryMenu} source={Chant2_icon} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('')} >
                                <Image style={styles.imageSizeStoryMenu} source={Chant3_icon} />
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



export default withNavigation(chantsScreen);