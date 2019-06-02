import React,{Component} from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, View, Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from '../globalStyleSheet/globalStyleSheet.js';


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
           <ImageBackground style={styles.image} source={require('./flalokImages/Flalok_BG.jpg')}>

                <View style={styles.FlalokContainer}>
                    <View style={styles.row}>
                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('story1')} >
                                <Image style={styles.imageSizeStoryMenu} source={require('./flalokImages/Story1.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('story2')} >
                                <Image style={styles.imageSizeStoryMenu} source={require('./flalokImages/Story2.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('story3')} >
                                <Image style={styles.imageSizeStoryMenu} source={require('./flalokImages/Story3.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.row1}>
                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('story4')} >
                                <Image style={styles.imageSizeStoryMenu} source={require('./flalokImages/Story4.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('story5')} >
                                <Image style={styles.imageSizeStoryMenu} source={require('./flalokImages/Story5.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('story6')} >
                                <Image style={styles.imageSizeStoryMenu} source={require('./flalokImages/Story6.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                
                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={require('../images/Back_icon.png')}
                            style={styles.back}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={require('../images/Home_icon.png')}
                            style={styles.home}
                        ></Image>
                    </TouchableOpacity>
                </View>
           </ImageBackground>
        );
    }
}



export default withNavigation(FlalokStoryMenu);