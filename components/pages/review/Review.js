import { View, Text,StyleSheet,Button } from 'react-native'
import React from 'react'
import ReviewTopbar from './topbar/ReviewTopbar'
import ReviewBody from './body/ReviewBody'

const Review = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ReviewTopbar/>
      <Button
        title="Go to Project"
        onPress={() => navigation.navigate('Project')}
      />
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
  