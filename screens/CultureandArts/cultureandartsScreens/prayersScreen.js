import React,{Component} from 'react';
import { ImageBackground, TouchableOpacity, View, Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js';

import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import DasalBagoMatulog_icon from '../cultureandartsImages/1DasalBagoMatulog.png';
import DasalNgPaglingap_icon from '../cultureandartsImages/2DasalNgPaglingap.png';
import DasalNgPagsasalamat_icon from '../cultureandartsImages/3DasalNgPasasalamat.png';
import cultureandarts_BG from '../cultureandartsImages/cultureandarts_BG.jpg';


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
                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('dasalbagomatulogPlay')} >
                                <Image style={styles.imageSizeStoryMenu} source={DasalBagoMatulog_icon} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('')} >
                                <Image style={styles.imageSizeStoryMenu} source={DasalNgPaglingap_icon} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('')} >
                                <Image style={styles.imageSizeStoryMenu} source={DasalNgPagsasalamat_icon} />
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