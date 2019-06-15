import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import Vocab5BG from './vocabulary5Images/Vocab5.png';

import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';

import ItemTreeAsset from './vocabulary5Images/Item_Puno.png';
import ItemMountainAsset from './vocabulary5Images/Item_Bundok.png';
import ItemFallsAsset from './vocabulary5Images/Item_Falls.png';
import ItemIlogAsset from './vocabulary5Images/Item_Ilog.png';
import ItemLawinAsset from './vocabulary5Images/Item_Lawin.png';
import ItemBowAsset from './vocabulary5Images/Item_BowandArrow.png';
import ItemSpearAsset from './vocabulary5Images/Item_Spear.png';
import ItemSalamanderAsset from './vocabulary5Images/Item_Salamander.png';
import ItemAxeAsset from './vocabulary5Images/Item_Axe.png';
import ItemHornbillAsset from './vocabulary5Images/Item_Kalaw1.png';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Vocabulary5 extends Component {
    static navigationOptions = {
        header: null,
    }


    handleBackPress = () => {
        this.number1.pause();
    }

    goBack = () => {
        this.props.navigation.navigate('vocabularyMenu');
    }
    
    gotoTree = () => {
        this.props.navigation.navigate('tree');
    }

    gotoMountain = () => {
        this.props.navigation.navigate('mountain');
    }

    gotoFalls = () => {
        this.props.navigation.navigate('waterfall');
    }

    gotoLawin = () => {
        this.props.navigation.navigate('hawk');
    }

    gotoBow = () => {
        this.props.navigation.navigate('bow');
    }

    gotoSpear = () => {
        this.props.navigation.navigate('spear');
    }

    gotoSalamander = () => {
        this.props.navigation.navigate('salamander');
    }
    
    gotoAxe = () => {
        this.props.navigation.navigate('ax');
    }

    gotoHornbill = () => {
        this.props.navigation.navigate('hornbill');
    }



    render() {
        
        return (
            <ImageBackground style={globalStyleSheet.image}
                source={Vocab5BG}
            >
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

                <View style={styles.mountainStyle}>
                    <TouchableOpacity onPress={this.gotoMountain}>
                        <Image
                            source={ItemMountainAsset}
                            style={styles.mountainImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.treeStyle}>
                    <TouchableOpacity onPress={this.gotoTree}>
                        <Image
                            source={ItemTreeAsset}
                            style={styles.treeImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.fallsStyle}>
                    <TouchableOpacity onPress={this.gotoFalls}>
                        <Image
                            source={ItemFallsAsset}
                            style={styles.fallsImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.ilogStyle}>
                    <TouchableOpacity onPress={this.gotoIlog}>
                        <Image
                            source={ItemIlogAsset}
                            style={styles.ilogImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.lawinStyle}>
                    <TouchableOpacity onPress={this.gotoLawin}>
                        <Image
                            source={ItemLawinAsset}
                            style={styles.lawinImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.bowStyle}>
                    <TouchableOpacity onPress={this.gotoBow}>
                        <Image
                            source={ItemBowAsset}
                            style={styles.bowImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.spearStyle}>
                    <TouchableOpacity onPress={this.gotoSpear}>
                        <Image
                            source={ItemSpearAsset}
                            style={styles.spearImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.salamanderStyle}>
                    <TouchableOpacity onPress={this.gotoSalamander}>
                        <Image
                            source={ItemSalamanderAsset}
                            style={styles.salamanderImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.axeStyle}>
                    <TouchableOpacity onPress={this.gotoAxe}>
                        <Image
                            source={ItemAxeAsset}
                            style={styles.axeImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.hornbillStyle}>
                    <TouchableOpacity onPress={this.gotoHornbill}>
                        <Image
                            source={ItemHornbillAsset}
                            style={styles.hornbillImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({

    mountainStyle: {
        position: 'absolute',
        width: '60%',
        left: '10.5%',
        height: '35%',  
    },
    mountainImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },

    treeStyle: {
        position: 'absolute',
        top: '19%',
        width: '20%',
        left: '10.5%',
        height: '65%',
    },
    treeImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },

    fallsStyle: {
        position: 'absolute',
        top: '19%',
        width: '24%',
        right: '10%',
        height: '65%',
    },
    fallsImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },

    ilogStyle: {
        position: 'absolute',
        top: '48.5%',
        width: '45%',
        right: '10%',
        height: '40%',
    },
    ilogImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },

    lawinStyle: {
        position: 'absolute',
        top: '19%',
        width: '12%',
        left: '14%',
        height: '32%',
    },
    lawinImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },

    bowStyle: {
        position: 'absolute',
        top: '66%',
        width: '12%',
        left: '17%',
        height: '23%',
        transform: [{ rotate: '12deg' }]
    },
    bowImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },

    spearStyle: {
        position: 'absolute',
        top: '56%',
        width: '3%',
        left: '38%',
        height: '40%',
        transform: [{ rotate: '64deg' }]
    },
    spearImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },

    salamanderStyle: {
        position: 'absolute',
        top: '61%',
        width: '7%',
        left: '75%',
        height: '10%',
    },
    salamanderImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },

    axeStyle: {
        position: 'absolute',
        top: '72%',
        width: '6%',
        left: '78%',
        height: '5%',
        transform: [{ rotate: '-9deg' }]
    },
    axeImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },

    hornbillStyle: {
        position: 'absolute',
        top: '23%',
        width: '13%',
        right: '35%',
        height: '24%',
    },
    hornbillImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
});

export default withNavigation(Vocabulary5);