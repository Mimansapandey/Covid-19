import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView, StatusBar } from 'react-native';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import add from '../assets/add.png';
import line from '../assets/line3.png';


export default function Faq() {

  let [fontsLoaded] = useFonts({
    'Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  
  const [answer, setAnswer] = useState('');
  const handleAnswer = () => setAnswer('Coronavirus disease (COVID-19) is caused by Novel Coronavirus that leads to cough, fever or difficulty in breathing.');
  const [secondAnswer, setSecondAnswer] = useState('');
  const handleSecondAnswer = () => setSecondAnswer('When coughing and sneezing, cover mouth and nose with a tissue, wash hands with soap and water frequently, avoid social contact and if you have any COVID-19 symptoms, contact your nearest healthcare facilty.');
  const [thirdAnswer, setThirdAnswer] = useState('');
  const handleThirdAnswer = () => setThirdAnswer('The virus that causes COVID-19 is thought to spread mainly from person to person through respiratory droplets produced when an infected person coughs, sneezes or talks.Spread is more likely when people are in close contact with one another(within about 6 feet).');
  const [fourthAnswer, setFourthAnswer] = useState('');
  const handleFourthAnswer = () => setFourthAnswer('Community spread means people have infected with the virus in an area, including some who are not sure how or where they became infected. Each health department determines community spread differently based on local conditions. For more information on community spread in your area, please visit your health departments website.');
  const [fifthAnswer, setFifthAnswer] = useState('');
  const handleFifthAnswer = () => setFifthAnswer('Yes. It is possible to test positive for the flu (As well as other respiratory infections) and COVID-19 at the same time"');
  const [sixthAnswer, setSixthAnswer] = useState('');
  const handleSixthAnswer = () => setSixthAnswer('Based on currently available information and clinical expertise, older adults and people with underlying medical conditions are at higher risk for severe illness from COVID-19.');
  const [seventhAnswer, setSeventhAnswer] = useState('');
  const handleSeventhAnswer = () => setSeventhAnswer('Be alert for symptoms. Watch for fever, cough, shortness of breath, or other symptoms of covid-19. Take your temperature and follow CDC guidance if you have any symptoms.');
  const [eighthAnswer, setEighthAnswer] = useState('');
  const handleEighthAnswer = () => setEighthAnswer('Cleaning does not kill germs, but by removing them, it lowers their numbers and risk of spreading infection. if a surface may have gotten the virus on it from a person with or suspected to have COVID-19, the surface should be cleaned and disinfected. Disinfecting kills germs on surfaces.')


const [state, setState] = useState(true);
function toggle() {
  setState(!state);
};

const [state2, setState2] = useState(true);
function toggle2() {
  setState2(!state2);
};

const [state3, setState3] = useState(true);
function toggle3() {
  setState3(!state3);
};

const [state4, setState4] = useState(true);
function toggle4() {
  setState4(!state4);
};

const [state5, setState5] = useState(true);
function toggle5() {
  setState5(!state5);
};

const [state6, setState6] = useState(true);
function toggle6() {
  setState6(!state6);
};

const [state7, setState7] = useState(true);
function toggle7() {
  setState7(!state7);
};

const [state8, setState8] = useState(true);
function toggle8() {
  setState8(!state8);
};
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <ScrollView style={styles.wrapper}>
				<StatusBar backgroundColor='#32afa9' barStyle="light-content" />
        <View style={styles.container}>
          <Text style={styles.bodyTxtBold}>1. What is novel Coronavirus Disease?</Text>
          <View><Text style={styles.bodyTxt}>{state ? "" : "Coronavirus disease (COVID-19) is caused by Novel Coronavirus that leads to cough, fever or difficulty in breathing."}</Text></View>
        </View>

        <View style={styles.addBtn}>
          <TouchableHighlight underlayColor='#fff' onPress={toggle}>
            <Image source={add} />
          </TouchableHighlight>
        </View>

        <View style={styles.lineCont}>
          <Image source={line} />
        </View>


        <View style={styles.container}>
          <Text style={styles.bodyTxtBold}>2. How to take precaution/ protect yourself?</Text>
          <View><Text style={styles.bodyTxt}>{state2 ? "" : "When coughing and sneezing, cover mouth and nose with a tissue, wash hands with soap and water frequently, avoid social contact and if you have any COVID-19 symptoms, contact your nearest healthcare facilty."}</Text></View>
        </View>

        <View style={styles.addBtn}>
          <TouchableHighlight underlayColor='#fff' onPress={toggle2}>
            <Image source={add} />
          </TouchableHighlight>
        </View>

        <View style={styles.lineCont}>
          <Image source={line} />
        </View>


        <View style={styles.container}>
          <Text style={styles.bodyTxtBold}>3. How does the virus spread? </Text>
          <View><Text style={styles.bodyTxt}>{state3 ? "" : "The virus that causes COVID-19 is thought to spread mainly from person to person through respiratory droplets produced when an infected person coughs, sneezes or talks.Spread is more likely when people are in close contact with one another(within about 6 feet)"}</Text></View>
        </View>

        <View style={styles.addBtn}>
          <TouchableHighlight underlayColor='#fff' onPress={toggle3}>
            <Image source={add} />
          </TouchableHighlight>
        </View>

        <View style={styles.lineCont}>
          <Image source={line} />
        </View>


        <View style={styles.container}>
          <Text style={styles.bodyTxtBold}>4. What is community spread?</Text>
          <View><Text style={styles.bodyTxt}>{state4 ? "" : "Community spread means people have infected with the virus in an area, including some who are not sure how or where they became infected. Each health department determines community spread differently based on local conditions. For more information on community spread in your area, please visit your health departments website."}</Text></View>
        </View>

        <View style={styles.addBtn}>
          <TouchableHighlight underlayColor='#fff' onPress={toggle4}>
            <Image source={add} />
          </TouchableHighlight>
        </View>

        <View style={styles.lineCont}>
          <Image source={line} />
        </View>

        <View style={styles.container}>
          <Text style={styles.bodyTxtBold}>5. Is it possible to have the flu and COVID-19 at the same time?</Text>
          <View><Text style={styles.bodyTxt}>{state4 ? "" : "Yes. It is possible to test positive for the flu (As well as other respiratory infections) and COVID-19 at the same time"}</Text></View>
        </View>

        <View style={styles.addBtn}>
          <TouchableHighlight underlayColor='#fff' onPress={toggle4}>
            <Image source={add} />
          </TouchableHighlight>
        </View>

        <View style={styles.lineCont}>
          <Image source={line} />
        </View>

        <View style={styles.container}>
          <Text style={styles.bodyTxtBold}>6. Who is at higher risk for serious illness from COVID-19?</Text>
          <View><Text style={styles.bodyTxt}>{state4 ? "" : "Based on currently available information and clinical expertise, older adults and people with underlying medical conditions are at higher risk for severe illness from COVID-19."}</Text></View>
        </View>

        <View style={styles.addBtn}>
          <TouchableHighlight underlayColor='#fff' onPress={toggle4}>
            <Image source={add} />
          </TouchableHighlight>
        </View>

        <View style={styles.lineCont}>
          <Image source={line} />
        </View>


        <View style={styles.container}>
          <Text style={styles.bodyTxtBold}>7. What should i do if i have had close contact with someone who has COVID-19? </Text>
          <View><Text style={styles.bodyTxt}>{state5 ? "" : "Be alert for symptoms. Watch for fever, cough, shortness of breath, or other symptoms of covid-19. Take your temperature and follow CDC guidance if you have any symptoms"}</Text></View>
        </View>

        <View style={styles.addBtnLast}>
          <TouchableHighlight underlayColor='#fff' onPress={toggle5}>
            <Image source={add} />
          </TouchableHighlight>
        </View>

        <View style={styles.lineCont}>
          <Image source={line} />
        </View>


        <View style={styles.container}>
          <Text style={styles.bodyTxtBold}>8. Is cleaning alone effective against the virus that causes COVID-19? </Text>
          <View><Text style={styles.bodyTxt}>{state5 ? "" : "Cleaning does not kill germs, but by removing them, it lowers their numbers and risk of spreading infection. if a surface may have gotten the virus on it from a person with or suspected to have COVID-19, the surface should be cleaned and disinfected. Disinfecting kills germs on surfaces."}</Text></View>
        </View>

        <View style={styles.addBtnLast}>
          <TouchableHighlight underlayColor='#fff' onPress={toggle5}>
            <Image source={add} />
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
};


const styles = StyleSheet.create({
 wrapper:{
   flex: 1,
   padding: 30,
   flexDirection: 'column',
   backgroundColor: '#fff'
 },
 
  addBtn: {
    marginTop: 5,
    marginLeft: '90%'
  },

  addBtnLast: {
    marginTop: 5,
    marginLeft: '90%',
    marginBottom: 50
  },

  bodyTxt: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Regular'
  },

  bodyTxtBold: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Bold'
  },

  lineCont:
  {
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 17
  }

});
