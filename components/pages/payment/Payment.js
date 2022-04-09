import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PaymentTopbar from './topbar/PaymentTopbar'
import PaymentBody from './body/PaymentBody'

const Payment = () => {
    return (
        <View style={styles.container}>

            <PaymentTopbar />
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