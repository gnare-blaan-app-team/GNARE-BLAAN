import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';
import MenuItem from './MenuItem';

class Mainmenu extends Component {
    static navigationOptions = {
        header: null,
    }

    gotoLetters = () => {
        this.props.navigation.navigate('letters');
    }

    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('./images/BG.jpg')}
            >
                <View style={styles.menuContainer}>
                    <MenuItem itemImage={require('./images/Icon_Letter.png')} goto={this.gotoLetters} />
                    <MenuItem itemImage={require('./images/Icon_Number.png')} />
                    <MenuItem itemImage={require('./images/Flalok.png')} />
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
        right: '11%',
        top: '15%',
        transform: [{ rotate: '90deg' }],
        width: '160%',
        height: '50%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})

export default withNavigation(Mainmenu);