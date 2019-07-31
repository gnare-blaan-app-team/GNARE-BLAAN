import React,{Component} from 'react';
import { ImageBackground, TouchableOpacity, View, Image, Text} from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from '../globalStyleSheet/globalStyleSheet.js';

import GnareIcon from '../Games/gameImages/GnareMain.png'
import Home_icon from '../images/Home_icon.png';
import Story1 from './flalokImages/Story1.png';
import Story2 from './flalokImages/Story2.png';
import Story3 from './flalokImages/Story3.png';
import Story4 from './flalokImages/Story4.png';
import Story5 from './flalokImages/Story5.png';
import Story6 from './flalokImages/Story6.png';
import Flalok_BG from './flalokImages/Flalok_BG.jpg';
import MenuItem from '../MenuItem';

import NextIcon from '../images/Next_Icon.png';
import PrevIcon from '../images/Prev_Icon.png';

class FlalokStoryMenu extends Component {
    static navigationOptions = {
        header:null,
        cardStyle: {backgroundColor: 'transperent'},
    }

    constructor(props){
        super(props);
        this.state = {
            top1: '20%',
            top2: '20%',
            top3: '1000%',
            top4: '1000%',
            top5: '1000%',
            top6: '1000%',
            nextTop:'45%',
            prevTop:'1000%',
            get:0,
        }
    }

    gotoHome = () => {
        this.props.navigation.navigate('home');
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

    gotoNextPage = (index) => {
        if (index == 1) {
            this.setState({
                nextTop: '45%',
                prevTop: '45%',
                top1: '1000%',
                top2: '1000%',
                top3: '20%',
                top4: '20%',

            });
        }
        if (index == 2) {
            this.setState({
                nextTop: '1000%',
                prevTop: '45%',
                top3: '1000%',
                top4: '1000%',
                top5: '20%',
                top6: '20%',
            });
        }

    }

    gotoPrevPage = (index) => {
        if (index == 1) {
            this.setState({
                prevTop: '45%',
                nextTop: '45%',
                top3: '20%',
                top4: '20%',
                top5: '1000%',
                top6: '1000%',
            });
        }
        if (index == 0) {
            this.setState({
                prevTop: '1000%',
                nextTop: '45%',
                top1: '20%',
                top2: '20%',
                top3: '1000%',
                top4: '1000%',
            });
        }
    }

    render(){
        return (
                <ImageBackground style={styles.image}
                source={require('../images/Flalok_BG.jpg')}
                >
                    <View style={styles.backContainer}>
                        <TouchableOpacity onPress={this.gotoHome}>
                            <Image
                                source={GnareIcon}
                                style={styles.back}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={styles.menuContainer}>
                        <MenuItem itemImage={Story1} goto={this.gotoStory1} />
                        <MenuItem itemImage={Story2} goto={this.gotoStory2} />
                        <MenuItem itemImage={Story3} goto={this.gotoStory3} />
                        <MenuItem itemImage={Story4} goto={this.gotoStory4} />
                        <MenuItem itemImage={Story5} goto={this.gotoStory5} />
                        <MenuItem itemImage={Story6} goto={this.gotoStory6} />
                    </View> */}
                        <View style={{
                    position: 'absolute',
                    width: '80%',
                    height: '70%',
                    top:'10%'
                        }}>
                    <View style={{
                        position:'absolute',
                        top:this.state.top1,
                        left:'2%',
                        width: '45%',
                        height: '90%',
                        
                    }} >
                                    <TouchableOpacity  onPress={this.gotoStory1} >
                                        <Image style={styles.imageSizeStoryMenu} source={Story1} />
                                    </TouchableOpacity>
                                </View>

                    <View style={{
                        position: 'absolute',
                        top: this.state.top2,
                        left:'50%',
                        width: '45%',
                        height: '90%',
                    }} >
                                    <TouchableOpacity  onPress={this.gotoStory2} >
                                        <Image style={styles.imageSizeStoryMenu} source={Story2} />
                                    </TouchableOpacity>
                                </View>

                    <View style={{
                        position: 'absolute',
                        top: this.state.top3,
                        left: '2%',
                        width: '45%',
                        height: '90%',
                    }} >
                                    <TouchableOpacity  onPress={this.gotoStory3} >
                                        <Image style={styles.imageSizeStoryMenu} source={Story3} />
                                    </TouchableOpacity>
                                </View>
    

                    <View style={{
                        position: 'absolute',
                        top: this.state.top4,
                        left: '50%',
                        width: '45%',
                        height: '90%',
                    }} >
                                    <TouchableOpacity  onPress={this.gotoStory4} >
                                        <Image style={styles.imageSizeStoryMenu} source={Story4} />
                                    </TouchableOpacity>
                                </View>

                    <View style={{
                        position: 'absolute',
                        top:this.state.top5,
                        left: '2%',
                        width: '45%',
                        height: '90%',
                    }} >
                                    <TouchableOpacity  onPress={this.gotoStory5} >
                                        <Image style={styles.imageSizeStoryMenu} source={Story5} />
                                    </TouchableOpacity>
                                </View>

                    <View style={{
                        position: 'absolute',
                        top: this.state.top6,
                        left: '50%',
                        width: '45%',
                        height: '90%',
                    }} >
                                    <TouchableOpacity  onPress={this.gotoStory6} >
                                        <Image style={styles.imageSizeStoryMenu} source={Story6} />
                                    </TouchableOpacity>
                                </View>
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
        )
    }
}


export default withNavigation(FlalokStoryMenu);