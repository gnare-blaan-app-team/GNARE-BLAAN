import React,{Component} from 'react';
import { ImageBackground, TouchableOpacity, View, Image, Linking} from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js';

import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import Chant1_icon from '../cultureandartsImages/chant_1DasalBagoMatulog.png';
import Chant2_icon from '../cultureandartsImages/chant_2DasalNgPaglingap.png';
import Chant3_icon from '../cultureandartsImages/chant_3DasalNgPasasalamat.png';
import cultureandarts_BG from '../../images/Flalok_BG.jpg';
import NextIcon from '../../images/Next_Icon.png';
import PrevIcon from '../../images/Prev_Icon.png';

class chantsScreen extends Component {
    static navigationOptions = {
        header:null,
    }

    constructor(props) {
        super(props);
        this.state = {
            nextTop: '45%',
            prevTop: '1000%',
            top3: '1000%'
        }
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    goBack = () => {
        this.props.navigation.navigate('cultureandarts');
    }

    gotoNextPage = () => {
        this.setState({
            nextTop: '1000%',
            prevTop: '45%',
            top1:'1000%',
            top2: '1000%',
            top3:'27%',
        })
    }

    gotoPrevPage = () => {
        this.setState({
            nextTop: '45%',
            prevTop: '1000%',
            top1: '27%',
            top2: '27%',
            top3: '1000%',
        })
    }

    render(){
        return(
           <ImageBackground style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                resizeMode: 'contain',
                flexDirection: 'row',
           }} source={cultureandarts_BG} blurRadius={1}>
                        <View style={{
                        position: 'absolute',
                        top: '15%',
                        left:'15%',
                        width: '33%',
                        height: '40%',
                        }} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('chant1Screen')} >
                                <Image style={styles.imageSizeStoryMenu} source={Chant1_icon} />
                            </TouchableOpacity>
                        </View>

                        <View style={{
                        position: 'absolute',
                        top: '15%',
                        left: '53%',
                        width: '33%',
                        height: '40%',
                        }} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('chant2Screen')} >
                                <Image style={styles.imageSizeStoryMenu} source={Chant2_icon} />
                            </TouchableOpacity>
                        </View>
                
                        <View style={{
                        position:'absolute',
                        width: '35%',
                        height: '40%',
                        top:'55%',
                        }} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('chant3Screen')} >
                                <Image style={styles.imageSizeStoryMenu} source={Chant3_icon} />
                            </TouchableOpacity>
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