import React,{Component} from 'react';
import { StyleSheet, ImageBackground, TouchableHighlight, View, Image} from 'react-native';
import { withNavigation } from 'react-navigation';

class FlalokStoryMenu extends Component {
    static navigationOptions = {
        header:null,
    }

    gotoStory1 = () => {
        this.props.nagivation.navigate('story1');
    }

    gotoStory2 = () => {
        this.props.nagivation.navigate('story2');
    }

    gotoStory3 = () => {
        this.props.nagivation.navigate('story3');
    }

    gotoStory4 = () => {
        this.props.nagivation.navigate('story4');
    }

    gotoStory5 = () => {
        this.props.nagivation.navigate('story5');
    }
                                                                                                                                                                              
    gotoStory6 = () => {
        this.props.nagivation.navigate('story6');
    }

    render(){
        return(
           <ImageBackground style={styles.image} source={require('./flalokImages/Flalok_BG.jpg')}>

                <View style={styles.container}>
                    <View style={styles.row}>
                        <View style={styles.itemSize} >
                            <TouchableHighlight  onPress={() => this.props.navigation.navigate('story1')} >
                                <Image style={styles.imageSize} source={require('./flalokImages/Story1.png')} />
                            </TouchableHighlight>
                        </View>

                        <View style={styles.itemSize} >
                            <TouchableHighlight  onPress={() => this.props.navigation.navigate('story2')} >
                                <Image style={styles.imageSize} source={require('./flalokImages/Story2.png')} />
                            </TouchableHighlight>
                        </View>

                        <View style={styles.itemSize} >
                            <TouchableHighlight  onPress={() => this.props.navigation.navigate('story3')} >
                                <Image style={styles.imageSize} source={require('./flalokImages/Story3.png')} />
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={styles.row1}>
                        <View style={styles.itemSize} >
                            <TouchableHighlight  onPress={() => this.props.navigation.navigate('story4')} >
                                <Image style={styles.imageSize} source={require('./flalokImages/Story4.png')} />
                            </TouchableHighlight>
                        </View>
                        <View style={styles.itemSize} >
                            <TouchableHighlight  onPress={() => this.props.navigation.navigate('story5')} >
                                <Image style={styles.imageSize} source={require('./flalokImages/Story5.png')} />
                            </TouchableHighlight>
                        </View>
                        <View style={styles.itemSize} >
                            <TouchableHighlight  onPress={() => this.props.navigation.navigate('story6')} >
                                <Image style={styles.imageSize} source={require('./flalokImages/Story6.png')} />
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
           </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    row: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '50%',
    },

    row1: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '35%',
    },

    itemSize: {
        margin: 10,
        marginBottom: 0,
        width: '30%',
        height: '35%',
    },

    imageSize: {
        width: '100%',
        height: '100%',
    },

    container: {
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '80%',
        height: '90%',
    }
})

export default withNavigation(FlalokStoryMenu);