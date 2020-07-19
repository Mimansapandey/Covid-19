import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';


export default function CustomButton({ text, onPress }) {


    
    let [fontsLoaded] = useFonts({
        'Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
    });

    
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

        return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 5,
        height: 50,
        justifyContent: 'center',
        borderRadius: 40,
        paddingVertical: 5,
        paddingHorizontal: 70,
        backgroundColor: '#ff4da6',
        elevation: 12,
        shadowColor: "#ff4da6",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 50,
        shadowRadius: 4,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Bold',
        fontSize: 16,
        textAlign: 'center',
        letterSpacing: 2.5,
    }
})
