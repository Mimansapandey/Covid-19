import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Modal, TouchableOpacity, Linking, Platform } from 'react-native';
import { DataTable } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

export default function Call() {

    return (
      <ScrollView>
        <DataTable>
          <DataTable.Header style={{backgroundColor:'#ff4da6'}}>
            <DataTable.Title >STATES</DataTable.Title>
            <DataTable.Title numeric>HELPLINE NUMBER</DataTable.Title>
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

});

