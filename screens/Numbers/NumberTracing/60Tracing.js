import React, { Component } from 'react';
import { View, Dimensions, ImageBackground, StyleSheet, Image, PanResponder, TouchableOpacity, StatusBar, Animated } from 'react-native';
import { withNavigation } from 'react-navigation';

import Home_icon from '../../images/Home_icon.png';
import Back_icon from '../../images/Back_icon.png';
import imageBG from '../../images/BG.jpg';
import PencilIcon from '../../images/Pencil_icon.png';

import trace1 from '../numberTracingGIF/6_1.gif';
import shaded_6_1 from '../numberTracingImage/shaded_6_1.png';

import traceNumber from '../numberTracingImage/6.png';
import traceZero from '../numberTracingImage/0.png';

import shaded_0 from '../numberTracingImage/shaded_0.png';

import trace2 from '../numberTracingGIF/0.gif';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const shadedLine = [shaded_6_1, shaded_0];
const tracingLine = [trace1, trace2];

const boardDimension = {
    width: screenWidth * 0.75,
    height: screenHeight * 0.7,
};

const numberDimension = {
    width: boardDimension.width * 0.35,
    height: boardDimension.height * 0.9,
}

const numberDimension2 = {
    width: boardDimension.width * 0.35,
    height: boardDimension.height * 0.9,
}

const scope = 50;
const trail = 22.5;
const velocityLimit = 1.2;
const velocityLimit2 = -1.5; 

class SixtyTracing extends Component {
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
            shaded: shaded_6_1,
            tracing: trace1,
            tracing2: traceZero,
            shaded2: shaded_0,
            lineIndex: 0,
            showShaded: 0,
            showShaded2: 0,
            showTracing: 1,
            showTracing2: 1,
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
        },

        // Dots Locations
        this.line1 =[{
            x: numberDimension.width * 0.78,
            y: numberDimension.height * 0.18,
        }, {
            x: numberDimension.width * 0.58,
            y: numberDimension.height * 0.1,
        }, {
            x: numberDimension.width * 0.22,
            y: numberDimension.height * 0.25,
        }, {
            x: numberDimension.width * 0.15,
            y: numberDimension.height * 0.5,
        }, {
            x: numberDimension.width * 0.22,
            y: numberDimension.height * 0.75,
        }, {
            x: numberDimension.width * 0.5,
            y: numberDimension.height * 0.91,
        }, {
            x: numberDimension.width * 0.82,
            y: numberDimension.height * 0.75,
        }, {
            x: numberDimension.width * 0.82,
            y: numberDimension.height * 0.55,
        }, {
            x: numberDimension.width * 0.62,
            y: numberDimension.height * 0.43,
        }, {
            x: numberDimension.width * 0.38,
            y: numberDimension.height * 0.45,
        }, ];

        this.line2 = [{
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
                    
                    // Trace Number Four
                    if(gestureState.moveX < (screenWidth/2)) {
                        // Dot 1
                        if(!this.state.dot1) {
                            if(e.nativeEvent.locationX >= this.line1[0].x - scope && e.nativeEvent.locationX <= this.line1[0].x + scope) {
                                if(e.nativeEvent.locationY >= this.line1[0].y - scope && e.nativeEvent.locationY <= this.line1[0].y + scope) {
                                    //alert('Dot1');
                                    this.setState({dot1: true});
                                }
                            }
                        }

                        if(this.state.dot1 && !this.state.dot2) {
                            if(e.nativeEvent.locationX >= this.line1[1].x - scope && e.nativeEvent.locationX <= this.line1[1].x + scope) {
                                if(e.nativeEvent.locationY >= this.line1[1].y - scope && e.nativeEvent.locationY <= this.line1[1].y + scope) {
                                    //alert('Dot2');
                                    this.setState({dot2: true});
                                }
                            }
                        }

                        if(this.state.dot2 && !this.state.dot3) {
                            if(e.nativeEvent.locationX >= this.line1[2].x - scope && e.nativeEvent.locationX <= this.line1[2].x + scope) {
                                if(e.nativeEvent.locationY >= this.line1[2].y - scope && e.nativeEvent.locationY <= this.line1[2].y + scope) {
                                    //alert('Dot3');
                                    this.setState({dot3: true});
                                }
                            }
                        }

                        if(this.state.dot3 && !this.state.dot4) {
                            if(e.nativeEvent.locationX >= this.line1[3].x - scope && e.nativeEvent.locationX <= this.line1[3].x + scope) {
                                if(e.nativeEvent.locationY >= this.line1[3].y - scope && e.nativeEvent.locationY <= this.line1[3].y + scope) {
                                    //alert('Dot4');
                                    this.setState({dot4: true});
                                }
                            }
                        }

                        if(this.state.dot4 && !this.state.dot5) {
                            if(e.nativeEvent.locationX >= this.line1[4].x - scope && e.nativeEvent.locationX <= this.line1[4].x + scope) {
                                if(e.nativeEvent.locationY >= this.line1[4].y - scope && e.nativeEvent.locationY <= this.line1[4].y + scope) {
                                    //alert('Dot5');
                                    this.setState({dot5: true});
                                }
                            }
                        }

                        if(this.state.dot5 && !this.state.dot6) {
                            if(e.nativeEvent.locationX >= this.line1[5].x - scope && e.nativeEvent.locationX <= this.line1[5].x + scope) {
                                if(e.nativeEvent.locationY >= this.line1[5].y - scope && e.nativeEvent.locationY <= this.line1[5].y + scope) {
                                    //alert('Dot6');
                                    this.setState({dot6: true});
                                }
                            }
                        }

                        if(this.state.dot6 && !this.state.dot7) {
                            if(e.nativeEvent.locationX >= this.line1[6].x - scope && e.nativeEvent.locationX <= this.line1[6].x + scope) {
                                if(e.nativeEvent.locationY >= this.line1[6].y - scope && e.nativeEvent.locationY <= this.line1[6].y + scope) {
                                    //alert('Dot7');
                                    this.setState({dot7: true});
                                }
                            }
                        }

                        if(this.state.dot7 && !this.state.dot8) {
                            if(e.nativeEvent.locationX >= this.line1[7].x - scope && e.nativeEvent.locationX <= this.line1[7].x + scope) {
                                if(e.nativeEvent.locationY >= this.line1[7].y - scope && e.nativeEvent.locationY <= this.line1[7].y + scope) {
                                    //alert('Dot8');
                                    this.setState({dot8: true});
                                }
                            }
                        }

                        if(this.state.dot8 && !this.state.dot9) {
                            if(e.nativeEvent.locationX >= this.line1[8].x - scope && e.nativeEvent.locationX <= this.line1[8].x + scope) {
                                if(e.nativeEvent.locationY >= this.line1[8].y - scope && e.nativeEvent.locationY <= this.line1[8].y + scope) {
                                    //alert('Dot9');
                                    this.setState({dot9: true});
                                }
                            }
                        }

                        if(this.state.dot9 && !this.state.dot10) {
                            if(e.nativeEvent.locationX >= this.line1[9].x - scope && e.nativeEvent.locationX <= this.line1[9].x + scope) {
                                if(e.nativeEvent.locationY >= this.line1[9].y - scope && e.nativeEvent.locationY <= this.line1[9].y + scope) {
                                    //alert('Dot9');
                                    this.setState({dot10: true});
                                }
                            }
                        }
                    } else {
                        // Dot 10
                         if(!this.state.dot11 && this.state.dot10) {
                             if(e.nativeEvent.locationX >= this.line2[0].x - scope && e.nativeEvent.locationX <= this.line2[0].x + scope) {
                                 if(e.nativeEvent.locationY >= this.line2[0].y - scope && e.nativeEvent.locationY <= this.line2[0].y + scope) {
                                     //alert('Dot 7');
                                     this.setState({dot11: true});
                                 }
                             }
                         }
 
                         // Dot 11
                         if(this.state.dot11 && !this.state.dot12) {
                             if(e.nativeEvent.locationX >= this.line2[1].x - scope && e.nativeEvent.locationX <= this.line2[1].x + scope) {
                                 if(e.nativeEvent.locationY >= this.line2[1].y - scope && e.nativeEvent.locationY <= this.line2[1].y + scope) {
                                     //alert('Dot 8');
                                     this.setState({dot12: true});
                                 }
                             }
                         }
                         // Dot 12
                         if(this.state.dot12 && !this.state.dot13) {
                             if(e.nativeEvent.locationX >= this.line2[2].x - scope && e.nativeEvent.locationX <= this.line2[2].x + scope) {
                                 if(e.nativeEvent.locationY >= this.line2[2].y - scope && e.nativeEvent.locationY <= this.line2[2].y + scope) {
                                     //alert('Dot 9');
                                     this.setState({dot13: true});
                                 }
                             }
                         }
                         
                         // Dot 13
                         if(this.state.dot13 && !this.state.dot14) {
                             if(e.nativeEvent.locationX >= this.line2[3].x - scope && e.nativeEvent.locationX <= this.line2[3].x + scope) {
                                 if(e.nativeEvent.locationY >= this.line2[3].y - scope && e.nativeEvent.locationY <= this.line2[3].y + scope) {
                                     //alert('Dot 10');
                                     this.setState({dot14: true});
                                 }
                             }
                         }
                         
                         // Dot 14
                         if(this.state.dot14 && !this.state.dot15) {
                             if(e.nativeEvent.locationX >= this.line2[4].x - scope && e.nativeEvent.locationX <= this.line2[4].x + scope) {
                                 if(e.nativeEvent.locationY >= this.line2[4].y - scope && e.nativeEvent.locationY <= this.line2[4].y + scope) {
                                     //alert('Dot 12');
                                     this.setState({dot15: true});
                                 }
                             }
                         }
                         
                         // Dot 15
                         if(this.state.dot15 && !this.state.dot16) {
                             if(e.nativeEvent.locationX >= this.line2[5].x - scope && e.nativeEvent.locationX <= this.line2[5].x + scope) {
                                 if(e.nativeEvent.locationY >= this.line2[5].y - scope && e.nativeEvent.locationY <= this.line2[5].y + scope) {
                                     //alert('Dot 12');
                                     this.setState({dot16: true});
                                 }
                             }
                         }
                     }
                }
            },
            onPanResponderRelease: (e, gesture) => {
                if(this.state.dot10) {
                    if(this.state.dot16) {
                        this.setState({arrayMove: [], showShaded2: 1, showTracing2: 0, tracing2: trace2});
                    } else {
                        this.setState({arrayMove: [], showShaded: 1, dot14: false, dot11: false, showTracing2: 1,
                            dot15: false, dot12: false, dot13: false, dot16: false, showTracing: 0, tracing2: trace2,});
                    }
                } else {
                //  alert('After Release!');
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
            dot13: false, dot14: false, dot15: false, dot16: false, tracing: trace1, tracing2: traceZero,
            showShaded: 0, showTracing: 1, showShaded2: 0, showTracing2: 1});
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

                    {/* Two Tracing */}
                    <View style={{position: 'absolute', width: '35%', height: '90%', 
                                top: '5%', left: '15%', opacity: this.state.showTracing,}}>
                        <Image source={this.state.tracing} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                        {/* <View style={[styles.dot, {top: numberDimension.height * 0.15,
                            left: numberDimension.width * 0.78}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.08,
                            left: numberDimension.width * 0.5}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.25,
                            left: numberDimension.width * 0.18}]}></View>

                        <View style={[styles.dot, {top: numberDimension.height * 0.5,
                            left: numberDimension.width * 0.1}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.75,
                            left: numberDimension.width * 0.2}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.88,
                            left: numberDimension.width * 0.5}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.75,
                            left: numberDimension.width * 0.82}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.55,
                            left: numberDimension.width * 0.84}]}></View>
                        <View style={[styles.dot, {top: numberDimension.height * 0.4,
                            left: numberDimension.width * 0.6}]}></View>
                        
                        <View style={[styles.dot, {top: numberDimension.height * 0.42,
                            left: numberDimension.width * 0.35}]}></View> */}
                    </View>
                    <View style={{position: 'absolute', width: '35%', height: '90%', 
                                top: '5%', left: '15%', opacity: this.state.showShaded}}>
                        <Image source={shaded_6_1} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>


                    {/* Zero Tracing */}
                    <View style={{position: 'absolute', width: '35%', height: '90%', 
                                top: '5%', left: '50%', opacity: this.state.showTracing2,}}>
                        <Image source={this.state.tracing2} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>
                    <View style={{position: 'absolute', width: '35%', height: '90%', 
                                top: '5%', left: '50%', opacity: this.state.showShaded2}}>
                        <Image source={shaded_0} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
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

export default withNavigation(SixtyTracing);