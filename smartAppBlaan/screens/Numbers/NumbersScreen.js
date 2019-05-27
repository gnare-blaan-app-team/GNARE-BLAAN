import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';
import MenuItem from './NumbersMenu';

class Letters extends Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('../images/BG.jpg')}
            >
                <View style={styles.menuContainer}>
                    <MenuItem itemImage={require('./numbersImage/1.png')} goto={this.gotoPage1} />
                    <MenuItem itemImage={require('./numbersImage/2.png')} goto={this.gotoPage2} />
                    <MenuItem itemImage={require('./numbersImage/3.png')} goto={this.gotoPage3} />
                    <MenuItem itemImage={require('./numbersImage/4.png')} goto={this.gotoPage4} />
                    <MenuItem itemImage={require('./numbersImage/5.png')} goto={this.gotoPage4} />
                    <MenuItem itemImage={require('./numbersImage/6.png')} goto={this.gotoPage4} />
                    <MenuItem itemImage={require('./numbersImage/7.png')} goto={this.gotoPage4} />
                    <MenuItem itemImage={require('./numbersImage/8.png')} goto={this.gotoPage4} />
                    <MenuItem itemImage={require('./numbersImage/9(1).png')} goto={this.gotoPage4} />
                    <MenuItem itemImage={require('./numbersImage/10.png')} goto={this.gotoPage4} />
                    <MenuItem itemImage={require('./numbersImage/20(2).png')} goto={this.gotoPage4} />
                    <MenuItem itemImage={require('./numbersImage/30.png')} goto={this.gotoPage4} />
                    <MenuItem itemImage={require('./numbersImage/40.png')} goto={this.gotoPage4} />
                    <MenuItem itemImage={require('./numbersImage/50.png')} goto={this.gotoPage4} />
                    <MenuItem itemImage={require('./numbersImage/60.png')} goto={this.gotoPage4} />
                    <MenuItem itemImage={require('./numbersImage/70.png')} goto={this.gotoPage4} />
                    <MenuItem itemImage={require('./numbersImage/80.png')} goto={this.gotoPage4} />
                    <MenuItem itemImage={require('./numbersImage/90.png')} goto={this.gotoPage4} />
                    <MenuItem itemImage={require('./numbersImage/100.png')} goto={this.gotoPage4} />
                    <MenuItem itemImage={require('./numbersImage/200.png')} goto={this.gotoPage4} />
                    <MenuItem itemImage={require('./numbersImage/300.png')} goto={this.gotoPage4} />
                    <MenuItem itemImage={require('./numbersImage/400.png')} goto={this.gotoPage4} />
                    <MenuItem itemImage={require('./numbersImage/500.png')} goto={this.gotoPage4} />
                    <MenuItem itemImage={require('./numbersImage/1000.png')} goto={this.gotoPage4} />
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    menuContainer: {
        position: 'relative',
        transform: [{ rotate: '90deg' }],
        top: '5%',
        right: '3%',
        width: '130%',
        height: '40%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default withNavigation(Letters);