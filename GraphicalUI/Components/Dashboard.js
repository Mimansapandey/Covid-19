import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';


export default function Dashboard() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.covidindiatracker.com/state_data.json')
      .then((response) => response.json())
      .then((json) => setData(json)) 
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    

    <DataTable>
    <DataTable.Header>
      <DataTable.Title >States</DataTable.Title>
      <DataTable.Title numeric>Active</DataTable.Title>
      <DataTable.Title numeric>Confirmed</DataTable.Title>
      <DataTable.Title numeric>Recovered</DataTable.Title>
      <DataTable.Title numeric>Deaths</DataTable.Title>
    </DataTable.Header>
    <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            
            <DataTable.Row>
              <DataTable.Cell>{item.state}</DataTable.Cell>
              <DataTable.Cell numeric>{item.active}</DataTable.Cell>
              <DataTable.Cell numeric>{item.confirmed}</DataTable.Cell>
              <DataTable.Cell numeric>{item.recovered}</DataTable.Cell>
              <DataTable.Cell numeric>{item.deaths}</DataTable.Cell>
            </DataTable.Row>
            //<Text>{item.id}, {item.state}, {item.active}, {item.confirmed}, {item.recovered}, {item.deaths} </Text>
            
          )}
        />
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
