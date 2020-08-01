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
        <DataTable.Header style={{backgroundColor:'#ff4da6'}}>
          <DataTable.Title >DISTRICT</DataTable.Title>
          <DataTable.Title >STATE</DataTable.Title>
          <DataTable.Title >ZONAL CLASSIFICATION</DataTable.Title>
        </DataTable.Header>
    
        <DataTable.Row style={{backgroundColor:'#fa6969'}}>

          <DataTable.Cell>South Andamans</DataTable.Cell>
          <DataTable.Cell>Andaman And Nicobar</DataTable.Cell>
          <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
        <DataTable.Cell>Nicobars</DataTable.Cell>
        <DataTable.Cell>Andaman And Nicobar</DataTable.Cell>
        <DataTable.Cell>Green Zone</DataTable.Cell>
      </DataTable.Row>
        

      <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
          <DataTable.Cell>North And Middle Andaman</DataTable.Cell>
          <DataTable.Cell>Andaman And Nicobar</DataTable.Cell>
          <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
          <DataTable.Cell>Kurnool</DataTable.Cell>
          <DataTable.Cell>Andhra Pradesh</DataTable.Cell>
          <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
          <DataTable.Cell>Guntur</DataTable.Cell>
          <DataTable.Cell>Andhra Pradesh</DataTable.Cell>
          <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
            <DataTable.Cell>Krishna</DataTable.Cell>
            <DataTable.Cell>Andhra Pradesh</DataTable.Cell>
            <DataTable.Cell>Red Zone</DataTable.Cell>
         </DataTable.Row>


         <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
           <DataTable.Cell>Chittoor</DataTable.Cell>
           <DataTable.Cell>Andhra Pradesh</DataTable.Cell>
           <DataTable.Cell>Red Zone</DataTable.Cell>
         </DataTable.Row>

         <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
          <DataTable.Cell>Spst Nellore</DataTable.Cell>
          <DataTable.Cell>Andhra Pradesh</DataTable.Cell>
          <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
          <DataTable.Cell>Y.S.R</DataTable.Cell>
          <DataTable.Cell>Andhra Pradesh</DataTable.Cell>
          <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Anantapur</DataTable.Cell>
         <DataTable.Cell>Andhra Pradesh</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Prakasam</DataTable.Cell>
         <DataTable.Cell>Andhra Pradesh</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
         <DataTable.Cell>Sambalpur</DataTable.Cell>
         <DataTable.Cell>Odisha</DataTable.Cell>
         <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
         <DataTable.Cell>Sonepur</DataTable.Cell>
         <DataTable.Cell>Odisha</DataTable.Cell>
         <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Pondicherry</DataTable.Cell>
         <DataTable.Cell>Puducherry</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Karaikal</DataTable.Cell>
         <DataTable.Cell>Puducherry</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
         <DataTable.Cell>Mahe</DataTable.Cell>
         <DataTable.Cell>Puducherry</DataTable.Cell>
         <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
         <DataTable.Cell>Yanam</DataTable.Cell>
         <DataTable.Cell>Puducherry</DataTable.Cell>
         <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
         <DataTable.Cell>Jalandhar</DataTable.Cell>
         <DataTable.Cell>Punjab</DataTable.Cell>
         <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
         <DataTable.Cell>Patiala</DataTable.Cell>
         <DataTable.Cell>Punjab</DataTable.Cell>
         <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>
        
        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
         <DataTable.Cell>Ludhiana</DataTable.Cell>
         <DataTable.Cell>Punjab</DataTable.Cell>
         <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
         <DataTable.Cell>S.A.S Nagar</DataTable.Cell>
         <DataTable.Cell>Punjab</DataTable.Cell>
         <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Pathankot</DataTable.Cell>
         <DataTable.Cell>Punjab</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Mansa</DataTable.Cell>
         <DataTable.Cell>Punjab</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Tarn Taran</DataTable.Cell>
         <DataTable.Cell>Punjab</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Amritsar</DataTable.Cell>
         <DataTable.Cell>Punjab</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Kapurthala</DataTable.Cell>
         <DataTable.Cell>Punjab</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Hoshiarpur</DataTable.Cell>
         <DataTable.Cell>Punjab</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Faridkot</DataTable.Cell>
         <DataTable.Cell>Punjab</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Sangrur</DataTable.Cell>
         <DataTable.Cell>Punjab</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Shahid Bhagat Singh Nagar</DataTable.Cell>
         <DataTable.Cell>Punjab</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Firozepur</DataTable.Cell>
         <DataTable.Cell>Punjab</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Sri Muktsar Sahib</DataTable.Cell>
         <DataTable.Cell>Punjab</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Moga</DataTable.Cell>
         <DataTable.Cell>Punjab</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Gurdaspur</DataTable.Cell>
         <DataTable.Cell>Punjab</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Barnala</DataTable.Cell>
         <DataTable.Cell>Punjab</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
         <DataTable.Cell>Rupnagar (Ropar)</DataTable.Cell>
         <DataTable.Cell>Punjab</DataTable.Cell>
         <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
         <DataTable.Cell>Fatehgarh Sahib</DataTable.Cell>
         <DataTable.Cell>Punjab</DataTable.Cell>
         <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
         <DataTable.Cell>Bathinda</DataTable.Cell>
         <DataTable.Cell>Punjab</DataTable.Cell>
         <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
         <DataTable.Cell>Fazilka</DataTable.Cell>
         <DataTable.Cell>Punjab</DataTable.Cell>
         <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
         <DataTable.Cell>Jaipur</DataTable.Cell>
         <DataTable.Cell>Rajasthan</DataTable.Cell>
         <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
         <DataTable.Cell>Jodhpur</DataTable.Cell>
         <DataTable.Cell>Rajasthan</DataTable.Cell>
         <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
         <DataTable.Cell>Kota</DataTable.Cell>
         <DataTable.Cell>Rajasthan</DataTable.Cell>
         <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
         <DataTable.Cell>Ajmer</DataTable.Cell>
         <DataTable.Cell>Rajasthan</DataTable.Cell>
         <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
         <DataTable.Cell>Bharatpur</DataTable.Cell>
         <DataTable.Cell>Rajasthan</DataTable.Cell>
         <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
         <DataTable.Cell>Nagur</DataTable.Cell>
         <DataTable.Cell>Rajasthan</DataTable.Cell>
         <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
         <DataTable.Cell>Banswara</DataTable.Cell>
         <DataTable.Cell>Rajasthan</DataTable.Cell>
         <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
         <DataTable.Cell>Jhalawar</DataTable.Cell>
         <DataTable.Cell>Rajasthan</DataTable.Cell>
         <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Tonk</DataTable.Cell>
         <DataTable.Cell>Rajasthan</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Jaisalmer</DataTable.Cell>
         <DataTable.Cell>Rajasthan</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Dause</DataTable.Cell>
         <DataTable.Cell>Rajasthan</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Jhunjhunu</DataTable.Cell>
         <DataTable.Cell>Rajasthan</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Hanumangarh</DataTable.Cell>
         <DataTable.Cell>Rajasthan</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Bhilwara</DataTable.Cell>
         <DataTable.Cell>Rajasthan</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>SawaiMadhopur</DataTable.Cell>
         <DataTable.Cell>Rajasthan</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Chittorgarh</DataTable.Cell>
         <DataTable.Cell>Rajasthan</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
         <DataTable.Cell>Dungarpur</DataTable.Cell>
         <DataTable.Cell>Rajasthan</DataTable.Cell>
         <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Udaipur</DataTable.Cell>
            <DataTable.Cell>Rajasthan</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
         </DataTable.Row>

         <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Dholpur</DataTable.Cell>
            <DataTable.Cell>Rajasthan</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
         </DataTable.Row>

         <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Sikar</DataTable.Cell>
            <DataTable.Cell>Rajasthan</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
         </DataTable.Row>

         <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Alwar</DataTable.Cell>
            <DataTable.Cell>Rajasthan</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
         </DataTable.Row>

         <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Bikaner</DataTable.Cell>
            <DataTable.Cell>Rajasthan</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
         </DataTable.Row>

         <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Churu</DataTable.Cell>
            <DataTable.Cell>Rajasthan</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
         </DataTable.Row>

         <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Pali</DataTable.Cell>
            <DataTable.Cell>Rajasthan</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
         </DataTable.Row>

         <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Barmer</DataTable.Cell>
            <DataTable.Cell>Rajasthan</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
         </DataTable.Row>

         <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Karauli</DataTable.Cell>
            <DataTable.Cell>Rajasthan</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
         </DataTable.Row>

         <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Rajsamand</DataTable.Cell>
            <DataTable.Cell>Rajasthan</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
         </DataTable.Row>

         <DataTable.Row style={{backgroundColor:'#abe0a2'}}>

    
            <DataTable.Cell>Baran</DataTable.Cell>
            <DataTable.Cell>Rajasthan</DataTable.Cell>
            <DataTable.Cell>Green Zone</DataTable.Cell>
         </DataTable.Row>

         <DataTable.Row style={{backgroundColor:'#abe0a2'}}>

            <DataTable.Cell>Bundi</DataTable.Cell>
            <DataTable.Cell>Rajasthan</DataTable.Cell>
            <DataTable.Cell>Green Zone</DataTable.Cell>
         </DataTable.Row>

         <DataTable.Row style={{backgroundColor:'#abe0a2'}}>

            <DataTable.Cell>Ganganagar</DataTable.Cell>
            <DataTable.Cell>Rajasthan</DataTable.Cell>
            <DataTable.Cell>Green Zone</DataTable.Cell>
         </DataTable.Row>

         <DataTable.Row style={{backgroundColor:'#abe0a2'}}>

            <DataTable.Cell>Jalore</DataTable.Cell>
            <DataTable.Cell>Rajasthan</DataTable.Cell>
            <DataTable.Cell>Green Zone</DataTable.Cell>
         </DataTable.Row>

         <DataTable.Row style={{backgroundColor:'#abe0a2'}}>

         <DataTable.Cell>Sirohi</DataTable.Cell>
         <DataTable.Cell>Rajasthan</DataTable.Cell>
         <DataTable.Cell>Green Zone</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row style={{backgroundColor:'#abe0a2'}}>

            <DataTable.Cell>Jalore</DataTable.Cell>
            <DataTable.Cell>Rajasthan</DataTable.Cell>
            <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>

    
            <DataTable.Cell>Sirohi</DataTable.Cell>
            <DataTable.Cell>Rajasthan</DataTable.Cell>
            <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>

    
            <DataTable.Cell>Pratapgarh</DataTable.Cell>
            <DataTable.Cell>Rajasthan</DataTable.Cell>
            <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>

    
            <DataTable.Cell>North District</DataTable.Cell>
            <DataTable.Cell>Sikkim</DataTable.Cell>
            <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>

    
            <DataTable.Cell>East District</DataTable.Cell>
            <DataTable.Cell>Sikkim</DataTable.Cell>
            <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>

            <DataTable.Cell>South District</DataTable.Cell>
            <DataTable.Cell>Sikkim</DataTable.Cell>
            <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>

    
            <DataTable.Cell>West District</DataTable.Cell>
            <DataTable.Cell>Sikkim</DataTable.Cell>
            <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
            <DataTable.Cell>Chennai</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
            <DataTable.Cell>Madurai</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
            <DataTable.Cell>Narnkkal</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
            <DataTable.Cell>Thanjavur</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
            <DataTable.Cell>Chengalpattu</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
            <DataTable.Cell>Thiruvallur</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
            <DataTable.Cell>Tiruppur</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
            <DataTable.Cell>Ranipet</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
            <DataTable.Cell>Virudhunagar</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
            <DataTable.Cell>Thiruvarur</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
            <DataTable.Cell>Vellore</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
            <DataTable.Cell>Kanchipuram</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Theni</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Tenkasi</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Nagapattinam</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Dindigul</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Villupuram</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Coimbatore</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Cuddalore</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Salem</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Karur</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Tuticorin</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Tiruchicappalli</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Tirupathur</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Kanniyakumari</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Tiruvannamalai</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Ramanthapuram</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Tirunelveli</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>The Nilgiris</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Sivahanga</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Perambalur</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Kallakurichi</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Ariyalur</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Erode</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Pudokkottai</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Dharmapuri</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
            <DataTable.Cell>Krishnagiri</DataTable.Cell>
            <DataTable.Cell>Tamil Nadu</DataTable.Cell>
            <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
            <DataTable.Cell>Hyderabad</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
            <DataTable.Cell>Suryapet</DataTable.Cell>
            <DataTable.Cell>Telengana</DataTable.Cell>
            <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
            <DataTable.Cell>Ranga Reddy</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
            <DataTable.Cell>MedchakMalkajgiri</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
            <DataTable.Cell>Vikarabad</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
            <DataTable.Cell>Warangal Urban</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
            <DataTable.Cell>Nizamabad</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>JogulambaGadwal</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Nirmal</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Nalgonda</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Adilabad</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Sangareddy</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Kamareddy</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>KumuramBheenAsifabad</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Karimnagar</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Khammam</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Mahabubnagar</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Jagitial</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>RajannaSircilla</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>JayashankarBhupalapally</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Medak</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Jangoan</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Narayanpet</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
            <DataTable.Cell>Mancherial</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
            <DataTable.Cell>Peddapalli</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
            <DataTable.Cell>Nagarkurnool</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
            <DataTable.Cell>Peddapalli</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
             <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
        <DataTable.Cell>Nagarkurnool</DataTable.Cell>
        <DataTable.Cell>Telangana</DataTable.Cell>
        <DataTable.Cell>Green Zone</DataTable.Cell>
    
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
            <DataTable.Cell>Peddapalli</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
            <DataTable.Cell>Nagarkurnool</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
            <DataTable.Cell>Mulugu</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
            <DataTable.Cell>BhadradriKothagudem</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
            <DataTable.Cell>Mahabubabad</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
            <DataTable.Cell>Siddipet</DataTable.Cell>
            <DataTable.Cell>Telangana</DataTable.Cell>
            <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
             <DataTable.Cell>Waranagal Rural</DataTable.Cell>
             <DataTable.Cell>Telangana</DataTable.Cell>
             <DataTable.Cell>Green Zone</DataTable.Cell>
         </DataTable.Row>

         <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
             <DataTable.Cell>Wanaparthy</DataTable.Cell>
             <DataTable.Cell>Telangana</DataTable.Cell>
             <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
             <DataTable.Cell>YadadriBhuvanagiri</DataTable.Cell>
             <DataTable.Cell>Telangana</DataTable.Cell>
             <DataTable.Cell>Green Zone</DataTable.Cell>
       </DataTable.Row>

       <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
             <DataTable.Cell>North Tripura</DataTable.Cell>
             <DataTable.Cell>Tripura</DataTable.Cell>
             <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
             <DataTable.Cell>Gomati</DataTable.Cell>
             <DataTable.Cell>Tripura</DataTable.Cell>
             <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
             <DataTable.Cell>Dhalai</DataTable.Cell>
             <DataTable.Cell>Tripura</DataTable.Cell>
             <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
             <DataTable.Cell>Dhalai</DataTable.Cell>
             <DataTable.Cell>Tripura</DataTable.Cell>
             <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
             <DataTable.Cell>South Tripura</DataTable.Cell>
             <DataTable.Cell>Tripura</DataTable.Cell>
             <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
             <DataTable.Cell>West Tripura</DataTable.Cell>
             <DataTable.Cell>Tripura</DataTable.Cell>
             <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
             <DataTable.Cell>Khowai</DataTable.Cell>
             <DataTable.Cell>Tripura</DataTable.Cell>
             <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
             <DataTable.Cell>Sepahijala</DataTable.Cell>
             <DataTable.Cell>Tripura</DataTable.Cell>
             <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
             <DataTable.Cell>Unakoti</DataTable.Cell>
             <DataTable.Cell>Tripura</DataTable.Cell>
             <DataTable.Cell>Green Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
             <DataTable.Cell>Agra</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
             <DataTable.Cell>Lucknow</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
             <DataTable.Cell>Saharanpur</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
             <DataTable.Cell>Kanpur Nagar</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
             <DataTable.Cell>Moradabad</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
             <DataTable.Cell>Firozabad</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
             <DataTable.Cell>Gautum Buddha Nagar</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
             <DataTable.Cell>Bulandshahr</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
             <DataTable.Cell>Meerut</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
             <DataTable.Cell>Rae Bareli</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
             <DataTable.Cell>Varanasi</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
             <DataTable.Cell>Bijnor</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
             <DataTable.Cell>Amroha</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
             <DataTable.Cell>Sant Kabeer Nagar</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
             <DataTable.Cell>Aligarh</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
             <DataTable.Cell>Muzaffarnagar</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
             <DataTable.Cell>Rampur</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
             <DataTable.Cell>Mathura</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
             <DataTable.Cell>Bareilly</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
             <DataTable.Cell>Ghaziabad</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
             <DataTable.Cell>Hapur</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
             <DataTable.Cell>Baghpat</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
             <DataTable.Cell>Basti</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
             <DataTable.Cell>Budaun</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
             <DataTable.Cell>Sambhal</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
             <DataTable.Cell>Auraiya</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
             <DataTable.Cell>Shamli</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
             <DataTable.Cell>Sitapur</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
             <DataTable.Cell>Bahraich</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
             <DataTable.Cell>Kannauj</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#faa869'}}>
    
             <DataTable.Cell>Azamgarh</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Orange Zone</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
             <DataTable.Cell>Mainpuri</DataTable.Cell>
             <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
             <DataTable.Cell>Red Zone</DataTable.Cell>
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