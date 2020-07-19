import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';




export default function aboutPage() {

   
    let [fontsLoaded] = useFonts({
        'Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
        'Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
        'Light': require('../assets/fonts/Montserrat-Light.ttf'),
        'Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    });


    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

        return (


            <View style={{ backgroundColor: '#ffb6c1', height: '100%' }}>
				<StatusBar backgroundColor='#ffb6c1' barStyle="light-content" />


                <View style={styles.container}>
                    <Text style={{ fontFamily: 'Bold', fontSize: 25, color: 'white', marginBottom: 7 }}>Corona Safe</Text>
                    <Text style={{ fontFamily: 'Regular', fontSize: 20, marginBottom: 20 }}>A cross platform covid tracking app with live updates on the current state of the pandemic.</Text>
                    <Text style={{ fontFamily: 'Regular', fontSize: 20, color: 'white', marginTop: 15 }}>© 2020</Text>
                </View>

            </View>

        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 18,
        marginRight: 18,
    },
});
