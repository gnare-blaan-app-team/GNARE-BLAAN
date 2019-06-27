import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Image, 
    PanResponder, TouchableOpacity, StatusBar, 
    Animated, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';

import Home_icon from '../../images/Home_icon.png';
import Back_icon from '../../images/Back_icon.png';
import imageBG from '../../images/BG.jpg';
import PencilIcon from '../../images/Pencil_icon.png';

import trace1 from '../numberTracingGIF/5_1.gif';
import trace2 from '../numberTracingGIF/5_2.gif';
import trace3 from '../numberTracingGIF/5_3.gif';

import shaded_5_1 from '../numberTracingImage/shaded_5_1.png';
import shaded_5_2 from '../numberTracingImage/shaded_5_2.png';
import shaded_5_3 from '../numberTracingImage/shaded_5_3.png';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const shadedLine = [shaded_5_1, shaded_5_2, shaded_5_3];
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
const trail = 25;
const velocityLimit = 1.2;
const velocityLimit2 = -1.5; 

class FiveTracing extends Component {
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
            dot1: false,
            dot2: false,
            dot3: false,
            dot4: false,
            dot5: false,
            dot6: false,
            dot7: false,
            dot8: false,
            dot9: false,
            dot10: false,
        },

        this.line1 = [{
            x: numberDimension.width * 0.8,
            y: numberDimension.height * 0.08,
        }, {
            x: numberDimension.width * 0.5,
            y: numberDimension.height * 0.08,
        }, {
            x: numberDimension.width * 0.25,
            y: numberDimension.height * 0.08,
        }, ];

        this.line2 = [{
            x: numberDimension.width * 0.2,
            y: numberDimension.height * 0.2,
        }, {
            x: numberDimension.width * 0.16,
            y: numberDimension.height * 0.37,
        }, ];

        this.line3 = [{
            x: numberDimension.width * 0.5,
            y: numberDimension.height * 0.35,
        }, {
            x: numberDimension.width * 0.76,
            y: numberDimension.height * 0.45,
        }, {
            x: numberDimension.width * 0.78,
            y: numberDimension.height * 0.7,
        }, {
            x: numberDimension.width * 0.45,
            y: numberDimension.height * 0.85,
        }, {
            x: numberDimension.width * 0.2,
            y: numberDimension.height * 0.75,
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

                        if(!this.state.dot1) {
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
                            if(e.nativeEvent.locationX >= this.line3[0].x - scope && e.nativeEvent.locationX <= this.line3[0].x + scope) {
                                if(e.nativeEvent.locationY >= this.line3[0].y - scope && e.nativeEvent.locationY <= this.line3[0].y + scope) {
                                    //alert('Dot2');
                                    this.setState({dot6: true});
                                }
                            }
                        }

                        // Dot 7
                        if(this.state.dot6 && !this.state.dot7) {
                            if(e.nativeEvent.locationX >= this.line3[1].x - scope && e.nativeEvent.locationX <= this.line3[1].x + scope) {
                                if(e.nativeEvent.locationY >= this.line3[1].y - scope && e.nativeEvent.locationY <= this.line3[1].y + scope) {
                                    //alert('Dot2');
                                    this.setState({dot7: true});
                                }
                            }
                        }

                        // Dot 8
                        if(this.state.dot7 && !this.state.dot8) {
                            if(e.nativeEvent.locationX >= this.line3[2].x - scope && e.nativeEvent.locationX <= this.line3[2].x + scope) {
                                if(e.nativeEvent.locationY >= this.line3[2].y - scope && e.nativeEvent.locationY <= this.line3[2].y + scope) {
                                    //alert('Dot2');
                                    this.setState({dot8: true});
                                }
                            }
                        }

                        // Dot 9
                        if(this.state.dot8 && !this.state.dot9) {
                            if(e.nativeEvent.locationX >= this.line3[3].x - scope && e.nativeEvent.locationX <= this.line3[3].x + scope) {
                                if(e.nativeEvent.locationY >= this.line3[3].y - scope && e.nativeEvent.locationY <= this.line3[3].y + scope) {
                                    //alert('Dot2');
                                    this.setState({dot9: true});
                                }
                            }
                        }

                        // Dot 10
                        if(this.state.dot9 && !this.state.dot10) {
                            if(e.nativeEvent.locationX >= this.line3[4].x - scope && e.nativeEvent.locationX <= this.line3[4].x + scope) {
                                if(e.nativeEvent.locationY >= this.line3[4].y - scope && e.nativeEvent.locationY <= this.line3[4].y + scope) {
                                    //alert('Dot2');
                                    this.setState({dot10: true});
                                }
                            }
                        }
                }                
            },
            onPanResponderRelease: (e, gesture) => {
                if(this.state.dot3) {
                    if(this.state.dot5) {
                        if(this.state.dot10) {
                            this.setState({arrayMove: [], shaded: shaded_5_3,
                                showTracing: 0});
                        } else {
                            this.setState({arrayMove: [], shaded: shaded_5_2, dot6: false,
                                dot7: false, dot8: false, dot9: false, dot10: false,
                                tracing: tracingLine[2]});
                        }
                    } else {
                        this.setState({arrayMove: [], showShaded: 1, shaded: shaded_5_1,
                            dot4: false, dot5: false,
                            tracing: tracingLine[1], showTracing: 1,});
                    }
                } else {
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
            dot9: false, dot10: false,
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
                        width: '75%', height: '70%', top: '20%', left: '12.5%', backgroundColor: 'rgba(255, 255, 255, 0.000000001)'}}
                        {...this.panResponder.panHandlers} >
                    <View style={{position: 'absolute', width: '35%', height: '90%', 
                                top: '5%', left: '32%', opacity: this.state.showTracing,}}>
                        <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                        
                        {/* <View style={[styles.dot, {top: numberDimension.height * 0.08,
                            left: numberDimension.width * 0.8}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.08,
                            left: numberDimension.width * 0.5}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.08,
                            left: numberDimension.width * 0.25}]}></View> */}
                        
                        {/*
                            this.line1 = [{
                                x: numberDimension.width * 0.8,
                                y: numberDimension.height * 0.08,
                            }, {
                                x: numberDimension.width * 0.5,
                                y: numberDimension.height * 0.08,
                            }, {
                                x: numberDimension.width * 0.25,
                                y: numberDimension.height * 0.08,
                            }, ];
                        */}

                        {/* <View style={[styles.dot, {top: numberDimension.height * 0.2,
                            left: numberDimension.width * 0.2}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.37,
                            left: numberDimension.width * 0.16}]}></View> */}

                        {/*
                            this.line2 = [{
                                x: numberDimension.width * 0.2,
                                y: numberDimension.height * 0.2,
                            }, {
                                x: numberDimension.width * 0.16,
                                y: numberDimension.height * 0.37,
                            }, ];
                        */}

                        {/* <View style={[styles.dot, {top: numberDimension.height * 0.35,
                            left: numberDimension.width * 0.5}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.45,
                            left: numberDimension.width * 0.76}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.7,
                            left: numberDimension.width * 0.78}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.85,
                            left: numberDimension.width * 0.45}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.75,
                            left: numberDimension.width * 0.15}]}></View> */}
                        
                        {/*
                            this.line3 = [{
                                x: numberDimension.width * 0.5,
                                y: numberDimension.height * 0.35,
                            }, {
                                x: numberDimension.width * 0.76,
                                y: numberDimension.height * 0.45,
                            }, {
                                x: numberDimension.width * 0.82,
                                y: numberDimension.height * 0.65,
                            }, {
                                x: numberDimension.width * 0.5,
                                y: numberDimension.height * 0.85,
                            }, {
                                x: numberDimension.width * 0.15,
                                y: numberDimension.height * 0.75,
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

export default withNavigation(FiveTracing);