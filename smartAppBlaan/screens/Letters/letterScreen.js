import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';
import MenuItem from './LettersMenu';

class Letters extends Component {
    static navigationOptions = {
        header: null,
    }

    gotoPageA = () => {
        this.props.navigation.navigate('pageA');
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
                    <MenuItem itemImage={require('./letters/a.png')} goto={this.gotoPageA} />
                    <MenuItem itemImage={require('./letters/b.png')} goto={this.gotoPageB} />
                    <MenuItem itemImage={require('./letters/d.png')} goto={this.gotoPageD} />
                    <MenuItem itemImage={require('./letters/e.png')} goto={this.gotoPageE} />
                    <MenuItem itemImage={require('./letters/f.png')} />
                    <MenuItem itemImage={require('./letters/g.png')} />
                    <MenuItem itemImage={require('./letters/h.png')} />
                    <MenuItem itemImage={require('./letters/i.png')} />
                    <MenuItem itemImage={require('./letters/k.png')} />
                    <MenuItem itemImage={require('./letters/l.png')} />
                    <MenuItem itemImage={require('./letters/m.png')} />
                    <MenuItem itemImage={require('./letters/n.png')} />
                    <MenuItem itemImage={require('./letters/o.png')} />
                    <MenuItem itemImage={require('./letters/s.png')} />
                    <MenuItem itemImage={require('./letters/t.png')} />
                    <MenuItem itemImage={require('./letters/u.png')} />
                    <MenuItem itemImage={require('./letters/w.png')} />
                    <MenuItem itemImage={require('./letters/y.png')} />
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