import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const ProjectBody = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>ADD PROJECT</Text>
    </View>
    
  )
}

export default ProjectBody
const styles = StyleSheet.create({
  container: {
    width: 410,
    height: 740,
    // backgroundColor: 'white'
    alignItems: 'center',

  },
  mainTitle:{
    padding:10,
    fontSize:30,
    fontWeight: 'bold',
    color: 'rgba(247, 151, 30, 1)'
  },
})