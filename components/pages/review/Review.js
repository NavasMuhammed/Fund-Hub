import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import ReviewTopbar from './topbar/ReviewTopbar'
import ReviewBody from './body/ReviewBody'

const Review = () => {
  return (
    <View style={styles.container}>
      <ReviewTopbar/>
      <ReviewBody/>
    </View>
  )
}

export default Review
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flex:1,
      paddingTop:65,
      
      backgroundColor: 'black'
     
      
    },
    text: {
      color: 'white',
  
    },
    
  
  });
  