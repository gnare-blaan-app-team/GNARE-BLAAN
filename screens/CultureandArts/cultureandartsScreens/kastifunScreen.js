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
import NextIcon from '../../images/Next_Icon.png';
import PrevIcon from '../../images/Prev_Icon.png';

class kastifunScreen extends Component {
    static navigationOptions = {
        header:null,
    }

    constructor(props){
        super(props)
        this.state = {
            top1: '20%',
            top2:'1000%',
            top3: '1000%',//-25%
            nextTop:'45%',
            prevTop:'1000%',
            get:0,
        }
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    goBack = () => {    
        this.props.navigation.goBack();
    }

    gotoNextPage = (index) => {
        if(index == 1){
            this.setState({
                nextTop: '45%',
                prevTop: '45%',
                top1: '1000%',
                top2: '20%',
                
            });
        }
        if(index == 2){
            this.setState({
                nextTop: '1000%',
                prevTop:'45%',
                top2: '1000%',
                top3: '-25%',
            });
        }
        
    }

    gotoPrevPage = (index) => {
        if(index == 1){
            this.setState({
                prevTop: '45%',
                nextTop: '45%',
                top1: '1000%',
                top2: '20%',
                top3: '1000%',
            });
        }
        if (index == 0) {
            this.setState({
                prevTop: '1000%',
                nextTop: '45%',
                top1: '20%',
                top2: '1000%',
                top3: '1000%',
            });
        }
    }


    render(){
        return(
           <ImageBackground style={styles.image} source={cultureandarts_BG} blurRadius={1}>
                <View style={styles.CultureandArtsContainer}>
                    <View style={{
                        position: 'absolute',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '100%',
                        height: '50%',
                        top:this.state.top1,
                    }}>
                        <View style={{
                            width: '45%',
                            height: '150%',
                        }} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('kastifun1Screen')} >
                                <Image style={styles.imageSizeStoryMenu} source={Kastifun1_icon} />
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            width: '45%',
                            height: '150%',
                        }} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('kastifun2Screen')} >
                                <Image style={styles.imageSizeStoryMenu} source={Kastifun2_icon} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{
                        position: 'absolute',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '100%',
                        height: '50%',
                        top: this.state.top2,
                    }}>
                        <View style={{
                            width: '45%',
                            height: '150%',
                        }} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('kastifun4Screen')} >
                                <Image style={styles.imageSizeStoryMenu} source={Kastifun4_icon} />
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            width: '45%',
                            height: '150%',
                        }} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('kastifun5Screen')} >
                                <Image style={styles.imageSizeStoryMenu} source={Kastifun5_icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        position:'absolute',
                        top:this.state.top3,
                        left:'30%',
                        width: '45%',
                        height: '150%',
                        }} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('kastifun3Screen')} >
                                <Image style={styles.imageSizeStoryMenu} source={Kastifun3_icon} />
                            </TouchableOpacity>
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
                <View style={{
                    position: 'absolute',
                    left: '90%',
                    top: this.state.nextTop,
                    width: '12%',
                    height: '24%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.state.get = this.state.get + 1;
                        this.gotoNextPage(this.state.get);
                    }}>
                        <Image
                            source={NextIcon}
                            style={styles.next}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    left: '1%',
                    top: this.state.prevTop,
                    width: '12%',
                    height: '24%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.state.get = this.state.get - 1;
                        this.gotoPrevPage(this.state.get);
                    }}>
                        <Image
                            source={PrevIcon}
                            style={styles.prev}
                        ></Image>
                    </TouchableOpacity>
                </View>
           </ImageBackground>
        );
    }
}



export default withNavigation(kastifunScreen);