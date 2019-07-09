import React,{Component} from 'react';
import { ImageBackground, TouchableOpacity, View, Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js';

import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import Kastifun1_icon from '../cultureandartsImages/kastifun_1Faglung.png';
import Kastifun2_icon from '../cultureandartsImages/kastifun_2FaglungGong.png';
import Kastifun3_icon from '../cultureandartsImages/kastifun_3BlaanDance.png';
import Kastifun4_icon from '../cultureandartsImages/kastifun_4BlaanDance.png';
import Kastifun5_icon from '../cultureandartsImages/kastifun_5BlaanDance.png';
import cultureandarts_BG from '../../images/Flalok_BG.jpg';


class kastifunScreen extends Component {
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
                        <View style={[styles.itemSize, {height: '90%', width: '30%'}]} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('kastifun1Screen')} >
                                <Image style={styles.imageSizeStoryMenu} source={Kastifun1_icon} />
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.itemSize, {height: '90%', width: '30%'}]} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('kastifun2Screen')} >
                                <Image style={styles.imageSizeStoryMenu} source={Kastifun2_icon} />
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.itemSize, {height: '90%', width: '30%'}]} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('kastifun3Screen')} >
                                <Image style={styles.imageSizeStoryMenu} source={Kastifun3_icon} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.row1}>
                        <View style={[styles.itemSize, {height: '90%', width: '30%'}]} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('kastifun4Screen')} >
                                <Image style={styles.imageSizeStoryMenu} source={Kastifun4_icon} />
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.itemSize, {height: '90%', width: '30%'}]} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('kastifun5Screen')} >
                                <Image style={styles.imageSizeStoryMenu} source={Kastifun5_icon} />
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



export default withNavigation(kastifunScreen);