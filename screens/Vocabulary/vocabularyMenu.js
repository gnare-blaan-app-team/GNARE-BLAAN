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
import vocabulary_BG from './vocabularyMenuImages/vocabulary_BG.jpg';
import VocabularyItem from './vocabularyItem';
import NextIcon from '../images/Next_Icon.png';


class vocabularyMenu extends Component {
    static navigationOptions = {
        header:null,
    }

    constructor(props) {
        super(props);
        this.state = {
            top2:'1000%',
            top1:'20%'
        }
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }
    vocabulary1 = () => {
        this.props.navigation.replace('vocabulary1');
    }
    vocabulary2 = () => {
        this.props.navigation.replace('vocabulary2');
    }
    goBack = () => {
        this.props.navigation.navigate('mainMenu');
    }
    gotoNextPage = () => {
        this.setState({
            top1:'1000%',
            top2: '20%',
        })
    }
    render(){
        return(
           <ImageBackground style={styles.image} source={vocabulary_BG} blurRadius={1}>
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
                    <VocabularyItem itemImage={FishingTools_icon} goto={this.gotoLetters} />
                    <VocabularyItem itemImage={FarmingTools_icon} goto={this.gotoLetters} />
                    <VocabularyItem itemImage={Mountains_icon} goto={this.gotoLetters} />
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
                <View style={styles.nextContainer}>
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
           </ImageBackground>
        );
    }
}



export default withNavigation(vocabularyMenu);