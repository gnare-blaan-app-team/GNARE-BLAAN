import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';
import MenuItem from './MenuItem';

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
    }
})

export default withNavigation(Mainmenu);