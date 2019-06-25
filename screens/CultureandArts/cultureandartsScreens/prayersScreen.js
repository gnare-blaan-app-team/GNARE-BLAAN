import React,{Component} from 'react';
import { ImageBackground, TouchableOpacity, View, Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js';

import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import prayer1_icon from '../cultureandartsImages/prayers_1DasalSaPaggising.png';
import prayer2_icon from '../cultureandartsImages/prayers_2DasalBagoKumain.png';
import prayer3_icon from '../cultureandartsImages/prayers_3DasalBagoMatulog.png';
import cultureandarts_BG from '../../images/Flalok_BG.jpg';


class prayersScreen extends Component {
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
                        <View style={[styles.itemSize, {height: '70%', width: '30%'}]} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('prayer1Screen')} >
                                <Image style={styles.imageSizeStoryMenu} source={prayer1_icon} />
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.itemSize, {height: '70%', width: '30%', marginRight: '5%', marginLeft: '5%'}]} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('prayer2Screen')} >
                                <Image style={styles.imageSizeStoryMenu} source={prayer2_icon} />
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.itemSize, {height: '70%', width: '30%'}]} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('prayer3Screen')} >
                                <Image style={styles.imageSizeStoryMenu} source={prayer3_icon} />
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



export default withNavigation(prayersScreen);
