import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import MenuItem from './NumbersMenu';

import {globalStyleSheet as styles} from '../globalStyleSheet/globalStyleSheet.js';

class NumberScreen extends Component {
    static navigationOptions = {
        header: null,
    }

    gotoPage1 = () => {
        this.props.navigation.navigate('page1');
    }
    gotoPage2 = () => {
        this.props.navigation.navigate('page2');
    }
    gotoPage3 = () => {
        this.props.navigation.navigate('page3');
    }
    gotoPage4 = () => {
        this.props.navigation.navigate('page4');
    }
    gotoPage5 = () => {
        this.props.navigation.navigate('page5');
    }
    gotoPage6 = () => {
        this.props.navigation.navigate('page6');
    }
    gotoPage7 = () => {
        this.props.navigation.navigate('page7');
    }
    gotoPage8 = () => {
        this.props.navigation.navigate('page8');
    }
    gotoPage9 = () => {
        this.props.navigation.navigate('page9');
    }
    gotoPage10 = () => {
        this.props.navigation.navigate('page10');
    }
    gotoPage20 = () => {
        this.props.navigation.navigate('page20');
    }
    gotoPage30 = () => {
        this.props.navigation.navigate('page30');
    }
    gotoPage40 = () => {
        this.props.navigation.navigate('page40');
    }
    gotoPage50 = () => {
        this.props.navigation.navigate('page50');
    }
    gotoPage60 = () => {
        this.props.navigation.navigate('page60');
    }
    gotoPage70 = () => {
        this.props.navigation.navigate('page70');
    }
    gotoPage80 = () => {
        this.props.navigation.navigate('page80');
    }
    gotoPage90 = () => {
        this.props.navigation.navigate('page90');
    }
    gotoPage100 = () => {
        this.props.navigation.navigate('page100');
    }
    gotoPage200 = () => {
        this.props.navigation.navigate('page200');
    }
    gotoPage300 = () => {
        this.props.navigation.navigate('page300');
    }
    gotoPage400 = () => {
        this.props.navigation.navigate('page400');
    }
    gotoPage500 = () => {
        this.props.navigation.navigate('page500');
    }
    gotoPage1000 = () => {
        this.props.navigation.navigate('page1000');
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    goBack = () => {
        this.props.navigation.navigate('mainMenu');
    }

    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('../images/BG.jpg')}
            >
                <View style={styles.menuNumberContainer}>
                    <MenuItem itemImage={require('./numbersImage/1.png')} goto={this.gotoPage1} />
                    <MenuItem itemImage={require('./numbersImage/2.png')} goto={this.gotoPage2} />
                    <MenuItem itemImage={require('./numbersImage/3.png')} goto={this.gotoPage3} />
                    <MenuItem itemImage={require('./numbersImage/4.png')} goto={this.gotoPage4} />
                    <MenuItem itemImage={require('./numbersImage/5.png')} goto={this.gotoPage5} />
                    <MenuItem itemImage={require('./numbersImage/6.png')} goto={this.gotoPage6} />
                    <MenuItem itemImage={require('./numbersImage/7.png')} goto={this.gotoPage7} />
                    <MenuItem itemImage={require('./numbersImage/8.png')} goto={this.gotoPage8} />
                    <MenuItem itemImage={require('./numbersImage/9(1).png')} goto={this.gotoPage9} />
                    <MenuItem itemImage={require('./numbersImage/10.png')} goto={this.gotoPage10} />
                    <MenuItem itemImage={require('./numbersImage/20(2).png')} goto={this.gotoPage20} />
                    <MenuItem itemImage={require('./numbersImage/30.png')} goto={this.gotoPage30} />
                    <MenuItem itemImage={require('./numbersImage/40.png')} goto={this.gotoPage40} />
                    <MenuItem itemImage={require('./numbersImage/50.png')} goto={this.gotoPage50} />
                    <MenuItem itemImage={require('./numbersImage/60.png')} goto={this.gotoPage60} />
                    <MenuItem itemImage={require('./numbersImage/70.png')} goto={this.gotoPage70} />
                    <MenuItem itemImage={require('./numbersImage/80.png')} goto={this.gotoPage80} />
                    <MenuItem itemImage={require('./numbersImage/90.png')} goto={this.gotoPage90} />
                    <MenuItem itemImage={require('./numbersImage/100.png')} goto={this.gotoPage100} />
                    <MenuItem itemImage={require('./numbersImage/200.png')} goto={this.gotoPage200} />
                    <MenuItem itemImage={require('./numbersImage/300.png')} goto={this.gotoPage300} />
                    <MenuItem itemImage={require('./numbersImage/400.png')} goto={this.gotoPage400} />
                    <MenuItem itemImage={require('./numbersImage/500.png')} goto={this.gotoPage500} />
                    <MenuItem itemImage={require('./numbersImage/1000.png')} goto={this.gotoPage1000} />
                </View>

                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={require('../images/Back_icon.png')}
                            style={styles.back}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={require('../images/Home_icon.png')}
                            style={styles.home}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

export default withNavigation(NumberScreen);