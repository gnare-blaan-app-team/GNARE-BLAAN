import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, Image, 
    PanResponder, TouchableOpacity, StatusBar, Animated } from 'react-native';
import { withNavigation } from 'react-navigation';

import ELetter_1 from '../LettersAssets/tracingE_1.gif';
import ELetter_2 from '../LettersAssets/tracingE_2.gif';
import ELetter_3 from '../LettersAssets/tracingE_3.gif';
import ELetter_4 from '../LettersAssets/tracingE_4.gif';
import ELetter_5 from '../LettersAssets/tracingE_5.gif';
import ELetter_6 from '../LettersAssets/tracingE_6.gif';
import ELetter_7 from '../LettersAssets/tracingE_7.gif';
import ELetter_8 from '../LettersAssets/tracingE_8.gif';

import shaded_E_1 from '../LettersAssets/shaded_E_1.png';
import shaded_E_2 from '../LettersAssets/shaded_E_2.png';
import shaded_E_3 from '../LettersAssets/shaded_E_3.png';
import shaded_E_4 from '../LettersAssets/shaded_E_4.png';
import shaded_E_5 from '../LettersAssets/shaded_E_5.png';
import shaded_E_6 from '../LettersAssets/shaded_E_6.png';
import shaded_E_7 from '../LettersAssets/shaded_E_7.png';
import shaded_E_8 from '../LettersAssets/shaded_E_8.png';

import PencilIcon from '../../images/Pencil_icon.png';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

import { scopeX, scopeY, trail } from '../letterImport';

const tracingLine = [ELetter_1, ELetter_2, ELetter_3, ELetter_4,
            ELetter_5, ELetter_6, ELetter_7, ELetter_8,];

const shadedLine = [shaded_E_1, shaded_E_2, shaded_E_3, shaded_E_4,
    shaded_E_5, shaded_E_6, shaded_E_7, shaded_E_8,];

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const boardDimension = {
    width: screenWidth * 0.75,
    height: screenHeight * 0.7,
};

const numberDimension = {
    width: boardDimension.width * 0.7,
    height: boardDimension.height * 0.95,
}


class ETracing extends Component {
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
            fot14: false,
            dot15: false,
            dot16: false,
            dot17: false,
            dot18: false,
        },

        // Dots Location
        this.line1 = [{
            x: screenWidth * 0.282,
            y: screenHeight * 0.5,
        }, {
            x: screenWidth * 0.282,
            y: screenHeight * 0.74,
        }, {
            x: screenWidth * 0.35,
            y: screenHeight * 0.445,
        }, {
            x: screenWidth * 0.43,
            y: screenHeight * 0.445,
        }, {
            x: screenWidth * 0.35,
            y: screenHeight * 0.62,
        }, {
            x: screenWidth * 0.41,
            y: screenHeight * 0.62,
        }, {
            x: screenWidth * 0.35,
            y: screenHeight * 0.81,
        }, {
            x: screenWidth * 0.43,
            y: screenHeight * 0.81,
        }, {
            x: screenWidth * 0.41,
            y: screenHeight * 0.26,
        }, {
            x: screenWidth * 0.375,
            y: screenHeight * 0.31,
        }, {
            x: screenWidth * 0.62,
            y: screenHeight * 0.68,
        }, {
            x: screenWidth * 0.69,
            y: screenHeight * 0.68,
        }, {
            x: screenWidth * 0.703,
            y: screenHeight * 0.58,
        }, {
            x: screenWidth * 0.588,
            y: screenHeight * 0.58,
        }, {
            x: screenWidth * 0.577,
            y: screenHeight * 0.77,
        }, {
            x: screenWidth * 0.66,
            y: screenHeight * 0.825,
        }, {
            x: screenWidth * 0.7,
            y: screenHeight * 0.37,
        }, {
            x: screenWidth * 0.655,
            y: screenHeight * 0.44,
        },];

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
                    
                    } else if(this.state.dot15 && !this.state.dot16) {
                        this.setState({dot16: 
                            ((gestureState.moveX >= this.line1[15].x - scopeX && gestureState.moveX <= this.line1[15].x + scopeX) && 
                            (gestureState.moveY >= this.line1[15].y - scopeY && gestureState.moveY <= this.line1[15].y + scopeY)) ? true : false});
                    
                    } else if(this.state.dot16 && !this.state.dot17) {
                        this.setState({dot17: 
                            ((gestureState.moveX >= this.line1[16].x - scopeX && gestureState.moveX <= this.line1[16].x + scopeX) && 
                            (gestureState.moveY >= this.line1[16].y - scopeY && gestureState.moveY <= this.line1[16].y + scopeY)) ? true : false});
                    
                    } else if(this.state.dot17 && !this.state.dot18) {
                        this.setState({dot18: 
                            ((gestureState.moveX >= this.line1[17].x - scopeX && gestureState.moveX <= this.line1[17].x + scopeX) && 
                            (gestureState.moveY >= this.line1[17].y - scopeY && gestureState.moveY <= this.line1[17].y + scopeY)) ? true : false});
                    
                    }
                        this.setState({arrayMove: [...this.state.arrayMove, coordinate]});
                }
            },
            onPanResponderRelease: (e, gesture) => {
                if(this.state.dot2) {
                    if(this.state.dot4) {
                        if(this.state.dot6) {
                            if(this.state.dot8) {
                                if(this.state.dot10) {
                                    if(this.state.dot12) {
                                        if(this.state.dot16) {
                                            if(this.state.dot18) {
                                                this.setState({arrayMove: [],
                                                    shaded: shadedLine[7], showShaded: 1, showTracing: 0,});
                                            } else {
                                                this.setState({arrayMove: [], dot17: false, dot18: false,
                                                    shaded: shadedLine[6], showShaded: 1, tracing: tracingLine[7]});
                                            }
                                        } else {
                                            this.setState({arrayMove: [], dot13: false, dot14: false,
                                                shaded: shadedLine[5], showShaded: 1, dot15: false, dot16: false, tracing: tracingLine[6]});
                                        }
                                    } else {
                                        this.setState({arrayMove: [], dot11: false, dot12: false,
                                            shaded: shadedLine[4], showShaded: 1, dot13: false, tracing: tracingLine[5]});
                                    }
                                } else {
                                    this.setState({arrayMove: [], dot9: false, dot10: false,
                                        shaded: shadedLine[3], showShaded: 1, tracing: tracingLine[4]});
                                }
                            } else {
                                this.setState({arrayMove: [], dot7: false, dot8: false,
                                    shaded: shadedLine[2], showShaded: 1, tracing: tracingLine[3]});
                            }
                        } else {
                            this.setState({arrayMove: [], dot5: false, dot6: false,
                                shaded: shadedLine[1], showShaded: 1, tracing: tracingLine[2]});
                        }
                    } else {
                        this.setState({arrayMove: [], dot3: false, dot4: false,
                            shaded: shadedLine[0], showShaded: 1, dot7: false, tracing: tracingLine[1]});
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
        this.props.navigation.navigate('letters');
    }

    clearBoard = () => {
        this.setState({arrayMove: [], dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false,
            dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot18: false,
            dot12: false, dot13: false, dot14: false, dot15: false, dot16: false, dot17: false,
            showShaded: 0, shaded: shadedLine[0],
            tracing: tracingLine[0], showTracing: 1, tracing: tracingLine[0]});
    }

    render() {

        let touchTrail = this.state.arrayMove.map((item, key) => {
            return(
                <View key = { key } {...this.panResponder.panHandlers}
                    style={[styles.trace, {left: item.x - 22.5, 
                    top: item.y - 22.5, width: 45, height: 45, borderRadius: 45}]}>
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
                        height: numberDimension.height, top: '2.5%', left: '15%'}}>
                        <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>
                    <View style={{position: 'absolute', width: numberDimension.width,
                        opacity: this.state.showShaded, 
                        height: numberDimension.height, top: '2.5%', left: '15%'}}>
                        <Image source={this.state.shaded} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>
                </View>

                <View style={[styles.dot, {top: screenHeight * 0.5,
                    left: screenWidth * 0.282}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.74,
                    left: screenWidth * 0.282}]}></View>
                
                <View style={[styles.dot, {top: screenHeight * 0.445,
                    left: screenWidth * 0.35}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.445,
                    left: screenWidth * 0.43}]}></View>
                
                <View style={[styles.dot, {top: screenHeight * 0.62,
                    left: screenWidth * 0.35}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.62,
                    left: screenWidth * 0.41}]}></View>
                
                {/*
                    this.line1 = [{
                        x: screenWidth * 0.282,
                        y: screenHeight * 0.5,
                    }, {
                        x: screenWidth * 0.282,
                        y: screenHeight * 0.74,
                    }, {
                        x: screenWidth * 0.35,
                        y: screenHeight * 0.445,
                    }, {
                        x: screenWidth * 0.43,
                        y: screenHeight * 0.445,
                    }, {
                        x: screenWidth * 0.35,
                        y: screenHeight * 0.62,
                    }, {
                        x: screenWidth * 0.41,
                        y: screenHeight * 0.62,
                    }, {
                        x: screenWidth * 0.35,
                        y: screenHeight * 0.81,
                    }, {
                        x: screenWidth * 0.43,
                        y: screenHeight * 0.81,
                    }, {
                        x: screenWidth * 0.41,
                        y: screenHeight * 0.26,
                    }, {
                        x: screenWidth * 0.375,
                        y: screenHeight * 0.31,
                    }, {
                        x: screenWidth * 0.62,
                        y: screenHeight * 0.68,
                    }, {
                        x: screenWidth * 0.69,
                        y: screenHeight * 0.68,
                    }, {
                        x: screenWidth * 0.703,
                        y: screenHeight * 0.58,
                    }, {
                        x: screenWidth * 0.588,
                        y: screenHeight * 0.58,
                    }, {
                        x: screenWidth * 0.577,
                        y: screenHeight * 0.77,
                    }, {
                        x: screenWidth * 0.66,
                        y: screenHeight * 0.825,
                    }, {
                        x: screenWidth * 0.7,
                        y: screenHeight * 0.37,
                    }, {
                        x: screenWidth * 0.655,
                        y: screenHeight * 0.44,
                    },];
                */}

                <View style={[styles.dot, {top: screenHeight * 0.81,
                    left: screenWidth * 0.35}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.81,
                    left: screenWidth * 0.43}]}></View>

                <View style={[styles.dot, {top: screenHeight * 0.26,
                    left: screenWidth * 0.41}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.31,
                    left: screenWidth * 0.375}]}></View>


                

                <View style={[styles.dot, {top: screenHeight * 0.68,
                    left: screenWidth * 0.62}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.68,
                    left: screenWidth * 0.69}]}></View>

                {/*
                    {
                        x: screenWidth * 0.62,
                        y: screenHeight * 0.68,
                    }, {
                        x: screenWidth * 0.69,
                        y: screenHeight * 0.68,
                    }, {
                        x: screenWidth * 0.703,
                        y: screenHeight * 0.58,
                    }, {
                        x: screenWidth * 0.588,
                        y: screenHeight * 0.58,
                    }, {
                        x: screenWidth * 0.577,
                        y: screenHeight * 0.77,
                    }, {
                        x: screenWidth * 0.66,
                        y: screenHeight * 0.825,
                    }, {
                        x: screenWidth * 0.7,
                        y: screenHeight * 0.37,
                    }, {
                        x: screenWidth * 0.655,
                        y: screenHeight * 0.44,
                    },
                */}

                <View style={[styles.dot, {top: screenHeight * 0.58,
                    left: screenWidth * 0.703}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.58,
                    left: screenWidth * 0.588}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.77,
                    left: screenWidth * 0.577}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.825,
                    left: screenWidth * 0.66}]}></View>

                <View style={[styles.dot, {top: screenHeight * 0.37,
                    left: screenWidth * 0.7}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.44,
                    left: screenWidth * 0.655}]}></View>

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

export default withNavigation(ETracing);