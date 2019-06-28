import React, { Component } from 'react';
import { View, Dimensions, ImageBackground, StyleSheet, Image, PanResponder, TouchableOpacity, StatusBar, Animated } from 'react-native';
import { withNavigation } from 'react-navigation';

import Home_icon from '../../images/Home_icon.png';
import Back_icon from '../../images/Back_icon.png';
import imageBG from '../../images/BG.jpg';
import PencilIcon from '../../images/Pencil_icon.png';

import trace1 from '../numberTracingGIF/4_1.gif';
import trace2 from '../numberTracingGIF/4_2.gif';
import trace3 from '../numberTracingGIF/4_3.gif';

import shaded_4_1 from '../numberTracingImage/shaded_4_1.png';
import shaded_4_2 from '../numberTracingImage/shaded_4_2.png';
import shaded_4_3 from '../numberTracingImage/shaded_4_3.png';
import traceZero from '../numberTracingImage/0.png';

import shaded_0 from '../numberTracingImage/shaded_0.png';

import trace4 from '../numberTracingGIF/0.gif';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const shadedLine = [shaded_4_1, shaded_4_2, shaded_4_3, shaded_0];
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

const scope = 50;
const trail = 22.5;
const velocityLimit = 1.2;
const velocityLimit2 = -1.5; 

class FourHundredTracing extends Component {
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
            dot16: false,
            dot17: false,
            dot18: false,
            dot19: false,
            dot20: false,
            dot21: false,
        },

        // Dots Locations
        this.line1 = [{
            x: numberDimension.width * 0.65,
            y: numberDimension.height * 0.12,
        }, {
            x: numberDimension.width * 0.45,
            y: numberDimension.height * 0.32,
        }, {
            x: numberDimension.width * 0.19,
            y: numberDimension.height * 0.6,
        }, ];

        this.line2 = [{
            x: numberDimension.width * 0.27,
            y: numberDimension.height * 0.67,
        }, {
            x: numberDimension.width * 0.5,
            y: numberDimension.height * 0.67,
        }, {
            x: numberDimension.width * 0.75,
            y: numberDimension.height * 0.67,
        }, ];


        this.line3 = [{
            x: numberDimension.width * 0.68,
            y: numberDimension.height * 0.3,
        }, {
            x: numberDimension.width * 0.68,
            y: numberDimension.height * 0.55,
        }, {
            x: numberDimension.width * 0.68,
            y: numberDimension.height * 0.8,
        }, ];

        this.line4 = [{
            x: numberDimension2.width * 0.5,
            y: numberDimension2.height * 0.12,
        }, {
            x: numberDimension2.width * 0.2,
            y: numberDimension2.height * 0.35,
        }, {
            x: numberDimension2.width * 0.2,
            y: numberDimension2.height * 0.7,
        }, {
            x: numberDimension2.width * 0.5,
            y: numberDimension2.height * 0.9,
        }, {
            x: numberDimension2.width * 0.78,
            y: numberDimension2.height * 0.68,
        }, {
            x: numberDimension2.width * 0.78,
            y: numberDimension2.height * 0.28,
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
                    this.clearBoard();
                }
                else if(gestureState.vy >= 1.5 || gestureState.vy <= -1.5) {
                    this.clearBoard();
                } else {
                    this.setState({arrayMove: [...this.state.arrayMove, coordinate],
                        touchLength: this.touchLength + 1});
                    
                    // Dot 1
                    if((gestureState.moveX < (screenWidth / 2) - (screenWidth * 0.1)) && !this.state.dot9) {
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
                            if(e.nativeEvent.locationX >= this.line2[2].x - scope && e.nativeEvent.locationX <= this.line2[2].x + scope) {
                                if(e.nativeEvent.locationY >= this.line2[2].y - scope && e.nativeEvent.locationY <= this.line2[2].y + scope) {
                                    //alert('Dot3');
                                    this.setState({dot6: true});
                                }
                            }
                        }

                        // Dot 7
                        if(this.state.dot6 && !this.state.dot7) {
                            if(e.nativeEvent.locationX >= this.line3[0].x - scope && e.nativeEvent.locationX <= this.line3[0].x + scope) {
                                if(e.nativeEvent.locationY >= this.line3[0].y - scope && e.nativeEvent.locationY <= this.line3[0].y + scope) {
                                    //alert('Dot2');
                                    this.setState({dot7: true});
                                }
                            }
                        }
                        
                        // Dot 8
                        if(this.state.dot7 && !this.state.dot8) {
                            if(e.nativeEvent.locationX >= this.line3[1].x - scope && e.nativeEvent.locationX <= this.line3[1].x + scope) {
                                if(e.nativeEvent.locationY >= this.line3[1].y - scope && e.nativeEvent.locationY <= this.line3[1].y + scope) {
                                    //alert('Dot2');
                                    this.setState({dot8: true});
                                }
                            }
                        }
                        
                        // Dot 9
                        if(this.state.dot8 && !this.state.dot9) {
                            if(e.nativeEvent.locationX >= this.line3[2].x - scope && e.nativeEvent.locationX <= this.line3[2].x + scope) {
                                if(e.nativeEvent.locationY >= this.line3[2].y - scope && e.nativeEvent.locationY <= this.line3[2].y + scope) {
                                    //alert('Dot3');
                                    this.setState({dot9: true});
                                }
                            }
                        }
                    } else {

                        // Trace Number Two
                        if((gestureState.moveX < (screenWidth / 2) + (screenWidth * 0.1)) && this.state.dot9) {
                            // Dot 7
                            if(!this.state.dot10 && this.state.dot9) {
                                if(e.nativeEvent.locationX >= this.line4[0].x - scope && e.nativeEvent.locationX <= this.line4[0].x + scope) {
                                    if(e.nativeEvent.locationY >= this.line4[0].y - scope && e.nativeEvent.locationY <= this.line4[0].y + scope) {
                                        //alert('Dot 7');
                                        this.setState({dot10: true});
                                    }
                                }
                            }

                            // Dot 8
                            if(this.state.dot10 && !this.state.dot11) {
                                if(e.nativeEvent.locationX >= this.line4[1].x - scope && e.nativeEvent.locationX <= this.line4[1].x + scope) {
                                    if(e.nativeEvent.locationY >= this.line4[1].y - scope && e.nativeEvent.locationY <= this.line4[1].y + scope) {
                                        //alert('Dot 8');
                                        this.setState({dot11: true});
                                    }
                                }
                            }
                            // Dot 9
                            if(this.state.dot11 && !this.state.dot12) {
                                if(e.nativeEvent.locationX >= this.line4[2].x - scope && e.nativeEvent.locationX <= this.line4[2].x + scope) {
                                    if(e.nativeEvent.locationY >= this.line4[2].y - scope && e.nativeEvent.locationY <= this.line4[2].y + scope) {
                                        //alert('Dot 9');
                                        this.setState({dot12: true});
                                    }
                                }
                            }
                            
                            // Dot 10
                            if(this.state.dot12 && !this.state.dot13) {
                                if(e.nativeEvent.locationX >= this.line4[3].x - scope && e.nativeEvent.locationX <= this.line4[3].x + scope) {
                                    if(e.nativeEvent.locationY >= this.line4[3].y - scope && e.nativeEvent.locationY <= this.line4[3].y + scope) {
                                        //alert('Dot 10');
                                        this.setState({dot13: true});
                                    }
                                }
                            }
                            
                            // Dot 11
                            if(this.state.dot13 && !this.state.dot14) {
                                if(e.nativeEvent.locationX >= this.line4[4].x - scope && e.nativeEvent.locationX <= this.line4[4].x + scope) {
                                    if(e.nativeEvent.locationY >= this.line4[4].y - scope && e.nativeEvent.locationY <= this.line4[4].y + scope) {
                                        //alert('Dot 12');
                                        this.setState({dot14: true});
                                    }
                                }
                            }
                            
                            // Dot 12
                            if(this.state.dot14 && !this.state.dot15) {
                                if(e.nativeEvent.locationX >= this.line4[5].x - scope && e.nativeEvent.locationX <= this.line4[5].x + scope) {
                                    if(e.nativeEvent.locationY >= this.line4[5].y - scope && e.nativeEvent.locationY <= this.line4[5].y + scope) {
                                        //alert('Dot 12');
                                        this.setState({dot15: true});
                                    }
                                }
                            }

                        // Trace Number Three, Zero (2)
                        }

                        else if(this.state.tracing2 == shadedLine[3]) {
                            // Dot 7
                            if(!this.state.dot16 && this.state.dot15) {
                                if(e.nativeEvent.locationX >= this.line4[0].x - scope && e.nativeEvent.locationX <= this.line4[0].x + scope) {
                                    if(e.nativeEvent.locationY >= this.line4[0].y - scope && e.nativeEvent.locationY <= this.line4[0].y + scope) {
                                        //alert('Dot 7');
                                        this.setState({dot16: true});
                                    }
                                }
                            }

                            // Dot 8
                            if(this.state.dot16 && !this.state.dot17) {
                                if(e.nativeEvent.locationX >= this.line4[1].x - scope && e.nativeEvent.locationX <= this.line4[1].x + scope) {
                                    if(e.nativeEvent.locationY >= this.line4[1].y - scope && e.nativeEvent.locationY <= this.line4[1].y + scope) {
                                        //alert('Dot 8');
                                        this.setState({dot17: true});
                                    }
                                }
                            }
                            // Dot 9
                            if(this.state.dot17 && !this.state.dot18) {
                                if(e.nativeEvent.locationX >= this.line4[2].x - scope && e.nativeEvent.locationX <= this.line4[2].x + scope) {
                                    if(e.nativeEvent.locationY >= this.line4[2].y - scope && e.nativeEvent.locationY <= this.line4[2].y + scope) {
                                        //alert('Dot 9');
                                        this.setState({dot18: true});
                                    }
                                }
                            }
                            
                            // Dot 10
                            if(this.state.dot18 && !this.state.dot19) {
                                if(e.nativeEvent.locationX >= this.line4[3].x - scope && e.nativeEvent.locationX <= this.line4[3].x + scope) {
                                    if(e.nativeEvent.locationY >= this.line4[3].y - scope && e.nativeEvent.locationY <= this.line4[3].y + scope) {
                                        //alert('Dot 10');
                                        this.setState({dot19: true});
                                    }
                                }
                            }
                            
                            // Dot 11
                            if(this.state.dot19 && !this.state.dot20) {
                                if(e.nativeEvent.locationX >= this.line4[4].x - scope && e.nativeEvent.locationX <= this.line4[4].x + scope) {
                                    if(e.nativeEvent.locationY >= this.line4[4].y - scope && e.nativeEvent.locationY <= this.line4[4].y + scope) {
                                        //alert('Dot 12');
                                        this.setState({dot20: true});
                                    }
                                }
                            }
                            
                            // Dot 12
                            if(this.state.dot20 && !this.state.dot21) {
                                if(e.nativeEvent.locationX >= this.line4[5].x - scope && e.nativeEvent.locationX <= this.line4[5].x + scope) {
                                    if(e.nativeEvent.locationY >= this.line4[5].y - scope && e.nativeEvent.locationY <= this.line4[5].y + scope) {
                                        //alert('Dot 12');
                                        this.setState({dot21: true});
                                    }
                                }
                            }
                        }
                    }
                }
            },
            onPanResponderRelease: (e, gesture) => {
                if(this.state.dot3) {
                    if(this.state.dot6) {
                        if(this.state.dot9) {
                            if(this.state.dot15) {
                                if(this.state.dot21) {
                                    this.setState({arrayMove: [], tracing3: shadedLine[3]});
                                } else {
                                    this.setState({arrayMove: [], tracing3: tracingLine[3],
                                        tracing2: shadedLine[3],
                                        dot16: false, dot17: false, dot18: false,
                                        dot19: false, dot20: false, dot21: false});
                                }
                            } else {
                                this.setState({arrayMove: [], tracing2: tracingLine[3], shaded: shadedLine[2],
                                    showTracing: 0, dot10: false, dot11: false, dot12: false,
                                    dot13: false, dot14: false, dot15: false});
                            }
                        } else {
                            this.setState({arrayMove: [], shaded: shadedLine[1], tracing: tracingLine[2],
                                    showShaded: 1, dot7: false, dot8: false, dot9: false,});
                        }
                    } else {
                        this.setState({arrayMove: [], showShaded: 1, shaded: shadedLine[0],
                         tracing: tracingLine[1], dot4: false, dot5: false, dot6: false});
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
        this.setState({arrayMove: [], dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false,
            dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false,
            dot13: false, dot14: false, dot15: false, dot16: false, dot17: false, dot18: false,
            dot19: false, dot20: false, dot21: false,
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
                        width: '75%', height: '70%', top: '20%', left: '12.5%', backgroundColor: 'rgba(255, 255, 255, 0.000000001)'}}
                        {...this.panResponder.panHandlers} >
                    <View style={{position: 'absolute', width: '35%', height: '90%', 
                                top: '5%', left: '5%', opacity: this.state.showTracing,}}>
                        <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>

                    <View style={{position: 'absolute', width: '35%', height: '90%', 
                                top: '5%', left: '5%', opacity: this.state.showShaded}}>
                        <Image source={this.state.shaded} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>

                    <View style={{position: 'absolute', width: '30%', height: '90%', 
                                top: '5%', left: '37.5%',}}>
                        <Image source={this.state.tracing2} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>

                    <View style={{position: 'absolute', width: '30%', height: '90%', 
                                top: '5%', left: '67.5%',}}>
                        <Image source={this.state.tracing3} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
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

export default withNavigation(FourHundredTracing);