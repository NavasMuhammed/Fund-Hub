import { View, Text,StyleSheet,Button } from 'react-native'
import React from 'react'
import ProjectTopbar from './topbar/ProjectTopbar'
import ProjectBody from './body/ProjectBody'

const Project = ({navigation}) => {
  return (
    <View style={styles.container}>
        <ProjectTopbar />
        <Button
        title="Go to Payment"
        onPress={() => navigation.navigate('Payment')}
      />
        <ProjectBody/>
    </View>
  )
}

export default Project
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      
      backgroundColor: 'black'
  
  
    },
    
    
  
  
  });
  