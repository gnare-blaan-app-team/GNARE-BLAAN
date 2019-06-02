import React,{Component} from 'react';
import { ImageBackground, Modal, View, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { withNavigation } from 'react-navigation';
import Video from 'react-native-video';

import Story1_EN from '../flalokVideos/Story1_EN.mp4';
import Story1_FL from '../flalokVideos/Story1_FL.mp4';
import Story1 from '../flalokImages/Story1.png';
import Story1_FL_THUMBNAIL from '../flalokImages/Story1_FL_THUMBNAIL.png';
import Story1_EN_THUMBNAIL from '../flalokImages/Story1_EN_THUMBNAIL.png';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import Flalok_BG from '../flalokImages/Flalok_BG.jpg';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js';


 class Story1Screen extends Component {

        constructor() {
            super();

            this.state = {
                showModal: false,
                videoFile: Story1_FL,

                repeat: false,
                rate: 1,
                volume: 1,
                muted: false,
                resizeMode: 'contain',
                duration: 0.0,
                progress: 0.0,
                currentTime: 0.0,
                paused: false,
                rateText: '1.0',
                pausedText: 'Play',
                hideControls: false,
            };
    }

    static navigationOptions = {
        header:null,
    }

    onLoad = (data) => {
        this.setState({duration: data.duration});
    }

    onPress=(data) => {
        this.setState({currentTime: data.currentTime});
    }

    onEnd = () => {
        this.setState({showModal: false});
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    goBack = () => {
        this.props.navigation.navigate('flalok');
    }
    

    render(){
        return(
           <ImageBackground style={styles.imageStoryScreen} source={Flalok_BG}>

                <View style={styles.storyTitleContainer}>
                    <Image style={styles.storyTitle} source={Story1} />
                </View>

                <View style={styles.storiesContainer}>
                    <View style={styles.thumbnailContainer}>
                        <TouchableOpacity onPress={()=>{this.setState({
                                    showModal: true, 
                                    videoFile: Story1_FL,
                        })}}>
                            
                            <Image source={Story1_FL_THUMBNAIL}  style={styles.thumbnail}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.thumbnailContainer}>
                        <TouchableOpacity onPress={()=>{this.setState({
                                    showModal: true, 
                                    videoFile: Story1_EN,
                        })}}>
                            <Image source={Story1_EN_THUMBNAIL}  style={styles.thumbnail}/>
                        </TouchableOpacity>
                    </View>
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

                <Modal animationType={'slide'} visible={this.state.showModal}>
                   
                    <View style={styles.storyVideoContainer}>
                        <TouchableWithoutFeedback onPress={() => this.setState({paused: !this.state.paused})}>
                            <Video ref={(ref) => {this.video = ref}}
                                source={this.state.videoFile}
                                repeat={this.state.repeat}
                                rate={this.state.rate}
                                volume={this.state.volume}
                                muted={this.state.muted}
                                resizeMode={'contain'}
                                paused={this.state.paused}
                                onLoad={this.onLoad}
                                onProgress={this.onProgress}
                                onEnd={this.onEnd}
                                onPress={this.onPress}
                                style={styles.backgroundVideo}
                            />
                        </TouchableWithoutFeedback>
                    </View>

                     <View style={{position: 'absolute'}}>
                        <TouchableOpacity onPress={()=>{this.setState({showModal: false})}}>
                            <Image
                                source={Back_icon}
                                style={styles.back}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                
                </Modal>
           </ImageBackground>

        );
    }
}

export default withNavigation(Story1Screen);