import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const ProjectBody = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>ADD PROJECT</Text>
      <View style={styles.projectName}>
        <Text style={styles.inputNameHeadder}>Give a  name for your project: </Text>
        <TextInput style={styles.inputName} placeholderTextColor={'white'} placeholder="Eg. Farm Frenzy"></TextInput>
      </View>
      <View style={styles.projectDescription}>
        <Text style={styles.inputDescriptionHeadder}>Describe your project: : </Text>
        <TextInput style={styles.inputDescription} placeholderTextColor={'white'} placeholder="Eg. Mini RPG game for ultra pro gamers available at playstore and appstore. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ....."></TextInput>
      </View>
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
  mainTitle: {
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgba(247, 151, 30, 1)'
  },
  inputNameHeadder: {
    color: 'rgba(247, 151, 30, 1)',


  },
  inputName: {
    width: 356,
    height: 60,
    borderRadius: 10,
    backgroundColor: 'rgba(78, 78, 78, 1)',
    color: 'white',
    padding: 20,

  },
  inputDescriptionHeadder: {
    color: 'rgba(247, 151, 30, 1)',


  },
  inputDescription: {
    width: 356,
    height: 99,
    borderRadius: 10,
    backgroundColor: 'rgba(78, 78, 78, 1)',
    color: 'white',
    // padding: 20,
    

  },
})