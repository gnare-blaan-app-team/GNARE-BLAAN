import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, Image, 
    PanResponder, TouchableOpacity, StatusBar, Animated } from 'react-native';
import { withNavigation } from 'react-navigation';

import ILetter_1 from '../LettersAssets/tracingI_1.gif';
import ILetter_2 from '../LettersAssets/tracingI_2.gif';
import ILetter_3 from '../LettersAssets/tracingI_3.gif';

import shaded_I_1 from '../LettersAssets/shaded_I_1.png';
import shaded_I_2 from '../LettersAssets/shaded_I_2.png';
import shaded_I_3 from '../LettersAssets/shaded_I_3.png';

import PencilIcon from '../../images/Pencil_icon.png';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

import { scopeX, scopeY, trail } from '../letterImport';

const tracingLine = [ILetter_1, ILetter_2, ILetter_3,];
const shadedLine = [shaded_I_1, shaded_I_2, shaded_I_3,];

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const boardDimension = {
    width: screenWidth * 0.75,
    height: screenHeight * 0.7,
};

const numberDimension = {
    width: boardDimension.width * 0.3,
    height: boardDimension.height * 0.9,
}


class ITracing extends Component {
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
            tracing: tracingLine[0],
            showShaded: 0,
            shaded: shadedLine[0],
            showTracing: 1,
            touchLength: 0,
            tittlePressed: false,

            dot1: false,
            dot2: false,
            dot3: false,
            dot4: false,
            dot5: false,
            dot6: false,
        },

        // Dots Location
        this.line1 = [{
            x: screenWidth * 0.43,
            y: screenHeight * 0.37,
        }, {
            x: screenWidth * 0.43,
            y: screenHeight * 0.55,
        }, {
            x: screenWidth * 0.43,
            y: screenHeight * 0.7,
        }, {
            x: screenWidth * 0.572,
            y: screenHeight * 0.52,
        }, {
            x: screenWidth * 0.572,
            y: screenHeight * 0.7,
        }, {
            x: screenWidth * 0.572,
            y: screenHeight * 0.31,
        }, ];

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
                    
                    } else if(this.state.dot4 && !this.state.dot5) {
                        this.setState({dot5: 
                            ((gestureState.moveX >= this.line1[4].x - scopeX && gestureState.moveX <= this.line1[4].x + scopeX) && 
                            (gestureState.moveY >= this.line1[4].y - scopeY && gestureState.moveY <= this.line1[4].y + scopeY)) ? true : false});
                    
                    } 
                        this.setState({arrayMove: [...this.state.arrayMove, coordinate]});
                }
            },
            onPanResponderRelease: (e, gesture) => {
                if(!this.state.tittlePressed) {
                    if(this.state.dot3) {
                        if(this.state.dot5) {
                            this.setState({arrayMove: [], tracing: tracingLine[2],
                                showShaded: 1, shaded: shadedLine[1], });
                        } else {
                            this.setState({arrayMove: [], dot5: false, dot4: false,
                                showShaded: 1, shaded: shadedLine[0], tracing: tracingLine[1]});
                        }
                    } else {
                        this.clearBoard();
                    }
                } else {
                    this.setState({arrayMove: []});
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
        this.props.navigation.navigate('letters');
    }

    tittlePressed = () => {
        if(this.state.dot5) {
            this.setState({dot6: true, showShaded: 1, shaded: shadedLine[2], 
                tittlePressed: false, showTracing: 0,});
        }
        this.setState({tittlePressed: true});
    }

    clearBoard = () => {
        this.setState({arrayMove: [], dot1: false, dot2: false, dot3: false, 
            dot4: false, dot5: false, dot6: false, showShaded: 0, shaded: shadedLine[0], 
            tracing: tracingLine[0], showTracing: 1, tracing: tracingLine[0], tittlePressed: false});
    }

    render() {

        let touchTrail = this.state.arrayMove.map((item, key) => {
            return(
                <View key = { key } {...this.panResponder.panHandlers}
                    style={[styles.trace, {position: 'absolute', left: item.x - trail, 
                    top: item.y - trail}]}>
                </View>
            )
        });

        StatusBar.setHidden(true);
        return (
            <ImageBackground source={require('../../images/BG.jpg')} style={styles.image}>
                <Image source={require('../../images/BG.jpg')} style={{position: 'absolute', width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>

                <View {...this.panResponder.panHandlers} style={{position: 'absolute', 
                        width: boardDimension.width, height: boardDimension.height, 
                        top: '20%', left: '12.5%', backgroundColor: 'rgba(255, 255, 255, 0.000000001)'}}>
                    <View style={{position: 'absolute', width: numberDimension.width, 
                        opacity: this.state.showTracing,
                        height: numberDimension.height, top: '5%', left: '35%'}}>
                        <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>
                    <View style={{position: 'absolute', width: numberDimension.width,
                        opacity: this.state.showShaded, 
                        height: numberDimension.height, top: '5%', left: '35%'}}>
                        <Image source={this.state.shaded} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>
                </View>

                <View style={[styles.dot, {top: screenHeight * 0.37,
                    left: screenWidth * 0.43}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.55,
                    left: screenWidth * 0.43}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.7,
                    left: screenWidth * 0.43}]}></View>
                
                {/*
                    this.line1 = [{
                        x: screenWidth * 0.43,
                        y: screenHeight * 0.37,
                    }, {
                        x: screenWidth * 0.43,
                        y: screenHeight * 0.55,
                    }, {
                        x: screenWidth * 0.43,
                        y: screenHeight * 0.7,
                    }, {
                        x: screenWidth * 0.572,
                        y: screenHeight * 0.52,
                    }, {
                        x: screenWidth * 0.572,
                        y: screenHeight * 0.7,
                    }, {
                        x: screenWidth * 0.572,
                        y: screenHeight * 0.31,
                    }, ];
                */}

                
                <View style={{top: screenHeight * 0.28, position: 'absolute',
                    left: screenWidth * 0.558, width: 20, height: 20}}>
                    <TouchableOpacity onPress={this.tittlePressed}>
                        <View style={{width: '100%', height: '100%',
                            backgroundColor: 'rgba(255, 255, 255, 0.00000001)'}}>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.dot, {top: screenHeight * 0.52,
                    left: screenWidth * 0.572}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.7,
                    left: screenWidth * 0.572}]}></View>

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
                            source={require('../../images/Back_icon.png')}
                            style={styles.back}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={require('../../images/Home_icon.png')}
                            style={styles.home}
                        ></Image>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        )
    }
}

export default withNavigation(ITracing);