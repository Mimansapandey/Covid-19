import React from 'react';
import {
    View,
    Image
} from 'react-native';

//Trying to import button
import CustomButton from './CustomButton';

//Import logo
import bigger from '../assets/Logo(pink).png';

const StartScreen = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fbf4f4'
        }}>
            <Image source={bigger} style={{ width: 600, marginBottom: 70, height: 160, }} />
            <CustomButton text="Sign Up" onPress={() => navigation.navigate('SignUpScreen')}></CustomButton>
            <CustomButton text="Login" onPress={() => navigation.navigate('SignInScreen')}></CustomButton>
        </View>
    );
};

export default StartScreen;