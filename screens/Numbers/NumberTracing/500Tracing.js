import React, { Component } from 'react';
import { View, Dimensions, ImageBackground, StyleSheet, Image, PanResponder, TouchableOpacity, StatusBar, Animated } from 'react-native';
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
import traceZero from '../numberTracingImage/0.png';

import shaded_0 from '../numberTracingImage/shaded_0.png';

import trace4 from '../numberTracingGIF/0.gif';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 
import { scopeX, scopeY, trail, } from '../numbersImport';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const shadedLine = [shaded_5_1, shaded_5_2, shaded_5_3, shaded_0];
const tracingLine = [trace1, trace2, trace3, trace4];

const boardDimension = {
    width: screenWidth * 0.75,
    height: screenHeight * 0.7,
};

const numberDimension = {
    width: boardDimension.width * 0.35,
    height: boardDimension.height * 0.9,
}

const numberDimension2 = {
    width: boardDimension.width * 0.3,
    height: boardDimension.height * 0.9,
}

class FiveHundredTracing extends Component {
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

            //Tracing State
            shaded: shadedLine[0],

            tracing: tracingLine[0],
            tracing2: traceZero,
            tracing3: traceZero,
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
            fot9: false,
            dot10: false,
            dot11: false,
            dot12: false,
            dot13: false,
            dot14: false,
            dot15: false,
        },

        // Dots Locations
        this.line1 = [{
            x: screenWidth * 0.33,
            y: screenHeight * 0.305,
        }, {
            x: screenWidth * 0.25,
            y: screenHeight * 0.305,
        }, {
            x: screenWidth * 0.22,
            y: screenHeight * 0.37,
        }, {
            x: screenWidth * 0.21,
            y: screenHeight * 0.47,
        }, {
            x: screenWidth * 0.33,
            y: screenHeight * 0.495,
        }, {
            x: screenWidth * 0.365,
            y: screenHeight * 0.7,
        }, {
            x: screenWidth * 0.25,
            y: screenHeight * 0.78,
        }, 
        {
            x: screenWidth * 0.48,
            y: screenHeight * 0.35,
        }, {
            x: screenWidth * 0.47,
            y: screenHeight * 0.7,
        }, {
            x: screenWidth * 0.58,
            y: screenHeight * 0.74,
        }, {
            x: screenWidth * 0.59,
            y: screenHeight * 0.4,
        }, 
        {
            x: screenWidth * 0.7005,
            y: screenHeight * 0.35,
        }, {
            x: screenWidth * 0.695,
            y: screenHeight * 0.7,
        }, {
            x: screenWidth * 0.805,
            y: screenHeight * 0.74,
        }, {
            x: screenWidth * 0.815,
            y: screenHeight * 0.4,
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
                            ((gestureState.moveX >= this.line1[5].x - scopeX && gestureState.moveX <= this.line1[5].x + scopeX) && 
                            (gestureState.moveY >= this.line1[5].y - scopeY && gestureState.moveY <= this.line1[5].y + scopeY)) ? true : false});
                    
                    } else if(this.state.dot6 && !this.state.dot7) {
                        this.setState({dot7: 
                            ((gestureState.moveX >= this.line1[6].x - scopeX && gestureState.moveX <= this.line1[6].x + scopeX) && 
                            (gestureState.moveY >= this.line1[6].y - scopeY && gestureState.moveY <= this.line1[6].y + scopeY)) ? true : false});
                    
                    } else if(this.state.dot7 && !this.state.dot8) {
                        this.setState({dot8: 
                            ((gestureState.moveX >= this.line1[7].x - scopeX && gestureState.moveX <= this.line1[7].x + scopeX) && 
                            (gestureState.moveY >= this.line1[7].y - scopeY && gestureState.moveY <= this.line1[7].y + scopeY)) ? true : false});
                    
                    } else if(this.state.dot8 && !this.state.dot9) {
                        this.setState({dot9: 
                            ((gestureState.moveX >= this.line1[8].x - scopeX && gestureState.moveX <= this.line1[8].x + scopeX) && 
                            (gestureState.moveY >= this.line1[8].y - scopeY && gestureState.moveY <= this.line1[8].y + scopeY)) ? true : false});
                    
                    } else if(this.state.dot9 && !this.state.dot10) {
                        this.setState({dot10: 
                            ((gestureState.moveX >= this.line1[9].x - scopeX && gestureState.moveX <= this.line1[9].x + scopeX) && 
                            (gestureState.moveY >= this.line1[9].y - scopeY && gestureState.moveY <= this.line1[9].y + scopeY)) ? true : false});
                    
                    } else if(this.state.dot10 && !this.state.dot11) {
                        this.setState({dot11: 
                            ((gestureState.moveX >= this.line1[10].x - scopeX && gestureState.moveX <= this.line1[10].x + scopeX) && 
                            (gestureState.moveY >= this.line1[10].y - scopeY && gestureState.moveY <= this.line1[10].y + scopeY)) ? true : false});
                    
                    } else if(this.state.dot11 && !this.state.dot12) {
                        this.setState({dot12: 
                            ((gestureState.moveX >= this.line1[11].x - scopeX && gestureState.moveX <= this.line1[11].x + scopeX) && 
                            (gestureState.moveY >= this.line1[11].y - scopeY && gestureState.moveY <= this.line1[11].y + scopeY)) ? true : false});
                    
                    } else if(this.state.dot12 && !this.state.dot13) {
                        this.setState({dot13: 
                            ((gestureState.moveX >= this.line1[12].x - scopeX && gestureState.moveX <= this.line1[12].x + scopeX) && 
                            (gestureState.moveY >= this.line1[12].y - scopeY && gestureState.moveY <= this.line1[12].y + scopeY)) ? true : false});
                    
                    } else if(this.state.dot13 && !this.state.dot14) {
                        this.setState({dot14: 
                            ((gestureState.moveX >= this.line1[13].x - scopeX && gestureState.moveX <= this.line1[13].x + scopeX) && 
                            (gestureState.moveY >= this.line1[13].y - scopeY && gestureState.moveY <= this.line1[13].y + scopeY)) ? true : false});
                    
                    } else if(this.state.dot14 && !this.state.dot15) {
                        this.setState({dot15: 
                            ((gestureState.moveX >= this.line1[14].x - scopeX && gestureState.moveX <= this.line1[14].x + scopeX) && 
                            (gestureState.moveY >= this.line1[14].y - scopeY && gestureState.moveY <= this.line1[14].y + scopeY)) ? true : false});
                    
                    } 
                        this.setState({arrayMove: [...this.state.arrayMove, coordinate]});
                }
            },
            onPanResponderRelease: (e, gesture) => {
                if(this.state.dot2) {
                    if(this.state.dot4) {
                        if(this.state.dot7) {
                            if(this.state.dot11) {
                                if(this.state.dot15) {
                                    this.setState({arrayMove: [], tracing3: shadedLine[3]});
                                } else {
                                    this.setState({arrayMove: [], tracing3: tracingLine[3],
                                        tracing2: shadedLine[3], dot14: false, dot15: false, 
                                        dot12: false, dot13: false});
                                }
                            } else {
                                this.setState({arrayMove: [], tracing2: tracingLine[3], shaded: shadedLine[2],
                                    showTracing: 0, dot10: false, dot11: false, dot9: false, showShaded: 1,
                                    dot8: false});
                            }
                        } else {
                            this.setState({arrayMove: [], shaded: shadedLine[1], tracing: tracingLine[2],
                                    showShaded: 1, dot7: false, dot6: false, dot5: false,});
                        }
                    } else {
                        this.setState({arrayMove: [], showShaded: 1, shaded: shadedLine[0],
                         tracing: tracingLine[1], dot4: false, dot3: false});
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
        this.setState({arrayMove: [], dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false,
            dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false,
            dot13: false, dot14: false, dot15: false,
            showShaded: 0, shaded: shadedLine[0], tracing: tracingLine[0], showTracing: 1,
            tracing2: traceZero, tracing3: traceZero});
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
                <Image source={imageBG} style={{position: 'absolute', width: '100%', height: '100%', resizeMode: 'stretch', top: '0%'}}></Image>

                <View style={{position: 'absolute', 
                        width: boardDimension.width, height: boardDimension.height, 
                        top: '20%', left: '12.5%', backgroundColor: 'rgba(255, 255, 255, 0.000000001)'}}
                        {...this.panResponder.panHandlers} >
                    <View style={{position: 'absolute', width: numberDimension.width, 
                                height: numberDimension.height, 
                                top: '5%', left: '4%', opacity: this.state.showTracing,}}>
                        <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>

                    <View style={{position: 'absolute', width: numberDimension.width, 
                                height: numberDimension.height, 
                                top: '5%', left: '4%', opacity: this.state.showShaded}}>
                        <Image source={this.state.shaded} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>

                    <View style={{position: 'absolute', width: numberDimension2.width, 
                                height: numberDimension2.height, 
                                top: '5%', left: '39%',}}>
                        <Image source={this.state.tracing2} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>

                    <View style={{position: 'absolute', width: numberDimension2.width, 
                                height: numberDimension2.height, 
                                top: '5%', left: '69%',}}>
                        <Image source={this.state.tracing3} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>

                </View>

                <View style={[styles.dot, {top: screenHeight * 0.305,
                    left: screenWidth * 0.33}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.305,
                    left: screenWidth * 0.25}]}></View>

                <View style={[styles.dot, {top: screenHeight * 0.37,
                    left: screenWidth * 0.22}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.47,
                    left: screenWidth * 0.21}]}></View>
                
                <View style={[styles.dot, {top: screenHeight * 0.495,
                    left: screenWidth * 0.33}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.7,
                    left: screenWidth * 0.365}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.78,
                    left: screenWidth * 0.25}]}></View>

                <View style={[styles.dot, {top: screenHeight * 0.35,
                    left: screenWidth * 0.48}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.7,
                    left: screenWidth * 0.47}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.74,
                    left: screenWidth * 0.58}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.4,
                    left: screenWidth * 0.59}]}></View>

                {/*
                    this.line1 = [{
                        x: screenWidth * 0.33,
                        y: screenHeight * 0.305,
                    }, {
                        x: screenWidth * 0.25,
                        y: screenHeight * 0.305,
                    }, {
                        x: screenWidth * 0.22,
                        y: screenHeight * 0.37,
                    }, {
                        x: screenWidth * 0.21,
                        y: screenHeight * 0.47,
                    }, {
                        x: screenWidth * 0.33,
                        y: screenHeight * 0.495,
                    }, {
                        x: screenWidth * 0.365,
                        y: screenHeight * 0.7,
                    }, {
                        x: screenWidth * 0.25,
                        y: screenHeight * 0.78,
                    }, 
                    {
                        x: screenWidth * 0.48,
                        y: screenHeight * 0.35,
                    }, {
                        x: screenWidth * 0.47,
                        y: screenHeight * 0.7,
                    }, {
                        x: screenWidth * 0.58,
                        y: screenHeight * 0.74,
                    }, {
                        x: screenWidth * 0.59,
                        y: screenHeight * 0.4,
                    }, 
                    {
                        x: screenWidth * 0.7005,
                        y: screenHeight * 0.35,
                    }, {
                        x: screenWidth * 0.695,
                        y: screenHeight * 0.7,
                    }, {
                        x: screenWidth * 0.805,
                        y: screenHeight * 0.74,
                    }, {
                        x: screenWidth * 0.815,
                        y: screenHeight * 0.4,
                    }, ];
                */}

                <View style={[styles.dot, {top: screenHeight * 0.35,
                    left: screenWidth * 0.705}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.7,
                    left: screenWidth * 0.695}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.74,
                    left: screenWidth * 0.805}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.4,
                    left: screenWidth * 0.815}]}></View>
                

                

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

export default withNavigation(FiveHundredTracing);