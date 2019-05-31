import React,{Component} from 'react';
import { StyleSheet, ImageBackground, TouchableHighlight, TouchableOpacity, View, Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


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

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    render(){
        return(
           <ImageBackground style={styles.image} source={require('./flalokImages/Flalok_BG.jpg')}>

                <View style={styles.container}>
                    <View style={styles.row}>
                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('story1')} >
                                <Image style={styles.imageSize} source={require('./flalokImages/Story1.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('story2')} >
                                <Image style={styles.imageSize} source={require('./flalokImages/Story2.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('story3')} >
                                <Image style={styles.imageSize} source={require('./flalokImages/Story3.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.row1}>
                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('story4')} >
                                <Image style={styles.imageSize} source={require('./flalokImages/Story4.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('story5')} >
                                <Image style={styles.imageSize} source={require('./flalokImages/Story5.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.itemSize} >
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('story6')} >
                                <Image style={styles.imageSize} source={require('./flalokImages/Story6.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                
                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={require('./flalokImages/Home_icon.png')}
                            style={styles.home}
                        ></Image>
                    </TouchableOpacity>
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
        flexDirection: 'row',
        width: '100%',
        height: '35%',
    },

    itemSize: {
        margin: 5,
        marginBottom: 0,
        width: '35%',
        height: '40%',
    },

    imageSize: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    container: {
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '80%',
        height: '90%',
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

export default withNavigation(FlalokStoryMenu);