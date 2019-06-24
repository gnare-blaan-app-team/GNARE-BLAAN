import React, { Component } from 'react';
import { View, Dimensions, ImageBackground, StyleSheet, Image, PanResponder, TouchableOpacity, StatusBar, Animated } from 'react-native';
import { withNavigation } from 'react-navigation';

import Home_icon from '../../images/Home_icon.png';
import Back_icon from '../../images/Back_icon.png';
import imageBG from '../../images/BG.jpg';
import PencilIcon from '../../images/Pencil_icon.png';

import trace1 from '../numberTracingGIF/1_1.gif';
import trace2 from '../numberTracingGIF/1_2.gif';

import shaded_1_1 from '../numberTracingImage/shaded_1_1.png';
import shaded_1_2 from '../numberTracingImage/shaded_1_2.png';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const shadedLine = [shaded_1_1, shaded_1_2];
const tracingLine = [trace1, trace2];

class OneTracing extends Component {
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
        },

        // Dots Locations
        this.line1 = [{
            x: screenWidth * 0.555,
            y: screenHeight * 0.3
        }, {
            x: screenWidth * 0.5,
            y: screenHeight * 0.375
        }, {
            x: screenWidth * 0.44,
            y: screenHeight * 0.435
        }];

        this.line2 = [{
            x: screenWidth * 0.545,
            y: screenHeight * 0.4
        }, {
            x: screenWidth * 0.545,
            y: screenHeight * 0.345
        }, {
            x: screenWidth * 0.55,
            y: screenHeight * 0.7
        }];

        this._val = {x: 0, y: 0};

        this.state.pan.addListener((value)=> this._val = value);

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderMove: (e, gesture)=> {
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

                        if((!this.state.dot1 || !this.state.dot2) || !this.state.dot3) {
                            if(!this.state.dot1) {
                                if(gesture.moveX >= this.line1[0].x - 20 && gesture.moveX <= this.line1[0].x + 20) {
                                    if(gesture.moveY >= this.line1[0].y - 20 && gesture.moveY <= this.line1[0].y + 20) {
                                        this.setState({dot1: true});
                                    }
                                }
                            }
                            
                            if(this.state.dot1) {
                                if(gesture.moveX >= this.line1[1].x - 20 && gesture.moveX <= this.line1[1].x + 20) {
                                    if(gesture.moveY >= this.line1[1].y - 20 && gesture.moveY <= this.line1[1].y + 20) {
                                        this.setState({dot2: true});
                                    }
                                }
                            }
                            
                            if(this.state.dot2 && this.state.dot1) {
                                if(gesture.moveX >= this.line1[2].x - 20 && gesture.moveX <= this.line1[2].x + 20) {
                                    if(gesture.moveY >= this.line1[2].y - 20 && gesture.moveY <= this.line1[2].y + 20) {
                                        this.setState({dot3: true});
                                    }
                                }
                            }
                        } else {

                            //alert('2nd Line');
                            if(!this.state.dot4) {
                                if(gesture.moveX >= this.line2[0].x - 20 && gesture.moveX <= this.line2[0].x + 20) {
                                    if(gesture.moveY >= this.line2[0].y - 20 && gesture.moveY <= this.line2[0].y + 20) {
                                        this.setState({dot4: true});
                                    }
                                }
                            }
                            
                            if(this.state.dot4) {
                                if(gesture.moveX >= this.line2[1].x - 20 && gesture.moveX <= this.line2[1].x + 20) {
                                    if(gesture.moveY >= this.line2[1].y - 20 && gesture.moveY <= this.line2[1].y + 20) {
                                        this.setState({dot5: true});
                                    }
                                }
                            }
                            
                            if(this.state.dot4 && this.state.dot5) {
                                if(gesture.moveX >= this.line2[2].x - 20 && gesture.moveX <= this.line2[2].x + 20) {
                                    if(gesture.moveY >= this.line2[2].y - 20 && gesture.moveY <= this.line2[2].y + 20) {
                                        this.setState({dot6: true});
                                    }
                                }
                            }
                        }
                    } 
            },
            onPanResponderRelease: (e, gesture) => {4
                if((this.state.dot1 && this.state.dot2) && this.state.dot3) {
                    if((this.state.dot4 && this.state.dot5) && this.state.dot6) {
                        this.setState({arrayMove: [], showShaded: 1, shaded: shadedLine[1],
                            tracing: tracingLine[1], showTracing: 0});
                    } else {
                        this.setState({arrayMove: [], showShaded: 1, dot4: false, dot5: false, 
                            dot6: false, shaded: shadedLine[0],
                            tracing: tracingLine[1]});
                    }
                } else {
                    this.setState({arrayMove: [], dot1: false, dot2: false, dot3: false,
                    showShaded: 0, shaded: shadedLine[0], tracing: tracingLine[0]});
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
        this.setState({arrayMove: [], dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false,
            showShaded: 0, shaded: shadedLine[0], tracing: tracingLine[0], showTracing: 1});
    }

    render() {

        let touchTrail = this.state.arrayMove.map((item, key) => {
            return(
                <View key = { key } {...this.panResponder.panHandlers}
                    style={[ballStyle.circle, {position: 'absolute', left: item.x - 30, top: item.y - 30}]}>
                </View>
            )
        });

        StatusBar.setHidden(true);
        return (
            <ImageBackground source={imageBG} style={styles.image} >
                <Image source={imageBG} style={{position: 'absolute', width: '100%', height: '100%', resizeMode: 'stretch', top: '0%'}}></Image>

                <View style={{position: 'absolute', 
                        width: '75%', height: '70%', top: '20%', left: '12.5%', backgroundColor: 'rgba(255, 255, 255, 0.000000001)'}}
                        {...this.panResponder.panHandlers} >
                    <View style={{position: 'absolute', width: '24%', height: '80%', 
                                top: '10%', left: '35%', opacity: this.state.showTracing,}}>
                        <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>
                    <View style={{position: 'absolute', width: '24%', height: '80%', 
                                top: '10%', left: '35%', opacity: this.state.showShaded}}>
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

const ballStyle = StyleSheet.create({
    circle: {
        backgroundColor: 'black',
        width: 80,
        height: 80,
        borderRadius: 80,
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
export default withNavigation(OneTracing);