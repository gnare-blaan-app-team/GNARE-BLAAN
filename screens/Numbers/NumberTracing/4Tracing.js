import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Image, 
    PanResponder, TouchableOpacity, StatusBar, 
    Animated, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';

import Home_icon from '../../images/Home_icon.png';
import Back_icon from '../../images/Back_icon.png';
import imageBG from '../../images/BG.jpg';
import PencilIcon from '../../images/Pencil_icon.png';

import trace1 from '../numberTracingGIF/4_1.gif';
import trace2 from '../numberTracingGIF/4_2.gif';
import trace3 from '../numberTracingGIF/4_3.gif';

import shaded_4_1 from '../numberTracingImage/shaded_4_1.png';
import shaded_4_2 from '../numberTracingImage/shaded_4_2.png';
import shaded_4_3 from '../numberTracingImage/shaded_4_3.png';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const shadedLine = [shaded_4_1, shaded_4_2, shaded_4_3];
const tracingLine = [trace1, trace2, trace3];

const boardDimension = {
    width: screenWidth * 0.75,
    height: screenHeight * 0.7,
};

const numberDimension = {
    width: boardDimension.width * 0.35,
    height: boardDimension.height * 0.9,
}

const scope = 50;
const trail = 22.5;
const velocityLimit = 1.2;
const velocityLimit2 = -1.5; 

class FourTracing extends Component {
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
            tracedLine1: true,
            tracedLine2: false,
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
            x: numberDimension.width * 0.65,
            y: numberDimension.height * 0.12,
        }, {
            x: numberDimension.width * 0.45,
            y: numberDimension.height * 0.32,
        }, {
            x: numberDimension.width * 0.19,
            y: numberDimension.height * 0.6,
        }, ];

        this.line2 = [{
            x: numberDimension.width * 0.27,
            y: numberDimension.height * 0.67,
        }, {
            x: numberDimension.width * 0.5,
            y: numberDimension.height * 0.67,
        }, {
            x: numberDimension.width * 0.75,
            y: numberDimension.height * 0.67,
        }, ];


        this.line3 = [{
            x: numberDimension.width * 0.68,
            y: numberDimension.height * 0.3,
        }, {
            x: numberDimension.width * 0.68,
            y: numberDimension.height * 0.55,
        }, {
            x: numberDimension.width * 0.68,
            y: numberDimension.height * 0.8,
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

                if(gestureState.vx >= 1.2 || gestureState.vx <= -1.2) {
                    this.setState({arrayMove: []});
                }
                else if(gestureState.vy >= 1.5 || gestureState.vy <= -1.5) {
                    this.setState({arrayMove: []});
                }  else {
                    this.setState({arrayMove: [...this.state.arrayMove, coordinate],
                        touchLength: this.touchLength + 1});

                    // Dot 1
                    if(!this.state.dot1) {
                        //alert('Dot1');
                        if(e.nativeEvent.locationX >= this.line1[0].x - scope && e.nativeEvent.locationX <= this.line1[0].x + scope) {
                            if(e.nativeEvent.locationY >= this.line1[0].y - scope && e.nativeEvent.locationY <= this.line1[0].y + scope) {
                                //alert('Dot1');
                                this.setState({dot1: true});
                            }
                        }
                    }
                    
                    // Dot 2
                    if(this.state.dot1 && !this.state.dot2) {
                        if(e.nativeEvent.locationX >= this.line1[1].x - scope && e.nativeEvent.locationX <= this.line1[1].x + scope) {
                            if(e.nativeEvent.locationY >= this.line1[1].y - scope && e.nativeEvent.locationY <= this.line1[1].y + scope) {
                                //alert('Dot2');
                                this.setState({dot2: true});
                            }
                        }
                    }
                    
                    // Dot 3
                    if(this.state.dot2 && !this.state.dot3) {
                        if(e.nativeEvent.locationX >= this.line1[2].x - scope && e.nativeEvent.locationX <= this.line1[2].x + scope) {
                            if(e.nativeEvent.locationY >= this.line1[2].y - scope && e.nativeEvent.locationY <= this.line1[2].y + scope) {
                                //alert('Dot3');
                                this.setState({dot3: true});
                            }
                        }
                    }

                    // Dot 4
                    if(this.state.dot3 && !this.state.dot4) {
                        if(e.nativeEvent.locationX >= this.line2[0].x - scope && e.nativeEvent.locationX <= this.line2[0].x + scope) {
                            if(e.nativeEvent.locationY >= this.line2[0].y - scope && e.nativeEvent.locationY <= this.line2[0].y + scope) {
                                //alert('Dot2');
                                this.setState({dot4: true});
                            }
                        }
                    }
                    
                    // Dot 5
                    if(this.state.dot4 && !this.state.dot5) {
                        if(e.nativeEvent.locationX >= this.line2[1].x - scope && e.nativeEvent.locationX <= this.line2[1].x + scope) {
                            if(e.nativeEvent.locationY >= this.line2[1].y - scope && e.nativeEvent.locationY <= this.line2[1].y + scope) {
                                //alert('Dot2');
                                this.setState({dot5: true});
                            }
                        }
                    }
                    
                    // Dot 6
                    if(this.state.dot5 && !this.state.dot6) {
                        if(e.nativeEvent.locationX >= this.line2[2].x - scope && e.nativeEvent.locationX <= this.line2[2].x + scope) {
                            if(e.nativeEvent.locationY >= this.line2[2].y - scope && e.nativeEvent.locationY <= this.line2[2].y + scope) {
                                //alert('Dot3');
                                this.setState({dot6: true});
                            }
                        }
                    }

                    // Dot 7
                    if(this.state.dot6 && !this.state.dot7) {
                        if(e.nativeEvent.locationX >= this.line3[0].x - scope && e.nativeEvent.locationX <= this.line3[0].x + scope) {
                            if(e.nativeEvent.locationY >= this.line3[0].y - scope && e.nativeEvent.locationY <= this.line3[0].y + scope) {
                                //alert('Dot2');
                                this.setState({dot7: true});
                            }
                        }
                    }
                    
                    // Dot 8
                    if(this.state.dot7 && !this.state.dot8) {
                        if(e.nativeEvent.locationX >= this.line3[1].x - scope && e.nativeEvent.locationX <= this.line3[1].x + scope) {
                            if(e.nativeEvent.locationY >= this.line3[1].y - scope && e.nativeEvent.locationY <= this.line3[1].y + scope) {
                                //alert('Dot2');
                                this.setState({dot8: true});
                            }
                        }
                    }
                    
                    // Dot 9
                    if(this.state.dot8 && !this.state.dot9) {
                        if(e.nativeEvent.locationX >= this.line3[2].x - scope && e.nativeEvent.locationX <= this.line3[2].x + scope) {
                            if(e.nativeEvent.locationY >= this.line3[2].y - scope && e.nativeEvent.locationY <= this.line3[2].y + scope) {
                                //alert('Dot3');
                                this.setState({dot9: true});
                            }
                        }
                    }
                }                
            },
            onPanResponderRelease: (e, gesture) => {
                if(this.state.dot3) {
                    if(this.state.dot6) {
                        if(this.state.dot9) {
                            this.setState({arrayMove: [], showShaded: 1, shaded: shadedLine[2],
                            tracing: tracingLine[2], tracing: 0});
                        } else {
                            this.setState({arrayMove: [], showShaded: 1, dot9: false, 
                                dot8: false, dot7: false,
                                shaded: shadedLine[1],
                                tracing: tracingLine[2]});
                        }
                    } else {
                        this.setState({arrayMove: [], showShaded: 1, dot4: false, 
                            dot5: false, dot6: false,
                            shaded: shadedLine[0],
                            tracing: tracingLine[1]});
                    }
                } else {
                //  alert('After Release!');
                    this.clearBoard();
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
            dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, dot9: false,
            showShaded: 0, shaded: shadedLine[0], tracing: tracingLine[0], showTracing: 1});
    }

    render() {

        let touchTrail = this.state.arrayMove.map((item, key) => {
            return(
                <View key = { key } {...this.panResponder.panHandlers}
                    style={[styles.trace, {left: item.x - trail, top: item.y - trail,}]}>
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
                        <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                        
                        {/* <View style={[styles.dot, {top: numberDimension.height * 0.12,
                            left: numberDimension.width * 0.65}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.32,
                            left: numberDimension.width * 0.45}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.6,
                            left: numberDimension.width * 0.19}]}></View> */}

                        {/*
                            this.line1 = [{
                                x: numberDimension.width * 0.65,
                                y: numberDimension.height * 0.12,
                            }, {
                                x: numberDimension.width * 0.45,
                                y: numberDimension.height * 0.32,
                            }, {
                                x: numberDimension.width * 0.19,
                                y: numberDimension.height * 0.6,
                            }, ];
                        */}

                        {/* <View style={[styles.dot, {top: numberDimension.height * 0.67,
                            left: numberDimension.width * 0.27}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.67,
                            left: numberDimension.width * 0.5}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.67,
                            left: numberDimension.width * 0.75}]}></View> */}

                        {/*
                            this.line2 = [{
                                x: numberDimension * 0.27,
                                y: numberDimension * 0.67,
                            }, {
                                x: numberDimension * 0.5,
                                y: numberDimension * 0.67,
                            }, {
                                x: numberDimension * 0.75,
                                y: numberDimension * 0.67,
                            }, ];
                        */}

                        {/* <View style={[styles.dot, {top: numberDimension.height * 0.3,
                            left: numberDimension.width * 0.68}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.55,
                            left: numberDimension.width * 0.68}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.8,
                            left: numberDimension.width * 0.68}]}></View> */}
                            
                        {/*
                            this.line3 = [{
                                x: numberDimension * 0.68,
                                y: numberDimension * 0.3,
                            }, {
                                x: numberDimension * 0.68,
                                y: numberDimension * 0.55,
                            }, {
                                x: numberDimension * 0.68,
                                y: numberDimension * 0.8,
                            }, ];
                        */}
                    </View>
                    <View style={{position: 'absolute', width: '35%', height: '90%', 
                                top: '5%', left: '32%', opacity: this.state.showShaded}}>
                        <Image source={this.state.shaded} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>
                </View>
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

export default withNavigation(FourTracing);