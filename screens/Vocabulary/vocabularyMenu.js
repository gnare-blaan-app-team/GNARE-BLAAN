import React,{Component} from 'react';
import { ImageBackground, TouchableOpacity, View, Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet as styles} from '../globalStyleSheet/globalStyleSheet.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Back_icon from '../images/Back_icon.png';
import Home_icon from '../images/Home_icon.png';
import MembersFamily_icon from './vocabularyMenuImages/V1.png';
import BodyParts_icon from './vocabularyMenuImages/V2.png';
import FishingTools_icon from './vocabularyMenuImages/V3.png';
import FarmingTools_icon from './vocabularyMenuImages/V4.png';
import Mountains_icon from './vocabularyMenuImages/V5.png';
import HouseParts_icon from './vocabularyMenuImages/V6.png';
import KitchenUtensils_icon from './vocabularyMenuImages/V7.png';
import GreetingsHeavenlyBodies_icon from './vocabularyMenuImages/V8.png';
import Calendar_icon from './vocabularyMenuImages/V9.png';
import Kastifun_icon from './vocabularyMenuImages/V10-11.png';
import VocabularyItem from './vocabularyItem';
import NextIcon from '../images/Next_Icon.png';
import PrevIcon from '../images/Prev_Icon.png';


class vocabularyMenu extends Component {
    static navigationOptions = {
        header:null,
    }

    constructor(props) {
        super(props);
        this.state = {
            top2:'1000%',
            top1:'20%',
            nextTop: '45%',
            prevTop:'1000%',
        }
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }
    vocabulary1 = () => {
        this.props.navigation.navigate('vocabulary1');
    }
    vocabulary2 = () => {
        this.props.navigation.navigate('vocabulary2');
    }
    vocabulary3 = () => {
        this.props.navigation.navigate('vocabulary3');
    }
    vocabulary4 = () => {
        this.props.navigation.navigate('vocabulary4');
    }
    goBack = () => {
        this.props.navigation.navigate('mainMenu');
    }
    gotoNextPage = () => {
        this.setState({
            top1:'1000%',
            top2: '20%',
            nextTop:'1000%',
            prevTop: '40%',
        })
    }
    goPrev = () => {
        this.setState({
            top2: '1000%',
            top1: '20%',
            prevTop: '1000%',
            nextTop: '40%',
        })
    }
<<<<<<< HEAD

    gotoVocab7 = () => {
        this.props.navigation.navigate('vocabulary7');
    }

    gotoVocab9 = () => {
        this.props.navigation.navigate('vocabulary9');
    }

    render(){
        return(
           <ImageBackground style={styles.image} source={vocabulary_BG} blurRadius={1}>
                <View style={{position: 'absolute', top: '18%', width: '100%', height: '80%'}}>
                    <View style={{width: '100%', height: '30%', flexDirection: 'row', marginBottom: '2%', justifyContent: 'center'}}>
                        <View style={{width: '25%', height: '100%'}}>
                            <TouchableOpacity onPress={this.gotoVocab1}>
                                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={MembersFamily_icon} />
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '25%', height: '100%'}}>
                            <TouchableOpacity>
                                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={BodyParts_icon} />
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '25%', height: '100%'}}>
                            <TouchableOpacity>
                                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={FishingTools_icon} />
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '25%', height: '100%'}}>
                            <TouchableOpacity>
                                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={FarmingTools_icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{width: '100%', height: '30%', flexDirection: 'row', marginBottom: '2%', justifyContent: 'center'}}>
                        <View style={{width: '25%', height: '100%'}}>
                            <TouchableOpacity>
                                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={Mountains_icon} />
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '25%', height: '100%'}}>
                            <TouchableOpacity>
                                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={HouseParts_icon} />
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '25%', height: '100%'}}>
                            <TouchableOpacity onPress={this.gotoVocab7}>
                                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={KitchenUtensils_icon} />
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '25%', height: '100%'}}>
                            <TouchableOpacity>
                                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={GreetingsHeavenlyBodies_icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{width: '100%', height: '30%', flexDirection: 'row', marginBottom: 5, justifyContent: 'center'}}>
                        <View style={{width: '25%', height: '100%'}}>
                            <TouchableOpacity onPress={this.gotoVocab9}>
                                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={Calendar_icon} />
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '25%', height: '100%'}}>
                            <TouchableOpacity>
                                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={Kastifun_icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
=======
    render(){
        return(
                <ImageBackground style={styles.image} source={require('../images/Flalok_BG.jpg')}>
                <View style={{
                    justifyContent: 'center',
                    position: 'absolute',
                    top: this.state.top1,
                    left: '5%',
                    width: '98%',
                    height: '80%',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    }}>
                    <VocabularyItem itemImage={MembersFamily_icon} goto={this.vocabulary1} />
                    <VocabularyItem itemImage={BodyParts_icon} goto={this.vocabulary2} />
                    <VocabularyItem itemImage={FishingTools_icon} goto={this.vocabulary3} />
                    <VocabularyItem itemImage={FarmingTools_icon} goto={this.vocabulary4} />
                    <VocabularyItem itemImage={Mountains_icon} goto={this.gotoLetters} />
>>>>>>> 41916ef890afd3d619b8efcbd20c9fa64cbf6dc8
                </View>
                <View style={{
                    justifyContent: 'center',
                    position: 'absolute',
                    top: this.state.top2,
                    left: '5%',
                    width: '98%',
                    height: '80%',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    }}>
                    <VocabularyItem itemImage={HouseParts_icon} goto={this.vocabulary1} />
                    <VocabularyItem itemImage={KitchenUtensils_icon} goto={this.gotoLetters} />
                    <VocabularyItem itemImage={GreetingsHeavenlyBodies_icon} goto={this.gotoLetters} />
                    <VocabularyItem itemImage={Calendar_icon} goto={this.gotoLetters} />
                    <VocabularyItem itemImage={Kastifun_icon} goto={this.gotoLetters} />
                </View> 
                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={Back_icon}
                            style={styles.back}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    left: '83%',
                    top: this.state.nextTop,
                    width: '12%',
                    height: '24%',}}>
                    <TouchableOpacity onPress={this.gotoNextPage}>
                        <Image
                            source={NextIcon}
                            style={styles.next}
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
                <View style={{
                    position: 'absolute',
                    left: '5%',
                    top: this.state.prevTop,
                    width: '12%',
                    height: '24%',}}>
                    <TouchableOpacity onPress={this.goPrev}>
                        <Image
                            source={PrevIcon}
                            style={styles.prev}
                        ></Image>
                    </TouchableOpacity>
                </View>
           </ImageBackground>
        );
    }
}



export default withNavigation(vocabularyMenu);
