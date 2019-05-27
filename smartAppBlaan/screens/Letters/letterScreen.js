import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';
import MenuItem from './LettersMenu';

class Letters extends Component {
    static navigationOptions = {
        header: null,
    }

    gotoPageA = () => {
        this.props.navigation.navigate('pageAScreen');
    }
    gotoPageB = () => {
        this.props.navigation.navigate('pageB');
    }
    gotoPageD = () => {
        this.props.navigation.navigate('pageD');
    }
    gotoPageE = () => {
        this.props.navigation.navigate('pageE');
    }
    goHome = () => {
        this.props.navigation.navigate('main');
    }
    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('../images/BG.jpg')}
            >
                <View style={styles.menuContainer}>
                    <MenuItem itemImage={require('./lettersImage/a.png')} goto={this.gotoPageA} />
                    <MenuItem itemImage={require('./lettersImage/b.png')} goto={this.gotoPageB} />
                    <MenuItem itemImage={require('./lettersImage/d.png')} goto={this.gotoPageD} />
                    <MenuItem itemImage={require('./lettersImage/e.png')} goto={this.gotoPageE} />
                    <MenuItem itemImage={require('./lettersImage/f.png')} />
                    <MenuItem itemImage={require('./lettersImage/g.png')} />
                    <MenuItem itemImage={require('./lettersImage/h.png')} />
                    <MenuItem itemImage={require('./lettersImage/i.png')} />
                    <MenuItem itemImage={require('./lettersImage/k.png')} />
                    <MenuItem itemImage={require('./lettersImage/l.png')} />
                    <MenuItem itemImage={require('./lettersImage/m.png')} />
                    <MenuItem itemImage={require('./lettersImage/n.png')} />
                    <MenuItem itemImage={require('./lettersImage/o.png')} />
                    <MenuItem itemImage={require('./lettersImage/s.png')} />
                    <MenuItem itemImage={require('./lettersImage/t.png')} />
                    <MenuItem itemImage={require('./lettersImage/u.png')} />
                    <MenuItem itemImage={require('./lettersImage/w.png')} />
                    <MenuItem itemImage={require('./lettersImage/y.png')} />
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    menuContainer: {
        position: 'relative',
        transform: [{ rotate: '90deg' }],
        top: '3%',
        right: '10%',
        width: '133%',
        height: '45%',
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