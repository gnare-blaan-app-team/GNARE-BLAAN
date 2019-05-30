import React,{Component} from 'react';
import { StyleSheet, ImageBackground, Text, View, Image} from 'react-native';
import { withNavigation } from 'react-navigation';

class Story3Screen extends Component {
    static navigationOptions = {
        header:null,
    }

    gotoStory4 = () => {
        this.prop.nagivation.navigate('story4');
    }

    render(){
        return(
           <ImageBackground style={styles.image} source={require('./flalokImages/Flalok_BG.jpg')}>

                <View style={styles.container}>
                    <View style={styles.row}>
                        <Image style={styles.itemSize} source={require('./flalokImages/Story3.png')} goto={this.gotoStory3}/>
                    </View>
                    <View style={styles.row}>
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

    itemSize: {
        margin: 10,
        marginBottom: 0,
        flexDirection: 'row',
        width: '30%',
        height: '35%',
    },

    container: {
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '80%',
        height: '90%',
    }
})

export default withNavigation(Story3Screen);