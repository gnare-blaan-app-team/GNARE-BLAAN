import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import MenuItem from './MenuItem';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Mainmenu extends Component {
    static navigationOptions = {
        header: null,
    }

    gotoLetters = () => {
        this.props.navigation.navigate('letters');
    }
    gotoNumbers = () => {
        this.props.navigation.navigate('numbers');
    }

    gotoFlalok = () => {
        this.props.navigation.navigate('flalok');
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('home');
    }

    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('./images/BG.jpg')}
            >
                <View style={styles.menuContainer}>
                    <MenuItem itemImage={require('./images/Icon_Letter.png')} goto={this.gotoLetters} />
                    <MenuItem itemImage={require('./images/Icon_Number.png')} goto={this.gotoNumbers}/>
                    <MenuItem itemImage={require('./images/Flalok.png')} goto={this.gotoFlalok} />
                    <MenuItem itemImage={require('./images/Games.png')} />
                    <MenuItem itemImage={require('./images/CultureandArts.png')} />
                    <MenuItem itemImage={require('./images/Vocabulary.png')} />
                </View>

                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={require('./images/Home_icon.png')}
                            style={styles.home}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuContainer: {
        position: 'relative',
        top:'9%',
        left:'22%',
        width: '98%',
        height: '80%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    homeContainer: {
        position: 'absolute',
        left: '85%',
        top: '-2%',
    },
    home: {
        width: wp('14%'),
        height: hp('28%')
    },
})

export default withNavigation(Mainmenu);