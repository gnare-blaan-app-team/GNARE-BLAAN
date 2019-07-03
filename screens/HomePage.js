import React,{Component} from 'react';
import { ImageBackground, TouchableOpacity, View, Image, Text, StatusBar, Dimensions, Animated} from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from './globalStyleSheet/globalStyleSheet.js';
import Sound from 'react-native-sound';

import HomepageBackground from './images/GnareMain.gif';
import About_icon from "./images/Icon_About.png";
import Like_icon from "./images/Icon_Like.png";
import Share_icon from "./images/Icon_Share.png";

Sound.setCategory('Playback');

class FadeInView extends React.Component {
    state = {
      fadeAnim: new Animated.Value(0),  
    }
  
    componentDidMount() {
      Animated.timing(                 
        this.state.fadeAnim,            
        {
          toValue: 1,               
          duration: 3000,            
        }
      ).start();                     
    }
  
    render() {
      let { fadeAnim } = this.state;
  
      return (
        <Animated.View               
          style={{
            ...this.props.style,
            opacity: fadeAnim,        
          }}
        >
          {this.props.children}
        </Animated.View>
      );
    }
  }
  

class Homescreen extends Component{

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
                    <FadeInView style={styles.HomePageContainer}>
                    {/* <FadeInView style={{width: 250, height: 50}}> */}
                        <View style={styles.Hometouch}>
                            <TouchableOpacity  onPress={this.gotoMainMenu} />
                        </View>
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
                        {/* </FadeInView> */}
                    </FadeInView>
            </ImageBackground>
        );
    }
}


export default withNavigation(Homescreen);