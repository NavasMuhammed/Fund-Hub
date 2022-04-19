import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Body from './body/Body';
import Topbar from './topbar/Topbar';
import Menu from './menu/Menu';
import { Button } from 'react-native';
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        {/* <Menu/> */}
        <Topbar/>
       
      <Button
        title="Go to Review"
        onPress={() => navigation.navigate('Review')}
      />
    
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
  