import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Image, 
    PanResponder, TouchableOpacity, StatusBar, 
    Animated, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';

import Home_icon from '../../images/Home_icon.png';
import Back_icon from '../../images/Back_icon.png';
import imageBG from '../../images/BG.jpg';
import PencilIcon from '../../images/Pencil_icon.png';

import trace1 from '../numberTracingGIF/3_1.gif';
import trace2 from '../numberTracingGIF/3_2.gif';

import shaded_3_1 from '../numberTracingImage/shaded_3_1.png';
import shaded_3_2 from '../numberTracingImage/shaded_3_2.png';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const shadedLine = [shaded_3_1, shaded_3_2];
const tracingLine = [trace1, trace2];

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

class ThreeTracing extends Component {
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
            shadedIndex: 0,

            // Tracing State
            shaded: shadedLine[0],
            tracing: tracingLine[0],
            lineIndex: 0,
            showShaded: 0,
            showTracing: 1,

            // Boolean
            dot1: false,
            dot2: false,
            dot3: false,
            dot4: false,
            dot5: false,
            dot6: false,
            dot7: false,
            dot8: false,
        },

        this.line1 = [{
            x: numberDimension.width * 0.2,
            y: numberDimension.height * 0.2,
        }, {
            x: numberDimension.width * 0.5,
            y: numberDimension.height * 0.08,
        }, {
            x: numberDimension.width * 0.77,
            y: numberDimension.height * 0.3,
        }, {
            x: numberDimension.width * 0.57,
            y: numberDimension.height * 0.45,
        }, ];

        this.line2 = [{
            x: numberDimension.width * 0.7,
            y: numberDimension.height * 0.5,
        }, {
            x: numberDimension.width * 0.82,
            y: numberDimension.height * 0.7,
        }, {
            x: numberDimension.width * 0.55,
            y: numberDimension.height * 0.9,
        }, {
            x: numberDimension.width * 0.25,
            y: numberDimension.height * 0.83,
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
                        if(e.nativeEvent.locationX >= this.line1[3].x - scope && e.nativeEvent.locationX <= this.line1[3].x + scope) {
                            if(e.nativeEvent.locationY >= this.line1[3].y - scope && e.nativeEvent.locationY <= this.line1[3].y + scope) {
                                //alert('Dot2');
                                this.setState({dot4: true});
                            }
                        }
                    }
                    
                    // Dot 5
                    if(this.state.dot4 && !this.state.dot5) {
                        if(e.nativeEvent.locationX >= this.line2[0].x - scope && e.nativeEvent.locationX <= this.line2[0].x + scope) {
                            if(e.nativeEvent.locationY >= this.line2[0].y - scope && e.nativeEvent.locationY <= this.line2[0].y + scope) {
                                //alert('Dot2');
                                this.setState({dot5: true});
                            }
                        }
                    }
                    
                    // Dot 6
                    if(this.state.dot5 && !this.state.dot6) {
                        if(e.nativeEvent.locationX >= this.line2[1].x - scope && e.nativeEvent.locationX <= this.line2[1].x + scope) {
                            if(e.nativeEvent.locationY >= this.line2[1].y - scope && e.nativeEvent.locationY <= this.line2[1].y + scope) {
                                //alert('Dot3');
                                this.setState({dot6: true});
                            }
                        }
                    }

                    // Dot 7
                    if(this.state.dot6 && !this.state.dot7) {
                        if(e.nativeEvent.locationX >= this.line2[2].x - scope && e.nativeEvent.locationX <= this.line2[2].x + scope) {
                            if(e.nativeEvent.locationY >= this.line2[2].y - scope && e.nativeEvent.locationY <= this.line2[2].y + scope) {
                                //alert('Dot2');
                                this.setState({dot7: true});
                            }
                        }
                    }
                    
                    // Dot 8
                    if(this.state.dot7 && !this.state.dot8) {
                        if(e.nativeEvent.locationX >= this.line2[3].x - scope && e.nativeEvent.locationX <= this.line2[3].x + scope) {
                            if(e.nativeEvent.locationY >= this.line2[3].y - scope && e.nativeEvent.locationY <= this.line2[3].y + scope) {
                                //alert('Dot2');
                                this.setState({dot8: true});
                            }
                        }
                    }
                }                
            },
            onPanResponderRelease: (e, gesture) => {
                if(this.state.dot3) {
                    if(this.state.dot8) {
                        this.setState({arrayMove: [], showShaded: 1, dot1: false, 
                            dot2: false, dot3: false, shadedIndex: 1,
                            shaded: shadedLine[1], showTracing: 0});
                    } else {
                        this.setState({arrayMove: [], showShaded: 1, dot7: false, 
                            dot5: false, dot6: false, dot8: false,
                            shaded: shadedLine[0], shadedIndex: 0,
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
            dot4: false, dot5: false, dot6: false, dot7: false, dot8: false,
            showShaded: 0, shaded: shadedLine[0], tracing: tracingLine[0], showTracing: 1});
    }

    render() {

        let touchTrail = this.state.arrayMove.map((item, key) => {
            return(
                <View key = { key } {...this.panResponder.panHandlers}
                    style={[styles.trace, {left: item.x - trail, top: item.y - trail,
                        width: 45, height: 45, borderRadius: 45}]}>
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
                        

                        {/* <View style={[styles.dot, {top: numberDimension.height * 0.2,
                            left: numberDimension.width * 0.2}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.08,
                            left: numberDimension.width * 0.5}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.3,
                            left: numberDimension.width * 0.77}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.45,
                            left: numberDimension.width * 0.57}]}></View> */}

                        {/*
                            this.line1 = [{
                                x: numberDimension * 0.2,
                                y: numberDimension * 0.2,
                            }, {
                                x: numberDimension * 0.5,
                                y: numberDimension * 0.08,
                            }, {
                                x: numberDimension * 0.77,
                                y: numberDimension * 0.3,
                            }, {
                                x: numberDimension * 0.57,
                                y: numberDimension * 0.45,
                            }, ];
                        */}

                        {/* <View style={[styles.dot, {top: numberDimension.height * 0.5,
                            left: numberDimension.width * 0.7}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.7,
                            left: numberDimension.width * 0.82}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.9,
                            left: numberDimension.width * 0.55}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.83,
                            left: numberDimension.width * 0.25}]}></View> */}

                        {/*
                            this.line2 = [{
                                x: numberDimension * 0.7,
                                y: numberDimension * 0.5,
                            }, {
                                x: numberDimension * 0.82,
                                y: numberDimension * 0.7,
                            }, {
                                x: numberDimension * 0.55,
                                y: numberDimension * 0.9,
                            }, {
                                x: numberDimension * 0.25,
                                y: numberDimension * 0.83,
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

export default withNavigation(ThreeTracing);