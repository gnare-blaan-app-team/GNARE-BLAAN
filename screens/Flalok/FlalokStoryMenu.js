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
import MenuItem from '../MenuItem';

class FlalokStoryMenu extends Component {
    static navigationOptions = {
        header:null,
        cardStyle: {backgroundColor: 'transperent'},
    }

    gotoStory1 = () => {
        this.props.navigation.push('story1');
    }

    gotoStory2 = () => {
        this.props.navigation.push('story2');
    }

    gotoStory3 = () => {
        this.props.navigation.push('story3');
    }

    gotoStory4 = () => {
        this.props.navigation.push('story4');
    }

    gotoStory5 = () => {
        this.props.navigation.push('story5');
    }
                                                                                                                                                                              
    gotoStory6 = () => {
        this.props.navigation.push('story6');
    }

    gotoMainMenu = () => {
        this.props.navigation.push('mainMenu');
    }

    goBack = () => {
        this.props.navigation.push('mainMenu');
    }

    render(){
        return (
                <ImageBackground style={styles.image}
                source={require('../images/Flalok_BG.jpg')}
                >
                    <View style={styles.menuContainer}>
                        <MenuItem itemImage={Story1} goto={this.gotoLetters} />
                        <MenuItem itemImage={Story2} goto={this.gotoNumbers} />
                        <MenuItem itemImage={Story3} goto={this.gotoFlalok} />
                        <MenuItem itemImage={Story4} />
                        <MenuItem itemImage={Story5} goto={this.gotoCultureandArts} />
                        <MenuItem itemImage={Story6} goto={this.gotoVocabulary} />
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
        )
    }
}


export default withNavigation(FlalokStoryMenu);