//This is an example code to Add Search Bar Filter on Listview//
import React, { Component, useEffect, useState } from 'react';
//import react in our code.
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
//import all the components we are going to use.
import { DataTable } from 'react-native-paper';

export default class App extends Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, text: '' };
    this.arrayholder = [];
  }

  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text,
    });
  }

  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <DataTable>
 
        <View style={styles.viewStyle}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={text => this.SearchFilterFunction(text)}
            value={this.state.text}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          />
        </View>
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
        <DataTable.Pagination
          page={5}
          numberOfPages={5}
          onPageChange={page => {
            console.log(page);
          }}
          label="1 of 1"
        />
      </DataTable>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 40,
    padding: 16,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});