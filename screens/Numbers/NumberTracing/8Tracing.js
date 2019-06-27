import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Image, 
    PanResponder, TouchableOpacity, StatusBar, 
    Animated, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';

import Home_icon from '../../images/Home_icon.png';
import Back_icon from '../../images/Back_icon.png';
import imageBG from '../../images/BG.jpg';
import PencilIcon from '../../images/Pencil_icon.png';

import trace1 from '../numberTracingGIF/8_1.gif';
import shaded_8_1 from '../numberTracingImage/shaded_8_1.png';


const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

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

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

class EightTracing extends Component {
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
            shaded: shaded_8_1,
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
            x: numberDimension.width * 0.42,
            y: numberDimension.height * 0.11,
        }, {
            x: numberDimension.width * 0.2,
            y: numberDimension.height * 0.28,
        }, {
            x: numberDimension.width * 0.44,
            y: numberDimension.height * 0.45,
        }, {
            x: numberDimension.width * 0.8,
            y: numberDimension.height * 0.7,
        }, {
            x: numberDimension.width * 0.5,
            y: numberDimension.height * 0.89,
        }, {
            x: numberDimension.width * 0.18,
            y: numberDimension.height * 0.7,
        }, {
            x: numberDimension.width * 0.5,
            y: numberDimension.height * 0.45,
        }, {
            x: numberDimension.width * 0.76,
            y: numberDimension.height * 0.28,
        }, {
            x: numberDimension.width * 0.5,
            y: numberDimension.height * 0.11,
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
                                //alert('Dot4');
                                this.setState({dot4: true});
                            }
                        }
                    }

                    // Dot 5
                    if(this.state.dot4 && !this.state.dot5) {
                        if(e.nativeEvent.locationX >= this.line1[4].x - scope && e.nativeEvent.locationX <= this.line1[4].x + scope) {
                            if(e.nativeEvent.locationY >= this.line1[4].y - scope && e.nativeEvent.locationY <= this.line1[4].y + scope) {
                                //alert('Dot5');
                                this.setState({dot5: true});
                            }
                        }
                    }

                    // Dot 6
                    if(this.state.dot5 && !this.state.dot6) {
                        if(e.nativeEvent.locationX >= this.line1[5].x - scope && e.nativeEvent.locationX <= this.line1[5].x + scope) {
                            if(e.nativeEvent.locationY >= this.line1[5].y - scope && e.nativeEvent.locationY <= this.line1[5].y + scope) {
                                //alert('Dot6');
                                this.setState({dot6: true});
                            }
                        }
                    }

                    // Dot 7
                    if(this.state.dot6 && !this.state.dot7) {
                        if(e.nativeEvent.locationX >= this.line1[6].x - scope && e.nativeEvent.locationX <= this.line1[6].x + scope) {
                            if(e.nativeEvent.locationY >= this.line1[6].y - scope && e.nativeEvent.locationY <= this.line1[6].y + scope) {
                                //alert('Dot7');
                                this.setState({dot7: true});
                            }
                        }
                    }

                    // Dot 8
                    if(this.state.dot7 && !this.state.dot8) {
        
                         if(e.nativeEvent.locationX >= this.line1[7].x - scope && e.nativeEvent.locationX <= this.line1[7].x + scope) {
                            if(e.nativeEvent.locationY >= this.line1[7].y - scope && e.nativeEvent.locationY <= this.line1[7].y + scope) {
                                //alert('Dot8');
                                this.setState({dot8: true});
                            }
                        }
                    }

                    // // Dot 9
                    // if(this.state.dot8 && !this.state.dot9) {
                    //     if(e.nativeEvent.locationX >= this.line1[8].x - scope && e.nativeEvent.locationX <= this.line1[8].x + scope) {
                    //         if(e.nativeEvent.locationY >= this.line1[8].y - scope && e.nativeEvent.locationY <= this.line1[8].y + scope) {
                    //             //alert('Dot9');
                    //             this.setState({dot9: true});
                    //         }
                    //     }
                    // }
                }                
            },
            onPanResponderRelease: (e, gesture) => {
                if(this.state.dot8) {
                    this.setState({arrayMove: [], showShaded: 1, showTracing: 0});
                } else {
                    //alert('Released');
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
            dot9: false, showShaded: 0, showTracing: 1});
        this.setState({tracing: trace1});
    }

    render() {

        let touchTrail = this.state.arrayMove.map((item, key) => {
            return(
                <View key = { key } {...this.panResponder.panHandlers}
                    style={[styles.trace, {position: 'absolute', 
                    width: 45, height: 45, borderRadius: 45, left: item.x - trail, top: item.y - trail}]}>
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

                        {/* <View style={[styles.dot, {top: numberDimension.height * 0.11,
                            left: numberDimension.width * 0.45}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.28,
                            left: numberDimension.width * 0.2}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.45,
                            left: numberDimension.width * 0.44}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.7,
                            left: numberDimension.width * 0.8}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.89,
                            left: numberDimension.width * 0.5}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.7,
                            left: numberDimension.width * 0.18}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.45,
                            left: numberDimension.width * 0.5}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.28,
                            left: numberDimension.width * 0.76}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.11,
                            left: numberDimension.width * 0.5}]}></View> */}

                        {/*
                            this.line1 = [{
                                x: numberDimension.width * 0.45,
                                y: numberDimension.height * 0.11,
                            }, {
                                x: numberDimension.width * 0.2,
                                y: numberDimension.height * 0.28,
                            }, {
                                x: numberDimension.width * 0.44,
                                y: numberDimension.height * 0.45,
                            }, {
                                x: numberDimension.width * 0.8,
                                y: numberDimension.height * 0.7,
                            }, {
                                x: numberDimension.width * 0.5,
                                y: numberDimension.height * 0.89,
                            }, {
                                x: numberDimension.width * 0.18,
                                y: numberDimension.height * 0.7,
                            }, {
                                x: numberDimension.width * 0.5,
                                y: numberDimension.height * 0.45,
                            }, {
                                x: numberDimension.width * 0.76,
                                y: numberDimension.height * 0.28,
                            }, {
                                x: numberDimension.width * 0.5,
                                y: numberDimension.height * 0.11,
                            }, ];
                        */}


                    </View>
                    <View style={{position: 'absolute', width: '35%', height: '90%', 
                                top: '5%', left: '32%', opacity: this.state.showShaded}}>
                        <Image source={shaded_8_1} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
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

export default withNavigation(EightTracing);