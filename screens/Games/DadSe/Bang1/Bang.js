import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ImageBackground, AsyncStorage} from 'react-native';
import { withNavigation } from 'react-navigation';

import Q1 from './DSBang1Question1';
import Q2 from './DSBang1Question2';
import Q3 from './DSBang1Question3';
import Q4 from './DSBang1Question4';
import Q5 from './DSBang1Question5';
import Q6 from './DSBang1Question6';
import Q7 from './DSBang1Question7';
import Q8 from './DSBang1Question8';
import Q9 from './DSBang1Question9';
import Q10 from './DSBang1Question10';
import Ending from './Ending';
import Background from './InitiatingPage';


const prevKey = '@MyApp:prevkey';


const RandomQuestion = [Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10];

const stageNumber = [0,1,2,3,4,5,6,7,8,9];

const alreadyShowed = [];

class Bang extends Component {
    static navigationOptions = {
        header: null,
    }
    constructor(props) {
        super(props);
        this.state = {
            questionStage: Background,
            index: 0,
            max: stageNumber.length,
        }
    }

    onSave = async () => {
        const storedValue = await AsyncStorage.getItem(Key);
        await AsyncStorage.setItem(prevKey, storedValue); 
    }

    onLoad = async () => {
        var random = stageNumber.splice(Math.floor(Math.random() * this.state.max), 1)[0];
        const storedValue = await AsyncStorage.getItem(prevKey);
        if(storedValue == null){
            const convert = JSON.stringify(random);
            this.setState({
                questionStage: RandomQuestion[convert],
            });
            await AsyncStorage.setItem(prevKey, convert); 
        }else{
            var newStored = storedValue;
            if (this.state.index == 'change') {
                newStored = JSON.stringify(random);
                await AsyncStorage.setItem(prevKey, newStored);
                this.setState({
                    questionStage: RandomQuestion[newStored],
                });
            }
            this.setState({
                questionStage: RandomQuestion[newStored],
            });
        }
        
        alreadyShowed.push(1);
        if (alreadyShowed.length == 5) {
            this.setState({
                questionStage: Ending,
            });
        }       
    }
        

    componentWillMount(){
        this.onLoad();
    }

    

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('change', 'NO-ID');
        this.state.index = itemId;
        return (
                <this.state.questionStage/>
        )
           
    }
}




export default withNavigation(Bang);