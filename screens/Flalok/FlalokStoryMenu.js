import React,{Component} from 'react';
import { ImageBackground, TouchableOpacity, View, Image, Text} from 'react-native';
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
                    {/* <View style={styles.menuContainer}>
                        <MenuItem itemImage={Story1} goto={this.gotoStory1} />
                        <MenuItem itemImage={Story2} goto={this.gotoStory2} />
                        <MenuItem itemImage={Story3} goto={this.gotoStory3} />
                        <MenuItem itemImage={Story4} goto={this.gotoStory4} />
                        <MenuItem itemImage={Story5} goto={this.gotoStory5} />
                        <MenuItem itemImage={Story6} goto={this.gotoStory6} />
                    </View> */}
                        <View style={styles.CultureandArtsContainer}>
                            <View style={styles.row}>
                                <View style={[styles.itemSize, {height: '90%', marginLeft: '10%'}]} >
                                    <TouchableOpacity  onPress={this.gotoStory1} >
                                        <Image style={styles.imageSizeStoryMenu} source={Story1} />
                                    </TouchableOpacity>
                                </View>

                                <View style={[styles.itemSize, {height: '90%', marginLeft: '-5%', marginRight: '-5%'}]} >
                                    <TouchableOpacity  onPress={this.gotoStory2} >
                                        <Image style={styles.imageSizeStoryMenu} source={Story2} />
                                    </TouchableOpacity>
                                </View>

                                <View style={[styles.itemSize, {height: '90%', marginRight: '10%'}]} >
                                    <TouchableOpacity  onPress={this.gotoStory3} >
                                        <Image style={styles.imageSizeStoryMenu} source={Story2} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.row1}>
                                <View style={[styles.itemSize, {height: '90%', marginLeft: '10%'}]} >
                                    <TouchableOpacity  onPress={this.gotoStory4} >
                                        <Image style={styles.imageSizeStoryMenu} source={Story4} />
                                    </TouchableOpacity>
                                </View>

                                <View style={[styles.itemSize, {height: '90%', marginLeft: '-5%', marginRight: '-5%'}]} >
                                    <TouchableOpacity  onPress={this.gotoStory5} >
                                        <Image style={styles.imageSizeStoryMenu} source={Story5} />
                                    </TouchableOpacity>
                                </View>

                                <View style={[styles.itemSize, {height: '90%', marginRight: '10%'}]} >
                                    <TouchableOpacity  onPress={this.gotoStory6} >
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
        )
    }
}


export default withNavigation(FlalokStoryMenu);