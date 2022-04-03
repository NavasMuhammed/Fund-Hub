import { View, Text, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import Card from '../card/Card'


const Body = () => {
    return (
        <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                
                
            </View>
            
            
            
        </View>
        </ScrollView>
    )
}

export default Body
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        
        // top: 10,
        alignItems: 'center',
        justifyContent: 'center',
        
        
        
    },
    text: {
        color: 'white',

    },

    cardContainer: {
        backgroundColor: 'black',
        
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex:1,
        

        
        
    },

});