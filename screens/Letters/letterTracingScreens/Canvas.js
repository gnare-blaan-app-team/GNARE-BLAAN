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

class Canvas extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (        
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
        )
    }
}

export default withNavigation(Canvas);