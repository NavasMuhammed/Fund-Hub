import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'



const Topbar = () => {
    return (
        <View style={styles.container}>

            <StatusBar style="dark" />

            <View style={styles.topbar}>
                <TouchableOpacity style={styles.menu}>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                </TouchableOpacity>
                <Image
                    style={styles.tinyLogo}
                    source={require('./logo.png')}
                />
                <Image style={styles.searchIcon} source={require('./search.png')} />

            </View>

        </View>
    )
}

export default Topbar
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        height: '8%',
        // position: 'absolute',


    },
    text: {
        color: 'white',
    },
    topbar: {
        backgroundColor: 'black',

        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 199, 0, 1)',
        zIndex: 2,

    },
    tinyLogo: {

        width: '30%',
        height: '97%',
        position: 'absolute',

    },
    menu: {
        // backgroundColor: 'yellow',
        width: '9%',
        height: '50%',
        position: 'relative',
        left: -160,
        display: 'flex',
        zIndex: 3,
        // marginTop: -23,
    },
    line: {
        width: '90%',
        height: '7%',
        backgroundColor: 'rgba(255, 199, 0, 1)',
        top: 1,
        marginTop: 10,
        // justifyContent: 'space-between',
        position: 'relative',
        borderRadius: 100,

    },
    searchIcon: {
        width: "8%",
        height: "50%",
        zIndex: 3,
        left: 150,
        position: 'relative',
        top: -19,
    },


});
