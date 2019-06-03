import React,{Component} from 'react';
import { ImageBackground, TouchableOpacity, View, Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from '../globalStyleSheet/globalStyleSheet.js';

import Back_icon from '../images/Back_icon.png';
import Home_icon from '../images/Home_icon.png';
import Story1 from './flalokImages/Story1.png';
import Story2 from './flalokImages/Story2.png';
import Story3 from './flalokImages/Story3.png';
import Story4 from './flalokImages/Story4.png';
import Story5 from './flalokImages/Story5.png';
import Story6 from './flalokImages/Story6.png';
import Flalok_BG from './flalokImages/Flalok_BG.jpg';

class FlalokStoryMenu extends Component {
    static navigationOptions = {
        header:null,
    }

    gotoStory1 = () => {
        this.props.nagivation.navigate('story1');
    }

    gotoStory2 = () => {
        this.props.nagivation.navigate('story2');
    }

    gotoStory3 = () => {
        this.props.nagivation.navigate('story3');
    }

    gotoStory4 = () => {
        this.props.nagivation.navigate('story4');
    }

    gotoStory5 = () => {
        this.props.nagivation.navigate('story5');
    }
                                                                                                                                                                              
    gotoStory6 = () => {
        this.props.nagivation.navigate('story6');
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    goBack = () => {
        this.props.navigation.navigate('mainMenu');
    }

    render(){
        return(
           <ImageBackground style={styles.image} source={Flalok_BG}>

                <View style={styles.FlalokContainer}>
                    <View style={styles.row}>
                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('story1')} >
                                <Image style={styles.imageSizeStoryMenu} source={Story1} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('story2')} >
                                <Image style={styles.imageSizeStoryMenu} source={Story2} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('story3')} >
                                <Image style={styles.imageSizeStoryMenu} source={Story3} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.row1}>
                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('story4')} >
                                <Image style={styles.imageSizeStoryMenu} source={Story4} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('story5')} >
                                <Image style={styles.imageSizeStoryMenu} source={Story5} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('story6')} >
                                <Image style={styles.imageSizeStoryMenu} source={Story6} />
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



export default withNavigation(FlalokStoryMenu);