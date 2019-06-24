import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Image, 
    PanResponder, TouchableOpacity, StatusBar, 
    Animated, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';

import Home_icon from '../../images/Home_icon.png';
import Back_icon from '../../images/Back_icon.png';
import imageBG from '../../images/BG.jpg';
import PencilIcon from '../../images/Pencil_icon.png';

import trace1 from '../numberTracingGIF/6_1.gif';
import shaded_6_1 from '../numberTracingImage/shaded_6_1.png';
import numberSix from '../numberTracingImage/6.png';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const scope = 30;

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

class SixTracing extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this. state = {
            pan: new Animated.ValueXY(),
            moveX: 0,
            moveY: 0,
            arrayMove: [],
            touchLength: 0,

            // Tracing State
            shaded: shaded_6_1,
            tracing: trace1,
            lineIndex: 0,
            showShaded: 0,
            showTracing: 1,
            dot1: false,
            dot2: false,
            dot3: false,
            dot4: false,
            dot5: false,
            dot6: false,
            dot7: false,
            dot8: false,
            dot9: false,
        },

        this.line1 = [{
            x: screenWidth * 0.58,
            y: screenHeight * 0.35,
        }, {
            x: screenWidth * 0.5,
            y: screenHeight * 0.3,
        }, {
            x: screenWidth * 0.41,
            y: screenHeight * 0.45,
        }, {
            x: screenWidth * 0.41,
            y: screenHeight * 0.65,
        }, {
            x: screenWidth * 0.52,
            y: screenHeight * 0.79,
        }, {
            x: screenWidth * 0.59,
            y: screenHeight * 0.65,
        }, {
            x: screenWidth * 0.54,
            y: screenHeight * 0.5,
        }, {
            x: screenWidth * 0.53,
            y: screenHeight * 0.48,
        }, ];

        this._val = {x: 0, y: 0};

        this.state.pan.addListener((value)=> this._val = value);

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture) => true, 
            onPanResponderMove: (e, gesture)=> {
                //alert('move!');
                const coordinate = {
                    x: gesture.moveX,
                    y: gesture.moveY
                }

                if(gesture.vx >= 1.2 || gesture.vx <= -1.2) {
                    this.setState({arrayMove: [],
                        touchLength: 0});
                }
                else if(gesture.vy >= 1.5 || gesture.vy <= -1.5) {
                    this.setState({arrayMove: [],
                        touchLength: 0});
                } else {
                    this.setState({arrayMove: [...this.state.arrayMove, coordinate],
                        touchLength: this.touchLength + 1});
                    
                    if(!this.state.dot1) {
                        if(gesture.moveX >= this.line1[0].x - scope && gesture.moveX <= this.line1[0].x + scope) {
                            if(gesture.moveY >= this.line1[0].y - scope && gesture.moveY <= this.line1[0].y + scope) {
                                //alert('Dot1');
                                this.setState({dot1: true});
                            }
                        }
                    }

                    if(this.state.dot1 && !this.state.dot2) {
                        if(gesture.moveX >= this.line1[1].x - scope && gesture.moveX <= this.line1[1].x + scope) {
                            if(gesture.moveY >= this.line1[1].y - scope && gesture.moveY <= this.line1[1].y + scope) {
                                //alert('Dot2');
                                this.setState({dot2: true});
                            }
                        }
                    }

                    if(this.state.dot2 && !this.state.dot3) {
                        if(gesture.moveX >= this.line1[2].x - scope && gesture.moveX <= this.line1[2].x + scope) {
                            if(gesture.moveY >= this.line1[2].y - scope && gesture.moveY <= this.line1[2].y + scope) {
                                //alert('Dot3');
                                this.setState({dot3: true});
                            }
                        }
                    }

                    if(this.state.dot3 && !this.state.dot4) {
                        if(gesture.moveX >= this.line1[3].x - scope && gesture.moveX <= this.line1[3].x + scope) {
                            if(gesture.moveY >= this.line1[3].y - scope && gesture.moveY <= this.line1[3].y + scope) {
                                //alert('Dot4');
                                this.setState({dot4: true});
                            }
                        }
                    }

                    if(this.state.dot4 && !this.state.dot5) {
                        if(gesture.moveX >= this.line1[4].x - scope && gesture.moveX <= this.line1[4].x + scope) {
                            if(gesture.moveY >= this.line1[4].y - scope && gesture.moveY <= this.line1[4].y + scope) {
                                //alert('Dot5');
                                this.setState({dot5: true});
                            }
                        }
                    }

                    if(this.state.dot5 && !this.state.dot6) {
                        if(gesture.moveX >= this.line1[5].x - scope && gesture.moveX <= this.line1[5].x + scope) {
                            if(gesture.moveY >= this.line1[5].y - scope && gesture.moveY <= this.line1[5].y + scope) {
                                //alert('Dot6');
                                this.setState({dot6: true});
                            }
                        }
                    }

                    if(this.state.dot6 && !this.state.dot7) {
                        if(gesture.moveX >= this.line1[6].x - scope && gesture.moveX <= this.line1[6].x + scope) {
                            if(gesture.moveY >= this.line1[6].y - scope && gesture.moveY <= this.line1[6].y + scope) {
                                //alert('Dot7');
                                this.setState({dot7: true});
                            }
                        }
                    }

                    if(this.state.dot7 && !this.state.dot8) {
                        if(gesture.moveX >= this.line1[7].x - scope && gesture.moveX <= this.line1[7].x + scope) {
                            if(gesture.moveY >= this.line1[7].y - scope && gesture.moveY <= this.line1[7].y + scope) {
                                //alert('Dot8');
                                this.setState({dot8: true});
                            }
                        }
                    }

                    // if(this.state.dot8 && !this.state.dot9) {
                    //     if(gesture.moveX >= this.line1[8].x - scope && gesture.moveX <= this.line1[8].x + scope) {
                    //         if(gesture.moveY >= this.line1[8].y - scope && gesture.moveY <= this.line1[8].y + scope) {
                    //             //alert('Dot9');
                    //             this.setState({dot9: true});
                    //         }
                    //     }
                    // }
                }                
            },
            onPanResponderRelease: (e, gesture) => {
                if(this.state.dot8) {
                    this.setState({arrayMove: [], showShaded: 1, showTracing: 0, tracing: numberSix});
                } else {
                    this.setState({arrayMove: [], dot1: false, dot2: false, dot3: false, dot4: false,
                        dot5: false, dot6: false, dot7: false, dot8: false, dot9: false, showTracing: 1, 
                        showShaded: 0, tracing: trace1});
                }
            }
        });
    }

    gotoMainMenu = () => {
        this.clearBoard();
        this.props.navigation.navigate('home');
    }

    goBack = () => {
        this.clearBoard();
        this.props.navigation.navigate('numbers');
    }

    clearBoard = () => {
        this.setState({arrayMove: [], dot1: false, dot2: false, dot3: false, 
            dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, 
            dot9: false, showShaded: 0, showTracing: 1, tracing: numberSix});
        this.setState({tracing: trace1});
    }

    render() {

        let touchTrail = this.state.arrayMove.map((item, key) => {
            return(
                <View key = { key } {...this.panResponder.panHandlers}
                    style={[styles.trace, {position: 'absolute', left: item.x - scope, top: item.y - scope}]}>
                </View>
            )
        });

        StatusBar.setHidden(true);
        return (
            <ImageBackground source={imageBG} style={styles.image} >
                <Image source={imageBG} style={{position: 'absolute', width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>

                <View style={{position: 'absolute', 
                        width: '75%', height: '70%', top: '20%', left: '12.5%', backgroundColor: 'rgba(255, 255, 255, 0.000000001)'}}
                        {...this.panResponder.panHandlers} >
                    <View style={{position: 'absolute', width: '35%', height: '90%', 
                                top: '5%', left: '32%', opacity: this.state.showTracing,}}>
                        <Image source={trace1} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>
                    <View style={{position: 'absolute', width: '35%', height: '90%', 
                                top: '5%', left: '32%', opacity: this.state.showShaded}}>
                        <Image source={shaded_6_1} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>
                </View>
                {touchTrail}


                {/* <View style={[styles.dot, {top: screenHeight * 0.35,
                        left: screenWidth * 0.58}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.3,
                        left: screenWidth * 0.5}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.45,
                        left: screenWidth * 0.42}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.65,
                        left: screenWidth * 0.42}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.79,
                        left: screenWidth * 0.52}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.65,
                        left: screenWidth * 0.59}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.5,
                        left: screenWidth * 0.54}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.53,
                        left: screenWidth * 0.48}]}></View> */}

                {/*
                    this.line1 = [{
                        x: screenWidth * 0.58,
                        y: screenHeight * 0.35,
                    }, {
                        x: screenWidth * 0.5,
                        y: screenHeight * 0.3,
                    }, {
                        x: screenWidth * 0.41,
                        y: screenHeight * 0.45,
                    }, {
                        x: screenWidth * 0.41,
                        y: screenHeight * 0.65,
                    }, {
                        x: screenWidth * 0.52,
                        y: screenHeight * 0.79,
                    }, {
                        x: screenWidth * 0.59,
                        y: screenHeight * 0.65,
                    }, {
                        x: screenWidth * 0.54,
                        y: screenHeight * 0.5,
                    }, {
                        x: screenWidth * 0.53,
                        y: screenHeight * 0.48,
                    }, ];
                */}

                {/* Pencil Button */}
                <View style={{position: 'absolute', left: '12%', 
                    top: '22%', width: '7%', height: '22%',}} >
                    <TouchableOpacity onPress={this.clearBoard}>
                        <Image
                        source={PencilIcon}
                            style={styles.containImage}
                        ></Image>
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
        )
    }
}

export default withNavigation(SixTracing);