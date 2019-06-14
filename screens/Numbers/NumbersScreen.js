

import React, { Component } from 'react';
import { View, Image, ImageBackground, BackHandler, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import MenuItem from './NumbersMenu';

import Sound from 'react-native-sound';
import Video from "react-native-video";

import GoBackIcon from '../images/Back_icon.png';
import HomeIcon from '../images/Home_icon.png';

import GlowA from '../Letters/lettersGlow/GlowA.gif';
import Glow_A from '../Letters/lettersGlow/Glow_A.png';

    // Letter Components Imports
import SentenceIcon from '../images/Letters_Info_Icon.png';
import SpeakerIcon from '../images/Speaker_icon.png';
import PencilIcon from '../images/Pencil_icon.png';
import NextIcon from '../images/Next_Icon.png';
import PrevIcon from '../images/Prev_Icon.png';

    // Letter Main Background Import
import imageMainBG from '../images/BG.jpg';

    // Letter Background Imports
import Number1 from './numberBackground/number1.png';
import Number2 from './numberBackground/number2.png';
import Number3 from './numberBackground/number3.png';
import Number4 from './numberBackground/number4.png';
import Number5 from './numberBackground/number5.png';
import Number6 from './numberBackground/number6.png';
import Number7 from './numberBackground/number7.png';
import Number8 from './numberBackground/number8.png';
import Number9 from './numberBackground/number9.png';
import Number10 from './numberBackground/number10.png';
import Number20 from './numberBackground/number20.png';
import Number30 from './numberBackground/number30.png';
import Number40 from './numberBackground/number40.png';
import Number50 from './numberBackground/number50.png';
import Number60 from './numberBackground/number60.png';
import Number70 from './numberBackground/number70.png';
import Number80 from './numberBackground/number80.png';
import Number90 from './numberBackground/number90.png';
import Number100 from './numberBackground/number100.png';
import Number200 from './numberBackground/number200.png';
import Number300 from './numberBackground/number300.png';
import Number400 from './numberBackground/number400.png';
import Number500 from './numberBackground/number500.png';
import Number1000 from './numberBackground/number1000.png';

import Sentence1 from './numbersImage/sentence1.png';
import Sentence2 from './numbersImage/sentence2.png';
import Sentence3 from './numbersImage/sentence3.png';
import Sentence4 from './numbersImage/sentence4.png';
import Sentence5 from './numbersImage/sentence5.png';
import Sentence6 from './numbersImage/sentence6.png';
import Sentence7 from './numbersImage/sentence7.png';
import Sentence8 from './numbersImage/sentence8.png';
import Sentence9 from './numbersImage/sentence9.png';
import Sentence10 from './numbersImage/sentence10.png';
import Sentence20 from './numbersImage/sentence20.png';
import Sentence30 from './numbersImage/sentence30.png';
import Sentence40 from './numbersImage/sentence40.png';
import Sentence50 from './numbersImage/sentence50.png';
import Sentence60 from './numbersImage/sentence60.png';
import Sentence70 from './numbersImage/sentence70.png';
import Sentence80 from './numbersImage/sentence80.png';
import Sentence90 from './numbersImage/sentence90.png';
import Sentence100 from './numbersImage/sentence100.png';
import Sentence200 from './numbersImage/sentence200.png';
import Sentence300 from './numbersImage/sentence300.png';
import Sentence400 from './numbersImage/sentence400.png';
import Sentence500 from './numbersImage/sentence500.png';
import Sentence1000 from './numbersImage/sentence1000.png';

import {globalStyleSheet as styles} from '../globalStyleSheet/globalStyleSheet.js';

    // Hiding Components
const hideLeft = '-1000%';
const hideRight = '1000%';
const showPrev ='5%';
const showNext = '83%';
const showPencil = '18%';
const showGlow = '20%';
const showSpeaker = '25%';
const showSentence = '73%';

Sound.setCategory('Playback');

    // Letter Sound List
const soundList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '20', '30', '40', '50', '60',
                    '70', '80', '90', '100', '200', '300', '400', '500', '1000'];

    // Letter Background List
const numberBGList = [Number1, Number2, Number3, Number4, Number5, Number6, Number7, Number8, Number9, Number10,
                    Number20, Number30, Number40, Number50, Number60, Number70, Number80, Number90, Number100,
                    Number200, Number300, Number400, Number500, Number1000];

const sentenceNumberBGList = [Sentence1, Sentence2, Sentence3, Sentence4, Sentence5, Sentence6, Sentence7, Sentence8, Sentence9, Sentence10,
    Sentence20, Sentence30, Sentence40, Sentence50, Sentence60, Sentence70, Sentence80, Sentence90, Sentence100,
    Sentence200, Sentence300, Sentence400, Sentence500, Sentence1000];


    // Word GLow List
const glowGIFList = [GlowA];
const glowPicList = [Glow_A];


class NumberScreen extends Component {
    static navigationOptions = {
        header: null,
    }


        // Component State
    constructor() {
        super();
        
        this.state = {

            //Background State
            imageBackground: imageMainBG,

            //Letter Menu State
            menuLetterHide: '-1000%',

            //Letter State
            prevHide: hideLeft,
            nextHide: hideRight,
            pencilHide: hideLeft,
            glowHide: hideLeft,
            speakerHide: hideLeft,
            speaker2Hide: hideLeft,
            sentenceHide: hideRight,
            letterPlay: 0,
            wordPlay: 0,
            glow: Glow_A,
            hideLetterBG: '0%',
            prevBG: imageMainBG,
            prevSound: 0,
            showBackground: '-1000%',

            // Video State
            paused: false,
            progress: 0,
            duration: 0,
            skipVideo: 0,
            hideSkipBtn: '-2%',
            vidSource: null,
            hideNavButton: '-1000%',
        }
    }

    handleProgress = progress => {
        this.setState({
            progress: progress.currentTime / this.state.duration,
        });
    };

    handleEnd = () => {
        this.setState({ paused: true, skipVideo: '-1000%', hideSkipBtn: '-1000%', vidSource: null});
        //his.props.navigation.navigate('endstory');
    };

    handleLoad = meta => {
        this.setState({
            duration: meta.duration,
        });
    };

    skipIntroVideo = () => {
        this.setState({skipVideo: '-1000%', paused: true, 
        hideSkipBtn: '-1000%', vidSource: null, menuLetterHide: '22%',
        hideNavButton: '-2%'});
    }

    componentWillMount() {
        this.objectGlow = null;
        this.arrayNumberSound = new Array(24);

        for(i = 0; i < 24; i++) {
            this.arrayNumberSound[i] = new Sound('number_' + soundList[i] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                }
                BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
            });
        }
    }

    changeBackground = (imageBG, soundPlay) => {
        this.stopGlow();
        this.setState({menuLetterHide: imageBG == imageMainBG ? '22%' : '-1000%', 
                        prevHide: imageBG == Number1 ? hideLeft : showPrev,
                        imageBackground: imageBG,
                        nextHide: imageBG == imageMainBG ? hideRight : showNext,
                        glowHide: imageBG == imageMainBG ? hideLeft : showGlow,
                        speakerHide: imageBG == imageMainBG ? hideLeft : showSpeaker,
                        sentenceHide: imageBG == imageMainBG ? hideRight : showSentence,
                        pencilHide: imageBG == imageMainBG ? hideLeft : showPencil,
                        letterPlay: soundPlay, wordPlay: soundPlay,});
        this.startGlow();
    }

    startGlow = () => {
        this.objectGlow = setTimeout(()=> {
            if(this.arrayNumberSound[this.state.letterPlay] != null) {
                this.arrayNumberSound[this.state.letterPlay].play();
            }
            this.setState({glow: Glow_A});
            this.setState({glow: GlowA});
        }, 200);
    }

    stopGlow = () => {
        if(this.objectGlow != null) {
            this.stopSounds();
//            this.setState({glow: Glow_A});
            clearTimeout(this.objectGlow);
        }
    }

    sentencePage = () => {
        const letterIndex = this.state.letterPlay;
        this.stopGlow();
        this.setState({menuLetterHide: '-1000%', 
                        imageBackground: sentenceNumberBGList[letterIndex], 
                        prevHide: hideLeft, nextHide: hideRight,
                        glowHide: hideLeft, speakerHide: hideLeft,
                        speaker2Hide: showSpeaker, sentenceHide: hideRight,
                        pencilHide: hideLeft, prevBG: sentenceNumberBGList[letterIndex]});
    }
    
    handleBackPress = () => {
        this.arrayNumberSound = null;
    }

    playWordSound = () => {
        this.stopGlow();
        const soundWord = this.arrayNumberSound[this.state.letterPlay];
        
        if(soundWord != null) {
            setTimeout(()=>{
                soundWord.play();
            }), 200;
        }

        setTimeout(() => {
            this.setState({glow: Glow_A});
            this.setState({glow: GlowA});
        }, 500);
    }

    gotoMainMenu = () => {
        this.stopGlow();
        this.handleBackPress();
        this.props.navigation.navigate('mainMenu');
    }

    goNext = () => {
        let letterNum = this.state.letterPlay;
        let nextPage = letterNum + 1;
        let nextBG = numberBGList[nextPage];
        this.stopGlow();
        if(nextPage <= 17) {
            this.changeBackground(nextBG, nextPage);
        } else {
            this.changeBackground(Number1, 0);
        }
    }

    stopSounds = () => {
        if(this.arrayNumberSound[this.state.letterPlay] != null) {
            this.arrayNumberSound[this.state.letterPlay].stop();
        }
        if(this.arrayNumberSound[this.state.letterPlay] != null) {
            this.arrayNumberSound[this.state.letterPlay].stop();
        }
        if(this.arrayNumberSound[this.state.letterPlay] != null) {
            this.arrayNumberSound[this.state.letterPlay].stop();
        }
    }
    
    goPrev = () => {
        const letterNum = this.state.letterPlay;
        const prevPage = letterNum - 1;
        this.stopGlow();
        const prevBG = numberBGList[prevPage];
        this.setState({prevSound: letterNum});

        if(prevPage > 0) {
            this.changeBackground(prevBG, prevPage);
        } else {
            this.changeBackground(Number1, 0);
        }
    }

    goBack = () => {
        if(this.state.prevBG == sentenceNumberBGList[this.state.letterPlay]) {
            this.stopGlow();
            this.setState({menuLetterHide: '-1000%', 
                    imageBackground: numberBGList[this.state.letterPlay],
                    prevHide: numberBGList[this.state.letterPlay] == Number1 ? hideLeft : showPrev,
                    pencilHide: showPencil,
                    glowHide: showGlow,
                    speakerHide: showSpeaker,
                    sentenceHide: showSentence,
                    nextHide: showNext,
                    speaker2Hide: hideLeft, prevBG: numberBGList[this.state.letterPlay]});
                
        } else {
            if(this.state.imageBackground == imageMainBG) {
                this.stopGlow();
                this.handleBackPress();
                this.props.navigation.navigate('mainMenu');
            } else {
                this.stopGlow();
                this.setState({menuLetterHide: '22%', imageBackground: imageMainBG,
                            prevHide: hideLeft,
                            pencilHide: hideLeft,
                            glowHide: hideLeft,
                            speakerHide: hideLeft,
                            sentenceHide: hideRight,
                            nextHide: hideRight,
                            speaker2Hide: hideLeft});
                }
            }
        }

    render() {
        return (
            
            <ImageBackground source={imageMainBG} style={{flex: 1, width: '100%', height: '100%', resizeMode: 'stretch'}}>

                <View style={{position: 'absolute', top: this.state.hideLetterBG, width: '100%', height: '100%'}}>
                    <Image source={this.state.imageBackground} style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{flexDirection: 'column', position: 'absolute', top: this.state.skipVideo, width: '100%', height: '100%', backgroundColor: 'black'}}>
                    <Video
                            paused={this.state.paused}
                            source={require('../Flalok/flalokVideos/Story1_EN.mp4')}
                            style={{ width: "100%", height: '100%' }}
                            resizeMode="stretch"
                            volume={1}
                            muted={false}
                            onLoad={this.handleLoad}
                            onProgress={this.handleProgress}
                            onEnd={this.handleEnd}
                            ref={ref => {
                                this.player = ref;
                            }}
                        />
                </View>

                <View style={{position: 'absolute', top: this.state.hideSkipBtn, left: '1%', width: '14%', height: '28%'}}>
                    <TouchableOpacity onPress={this.skipIntroVideo}>
                        <Image source={GoBackIcon} style={styles.back}></Image>
                    </TouchableOpacity>
                </View>

                {/* Start of Page Letters Code Part */}
                {/* Sentence Button */}
               <View style={{position: 'absolute', left: '80%', top: this.state.sentenceHide, width: '14%', height: '28%',}} >
                    <TouchableOpacity onPress={this.sentencePage}>
                        <Image
                            source={SentenceIcon}
                            style={styles.sentenceIcon}
                        ></Image>
                    </TouchableOpacity>
                </View>

                {/* Speaker 2 Container */}
                <View style={{position: 'absolute', left: '80%', top: this.state.speakerHide, width: '6%', height: '10%',}} >
                    <TouchableOpacity onPress={this.playWordSound}>
                        <Image
                            source={SpeakerIcon}
                            style={styles.containImage}
                        ></Image>

                    </TouchableOpacity>
                </View>

                {/* Speaker Sentence 2 Container */}
                <View style={{position: 'absolute', left: '80%', top: this.state.speaker2Hide, width: '6%', height: '10%',}} >
                    <TouchableOpacity>
                        <Image
                            source={SpeakerIcon}
                            style={styles.containImage}
                        ></Image>

                    </TouchableOpacity>
                </View>

                {/* Video Container */}
                <View style={{position: 'absolute', left: '55%', top: this.state.glowHide, width: '20%', height: '40%',}} >
                    <Image style={styles.Glow} source={this.state.glow}/>
                </View>

                {/* Pencil Button */}
                <View style={{position: 'absolute', left: '10%', top: this.state.pencilHide, width: '9%', height: '24%',}} >
                    <TouchableOpacity onPress={this.gotoTracingA}>
                        <Image
                        source={PencilIcon}
                            style={styles.containImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                    
                 {/* Prev Button */}
                <View style={{position: 'absolute', left: this.state.prevHide, top: '40%', width: '12%', height: '24%',}}>
                    <TouchableOpacity onPress={this.goPrev}>
                        <Image
                            source={PrevIcon}
                            style={styles.prev}
                        ></Image>
                    </TouchableOpacity>
                </View>

                {/* Next Button */}
                <View style={{position: 'absolute', left: this.state.nextHide, top: '40%', width: '12%', height: '24%',}} >
                    <TouchableOpacity onPress={this.goNext}>
                        <Image
                            source={NextIcon}
                            style={styles.next}
                        ></Image>
                    </TouchableOpacity>
                </View>
                {/* End of Page Letters Code Part */}


                
                {/* Start of Letters Enum Code Part */}
                <View style={{position: 'absolute', top: this.state.menuLetterHide, left: '15%', width: '83%', height: '32%', flexDirection: 'row', flexWrap: 'wrap',}}>
                    <MenuItem itemImage={require('./numbersImage/1.png')} goto={() => {
                                        this.changeBackground(Number1, 0)}} />
                    <MenuItem itemImage={require('./numbersImage/2.png')} goto={() => {
                                        this.changeBackground(Number2, 1)}} />
                    <MenuItem itemImage={require('./numbersImage/3.png')} goto={() => {
                                        this.changeBackground(Number3, 2)}} />
                    <MenuItem itemImage={require('./numbersImage/4.png')} goto={() => {
                                        this.changeBackground(Number4, 3)}} />
                    <MenuItem itemImage={require('./numbersImage/5.png')} goto={() => {
                                        this.changeBackground(Number5, 4)}} />
                    <MenuItem itemImage={require('./numbersImage/6.png')} goto={() => {
                                        this.changeBackground(Number6, 5)}} />
                    <MenuItem itemImage={require('./numbersImage/7.png')} goto={() => {
                                        this.changeBackground(Number7, 6)}} />
                    <MenuItem itemImage={require('./numbersImage/8.png')} goto={() => {
                                        this.changeBackground(Number8, 7)}} />
                    <MenuItem itemImage={require('./numbersImage/9(1).png')} goto={() => {
                                        this.changeBackground(Number9, 8)}} />
                    <MenuItem itemImage={require('./numbersImage/10.png')} goto={() => {
                                        this.changeBackground(Number10, 9)}} />
                    <MenuItem itemImage={require('./numbersImage/20(2).png')} goto={() => {
                                        this.changeBackground(Number20, 10)}} />
                    <MenuItem itemImage={require('./numbersImage/30.png')} goto={() => {
                                        this.changeBackground(Number30, 11)}} />
                    <MenuItem itemImage={require('./numbersImage/40.png')} goto={() => {
                                        this.changeBackground(Number40, 12)}} />
                    <MenuItem itemImage={require('./numbersImage/50.png')} goto={() => {
                                        this.changeBackground(Number50, 13)}} />
                    <MenuItem itemImage={require('./numbersImage/60.png')} goto={() => {
                                        this.changeBackground(Number60, 14)}} />
                    <MenuItem itemImage={require('./numbersImage/70.png')} goto={() => {
                                        this.changeBackground(Number70, 15)}} />
                    <MenuItem itemImage={require('./numbersImage/80.png')} goto={() => {
                                        this.changeBackground(Number80, 16)}} />
                    <MenuItem itemImage={require('./numbersImage/90.png')} goto={() => {
                                        this.changeBackground(Number90, 17)}} />
                    <MenuItem itemImage={require('./numbersImage/100.png')} goto={() => {
                                        this.changeBackground(Number100, 18)}} />
                    <MenuItem itemImage={require('./numbersImage/200.png')} goto={() => {
                                        this.changeBackground(Number200, 19)}} />
                    <MenuItem itemImage={require('./numbersImage/300.png')} goto={() => {
                                        this.changeBackground(Number300, 20)}} />
                    <MenuItem itemImage={require('./numbersImage/400.png')} goto={() => {
                                        this.changeBackground(Number400, 21)}} />
                    <MenuItem itemImage={require('./numbersImage/500.png')} goto={() => {
                                        this.changeBackground(Number500, 22)}} />
                    <MenuItem itemImage={require('./numbersImage/1000.png')} goto={() => {
                                        this.changeBackground(Number1000, 23)}} />
                </View>
                {/* End of Letters Enum Code Part */}


                <View style={{position: 'absolute',
                                left: '1%',
                                top: this.state.hideNavButton,
                                width: '14%',
                                height: '28%'}}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image source={GoBackIcon} style={styles.back}></Image>
                    </TouchableOpacity>
                </View>

                <View style={{position: 'absolute',
                                left: '85%',
                                top: this.state.hideNavButton,
                                width: '14%',
                                height: '28%',}}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image source={HomeIcon} style={styles.home}></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

export default withNavigation(NumberScreen);
