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
        {/* <Topbar/> */}
        <Button style={styles.button}
        title="Add Project"
        onPress={() => navigation.navigate('Project')}
      />
      
    
        <Body navigation={navigation} />
    </View>
  )
}

export default Home
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flex:1,
      // paddingTop:5,
      
      backgroundColor: 'black'
     
      
    },
    text: {
      color: 'white',
  
    },
    button: {
      width:100,
      
    }
  
  });
  