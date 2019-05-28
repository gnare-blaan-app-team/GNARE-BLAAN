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
    gotoPageF = () => {
        this.props.navigation.navigate('pageF');
    }
    gotoPageG = () => {
        this.props.navigation.navigate('pageG');
    }
    gotoPageH = () => {
        this.props.navigation.navigate('pageH');
    }
    gotoPageI = () => {
        this.props.navigation.navigate('pageI');
    }
    gotoPageK = () => {
        this.props.navigation.navigate('pageK');
    }
    gotoPageL = () => {
        this.props.navigation.navigate('pageL');
    }
    gotoPageM = () => {
        this.props.navigation.navigate('pageM');
    }
    gotoPageN = () => {
        this.props.navigation.navigate('pageN');
    }
    gotoPageO = () => {
        this.props.navigation.navigate('pageO');
    }
    gotoPageS = () => {
        this.props.navigation.navigate('pageS');
    }
    gotoPageT = () => {
        this.props.navigation.navigate('pageT');
    }
    gotoPageU = () => {
        this.props.navigation.navigate('pageU');
    }
    gotoPageW = () => {
        this.props.navigation.navigate('pageW');
    }
    gotoPageY = () => {
        this.props.navigation.navigate('pageY');
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
                    <MenuItem itemImage={require('./lettersImage/e_.png')} goto={this.gotoPageE} />
                    <MenuItem itemImage={require('./lettersImage/f.png')} goto={this.gotoPageF} />
                    <MenuItem itemImage={require('./lettersImage/g.png')} goto={this.gotoPageG} />
                    <MenuItem itemImage={require('./lettersImage/h.png')} goto={this.gotoPageH} />
                    <MenuItem itemImage={require('./lettersImage/i.png')} goto={this.gotoPageI} />
                    <MenuItem itemImage={require('./lettersImage/k.png')} goto={this.gotoPageK} />
                    <MenuItem itemImage={require('./lettersImage/l.png')} goto={this.gotoPageL} />
                    <MenuItem itemImage={require('./lettersImage/m.png')} goto={this.gotoPageM} />
                    <MenuItem itemImage={require('./lettersImage/n.png')} goto={this.gotoPageN} />
                    <MenuItem itemImage={require('./lettersImage/o.png')} goto={this.gotoPageO} />
                    <MenuItem itemImage={require('./lettersImage/s.png')} goto={this.gotoPageS} />
                    <MenuItem itemImage={require('./lettersImage/t.png')} goto={this.gotoPageT} />
                    <MenuItem itemImage={require('./lettersImage/u.png')} goto={this.gotoPageU} />
                    <MenuItem itemImage={require('./lettersImage/w.png')} goto={this.gotoPageW} />
                    <MenuItem itemImage={require('./lettersImage/y.png')} goto={this.gotoPageY} />
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