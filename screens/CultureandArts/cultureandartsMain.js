import React,{Component} from 'react';
import { ImageBackground, TouchableOpacity, View, Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from '../globalStyleSheet/globalStyleSheet.js';

import Back_icon from '../images/Back_icon.png';
import Home_icon from '../images/Home_icon.png';
import Chants_icon from './cultureandartsImages/Chants.png';
import Kastifun_icon from './cultureandartsImages/Kastifun.png';
import Prayers_icon from './cultureandartsImages/Prayers.png';
import cultureandarts_BG from './cultureandartsImages/cultureandarts_BG.jpg';

class cultureandartsMain extends Component {
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
           <ImageBackground style={styles.image} source={cultureandarts_BG} blurRadius={1}>
                <View style={styles.CultureandArtsContainer}>
                    <View style={styles.row}>
                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('')} >
                                <Image style={styles.imageSizeStoryMenu} source={Chants_icon} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('')} >
                                <Image style={styles.imageSizeStoryMenu} source={Prayers_icon} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.row1}>
                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('')} >
                                <Image style={styles.imageSizeStoryMenu} source={Kastifun_icon} />
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



export default withNavigation(cultureandartsMain);