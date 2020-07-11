import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';


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
    <View style={{ flex: 1, padding: 24 }}>
      <Text>id state active confirmed recovred deaths</Text>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            
            <Text>{item.id}, {item.state}, {item.active}, {item.confirmed}, {item.recovered}, {item.deaths} </Text>
            
          )}
        />
      )}
    </View>
  );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         height: '100%',
//         width: '100%'
//     },
//     topContainer: {
//         flex: 1.3,
//         width: '100%',
//         height: '100%'
//     },

//     bottomContainer: {
//         flex: 1,
//         width: '100%',
//         flexDirection: 'row',
//         height: '100%',
//         backgroundColor: '#32afa9',
//         alignItems: 'center'
//     },

//     rectangle: {
//         width: '50%',
//         height: '80%',
//         padding: '5%',
//     },

//     inner: {
//         flex: 1,
//         flexDirection: 'column',
//         backgroundColor: '#fff',
//         elevation: 5,
//         shadowColor: 'grey',
//         shadowOffset: {
//             width: 4,
//             height: 4
//         },
//         shadowOpacity: 50,
//         shadowRadius: 4,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: '5%',
//         borderRadius: 15,
//     },

//     bookingText: {
//         color: "#121212",
//         fontSize: 16,
//         fontFamily: 'Medium',
//         textAlign: 'center',
//         paddingTop: 10,
//         flex: 1
//     },
//     calendarIcon: {
//         color: "rgba(88,172,168,1)",
//         fontSize: 40,
//         flex: 1
//     },
//     //Nurses Avatar

//     nurseContainer: {
//         paddingTop: 30,
//         paddingHorizontal: 30,
//         flex: 4,
//         alignItems: 'flex-end',
//     },
//     nurseAvatar: {
//         width: 410,
//         height: 720
//     },

//     nurseMaryPoppins: {
//         color: "#121212",
//         fontSize: 18,
//         fontFamily: 'SemiBold',
//         marginTop: '1%',
//         textAlign: 'right'
//     },
//     stGeorgesHospital: {
//         color: "#121212",
//         fontSize: 16,
//         fontFamily: 'Medium',
//         marginTop: '1%',
//         textAlign: 'right'
//     },
//     birmingham: {
//         color: "#121212",
//         fontSize: 16,
//         fontFamily: 'Regular',
//         marginTop: '1%',
//         textAlign: 'right'
//     },
//     //NHS support and donation

//     donateNHS: {
//         flex: 1,
//         paddingVertical: 20,
//         paddingHorizontal: 20,
//         justifyContent: 'center',
//         paddingTop: 10
//     },

//     rect: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         justifyContent: 'center',
//         flex: 1,
//         borderRadius: 10,
//         borderColor: '#58ACA8',
//         borderWidth: 2,
//         marginTop: 15,
//         marginBottom: -15,
//         overflow: 'hidden'
//     },

//     supportText: {
//         textAlign: 'center',
//         fontSize: 14,
//         fontFamily: 'Regular',
//         color: '#6D6A6A',
//         padding: 5
//     },

//     supportClick: {
//         fontSize: 15,
//         fontFamily: 'SemiBold',
//         color: '#58ACA8'
//     },

//     //Urgent Call Rectangle

//     urgentCallText: {
//         color: "#121212",
//         fontSize: 16,
//         fontFamily: 'Regular',
//         letterSpacing: 0,
//         marginTop: 4
//     },
//     urgentCallIcon: {
//         color: "rgba(88,172,168,1)",
//         fontSize: 40,
//         height: 40,
//         width: 40,
//         marginLeft: 70,
//         marginTop: -15
//     },

//     //Pop Ups

//     grayOverlay: {
//         flex: 1,
//         backgroundColor: "#000000aa",
//         justifyContent: 'center',
//         alignItems: 'center'
//     },


//     //Book Call Pop Up
//     bookPopUpContainer: {
//         width: '70%',
//         height: '50%',
//         backgroundColor: "rgba(255,255,255,1)",
//         borderRadius: 54,
//         flex: 0.25,
//         justifyContent: 'center',
//         paddingVertical: 20,
//         paddingHorizontal: 10
//     },

//     bookPopUpTitle: {
//         color: "#121212",
//         fontSize: 18,
//         fontFamily: 'SemiBold',
//         textAlign: 'center',
//         flex: 1,
//         marginTop: 15
//     },
//     bookPopUpText: {
//         color: "#121212",
//         fontSize: 16,
//         fontFamily: "Regular",
//         textAlign: "center",
//         flex: 1,
//     },

//     bookPopUpButtons: {
//         width: '100%',
//         height: '100%',
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },

//     exit: {
//         backgroundColor: "rgba(172,88,88,1)",
//         borderRadius: 28,
//         alignItems: 'center',
//         height: '60%',
//         width: '30%',
//         justifyContent: 'center',
//     },

//     bookPopUpButtonText: {
//         fontSize: 18,
//         fontFamily: "Medium",
//         color: "rgba(255,255,255,1)",
//         textAlign: "center",
//     },

//     //Urgent Call Pop Up
//     urgentPopUpContainer: {
//         width: '75%',
//         height: '50%',
//         backgroundColor: "rgba(255,255,255,1)",
//         borderRadius: 54,
//         flex: 0.35,
//         justifyContent: 'center',
//         paddingVertical: 20,
//         paddingHorizontal: 20
//     },

//     urgentPopUpTitle: {
//         color: "#121212",
//         fontSize: 18,
//         fontFamily: 'SemiBold',
//         alignSelf: "center",
//         flex: 1,
//         marginTop: 15
//     },
//     urgentPopUpText: {
//         color: "#121212",
//         fontSize: 16,
//         fontFamily: "Regular",
//         textAlign: "center",
//         alignSelf: "center",
//         flex: 2.3,
//         paddingHorizontal: 5,
//     },

//     yesNoContainer: {
//         height: '100%',
//         width: '100%',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-around',
//         flex: 1
//     },

//     noButton: {
//         width: 100,
//         height: 33,
//         backgroundColor: "rgba(172,88,88,1)",
//         borderRadius: 28,
//         alignItems: 'center',
//         justifyContent: 'center',

//     },
//     yesButton: {
//         width: 100,
//         height: 33,
//         backgroundColor: "rgba(88,172,168,1)",
//         borderRadius: 28,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },

//     urgentPopUpButtonText: {
//         fontSize: 18,
//         fontFamily: "Medium",
//         color: "rgba(255,255,255,1)",
//     }


// });

// axiosGetData = () => { //Not working
//     axios({
//       url: "https://beer.fluentcloud.com/v1/beer/",
//       method: 'get',
//       headers: { "Content-Type": "application/json" }
//     })
//       .then(res => {
//         console.log(`Axios Call completed: ${res}`)
//       });
//   }
