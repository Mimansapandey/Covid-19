import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Modal, TouchableOpacity, Linking, Platform } from 'react-native';
import { DataTable } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

export default function Call() {

    return (
      <ScrollView>
        <DataTable>
          <DataTable.Header style={{backgroundColor:'#ff4da6', height: 40,textAlign:'center'}}>
            <DataTable.Title>S.NO</DataTable.Title>
            <DataTable.Title >STATES</DataTable.Title>
            <DataTable.Title numeric>HELPLINE </DataTable.Title>
          </DataTable.Header>
      

          <DataTable.Row>
            <DataTable.Cell> 1.</DataTable.Cell>
            <DataTable.Cell>Andhra</DataTable.Cell>
            <DataTable.Cell numeric>0866-2410978</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 2.</DataTable.Cell>
            <DataTable.Cell>Arunachal</DataTable.Cell>
            <DataTable.Cell numeric>9436055743</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 3.</DataTable.Cell>
            <DataTable.Cell>Assam</DataTable.Cell>
            <DataTable.Cell numeric>6913347770</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 4.</DataTable.Cell>
            <DataTable.Cell>Bihar</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 5.</DataTable.Cell>
            <DataTable.Cell>Chhattisgarh</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 6.</DataTable.Cell>
            <DataTable.Cell>Goa</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 7.</DataTable.Cell>
            <DataTable.Cell>Gujarat</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 8.</DataTable.Cell>
            <DataTable.Cell>Haryana</DataTable.Cell>
            <DataTable.Cell numeric>8558893911</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 9.</DataTable.Cell>
            <DataTable.Cell>Himachal</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
           <DataTable.Cell> 10.</DataTable.Cell>
            <DataTable.Cell>Jharkhand</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>
      
          <DataTable.Row>
            <DataTable.Cell> 11.</DataTable.Cell>
            <DataTable.Cell>Karnataka</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 12.</DataTable.Cell> 
            <DataTable.Cell>Kerala</DataTable.Cell>
            <DataTable.Cell numeric>0471-2552056</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
           <DataTable.Cell> 13.</DataTable.Cell>
            <DataTable.Cell>Madhya Pradesh</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 14.</DataTable.Cell>
            <DataTable.Cell>Maharashtra</DataTable.Cell>
            <DataTable.Cell numeric>020-26127394</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 15.</DataTable.Cell>
            <DataTable.Cell>Manipur</DataTable.Cell>
            <DataTable.Cell numeric>3852411668</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 16.</DataTable.Cell>
            <DataTable.Cell>Meghalaya</DataTable.Cell>
            <DataTable.Cell numeric>108</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 17.</DataTable.Cell>
            <DataTable.Cell>Mizoram</DataTable.Cell>
            <DataTable.Cell numeric>102</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 18.</DataTable.Cell>
            <DataTable.Cell>Nagaland</DataTable.Cell>
            <DataTable.Cell numeric>7005539653</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 19.</DataTable.Cell>
            <DataTable.Cell>Odisha</DataTable.Cell>
            <DataTable.Cell numeric>9439994859</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 20.</DataTable.Cell>
            <DataTable.Cell>Punjab</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 21.</DataTable.Cell>
            <DataTable.Cell>Rajasthan</DataTable.Cell>
            <DataTable.Cell numeric>0141-2225624</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 22.</DataTable.Cell>
            <DataTable.Cell>Sikkim</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 23.</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell numeric>044-29510500</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 24.</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 25.</DataTable.Cell>
            <DataTable.Cell>Tripura</DataTable.Cell>
            <DataTable.Cell numeric>0381-2315879</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 26.</DataTable.Cell>
            <DataTable.Cell>Uttarakhand</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 27.</DataTable.Cell>
            <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
            <DataTable.Cell numeric>18001805145</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 28.</DataTable.Cell>
            <DataTable.Cell>West Bengal</DataTable.Cell>
            <DataTable.Cell numeric>1800313444222, 03323412600</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 29.</DataTable.Cell>
            <DataTable.Cell>Andaman</DataTable.Cell>
            <DataTable.Cell numeric>03192-232102</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 30.</DataTable.Cell>
            <DataTable.Cell>Chandigarh</DataTable.Cell>
            <DataTable.Cell numeric>9779558282</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell> 31.</DataTable.Cell>
            <DataTable.Cell>Dadra and Nagar Haveli</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
           <DataTable.Cell> 32.</DataTable.Cell>
            <DataTable.Cell>Delhi</DataTable.Cell>
            <DataTable.Cell numeric>011-22307145</DataTable.Cell>
          </DataTable.Row>


          <DataTable.Row>
            <DataTable.Cell> 33.</DataTable.Cell>
            <DataTable.Cell>Jammu </DataTable.Cell>
            <DataTable.Cell numeric>01912520982, 0194-2440283</DataTable.Cell>
          </DataTable.Row>


          <DataTable.Row>
            <DataTable.Cell> 34.</DataTable.Cell>
            <DataTable.Cell>Ladakh</DataTable.Cell>
            <DataTable.Cell numeric>01982256462</DataTable.Cell>
          </DataTable.Row>


          <DataTable.Row>
            <DataTable.Cell> 35.</DataTable.Cell>
            <DataTable.Cell>Lakshadweep</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>


          <DataTable.Row>
            <DataTable.Cell> 36.</DataTable.Cell>
            <DataTable.Cell>Puducherry</DataTable.Cell>
            <DataTable.Cell numeric>104</DataTable.Cell>
          </DataTable.Row>


          <DataTable.Row>
          <DataTable.Cell> 37.</DataTable.Cell>
          <DataTable.Cell>Daman & Diu</DataTable.Cell>
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

