import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image, Modal, StatusBar, FlatList, SafeAreaView } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import Jane from '../assets/Jane.png';
import green from '../assets/green_circle.jpeg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', 
])

export default class BasicTimeLine extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  constructor() {
    super();
    this.data = [
      {
        title: 'Covid-19 media outlet(National)',
        description:
          'https://www.covid19india.org/',
        circleColor: '#ff4da6',
        lineColor: '#ff4da6',
        fontSize: 5,
      },
      {
        
        title: 'Covid-19 media outlet(International)',
        description:
          'https://www.worldometers.info/coronavirus/',
        circleColor: '#ff4da6',
        lineColor: '#ff4da6'
      },
      {
        
        title: 'Coronavirus Vaccine Tracker',
        description:
          'https://www.nytimes.com/interactive/2020/science/coronavirus-vaccine-tracker.html',
        circleColor: '#ff4da6',
        lineColor: '#ff4da6'
      },
      {
        
        title: 'Ministry of Health and Family Welfare',
        description:
          'https://www.mohfw.gov.in/',
        circleColor: '#ff4da6',
        lineColor: '#ff4da6'
      },
      {
        
        title: 'World Health Organisation',
        description:
          'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#:~:text=symptoms',
        circleColor: '#ff4da6',
        lineColor: '#ff4da6'
      },
      {
        
        title: 'Government of India',
        description:
          'https://www.mygov.in/covid-19/',
        circleColor: '#ff4da6',
        lineColor: '#ff4da6',
      },
    ];
  }
  render() {
    const { modalVisible } = this.state;

    return (
      <ScrollView style={styles.wrapper}>
        <StatusBar backgroundColor='#ffb6c1' barStyle="light-content" />
        <View style={styles.userInfo}>
          

          <View style={styles.Jane}>
            <Image source={Jane} />
          </View>

        </View>

        <View style={styles.container}>
          <Timeline style={{ flex: 1 }} data={this.data} descriptionStyle={{ color: 'black', fontSize: 16, fontFamily: 'Regular' }} />
        </View>
        

        <Modal transparent={true} visible={modalVisible} animationType='fade'>
          <View style={styles.popupBack}>
            <View style={styles.popup}>

              <View style={styles.popupText}>
                <Text style={{ fontFamily: 'Bold', fontSize: 18, textAlign: 'justify' }}>Request another link</Text>
              </View>

              <View style={styles.popupText}>
                <Text style={{ fontFamily: 'Regular', fontSize: 16 }}>What other websites would you like to be listed here?</Text>
                <TextInput style={styles.popupInput} maxLength={250}></TextInput>
              </View>

              <View style={styles.popupButtons}>
                <TouchableOpacity onPress={() => { this.setModalVisible(false); }}>
                  <View style={styles.popupRequest}>
                    <Text style={{ fontFamily: 'Medium', fontSize: 16, color: 'white' }}>Request</Text>
                  </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => { this.setModalVisible(false); }}>
                  <View style={styles.popupCancel}>
                    <Text style={{ fontFamily: 'Medium', fontSize: 16, color: 'white' }}>Cancel</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: '100%'
  },
  userInfo: {
    alignItems: 'center',
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  userContainer: {
    flexWrap: 'wrap',
    marginLeft: '5%',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  userName: {
    fontSize: 18,
    fontFamily: 'SemiBold',
    lineHeight: 25
  },
  userNo: {
    fontSize: 14,
    fontFamily: 'Regular'
  },
  button: {
    alignItems: 'center',
    padding: 10
  },
  innerButton: {
    backgroundColor: '#fbf4f4',
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: hp('10%'),
    //padding: 10,
    paddingRight: 10,
    paddingLeft: 30,
    alignItems: 'center',
    width: wp('75%'),
    shadowColor: 'rgba(0,0,0, .25)',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 2,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 40
  },
  //Pop-up styling
  popupBack: {
    flex: 1,
    backgroundColor: "#fbf4f4",
    alignItems: 'center',
    justifyContent: 'center'
  },

  popup: {
    borderRadius: 40,
    height: '40%',
    width: '75%',
    padding: '5%',
    backgroundColor: 'white'
  },

  popupText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '2%'
  },

  popupInput: {
    height: 30,
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginVertical: '5%'
  },

  notify: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
    marginTop: '20%',
  },

  popupButtons: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: "row",
    marginTop: '4%'
  },

  popupRequest: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff4da6',
    padding: 5,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 40
  },

  popupCancel: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff4da6',
    width: '100%',
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 40
  },
  buttonAdd: {
    width: 37,
    height: 37,
  }
})
