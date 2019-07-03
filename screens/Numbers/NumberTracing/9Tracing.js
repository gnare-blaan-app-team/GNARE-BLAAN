import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Image, 
    PanResponder, TouchableOpacity, StatusBar, 
    Animated, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';

import Home_icon from '../../images/Home_icon.png';
import Back_icon from '../../images/Back_icon.png';
import imageBG from '../../images/BG.jpg';
import PencilIcon from '../../images/Pencil_icon.png';

import trace1 from '../numberTracingGIF/9_1.gif';
import trace2 from '../numberTracingGIF/9_2.gif';
import shaded_9_1 from '../numberTracingImage/shaded_9_1.png';
import shaded_9_2 from '../numberTracingImage/shaded_9_2.png';

const shadedLine = [shaded_9_1, shaded_9_2];
const tracingLine = [trace1, trace2];

import { numberDimension, boardDimension,
    scopeX, scopeY, trail } from '../numbersImport';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

class NineTracing extends Component {
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
        },

        this.line1 = [{
            x: screenWidth * 0.57,
            y: screenHeight * 0.45,
        }, {
            x: screenWidth * 0.48,
            y: screenHeight * 0.3,
        }, {
            x: screenWidth * 0.4,
            y: screenHeight * 0.45,
        }, {
            x: screenWidth * 0.48,
            y: screenHeight * 0.59,
        }, {
            x: screenWidth * 0.56,
            y: screenHeight * 0.65,
        }, {
            x: screenWidth * 0.48,
            y: screenHeight * 0.79,
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
                    
                    }
                        this.setState({arrayMove: [...this.state.arrayMove, coordinate]});
                }        
            },
            onPanResponderRelease: (e, gesture) => {
                if(this.state.dot4) {
                    if(this.state.dot6) {
                        this.setState({arrayMove: [], showShaded: 1, shaded: shadedLine[1], 
                            tracing: tracingLine[0], showTracing: 0});
                    } else {
                        this.setState({arrayMove: [], showShaded: 1, shaded: shadedLine[0], 
                            dot5: false, dot6: false,
                            tracing: tracingLine[1], showTracing: 1});
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
            dot4: false, dot5: false, dot6: false, showShaded: 0, showTracing: 1});
        this.setState({tracing: trace1});
    }

    render() {

        let touchTrail = this.state.arrayMove.map((item, key) => {
            return(
                <View key = { key } {...this.panResponder.panHandlers}
                    style={[styles.trace, {position: 'absolute', 
                    left: item.x - trail, top: item.y - trail}]}>
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


                        {/* <View style={[styles.dot, {top: numberDimension.height * 0.32,
                            left: numberDimension.width * 0.78}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.11,
                            left: numberDimension.width * 0.45}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.32,
                            left: numberDimension.width * 0.15}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.57,
                            left: numberDimension.width * 0.45}]}></View>
                            
                        <View style={[styles.dot, {top: numberDimension.height * 0.6,
                            left: numberDimension.width * 0.78}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.88,
                            left: numberDimension.width * 0.55}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.85,
                            left: numberDimension.width * 0.3}]}></View> */}

                        {/*
                            this.line1 = [{
                                x: numberDimension * 0.78,
                                y: numberDimension * 0.32,
                            }, {
                                x: numberDimension * 0.45,
                                y: numberDimension * 0.11,
                            }, {
                                x: numberDimension * 0.15,
                                y: numberDimension * 0.32,
                            }, {
                                x: numberDimension * 0.45,
                                y: numberDimension * 0.57,
                            },];
                        */}

                        {/*
                            this.line2 = [{
                                x: numberDimension * 0.78,
                                y: numberDimension * 0.6,
                            }, {
                                x: numberDimension * 0.55,
                                y: numberDimension * 0.88,
                            },{
                                x: numberDimension * 0.3,
                                y: numberDimension * 0.85,
                            },];
                        */}
                        
                    </View>
                    <View style={{position: 'absolute', width: numberDimension.width, 
                                height: numberDimension.height, 
                                top: '5%', left: '32%', opacity: this.state.showShaded}}>
                        <Image source={this.state.shaded} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>
                </View>


                <View style={[styles.dot, {top: screenHeight * 0.45,
                    left: screenWidth * 0.57}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.3,
                    left: screenWidth * 0.48}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.45,
                    left: screenWidth * 0.4}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.59,
                    left: screenWidth * 0.48}]}></View>
                
                <View style={[styles.dot, {top: screenHeight * 0.65,
                    left: screenWidth * 0.56}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.79,
                    left: screenWidth * 0.48}]}></View>

                {/*
                    this.line1 = [{
                        x: screenWidth * 0.57,
                        y: screenHeight * 0.45,
                    }, {
                        x: screenWidth * 0.48,
                        y: screenHeight * 0.3,
                    }, {
                        x: screenWidth * 0.4,
                        y: screenHeight * 0.45,
                    }, {
                        x: screenWidth * 0.48,
                        y: screenHeight * 0.59,
                    }, {
                        x: screenWidth * 0.56,
                        y: screenHeight * 0.65,
                    }, {
                        x: screenWidth * 0.48,
                        y: screenHeight * 0.79,
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

export default withNavigation(NineTracing);