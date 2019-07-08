import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';

const Key = '@MyApp:key';

class Try extends Component {
    static navigationOptions = {
        header: null,
    }

    state={
        text:'',
        storedValue: '',
    };

    componentWillMount(){
       
        this.onLoad();
    }

    onChange = (text) => {
        this.setState({text});
    }

    onLoad = async () => {
            const storedValue = await AsyncStorage.getItem(Key);
            this.setState({storedValue});
            if(storedValue == 'Level1'){
                alert('asdasdsa');
            }
    }
    
    onSave = async () => {
        const {text} = this.state;
        await AsyncStorage.setItem(Key,text);
        
    }

    render() {
        const {storedValue,text} = this.state;
        return (
         <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
             <Text>{storedValue}</Text>
             <View>
                 <TextInput
                 onChangeText={this.onChange}
                 value={text}
                 placeholder='type something here...'
                 />
                 <View style={{backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity  onPress={this.onSave}>
                            <Text style={{ color: 'white'}}>Save locally</Text>
                    </TouchableOpacity>
                    </View>   
                    <Text></Text>
                    <View style={{ backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={this.onLoad}>
                            <Text>Load data</Text>
                        </TouchableOpacity>
                    </View>
             </View>
         </View>
        )
    }
}


export default withNavigation(Try);