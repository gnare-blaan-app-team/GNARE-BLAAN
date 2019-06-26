import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';


class VocabularyItem extends Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        return (
            <View style={styles.menuItem}>
                <TouchableOpacity  onPress={this.props.goto}>
                    <Image
                        source={this.props.itemImage}
                        style={styles.image}
                    />
                </TouchableOpacity >

            </View>
        )
    }
}

const styles = StyleSheet.create({
    menuItem: {
        width: '27%',
        height: '44%',
        paddingBottom: 20,
        // borderWidth: 0.5,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        
    }

})

export default withNavigation(VocabularyItem);