import React, { Component } from 'react';
import { View, ImageBackground, Text, Image, 
    PanResponder, TouchableOpacity, StatusBar, 
    Animated, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';

import Home_icon from '../../images/Home_icon.png';
import Back_icon from '../../images/Back_icon.png';
import imageBG from '../../images/BG.jpg';
import PencilIcon from '../../images/Pencil_icon.png';

import trace1 from '../numberTracingGIF/7_1.gif';
import trace2 from '../numberTracingGIF/7_2.gif';

import shaded_7_1 from '../numberTracingImage/shaded_7_1.png';
import shaded_7_2 from '../numberTracingImage/shaded_7_2.png';
import number from '../numberTracingImage/7.png';

import { numberDimension, boardDimension,
    scopeX, scopeY, trail } from '../numbersImport';

    import {sound} from '../../HomePage';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const shadedLine = [shaded_7_1, shaded_7_2];
const tracingLine = [trace1, trace2];

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

class SevenTracing extends Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        try {
            sound.setVolume(0.2);
            sound.play();
        } catch(error) {
        
        }
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
            shaded: shaded_7_1,
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
        },

        this.line1 = [{
            x: screenWidth * 0.43,
            y: screenHeight * 0.29,
        }, {
            x: screenWidth * 0.55,
            y: screenHeight * 0.29,
        }, {
            x: screenWidth * 0.54,
            y: screenHeight * 0.41,
        }, {
            x: screenWidth * 0.47,
            y: screenHeight * 0.67,
        }];

        this._val = {x: 0, y: 0};

        this.state.pan.addListener((value)=> this._val = value);

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gestureState) => true,
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
                    
                    }
                        this.setState({arrayMove: [...this.state.arrayMove, coordinate]});
                }                
            },
            onPanResponderRelease: (e, gesture) => {
                if(this.state.dot2) {
                    if(this.state.dot4) {
                        this.setState({arrayMove: [], showShaded: 1, shaded: shadedLine[1],
                            tracing: tracingLine[1], showTracing: 0});
                    } else {
                        this.setState({arrayMove: [], showShaded: 1, dot4: false, dot3: false, 
                            shaded: shadedLine[0],
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
        
            try {
                sound.setVolume(0.2);
                sound.play();
            } catch(error) {
            
            }
        
        this.props.navigation.navigate('mainMenu');
    }

    goBack = () => {
        this.clearBoard();
        
            try {
                sound.setVolume(0);
                sound.paused();
            } catch(error) {
            
            }
        
        this.props.navigation.navigate('numbers');
    }

    clearBoard = () => {
        this.setState({arrayMove: [], dot1: false, dot2: false, dot3: false, 
            dot4: false,
            showShaded: 0, showTracing: 1, tracing: trace1});
        this.setState({tracing: trace1});
    }

    pressed = () => {
        alert();
    }

    render() {

        let touchTrail = this.state.arrayMove.map((item, key) => {
            return(
                <View key = { key } {...this.panResponder.panHandlers}
                    style={[styles.trace, {left: item.x - trail, top: item.y - trail}]}>
                </View>
            )
        });

        StatusBar.setHidden(true);
        return (
            <ImageBackground source={imageBG} style={styles.image} >
                <Image source={imageBG} style={{position: 'absolute', width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>

                <View style={{position: 'absolute', 
                        width: boardDimension.width, height: boardDimension.height, top: '20%', left: '12.5%', backgroundColor: 'rgba(255, 255, 255, 0.000000001)'}}
                        {...this.panResponder.panHandlers} >
                    <View style={{position: 'absolute', width: numberDimension.width, 
                            height: numberDimension.height, 
                            top: '5%', left: '32%', opacity: this.state.showTracing,}}>
                    <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                            
                        {/* <View style={[styles.dot, {top: numberDimension.height * 0.1,
                            left: numberDimension.width * 0.15}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.1,
                            left: numberDimension.width * 0.5}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.1,
                            left: numberDimension.width * 0.8}]}></View> */}

                            {/*
                                this.line1 = [{
                                    x: numberDimension.width * 0.15,
                                    y: numberDimension.height * 0.1,
                                }, {
                                    x: numberDimension.width * 0.5,
                                    y: numberDimension.height * 0.1,
                                }, {
                                    x: numberDimension.width * 0.8,
                                    y: numberDimension.height * 0.1,
                                }, ];
                            */}

                        {/* <View style={[styles.dot, {top: numberDimension.height * 0.25,
                                left: numberDimension.width * 0.69}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.5,
                                left: numberDimension.width * 0.48}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.8,
                                left: numberDimension.width * 0.37}]}></View> */}
                        
                        {/*
                            this.line2 = [{
                                x: numberDimension.width * 0.7,
                                y: numberDimension.height * 0.25,
                            }, {
                                x: numberDimension.width * 0.49,
                                y: numberDimension.height * 0.5,
                            }, {
                                x: numberDimension.width * 0.38,
                                y: numberDimension.height * 0.85,
                            }, ];
                        */}
                            
                    </View>
                    <View style={{position: 'absolute', width: numberDimension.width, height: numberDimension.height, 
                                top: '5%', left: '32%', opacity: this.state.showShaded}}>
                        <Image source={this.state.shaded} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>
                </View>

                <View style={[styles.dot, {top: screenHeight * 0.29,
                    left: screenWidth * 0.43}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.29,
                    left: screenWidth * 0.55}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.41,
                    left: screenWidth * 0.54}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.67,
                    left: screenWidth * 0.47}]}></View>
                        
                    {/*
                        this.line1 = [{
                            x: screenWidth * 0.43,
                            y: screenHeight * 0.29,
                        }, {
                            x: screenWidth * 0.55,
                            y: screenHeight * 0.29,
                        }, {
                            x: screenWidth * 0.54,
                            y: screenHeight * 0.41,
                        }, {
                            x: screenWidth * 0.47,
                            y: screenHeight * 0.67,
                        }];
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

export default withNavigation(SevenTracing);