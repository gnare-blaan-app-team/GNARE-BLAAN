import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Image, 
    PanResponder, TouchableOpacity, StatusBar, 
    Animated, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';

import Home_icon from '../../images/Home_icon.png';
import Back_icon from '../../images/Back_icon.png';
import imageBG from '../../images/BG.jpg';
import PencilIcon from '../../images/Pencil_icon.png';

import shaded_2_1 from '../numberTracingImage/shaded_2_1.png';
import shaded_2_2 from '../numberTracingImage/shaded_2_2.png';

import trace1 from '../numberTracingGIF/2_1.gif';
import trace2 from '../numberTracingGIF/2_2.gif';

import { numberDimension, boardDimension,
    scopeX, scopeY, trail } from '../numbersImport';


import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

const shadedLine = [shaded_2_1, shaded_2_2];
const tracingLine = [trace1, trace2];

const velocityLimit = 1.2;
const velocityLimit2 = -1.5; 

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

class TwoTracing extends Component {
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
            shaded: shadedLine[0],
            tracing: tracingLine[0],
            lineIndex: 0,
            showShaded: 0,
            showTracing: 1,
            shadedIndex: 0,
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
            x: screenWidth * 0.435,
            y: screenHeight * 0.35,
        }, {
            x: screenWidth * 0.53,
            y: screenHeight * 0.3,
        }, {
            x: screenWidth * 0.59,
            y: screenHeight * 0.45,
        }, {
            x: screenWidth * 0.53,
            y: screenHeight * 0.575,
        }, {
            x: screenWidth * 0.47,
            y: screenHeight * 0.675,
        }, ];

        this.line2 = [{
            x: screenWidth * 0.47,
            y: screenHeight * 0.78,
        }, {
            x: screenWidth * 0.55,
            y: screenHeight * 0.78,
        }, ];

        this._val = {x: 0, y: 0};

        this.state.pan.addListener((value)=> this._val = value);

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture) => true, 
            onPanResponderMove: (e, gestureState)=> {
                //alert('move!');
                const coordinate = {
                    x: gestureState.moveX,
                    y: gestureState.moveY
                }

                if(gestureState.vx >= 2 || gestureState.vx <= -2) {
                    this.clearBoard();
                }
                else if(gestureState.vy >= 3 || gestureState.vy <= -3) {
                    this.clearBoard();

                } else {
                    if(!this.state.dot1) {
                        this.setState({dot1: 
                            ((gestureState.moveX >= this.line1[0].x - scopeX && gestureState.moveX <= this.line1[0].x + scopeX) && 
                            (gestureState.moveY >= this.line1[0].y - scopeY && gestureState.moveY <= this.line1[0].y + scopeY)) ? true : false});
                    
                    } else if(this.state.dot1 && !this.state.dot2) {
                        this.setState({dot2: 
                            ((gestureState.moveX >= this.line1[1].x - scopeX && gestureState.moveX <= this.line1[1].x + scopeX) && 
                            (gestureState.moveY >= this.line1[1].y - scopeY && gestureState.moveY <= this.line1[1].y + scopeY)) ? true : false});
                    
                    } else if(this.state.dot2 && !this.state.dot3) {
                        this.setState({dot3: 
                            ((gestureState.moveX >= this.line1[2].x - scopeX && gestureState.moveX <= this.line1[2].x + scopeX) && 
                            (gestureState.moveY >= this.line1[2].y - scopeY && gestureState.moveY <= this.line1[2].y + scopeY)) ? true : false});
                    
                    } else if(this.state.dot3 && !this.state.dot4) {
                        this.setState({dot4: 
                            ((gestureState.moveX >= this.line1[3].x - scopeX && gestureState.moveX <= this.line1[3].x + scopeX) && 
                            (gestureState.moveY >= this.line1[3].y - scopeY && gestureState.moveY <= this.line1[3].y + scopeY)) ? true : false});
                    
                    } else if(this.state.dot4 && !this.state.dot5) {
                        this.setState({dot5: 
                            ((gestureState.moveX >= this.line1[4].x - scopeX && gestureState.moveX <= this.line1[4].x + scopeX) && 
                            (gestureState.moveY >= this.line1[4].y - scopeY && gestureState.moveY <= this.line1[4].y + scopeY)) ? true : false});
                    
                    } else if(this.state.dot5 && !this.state.dot6) {
                        this.setState({dot6: 
                            ((gestureState.moveX >= this.line2[0].x - scopeX && gestureState.moveX <= this.line2[0].x + scopeX) && 
                            (gestureState.moveY >= this.line2[0].y - scopeY && gestureState.moveY <= this.line2[0].y + scopeY)) ? true : false});
                    
                    } else if(this.state.dot6 && !this.state.dot7) {
                        this.setState({dot7: 
                            ((gestureState.moveX >= this.line2[1].x - scopeX && gestureState.moveX <= this.line2[1].x + scopeX) && 
                            (gestureState.moveY >= this.line2[1].y - scopeY && gestureState.moveY <= this.line2[1].y + scopeY)) ? true : false});
                    
                    }
                    
                    this.setState({arrayMove: [...this.state.arrayMove, coordinate]});
                }         
            },
            onPanResponderRelease: (e, gesture) => {
                if(this.state.dot5) {
                    if(this.state.dot7) {
                        this.setState({arrayMove: [], showShaded: 1, shaded: shadedLine[1],
                            tracing: tracingLine[1], showTracing: 0, shadedIndex: 1});
                    } else {
                        this.setState({arrayMove: [], showShaded: 1, dot6: false, dot7: false, 
                            shaded: shadedLine[0], shadedIndex: 0,
                            tracing: tracingLine[1]});
                    }
                } else {
                    this.clearBoard();
                }
            }
        });
    }

    gotoMainMenu = () => {
        this.clearBoard();
        this.props.navigation.navigate('mainMenu');
    }

    goBack = () => {
        this.clearBoard();
        this.props.navigation.navigate('numbers');
    }

    clearBoard = () => {
        this.setState({arrayMove: [], dot1: false, dot2: false, dot3: false, 
            dot4: false, dot5: false, dot6: false, dot7: false,
            showShaded: 0, shaded: shadedLine[0], tracing: tracingLine[0], showTracing: 1});
    }

    render() {

        let touchTrail = this.state.arrayMove.map((item, key) => {
            return(
                <View key = { key } {...this.panResponder.panHandlers}
                    style={[styles.trace, {position: 'absolute', left: item.x - trail, top: item.y - trail}]}>
                </View>
            )
        });

        StatusBar.setHidden(true);
        return (
            <ImageBackground source={imageBG} style={styles.image} >
                <Image source={imageBG} style={{position: 'absolute', width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>

                <View style={{position: 'absolute', 
                        width: boardDimension.width, height: boardDimension.height, 
                        top: '20%', left: '12.5%', backgroundColor: 'rgba(255, 255, 255, 0.000000001)'}}
                        {...this.panResponder.panHandlers} >
                    <View style={{position: 'absolute', width: numberDimension.width, 
                                height: numberDimension.height, 
                                top: '5%', left: '34%', opacity: this.state.showTracing,}}>
                        <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>

                        {/* <View style={[styles.dot, {top: numberDimension.height * 0.2,
                            left: numberDimension.width * 0.2}]}>
                        </View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.09,
                            left: numberDimension.width * 0.5}]}>
                        </View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.25,
                            left: numberDimension.width * 0.8}]}>
                        </View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.5,
                            left: numberDimension.width * 0.65}]}>
                        </View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.67,
                            left: numberDimension.width * 0.39}]}>
                        </View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.8,
                            left: numberDimension.width * 0.2}]}>
                        </View> */}
                        

                        {/*
                            this.line1 = [{
                                x: numberDimension.width * 0.16,
                                y: numberDimension.height * 0.25,
                            }, {
                                x: numberDimension.width * 0.5,
                                y: numberDimension.height * 0.09,
                            }, {
                                x: numberDimension.width * 0.8,
                                y: numberDimension.height * 0.25,
                            }, {
                                x: numberDimension.width * 0.65,
                                y: numberDimension.height * 0.5,
                            }, {
                                x: numberDimension.width * 0.39,
                                y: numberDimension.height * 0.67,
                            }, {
                                x: numberDimension.width * 0.2,
                                y: numberDimension.height * 0.8,
                            }, ];
                        */}

                        {/* <View style={[styles.dot, {top: numberDimension.height * 0.87,
                            left: numberDimension.width * 0.4}]}>
                        </View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.87,
                            left: numberDimension.width * 0.6}]}>
                        </View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.87,
                            left: numberDimension.width * 0.8}]}>
                        </View> */}

                        {/*
                            this.line2 = [{
                                x: numberDimension.width * 0.4,
                                y: numberDimension.height * 0.87,
                            }, {
                                x: numberDimension.width * 0.6,
                                y: numberDimension.height * 0.87,
                            }, {
                                x: numberDimension.width * 0.8,
                                y: numberDimension.height * 0.87,
                            }, ];
                        */}
                    
                    </View>
                    <View style={{position: 'absolute', width: numberDimension.width, 
                                height: numberDimension.height, 
                                top: '5%', left: '34%', opacity: this.state.showShaded}}>
                        <Image source={this.state.shaded} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>
                </View>


                <View style={[styles.dot, {top: screenHeight * 0.35,
                    left: screenWidth * 0.435}]}>
                </View>
                <View style={[styles.dot, {top: screenHeight * 0.3,
                    left: screenWidth * 0.53}]}>
                </View>
                <View style={[styles.dot, {top: screenHeight * 0.45,
                    left: screenWidth * 0.59}]}>
                </View>
                <View style={[styles.dot, {top: screenHeight * 0.575,
                    left: screenWidth * 0.53}]}>
                </View>
                <View style={[styles.dot, {top: screenHeight * 0.675,
                    left: screenWidth * 0.47}]}>
                </View>

                {/*
                    this.line1 = [{
                        x: screenWidth * 0.435,
                        y: screenHeight * 0.35,
                    }, {
                        x: screenWidth * 0.53,
                        y: screenHeight * 0.3,
                    }, {
                        x: screenWidth * 0.59,
                        y: screenHeight * 0.45,
                    }, {
                        x: screenWidth * 0.53,
                        y: screenHeight * 0.575,
                    }, {
                        x: screenWidth * 0.47,
                        y: screenHeight * 0.675,
                    }, ];
                */}

                <View style={[styles.dot, {top: screenHeight * 0.78,
                    left: screenWidth * 0.47}]}>
                </View>
                <View style={[styles.dot, {top: screenHeight * 0.78,
                    left: screenWidth * 0.55}]}>
                </View>

                {/*
                    this.line2 = [{
                        x: screenWidth * 0.47,
                        y: screenHeight * 0.78,
                    }, {
                        x: screenWidth * 0.55,
                        y: screenHeight * 0.78,
                    }, ];
                */}

                {touchTrail}


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

export default withNavigation(TwoTracing);