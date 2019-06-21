import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import Vocab5BG from './vocabulary5Images/Vocab5.png';

import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import BG from '../../images/BG.jpg';
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

import Axe from './vocabulary5Images/ax.png';
import Bow from './vocabulary5Images/bow.png';
import Hawk from './vocabulary5Images/hawk.png';
import Hornbill from './vocabulary5Images/hornbill.png';
import Mountain from './vocabulary5Images/mountain.png';
import River from './vocabulary5Images/river.png';
import Salamander from './vocabulary5Images/salamander.png';
import Spear from './vocabulary5Images/spear.png';
import Tree from './vocabulary5Images/tree.png';
import Waterfall from './vocabulary5Images/waterfall.png';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const backgroundList = [Axe,Bow,Hawk,Hornbill,Mountain,River,Salamander,Spear,Tree,Waterfall];

class Vocabulary5 extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            BackgroundImage: Vocab5BG,
            mountainLeft:'11.5%',
            treeTop:'19%',
            fallsTop:'19%',
            ilogTop:'48.5%',
            lawinTop:'19%',
            bowTop:'66%',
            spearTop:'56%',
            salamanderTop:'61%',
            axeTop:'72%',
            hornbillTop:'23%',
            clearBackground:'gotoVocab5Menu'
        }
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu')
    }

    goBack = () => {
        const clear = this.state.clearBackground;
        if (clear == 'gotoVocab5Menu') {
            this.props.navigation.navigate('vocabularyMenu')
        }
        if (clear == 'clear') {
            this.setState({
                BackgroundImage: Vocab5BG,
                mountainLeft: '11.5%',
                treeTop: '19%',
                fallsTop: '19%',
                ilogTop: '48.5%',
                lawinTop: '19%',
                bowTop: '66%',
                spearTop: '56%',
                salamanderTop: '61%',
                axeTop: '72%',
                hornbillTop: '23%',
                clearBackground: 'gotoVocab5Menu',
            })
        }
    }

   changeBackground = (index) => {
    this.setState({
        BackgroundImage:backgroundList[index],
        mountainLeft: '1000%',
        treeTop: '1000%',
        fallsTop: '1000%',
        ilogTop: '1000%',
        lawinTop: '1000%',
        bowTop: '1000%',
        spearTop: '1000%',
        salamanderTop: '1000%',
        axeTop: '1000%',
        hornbillTop: '1000%',
        clearBackground: 'clear',
        
    })
   }


    render() {

        return (
            <ImageBackground style={{
                flex: 1, width: '100%', height: '100%', resizeMode: 'stretch', justifyContent: 'center',
                alignItems: 'center', }}
                source={Vocab5BG}
            >
                <View style={{ position: 'absolute', top: '0%', width: '100%', height: '100%' }}>
                    <Image source={BG} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}></Image>
                </View>
                <View style={{ position: 'absolute', width: '100%', height: '100%' }}>
                    <Image source={this.state.BackgroundImage} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}></Image>
                </View>
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

                <View style={{
                    position: 'absolute',
                    width: '60%',
                    left: this.state.mountainLeft,
                    height: '35%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(4)
                    }}>
                        <Image
                            source={ItemMountainAsset}
                            style={styles.mountainImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top: this.state.treeTop,
                    width: '20%',
                    left: '12.8%',
                    height: '65%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(8)
                    }}>
                        <Image
                            source={ItemTreeAsset}
                            style={styles.treeImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top: this.state.fallsTop,
                    width: '24%',
                    right: '12.6%',
                    height: '65%',

                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(9)
                    }}>
                        <Image
                            source={ItemFallsAsset}
                            style={styles.fallsImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top: this.state.ilogTop,
                    width: '45%',
                    right: '12.6%',
                    height: '40%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(5)
                    }}>
                        <Image
                            source={ItemIlogAsset}
                            style={styles.ilogImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top: this.state.lawinTop,
                    width: '12%',
                    left: '16%',
                    height: '32%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(2)
                    }}>
                        <Image
                            source={ItemLawinAsset}
                            style={styles.lawinImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top:this.state.bowTop,
                    width: '12%',
                    left: '19%',
                    height: '23%',
                    transform: [{ rotate: '12deg' }],
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(1)
                    }}>
                        <Image
                            source={ItemBowAsset}
                            style={styles.bowImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top:this.state.spearTop,
                    width: '3%',
                    left: '36%',
                    height: '40%',
                    transform: [{ rotate: '64deg' }],
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(7)
                    }}>
                        <Image
                            source={ItemSpearAsset}
                            style={styles.spearImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top:this.state.salamanderTop,
                    width: '7%',
                    left: '72%',
                    height: '10%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(6)
                    }}>
                        <Image
                            source={ItemSalamanderAsset}
                            style={styles.salamanderImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top: this.state.axeTop,
                    width: '6%',
                    left: '77%',
                    height: '5%',
                    transform: [{ rotate: '-9deg' }]
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(3)
                    }}>
                        <Image
                            source={ItemAxeAsset}
                            style={styles.axeImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top:this.state.hornbillTop,
                    width: '13%',
                    right: '37%',
                    height: '24%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.changeBackground(3)
                    }}>
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
        left: '12.6%',
        height: '35%',
    },
    mountainImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    treeImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    fallsImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    ilogImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    lawinImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    bowImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    spearImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    salamanderImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    axeImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    hornbillImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
});

export default withNavigation(Vocabulary5);
