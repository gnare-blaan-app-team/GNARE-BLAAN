import React,{Component} from 'react';
import { Text, View, Image, StyleSheet, Button, ImageBackground} from 'react-native';
import { withNavigation } from 'react-navigation';

class Menuscreen extends Component{
    static navigationOptions = {
        header:null,
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    render(){
        return(
           <ImageBackground
           style={styles.image}
           source={require('./images/GnareMain.gif')}
           >
            <View style={styles.container}>
            <Button
            title='PLAY'
            onPress={this.gotoMainMenu}
            >
            </Button>
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

    container: {
        transform: [{ rotate: '90deg' }],
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        position: 'absolute',
        top: '48%',
        left: '5%',
        
    },
})

export default withNavigation(Menuscreen);