import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, Image, 
    PanResponder, TouchableOpacity, StatusBar, Animated } from 'react-native';
import { withNavigation } from 'react-navigation';

import FLetter_1 from '../LettersAssets/tracingF_1.gif';
import FLetter_2 from '../LettersAssets/tracingF_2.gif';
import FLetter_3 from '../LettersAssets/tracingF_3.gif';
import FLetter_4 from '../LettersAssets/tracingF_4.gif';
import FLetter_5 from '../LettersAssets/tracingF_5.gif';

import shaded_F_1 from '../LettersAssets/shaded_F_1.png';
import shaded_F_2 from '../LettersAssets/shaded_F_2.png';
import shaded_F_3 from '../LettersAssets/shaded_F_3.png';
import shaded_F_4 from '../LettersAssets/shaded_F_4.png';
import shaded_F_5 from '../LettersAssets/shaded_F_5.png';

import PencilIcon from '../../images/Pencil_icon.png';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

import { scopeX, scopeY, trail } from '../letterImport';

import {sound} from '../../HomePage';

const tracingLine = [FLetter_1, FLetter_2, FLetter_3, FLetter_4, FLetter_5,];
const shadedLine = [shaded_F_1, shaded_F_2, shaded_F_3, shaded_F_4, shaded_F_5,];

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const boardDimension = {
    width: screenWidth * 0.75,
    height: screenHeight * 0.7,
};

const numberDimension = {
    width: boardDimension.width * 0.5,
    height: boardDimension.height,
}


class FTracing extends Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        try {
            sound.setVolume(0.2);
            sound.play();
        } catch(error) {
        
        }
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
        },

        // Dots Location
        this.line1 = [{
            x: screenWidth * 0.35,
            y: screenHeight * 0.37,
        }, {
            x: screenWidth * 0.35,
            y: screenHeight * 0.55,
        }, {
            x: screenWidth * 0.35,
            y: screenHeight * 0.7,
        }, {
            x: screenWidth * 0.4,
            y: screenHeight * 0.29,
        }, {
            x: screenWidth * 0.45,
            y: screenHeight * 0.29,
        }, {
            x: screenWidth * 0.4,
            y: screenHeight * 0.53,
        }, {
            x: screenWidth * 0.45,
            y: screenHeight * 0.53,
        }, {
            x: screenWidth * 0.61,
            y: screenHeight * 0.28,
        }, {
            x: screenWidth * 0.59,
            y: screenHeight * 0.38,
        }, {
            x: screenWidth * 0.59,
            y: screenHeight * 0.55,
        }, {
            x: screenWidth * 0.59,
            y: screenHeight * 0.7,
        }, {
            x: screenWidth * 0.56,
            y: screenHeight * 0.445,
        }, {
            x: screenWidth * 0.62,
            y: screenHeight * 0.445,
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
                    
                    } 
                        this.setState({arrayMove: [...this.state.arrayMove, coordinate]});
                }
            },
            onPanResponderRelease: (e, gesture) => {
                if(this.state.dot3) {
                    if(this.state.dot5) {
                        if(this.state.dot7) {
                            if(this.state.dot11) {
                                if(this.state.dot13) {
                                    this.setState({arrayMove: [],
                                        showShaded: 1, shaded: shadedLine[4], showTracing: 0,});
                                } else {
                                    this.setState({arrayMove: [], dot12: false, dot13: false,
                                        showShaded: 1, shaded: shadedLine[3], dot14: false, tracing: tracingLine[4]});
                                }
                            } else {
                                this.setState({arrayMove: [], dot10: false, dot11: false,
                                    showShaded: 1, shaded: shadedLine[2], dot9: false, tracing: tracingLine[3]});
                            }
                        } else {
                            this.setState({arrayMove: [], dot7: false, dot8: false,
                                showShaded: 1, shaded: shadedLine[1], tracing: tracingLine[2]});
                        }
                    } else {
                        this.setState({arrayMove: [], dot5: false, dot4: false, dot6: false,
                            showShaded: 1, shaded: shadedLine[0], tracing: tracingLine[1]});
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
        try {
            sound.setVolume(0);
            sound.paused();
        } catch(error) {
        
        }
        this.props.navigation.navigate('letters');
    }

    clearBoard = () => {
        this.setState({arrayMove: [], dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false,
            dot7: false, dot8: false, dot9: false, dot10: false, dot11: false,
            dot12: false, dot13: false, showShaded: 0, shaded: shadedLine[0],
            tracing: tracingLine[0], showTracing: 1, tracing: tracingLine[0]});
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
                        height: numberDimension.height, top: '2.5%', left: '25%'}}>
                        <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>
                    <View style={{position: 'absolute', width: numberDimension.width,
                        opacity: this.state.showShaded, 
                        height: numberDimension.height, top: '2.5%', left: '25%'}}>
                        <Image source={this.state.shaded} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>
                </View>

                <View style={[styles.dot, {top: screenHeight * 0.37,
                    left: screenWidth * 0.35}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.55,
                    left: screenWidth * 0.35}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.7,
                    left: screenWidth * 0.35}]}></View>

                <View style={[styles.dot, {top: screenHeight * 0.29,
                    left: screenWidth * 0.4}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.29,
                    left: screenWidth * 0.45}]}></View>
                
                {/*
                    this.line1 = [{
                        x: screenWidth * 0.35,
                        y: screenHeight * 0.37,
                    }, {
                        x: screenWidth * 0.35,
                        y: screenHeight * 0.55,
                    }, {
                        x: screenWidth * 0.35,
                        y: screenHeight * 0.7,
                    }, {
                        x: screenWidth * 0.4,
                        y: screenHeight * 0.29,
                    }, {
                        x: screenWidth * 0.45,
                        y: screenHeight * 0.29,
                    }, {
                        x: screenWidth * 0.4,
                        y: screenHeight * 0.53,
                    }, {
                        x: screenWidth * 0.45,
                        y: screenHeight * 0.53,
                    }, {
                        x: screenWidth * 0.61,
                        y: screenHeight * 0.28,
                    }, {
                        x: screenWidth * 0.59,
                        y: screenHeight * 0.38,
                    }, {
                        x: screenWidth * 0.59,
                        y: screenHeight * 0.55,
                    }, {
                        x: screenWidth * 0.59,
                        y: screenHeight * 0.7,
                    }, {
                        x: screenWidth * 0.56,
                        y: screenHeight * 0.445,
                    }, {
                        x: screenWidth * 0.62,
                        y: screenHeight * 0.445,
                    }, ];
                */}

                <View style={[styles.dot, {top: screenHeight * 0.53,
                    left: screenWidth * 0.4}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.53,
                    left: screenWidth * 0.45}]}></View>

                
                <View style={[styles.dot, {top: screenHeight * 0.28,
                    left: screenWidth * 0.61}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.38,
                    left: screenWidth * 0.59}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.55,
                    left: screenWidth * 0.59}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.7,
                    left: screenWidth * 0.59}]}></View>

                <View style={[styles.dot, {top: screenHeight * 0.445,
                    left: screenWidth * 0.56}]}></View>
                <View style={[styles.dot, {top: screenHeight * 0.445,
                    left: screenWidth * 0.62}]}></View>

                {/*
                    {
                        x: screenWidth * 0.61,
                        y: screenHeight * 0.28,
                    }, {
                        x: screenWidth * 0.59,
                        y: screenHeight * 0.38,
                    }, {
                        x: screenWidth * 0.59,
                        y: screenHeight * 0.55,
                    }, {
                        x: screenWidth * 0.59,
                        y: screenHeight * 0.7,
                    }, {
                        x: screenWidth * 0.56,
                        y: screenHeight * 0.445,
                    }, {
                        x: screenWidth * 0.62,
                        y: screenHeight * 0.445,
                    }, 
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

export default withNavigation(FTracing);