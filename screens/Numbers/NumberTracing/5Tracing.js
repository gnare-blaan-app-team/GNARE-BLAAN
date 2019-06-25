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

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const shadedLine = [shaded_5_1, shaded_5_2, shaded_5_3];
const tracingLine = [trace1, trace2, trace3];

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

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
            dot10: false,
        },

        this.line1 = [{
            x: screenWidth * 0.6,
            y: screenHeight * 0.265,
        }, {
            x: screenWidth * 0.525,
            y: screenHeight * 0.265,
        }, {
            x: screenWidth * 0.455,
            y: screenHeight * 0.265,
        }, ];

        this.line2 = [{
            x: screenWidth * 0.45,
            y: screenHeight * 0.35,
        }, {
            x: screenWidth * 0.425,
            y: screenHeight * 0.5,
        }];

        this.line3 = [{
            x: screenWidth * 0.475,
            y: screenHeight * 0.475,
        }, {
            x: screenWidth * 0.585,
            y: screenHeight * 0.5,
        }, {
            x: screenWidth * 0.595,
            y: screenHeight * 0.7,
        }, {
            x: screenWidth * 0.5,
            y: screenHeight * 0.77,
        }, {
            x: screenWidth * 0.425,
            y: screenHeight * 0.69,
        }];

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
                            if(gesture.moveX >= this.line1[0].x - 20 && gesture.moveX <= this.line1[0].x + 20) {
                                if(gesture.moveY >= this.line1[0].y - 20 && gesture.moveY <= this.line1[0].y + 20) {
                                    //alert('Dot1');
                                    this.setState({dot1: true});
                                }
                            }
                        }
                        
                        // Dot 2
                        if(this.state.dot1 && !this.state.dot2) {
                            if(gesture.moveX >= this.line1[1].x - 20 && gesture.moveX <= this.line1[1].x + 20) {
                                if(gesture.moveY >= this.line1[1].y - 20 && gesture.moveY <= this.line1[1].y + 20) {
                                    //alert('Dot2');
                                    this.setState({dot2: true});
                                }
                            }
                        }
                        
                        // Dot 3
                        if(this.state.dot2 && !this.state.dot3) {
                            if(gesture.moveX >= this.line1[2].x - 20 && gesture.moveX <= this.line1[2].x + 20) {
                                if(gesture.moveY >= this.line1[2].y - 20 && gesture.moveY <= this.line1[2].y + 20) {
                                    //alert('Dot3');
                                    this.setState({dot3: true});
                                }
                            }
                        }

                        // Dot 4
                        if(this.state.dot3 && !this.state.dot4) {
                            if(gesture.moveX >= this.line2[0].x - 20 && gesture.moveX <= this.line2[0].x + 20) {
                                if(gesture.moveY >= this.line2[0].y - 20 && gesture.moveY <= this.line2[0].y + 20) {
                                    //alert('Dot2');
                                    this.setState({dot4: true});
                                }
                            }
                        }
                        
                        // Dot 5
                        if(this.state.dot4 && !this.state.dot5) {
                            if(gesture.moveX >= this.line2[1].x - 20 && gesture.moveX <= this.line2[1].x + 20) {
                                if(gesture.moveY >= this.line2[1].y - 20 && gesture.moveY <= this.line2[1].y + 20) {
                                    //alert('Dot2');
                                    this.setState({dot5: true});
                                }
                            }
                        }

                        // Dot 6
                        if(this.state.dot5 && !this.state.dot6) {
                            if(gesture.moveX >= this.line3[0].x - 20 && gesture.moveX <= this.line3[0].x + 20) {
                                if(gesture.moveY >= this.line3[0].y - 20 && gesture.moveY <= this.line3[0].y + 20) {
                                    //alert('Dot2');
                                    this.setState({dot6: true});
                                }
                            }
                        }

                        // Dot 7
                        if(this.state.dot6 && !this.state.dot7) {
                            if(gesture.moveX >= this.line3[1].x - 20 && gesture.moveX <= this.line3[1].x + 20) {
                                if(gesture.moveY >= this.line3[1].y - 20 && gesture.moveY <= this.line3[1].y + 20) {
                                    //alert('Dot2');
                                    this.setState({dot7: true});
                                }
                            }
                        }

                        // Dot 8
                        if(this.state.dot7 && !this.state.dot8) {
                            if(gesture.moveX >= this.line3[2].x - 20 && gesture.moveX <= this.line3[2].x + 20) {
                                if(gesture.moveY >= this.line3[2].y - 20 && gesture.moveY <= this.line3[2].y + 20) {
                                    //alert('Dot2');
                                    this.setState({dot8: true});
                                }
                            }
                        }

                        // Dot 9
                        if(this.state.dot8 && !this.state.dot9) {
                            if(gesture.moveX >= this.line3[3].x - 20 && gesture.moveX <= this.line3[3].x + 20) {
                                if(gesture.moveY >= this.line3[3].y - 20 && gesture.moveY <= this.line3[3].y + 20) {
                                    //alert('Dot2');
                                    this.setState({dot9: true});
                                }
                            }
                        }

                        // Dot 10
                        if(this.state.dot9 && !this.state.dot10) {
                            if(gesture.moveX >= this.line3[4].x - 20 && gesture.moveX <= this.line3[4].x + 20) {
                                if(gesture.moveY >= this.line3[4].y - 20 && gesture.moveY <= this.line3[4].y + 20) {
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
                            this.setState({arrayMove: [], showShaded: 1, shaded: shadedLine[2],
                                tracing: tracingLine[2], showTracing: 0});
                        } else {
                            this.setState({arrayMove: [], showShaded: 1, dot9: false, 
                                dot8: false, dot7: false, dot6: false, dot10: false,
                                shaded: shadedLine[1], tracing: tracingLine[2], showTracing: 1});
                        }
                    } else {
                        this.setState({arrayMove: [], showShaded: 1, dot4: false, 
                            dot5: false, shaded: shadedLine[0],
                            tracing: tracingLine[1], showTracing: 1});
                    }
                } else {
                //  alert('After Release!');
                    this.setState({arrayMove: [], dot1: false, dot2: false, dot3: false, dot4: false,
                        dot5: false, dot6: false, dot7: false, dot8: false,
                    showShaded: 0, shaded: shadedLine[0], tracing: tracingLine[0], showTracing: 1});
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
                    style={[ballStyle.circle, {position: 'absolute', left: item.x - 24, top: item.y - 24}]}>
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
                    </View>
                    <View style={{position: 'absolute', width: '35%', height: '90%', 
                                top: '5%', left: '32%', opacity: this.state.showShaded}}>
                        <Image source={this.state.shaded} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>
                </View>

                {/* <View style={[dotStyle.dot, {top: screenHeight * 0.265,
                        left: screenWidth * 0.6}]}>
                </View>
                <View style={[dotStyle.dot, {top: screenHeight * 0.265,
                        left: screenWidth * 0.525}]}>
                </View>
                <View style={[dotStyle.dot, {top: screenHeight * 0.265,
                        left: screenWidth * 0.455}]}>
                </View> */}

                {/*
                    this.line1 = [{
                        x: screenWidth * 0.6,
                        y: screenHeight * 0.265,
                    }, {
                        x: screenWidth * 0.525,
                        y: screenHeight * 0.265,
                    }, {
                        x: screenWidth * 0.455,
                        y: screenHeight * 0.265,
                    }, ];
                */}


                {/* <View style={[dotStyle.dot, {top: screenHeight * 0.35,
                        left: screenWidth * 0.443}]}>
                </View>

                <View style={[dotStyle.dot, {top: screenHeight * 0.5,
                        left: screenWidth * 0.425}]}>
                </View> */}

                {/*
                    this.line2 = [{
                        x: screenWidth * 0.45,
                        y: screenHeight * 0.35,
                    }, {
                        x: screenWidth * 0.425,
                        y: screenHeight * 0.5,
                    }];
                */}


                {/* <View style={[dotStyle.dot, {top: screenHeight * 0.475,
                        left: screenWidth * 0.475}]}>
                </View>
                <View style={[dotStyle.dot, {top: screenHeight * 0.5,
                        left: screenWidth * 0.585}]}>
                </View>
                <View style={[dotStyle.dot, {top: screenHeight * 0.7,
                        left: screenWidth * 0.595}]}>
                </View>
                <View style={[dotStyle.dot, {top: screenHeight * 0.77,
                        left: screenWidth * 0.5}]}>
                </View>
                <View style={[dotStyle.dot, {top: screenHeight * 0.69,
                        left: screenWidth * 0.425}]}>
                </View> */}

                {/*
                    this.line3 = [{
                        x: screenWidth * 0.475,
                        y: screenHeight * 0.475,
                    }, {
                        x: screenWidth * 0.585,
                        y: screenHeight * 0.5,
                    }, {
                        x: screenWidth * 0.595,
                        y: screenHeight * 0.7,
                    }, {
                        x: screenWidth * 0.5,
                        y: screenHeight * 0.77,
                    }, {
                        x: screenWidth * 0.425,
                        y: screenHeight * 0.69,
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

const ballStyle = StyleSheet.create({
    circle: {
        backgroundColor: 'black',
        width: 48,
        height: 48,
        borderRadius: 48,
    }
});

const dotStyle = StyleSheet.create({
    dot: {
        position: 'absolute',
        backgroundColor: 'black',
        width: 20,
        height: 20,
        borderRadius: 20,
    }
});

export default withNavigation(FiveTracing);