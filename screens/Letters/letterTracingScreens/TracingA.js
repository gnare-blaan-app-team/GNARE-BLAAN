import React, { Component } from 'react';
import { View, Image, ImageBackground, TouchableOpacity, Text, PanResponder,} from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import PlainBackground from '../../images/BG.jpg';
import Gif_A from '../lettersImage/letter_A.gif';
import Trace from '../lettersImage/Tracing_A.png';
import DotTrace from '../lettersImage/dot.png';
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

class TracingA extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props){
        super(props);
        this.PanResponder;
        this.state={
            locationX:0,
            locationY:0,
            background:Gif_A,
            touch:0,

        }
    }

    componentWillMount(){
        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder:(event, gestureState) => true,
            onStartShouldSetPanResponderCapture:(event,gestureState) => true,
            onMoveShouldSetPanResponder :(event,gestureState) => false,
            onMoveShouldSetPanResponderCapture:(event,gestureState) => false,
            onPanResponderGrant:(event,gestureState) => {
                
            },
            onPanResponderMove:(event,gestureState) => {
                this.setState({
                    locationX: event.nativeEvent.locationX,
                    locationY: event.nativeEvent.locationY,
                });
            }

        });
    }

    goBack = () => {
        this.props.navigation.navigate('pageA');
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    componentDidMount(){
        setTimeout(() => { 
           this.setState({background:PlainBackground})  }, 1000); 
    }

    render() {

        return (
            <ImageBackground style={styles.image}
                source={this.state.background}
            >
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF', width: wp('60%'), height: hp('70%'), top: '4.70%', }} >
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <RNSketchCanvas
                            containerStyle={{ backgroundColor: 'transparent', flex: 1 }}
                            canvasStyle={{ backgroundColor: 'transparent', flex: 1 }}
                            defaultStrokeIndex={0}
                            defaultStrokeWidth={25}
                            undoComponent={<View style={styles.functionButton}><Text style={{ color: 'black' }}>Undo</Text></View>}
                        />
                    </View>
                </View> 
                <Text>X: {this.state.locationX}</Text >
                <Text>Y: {this.state.locationY}</Text>
                <View style={globalStyleSheet.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={Back_icon}
                            style={globalStyleSheet.back}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={Home_icon}
                            style={globalStyleSheet.home}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

export default withNavigation(TracingA);