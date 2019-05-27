import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class MainMenuScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Main Menu Screen</Text>
                <Button
                    title="Play"
                    onPress={() => this.props.navigation.navigate('MainMenu')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MainMenuScreen;