import React,{Component} from 'react';
import { ImageBackground, Modal, View, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { withNavigation } from 'react-navigation';
import Video from 'react-native-video';

import Story2_EN from '../flalokVideos/Story2_EN.mp4';
import Story2_FL from '../flalokVideos/Story2_FL.mp4';
import Story2 from '../flalokImages/Story2.png';
import Story2_FL_THUMBNAIL from '../flalokImages/Story2_FL_THUMBNAIL.png';
import Story2_EN_THUMBNAIL from '../flalokImages/Story2_EN_THUMBNAIL.png';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import Flalok_BG from '../flalokImages/Flalok_BG.jpg';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js';


 class Story2Screen extends Component {

        constructor() {
            super();

            this.state = {
                showModal: false,
                videoFile: Story2_FL,

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
                    <Image style={styles.storyTitle} source={Story2} />
                </View>

                <View style={styles.storiesContainer}>
                    <View style={styles.thumbnailContainer}>
                        <TouchableOpacity onPress={()=>{this.setState({
                                    showModal: true, 
                                    videoFile: Story2_FL,
                        })}}>
                            
                            <Image source={Story2_FL_THUMBNAIL}  style={styles.thumbnail}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.thumbnailContainer}>
                        <TouchableOpacity onPress={()=>{this.setState({
                                    showModal: true, 
                                    videoFile: Story2_EN,
                        })}}>
                            <Image source={Story2_EN_THUMBNAIL}  style={styles.thumbnail}/>
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

export default withNavigation(Story2Screen);