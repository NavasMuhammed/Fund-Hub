import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import ProjectTopbar from './topbar/ProjectTopbar'
import ProjectBody from './body/ProjectBody'

const Project = () => {
  return (
    <View style={styles.container}>
        <ProjectTopbar />
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
  