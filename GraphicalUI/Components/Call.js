import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Modal, TouchableOpacity, Linking, Platform } from 'react-native';
import { DataTable } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default function Call() {

    return (
      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title >Name of States</DataTable.Title>
            <DataTable.Title numeric>Helpline Numbers</DataTable.Title>
          </DataTable.Header>
      

          <DataTable.Row>
      
            <DataTable.Cell>Andhra Pradesh</DataTable.Cell>
            <DataTable.Cell numeric>0866-2410978</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Arunachal Pradesh</DataTable.Cell>
            <DataTable.Cell numeric>9436055743</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Assam</DataTable.Cell>
            <DataTable.Cell numeric>6913347770</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
          
            <DataTable.Cell>Bihar</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Chhattisgarh</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
          
            <DataTable.Cell>Goa</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Gujarat</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Haryana</DataTable.Cell>
            <DataTable.Cell numeric>8558893911</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
          
            <DataTable.Cell>Himachal Pradesh</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Jharkhand</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>
      
          <DataTable.Row>
            
            <DataTable.Cell>Karnataka</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Kerala</DataTable.Cell>
            <DataTable.Cell numeric>0471-2552056</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Madhya Pradesh</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Maharashtra</DataTable.Cell>
            <DataTable.Cell numeric>020-26127394</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Manipur</DataTable.Cell>
            <DataTable.Cell numeric>3852411668</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
          
            <DataTable.Cell>Meghalaya</DataTable.Cell>
            <DataTable.Cell numeric>108</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Mizoram</DataTable.Cell>
            <DataTable.Cell numeric>102</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Nagaland</DataTable.Cell>
            <DataTable.Cell numeric>7005539653</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Odisha</DataTable.Cell>
            <DataTable.Cell numeric>9439994859</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Punjab</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
          
            <DataTable.Cell>Rajasthan</DataTable.Cell>
            <DataTable.Cell numeric>0141-2225624</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Sikkim</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell numeric>044-29510500</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Tripura</DataTable.Cell>
            <DataTable.Cell numeric>0381-2315879</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Uttarakhand</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
            <DataTable.Cell numeric>18001805145</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
          
            <DataTable.Cell>West Bengal</DataTable.Cell>
            <DataTable.Cell numeric>1800313444222, 03323412600</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Andaman and Nicobar islands</DataTable.Cell>
            <DataTable.Cell numeric>03192-232102</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Chandigarh</DataTable.Cell>
            <DataTable.Cell numeric>9779558282</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Dadra and Nagar Haveli and Daman Diu</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            
            <DataTable.Cell>Delhi</DataTable.Cell>
            <DataTable.Cell numeric>011-22307145</DataTable.Cell>
          </DataTable.Row>


          <DataTable.Row>
            
            <DataTable.Cell>Jammu & Kashmir</DataTable.Cell>
            <DataTable.Cell numeric>01912520982, 0194-2440283</DataTable.Cell>
          </DataTable.Row>


          <DataTable.Row>
            
            <DataTable.Cell>Ladakh</DataTable.Cell>
            <DataTable.Cell numeric>01982256462</DataTable.Cell>
          </DataTable.Row>


          <DataTable.Row>
            
            <DataTable.Cell>Lakshadweep</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>


          <DataTable.Row>
            
            <DataTable.Cell>Puducherry</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

      
      
          <DataTable.Pagination
            page={5}
            numberOfPages={5}
            onPageChange={page => {
              console.log(page);
            }}
            label="1 of 1"
          />
      </DataTable>
      </ScrollView>
        
    
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: '100%',
        width: '100%'
    },
    topContainer: {
        flex: 1.3,
        width: '100%',
        height: '100%'
    },

    bottomContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        height: '100%',
        backgroundColor: '#32afa9',
        alignItems: 'center'
    },

    rectangle: {
        width: '50%',
        height: '80%',
        padding: '5%',
    },

    inner: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        elevation: 5,
        shadowColor: 'grey',
        shadowOffset: {
            width: 4,
            height: 4
        },
        shadowOpacity: 50,
        shadowRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%',
        borderRadius: 15,
    },

    bookingText: {
        color: "#121212",
        fontSize: 16,
        fontFamily: 'Medium',
        textAlign: 'center',
        paddingTop: 10,
        flex: 1
    },
    calendarIcon: {
        color: "rgba(88,172,168,1)",
        fontSize: 40,
        flex: 1
    },
    //Calls Avatar

    CallContainer: {
        paddingTop: 30,
        paddingHorizontal: 30,
        flex: 4,
        alignItems: 'flex-end',
    },
    CallAvatar: {
        width: 410,
        height: 720
    },

    CallMaryPoppins: {
        color: "#121212",
        fontSize: 18,
        fontFamily: 'SemiBold',
        marginTop: '1%',
        textAlign: 'right'
    },
    stGeorgesHospital: {
        color: "#121212",
        fontSize: 16,
        fontFamily: 'Medium',
        marginTop: '1%',
        textAlign: 'right'
    },
    birmingham: {
        color: "#121212",
        fontSize: 16,
        fontFamily: 'Regular',
        marginTop: '1%',
        textAlign: 'right'
    },
    //NHS support and donation

    donateNHS: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
        paddingTop: 10
    },

    rect: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flex: 1,
        borderRadius: 10,
        borderColor: '#58ACA8',
        borderWidth: 2,
        marginTop: 15,
        marginBottom: -15,
        overflow: 'hidden'
    },

    supportText: {
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'Regular',
        color: '#6D6A6A',
        padding: 5
    },

    supportClick: {
        fontSize: 15,
        fontFamily: 'SemiBold',
        color: '#58ACA8'
    },

    //Urgent Call Rectangle

    urgentCallText: {
        color: "#121212",
        fontSize: 16,
        fontFamily: 'Regular',
        letterSpacing: 0,
        marginTop: 4
    },
    urgentCallIcon: {
        color: "rgba(88,172,168,1)",
        fontSize: 40,
        height: 40,
        width: 40,
        marginLeft: 70,
        marginTop: -15
    },

    //Pop Ups

    grayOverlay: {
        flex: 1,
        backgroundColor: "#000000aa",
        justifyContent: 'center',
        alignItems: 'center'
    },


    //Book Call Pop Up
    bookPopUpContainer: {
        width: '70%',
        height: '50%',
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 54,
        flex: 0.25,
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10
    },

    bookPopUpTitle: {
        color: "#121212",
        fontSize: 18,
        fontFamily: 'SemiBold',
        textAlign: 'center',
        flex: 1,
        marginTop: 15
    },
    bookPopUpText: {
        color: "#121212",
        fontSize: 16,
        fontFamily: "Regular",
        textAlign: "center",
        flex: 1,
    },

    bookPopUpButtons: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    exit: {
        backgroundColor: "rgba(172,88,88,1)",
        borderRadius: 28,
        alignItems: 'center',
        height: '60%',
        width: '30%',
        justifyContent: 'center',
    },

    bookPopUpButtonText: {
        fontSize: 18,
        fontFamily: "Medium",
        color: "rgba(255,255,255,1)",
        textAlign: "center",
    },

    //Urgent Call Pop Up
    urgentPopUpContainer: {
        width: '75%',
        height: '50%',
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 54,
        flex: 0.35,
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20
    },

    urgentPopUpTitle: {
        color: "#121212",
        fontSize: 18,
        fontFamily: 'SemiBold',
        alignSelf: "center",
        flex: 1,
        marginTop: 15
    },
    urgentPopUpText: {
        color: "#121212",
        fontSize: 16,
        fontFamily: "Regular",
        textAlign: "center",
        alignSelf: "center",
        flex: 2.3,
        paddingHorizontal: 5,
    },

    yesNoContainer: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1
    },

    noButton: {
        width: 100,
        height: 33,
        backgroundColor: "rgba(172,88,88,1)",
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',

    },
    yesButton: {
        width: 100,
        height: 33,
        backgroundColor: "rgba(88,172,168,1)",
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
    },

    urgentPopUpButtonText: {
        fontSize: 18,
        fontFamily: "Medium",
        color: "rgba(255,255,255,1)",
    }


});

