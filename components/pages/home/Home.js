import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Body from './body/Body';
import Topbar from './topbar/Topbar';
const Home = () => {
  return (
    <View style={styles.container}>
        <Topbar/>
        <Body/>
    </View>
  )
}

export default Home
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flex:1,
      paddingTop:35,
      
      backgroundColor: 'black'
     
      
    },
    text: {
      color: 'white',
  
    },
    
  
  });
  