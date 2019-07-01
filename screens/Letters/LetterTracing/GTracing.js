import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Image, PanResponder, TouchableOpacity, StatusBar, Animated } from 'react-native';
import { withNavigation } from 'react-navigation';

import GLetter from '../LettersAssets/tracingG_1.gif';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js'; 

class GTracing extends Component {
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
        },

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

                if(gesture.vx >= 1) {
                    this.setState({arrayMove: [],
                        touchLength: 0});
                }
                else if(gesture.vy >= 1.5) {
                    this.setState({arrayMove: [],
                        touchLength: 0});
                } else {
                    this.setState({arrayMove: [...this.state.arrayMove, coordinate],
                        touchLength: this.touchLength + 1});
                }

                
                
            },
            onPanResponderRelease: (e, gesture) => {
                
            }
        });
    }

    gotoMainMenu = () => {
       // this.bg.stop();
       this.setState({arrayMove: []});
        this.props.navigation.navigate('home');
    }

    goBack = () => {
        this.setState({arrayMove: []});
        this.props.navigation.navigate('letters');
    }

    render() {

        let touchTrail = this.state.arrayMove.map((item, key) => {
            return(
                <View key = { key } {...this.panResponder.panHandlers}
                    style={[ballStyle.circle, {position: 'absolute', left: item.x - 20, top: item.y - 20}]}>
                </View>
            )
        });

        StatusBar.setHidden(true);
        return (
            <ImageBackground source={require('../../images/BG.jpg')} style={styles.image}>
                <Image source={require('../../images/BG.jpg')} style={{position: 'absolute', width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>

                <View {...this.panResponder.panHandlers} style={{position: 'absolute', 
                        width: '75%', height: '70%', top: '20%', left: '12.5%'}}>
                    <View style={{position: 'absolute', width: '70%', height: '80%', top: '10%', left: '15%'}}>
                        <Image source={GLetter} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                    </View>
                </View>

                {touchTrail}
                
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

const ballStyle = StyleSheet.create({
    circle: {
        backgroundColor: 'black',
        width: 45,
        height: 45,
        borderRadius: 45,
    }
});

export default withNavigation(GTracing);