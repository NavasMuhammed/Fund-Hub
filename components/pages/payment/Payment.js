import { View, Text, StyleSheet,Button } from 'react-native'
import React from 'react'
import PaymentTopbar from './topbar/PaymentTopbar'
import PaymentBody from './body/PaymentBody'

const Payment = ({navigation}) => {
    return (
        <View style={styles.container}>

            <PaymentTopbar />
            <Button
        title="Go to Review"
        onPress={() => navigation.navigate('Review')}
      />
            <PaymentBody />
        </View>
    )
}

export default Payment
const styles = StyleSheet.create({
    container: {
        paddingTop:55,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,

        backgroundColor: 'black'


    },
    text: {
        color: 'white',

    },


});