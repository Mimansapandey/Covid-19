// //This is an example code to Add Search Bar Filter on Listview//
// import React, { Component, useEffect, useState } from 'react';
// //import react in our code.
// import {
//   Text,
//   StyleSheet,
//   View,
//   FlatList,
//   TextInput,
//   ActivityIndicator,
//   Alert,
// } from 'react-native';
// //import all the components we are going to use.
// import { DataTable } from 'react-native-paper';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     //setting default state
//     this.state = { isLoading: true, text: '' };
//     this.arrayholder = [];
//   }

//   componentDidMount() {
//     return fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(responseJson => {
//         this.setState(
//           {
//             isLoading: false,
//             dataSource: responseJson
//           },
//           function() {
//             this.arrayholder = responseJson;
//           }
//         );
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }
//   SearchFilterFunction(text) {
//     console.log(text)
//     //passing the inserted text in textinput
//     const newData = this.arrayholder.filter(function(item) {
//       //applying filter for the inserted text in search bar
//       const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
//       const textData = text.toUpperCase();
//       return itemData.indexOf(textData) > -1;
//     });
//     this.setState({
//       //setting the filtered newData on datasource
//       //After setting the data it will automatically re-render the view
//       dataSource: newData,
//       text: text,
//     });
//   }

//   render() {
//     if (this.state.isLoading) {
//       //Loading View while data is loading
//       return (
//         <View style={{ flex: 1, paddingTop: 20 }}>
//           <ActivityIndicator />
//         </View>
//       );
//     }
//     return (
//       //ListView to show with textinput used as search bar
//       <DataTable>
//          <DataTable.Header style={{backgroundColor:'#ff4da6'}}>
//             <DataTable.Title >States</DataTable.Title>
//             <DataTable.Title numeric>Active</DataTable.Title>
//             <DataTable.Title numeric>Recovered</DataTable.Title>
//             <DataTable.Title numeric>Deceased</DataTable.Title>
//           </DataTable.Header>
//         <View style={styles.viewStyle}>
//           <TextInput
//             style={styles.textInputStyle}
//             onChangeText={text => this.SearchFilterFunction(text)}
//             value={this.state.text}
//             underlineColorAndroid="transparent"
//             placeholder="Search Here"
//           />
//         </View>
//         <DataTable.Row>
      
//             <DataTable.Cell>Andhra Pradesh</DataTable.Cell>
//             <DataTable.Cell numeric>63771</DataTable.Cell>
//             <DataTable.Cell numeric>55406</DataTable.Cell>
//             <DataTable.Cell numeric>1213</DataTable.Cell>
//           </DataTable.Row>

//           <DataTable.Row>
            
//             <DataTable.Cell>Arunachal Pradesh</DataTable.Cell>
//             <DataTable.Cell numeric>730</DataTable.Cell>
//             <DataTable.Cell numeric>677	</DataTable.Cell>
//             <DataTable.Cell numeric>3	</DataTable.Cell>
//           </DataTable.Row>

//           <DataTable.Row>
            
//             <DataTable.Cell>Assam</DataTable.Cell>
//             <DataTable.Cell numeric>8371</DataTable.Cell>
//             <DataTable.Cell numeric>27832	</DataTable.Cell>
//             <DataTable.Cell numeric>92</DataTable.Cell>
//           </DataTable.Row>

//           <DataTable.Row>
          
//             <DataTable.Cell>Bihar</DataTable.Cell>
//             <DataTable.Cell numeric>15482</DataTable.Cell>
//             <DataTable.Cell numeric>30320	</DataTable.Cell>
//             <DataTable.Cell numeric>278</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
        
//             <DataTable.Cell>Chhattisgarh</DataTable.Cell>
//             <DataTable.Cell numeric>2855</DataTable.Cell>
//             <DataTable.Cell numeric>5636</DataTable.Cell>
//             <DataTable.Cell numeric>48</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
          
//             <DataTable.Cell>Gujarat</DataTable.Cell>
//             <DataTable.Cell numeric>13535</DataTable.Cell>
//             <DataTable.Cell numeric>43195</DataTable.Cell>
//             <DataTable.Cell numeric>2396</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
          
//             <DataTable.Cell>Haryana</DataTable.Cell>
//             <DataTable.Cell numeric>6798</DataTable.Cell>
//             <DataTable.Cell numeric>26420</DataTable.Cell>
//             <DataTable.Cell numeric>413</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
        
//             <DataTable.Cell>Himachal Pradesh</DataTable.Cell>
//             <DataTable.Cell numeric>1057</DataTable.Cell>
//             <DataTable.Cell numeric>1332</DataTable.Cell>
//             <DataTable.Cell numeric>14</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
          
//             <DataTable.Cell>Jharkhand</DataTable.Cell>
//             <DataTable.Cell numeric>5728</DataTable.Cell>
//             <DataTable.Cell numeric>4035</DataTable.Cell>
//             <DataTable.Cell numeric>98</DataTable.Cell>
//         </DataTable.Row>
    
//         <DataTable.Row>
          
//             <DataTable.Cell>Karnataka</DataTable.Cell>
//             <DataTable.Cell numeric>67456</DataTable.Cell>
//             <DataTable.Cell numeric>42901</DataTable.Cell>
//             <DataTable.Cell numeric>2147</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
          
//             <DataTable.Cell>Kerala</DataTable.Cell>
//             <DataTable.Cell numeric>10364</DataTable.Cell>
//             <DataTable.Cell numeric>11365</DataTable.Cell>
//             <DataTable.Cell numeric>68</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
          
//             <DataTable.Cell>Kerala</DataTable.Cell>
//             <DataTable.Cell numeric>8357</DataTable.Cell>
//             <DataTable.Cell numeric>20934</DataTable.Cell>
//             <DataTable.Cell numeric>843</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
          
//             <DataTable.Cell>Maharashtra</DataTable.Cell>
//             <DataTable.Cell numeric>146433</DataTable.Cell>
//             <DataTable.Cell numeric>239755</DataTable.Cell>
//             <DataTable.Cell numeric>14463</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
          
//             <DataTable.Cell>Manipur</DataTable.Cell>
//             <DataTable.Cell numeric>819</DataTable.Cell>
//             <DataTable.Cell numeric>1639</DataTable.Cell>
//             <DataTable.Cell numeric>0</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
        
//             <DataTable.Cell>Meghalaya</DataTable.Cell>
//             <DataTable.Cell numeric>572</DataTable.Cell>
//             <DataTable.Cell numeric>207</DataTable.Cell>
//             <DataTable.Cell numeric>5</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
          
//             <DataTable.Cell>Mizoram</DataTable.Cell>
//             <DataTable.Cell numeric>183</DataTable.Cell>
//             <DataTable.Cell numeric>215</DataTable.Cell>
//             <DataTable.Cell numeric>0</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
          
//           <DataTable.Cell>Nagaland</DataTable.Cell>
//           <DataTable.Cell numeric>913</DataTable.Cell>
//           <DataTable.Cell numeric>595</DataTable.Cell>
//           <DataTable.Cell numeric>5</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
          
//           <DataTable.Cell>Odisha</DataTable.Cell>
//           <DataTable.Cell numeric>10077</DataTable.Cell>
//           <DataTable.Cell numeric>18939</DataTable.Cell>
//           <DataTable.Cell numeric>159</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
          
//           <DataTable.Cell>Punjab</DataTable.Cell>
//           <DataTable.Cell numeric>4372</DataTable.Cell>
//           <DataTable.Cell numeric>10213</DataTable.Cell>
//           <DataTable.Cell numeric>361</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
        
//           <DataTable.Cell>Rajasthan</DataTable.Cell>
//           <DataTable.Cell numeric>10745</DataTable.Cell>
//           <DataTable.Cell numeric>27569</DataTable.Cell>
//           <DataTable.Cell numeric>650</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
          
//           <DataTable.Cell>Sikkim</DataTable.Cell>
//           <DataTable.Cell numeric>397</DataTable.Cell>
//           <DataTable.Cell numeric>198</DataTable.Cell>
//           <DataTable.Cell numeric>1</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
          
//           <DataTable.Cell>Tamil Nadu</DataTable.Cell>
//           <DataTable.Cell numeric>57490</DataTable.Cell>
//           <DataTable.Cell numeric>172883</DataTable.Cell>
//           <DataTable.Cell numeric>3741</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
          
//           <DataTable.Cell>Telengana</DataTable.Cell>
//           <DataTable.Cell numeric>14663</DataTable.Cell>
//           <DataTable.Cell numeric>43751</DataTable.Cell>
//           <DataTable.Cell numeric>492</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
          
//           <DataTable.Cell>Tripura</DataTable.Cell>
//           <DataTable.Cell numeric>1786</DataTable.Cell>
//           <DataTable.Cell numeric>2678</DataTable.Cell>
//           <DataTable.Cell numeric>21</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
          
//           <DataTable.Cell>Uttarakhand</DataTable.Cell>
//           <DataTable.Cell numeric>2983</DataTable.Cell>
//           <DataTable.Cell numeric>3811</DataTable.Cell>
//           <DataTable.Cell numeric>72</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
          
//           <DataTable.Cell>Uttar Pradesh</DataTable.Cell>
//           <DataTable.Cell numeric>29997</DataTable.Cell>
//           <DataTable.Cell numeric>45807</DataTable.Cell>
//           <DataTable.Cell numeric>1530</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
        
//           <DataTable.Cell>West Bengal</DataTable.Cell>
//           <DataTable.Cell numeric>19652</DataTable.Cell>
//           <DataTable.Cell numeric>44116</DataTable.Cell>
//           <DataTable.Cell numeric>1490</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
          
//           <DataTable.Cell>Andaman and Nicobar Islands</DataTable.Cell>
//           <DataTable.Cell numeric>225</DataTable.Cell>
//           <DataTable.Cell numeric>201</DataTable.Cell>
//           <DataTable.Cell numeric>2</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
          
//           <DataTable.Cell>Chandigarh</DataTable.Cell>
//           <DataTable.Cell numeric>353</DataTable.Cell>
//           <DataTable.Cell numeric>611</DataTable.Cell>
//           <DataTable.Cell numeric>14</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
          
//           <DataTable.Cell>Dadra and Nagar Haveli and Daman and Diu</DataTable.Cell>
//           <DataTable.Cell numeric>376</DataTable.Cell>
//           <DataTable.Cell numeric>648</DataTable.Cell>
//           <DataTable.Cell numeric>2</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
          
//           <DataTable.Cell>Delhi</DataTable.Cell>
//           <DataTable.Cell numeric>10770</DataTable.Cell>
//           <DataTable.Cell numeric>118633</DataTable.Cell>
//           <DataTable.Cell numeric>3907</DataTable.Cell>
//         </DataTable.Row>


//         <DataTable.Row>
          
//           <DataTable.Cell>Jammu and Kashmir</DataTable.Cell>
//           <DataTable.Cell numeric>7749</DataTable.Cell>
//           <DataTable.Cell numeric>11322</DataTable.Cell>
//           <DataTable.Cell numeric>348</DataTable.Cell>
//         </DataTable.Row>


//         <DataTable.Row>
          
//           <DataTable.Cell>Ladakh</DataTable.Cell>
//           <DataTable.Cell numeric>261</DataTable.Cell>
//           <DataTable.Cell numeric>1080</DataTable.Cell>
//           <DataTable.Cell numeric>6</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Row>
          
//           <DataTable.Cell>Puducherry</DataTable.Cell>
//           <DataTable.Cell numeric>1256</DataTable.Cell>
//           <DataTable.Cell numeric>1874</DataTable.Cell>
//           <DataTable.Cell numeric>47</DataTable.Cell>
//         </DataTable.Row>

//         <DataTable.Pagination
//           page={5}
//           numberOfPages={5}
//           onPageChange={page => {
//             console.log(page);
//           }}
//           label="1 of 1"
//         />
//       </DataTable>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   viewStyle: {
//     justifyContent: 'center',
//     flex: 1,
//     marginTop: 40,
//     padding: 16,
//   },
//   textInputStyle: {
//     height: 40,
//     borderWidth: 1,
//     paddingLeft: 10,
//     borderColor: '#009688',
//     backgroundColor: '#FFFFFF',
//   },
// });

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
        <DataTable.Header>
          <DataTable.Title>ID</DataTable.Title>
          <DataTable.Title>Title</DataTable.Title>
          <DataTable.Title>Body</DataTable.Title>
        </DataTable.Header>
        <View style={styles.viewStyle}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={text => this.SearchFilterFunction(text)}
            value={this.state.text}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          />
        </View>
        <FlatList
              data={this.state.dataSource}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                
                <DataTable.Row>
                  <DataTable.Cell>{item.id}</DataTable.Cell>
                  <DataTable.Cell>{item.title}</DataTable.Cell>
                  <DataTable.Cell>{item.body}</DataTable.Cell>
                </DataTable.Row>
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