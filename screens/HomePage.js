import React,{Component} from 'react';
import { ImageBackground, TouchableOpacity, View, Image, Text, StatusBar, Dimensions, Animated, Easing} from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from './globalStyleSheet/globalStyleSheet.js';

import HomepageBackground from './images/GnareMain.gif';
import About_icon from "./images/Icon_About.png";
import Like_icon from "./images/Icon_Like.png";
import Share_icon from "./images/Icon_Share.png";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const screenWidth = Dimensions.get('screen').width;

class Homescreen extends Component{
  constructor(props) {
    super (props);
    this.state = {
      yValue: new Animated.Value(0),
    }
  }

  _moveAnimation = () => {
    Animated.timing(this.state.yValue, {
      toValue: 500,
      duration: 4500,
      easing: Easing.linear,
    }).start();

  }

    static navigationOptions = {
        header:null,
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    render(){
        // alert(Dimensions.get('window').height);
      StatusBar.setHidden(true);
        return(
            <ImageBackground style={styles.image} source={HomepageBackground}>
                <View style={{position: "absolute", width:"100%", height:"100%"}}>
                    <TouchableOpacity  onPress={this.gotoMainMenu}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                    </View>
                    <Animated.View style={[{bottom: this.state.yValue}]}>
                      <View style={{
                      bottom: '-270%',
                      height: '50%',
                      left: wp('1.5%'),
                      }}>
                          {this._moveAnimation()}
                            <View style={styles.row}>
                                <View style={styles.HomePageItems} >
                                    <TouchableOpacity>
                                        <Image style={styles.imageSizeStoryMenu} source={Like_icon} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.HomePageItems} >
                                    <TouchableOpacity>
                                        <Image style={styles.imageSizeStoryMenu} source={Share_icon} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.HomePageItems} >
                                    <TouchableOpacity>
                                        <Image style={styles.imageSizeStoryMenu} source={About_icon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                          </View>
                    </Animated.View>
            </ImageBackground>
        );
    }
}


export default withNavigation(Homescreen);