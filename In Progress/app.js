import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Modal, TouchableOpacity, Linking, Platform } from 'react-native';
import { DataTable } from 'react-native-paper';
// q
export default function App() {

    return (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title >District</DataTable.Title>
          <DataTable.Title >State</DataTable.Title>
          <DataTable.Title >Zonal Classification</DataTable.Title>
        </DataTable.Header>
    

        <DataTable.Row style={{backgroundColor:'#fa6969'}}>
    
          <DataTable.Cell>South Andamans</DataTable.Cell>
          <DataTable.Cell>Andaman And Nicobar Islands</DataTable.Cell>
          <DataTable.Cell>Red Zone</DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
        <DataTable.Cell>Nicobars</DataTable.Cell>
        <DataTable.Cell>Andaman And Nicobar Islands</DataTable.Cell>
        <DataTable.Cell>Green Zone</DataTable.Cell>
      </DataTable.Row>
        

      <DataTable.Row style={{backgroundColor:'#abe0a2'}}>
    
          <DataTable.Cell>North And Middle Andaman</DataTable.Cell>
          <DataTable.Cell>Andaman And Nicobar Islands</DataTable.Cell>
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

