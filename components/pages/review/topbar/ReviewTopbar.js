import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const ReviewTopbar = () => {
    return (
        <View style={styles.container}>

            {/* <StatusBar style="dark" /> */}

            <View style={styles.topbar}>
                <TouchableOpacity style={styles.menu}>
                    <Image style={styles.arrow}
                        source={require('./arrow.png')} />

                </TouchableOpacity>
               <View style={styles.right}>
               <TouchableOpacity style={styles.rightItems}>
                    <Image style={styles.share}
                        source={require('./share.png')} />
                    <Image style={styles.like}
                        source={require('./love.png')} />

                </TouchableOpacity>

               </View>

            </View>

        </View>
    )
}

export default ReviewTopbar
const styles = StyleSheet.create({
    container: {

        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: '8%',
        zIndex: 10,



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
        flexDirection: 'row',


    },

    menu: {
        // backgroundColor: 'yellow',
        width: '9%',
        height: '50%',
        position: 'relative',
        left: -160,
        display: 'flex',
        zIndex: 3,
        marginLeft: 20,
        // marginTop: -23,
    },
    right: {
        width: '9%',
        height: '50%',
        position: 'relative',
        
        left: 80,
        zIndex: 3,
        // backgroundColor: 'yellow',
        

    },
    rightItems: {
        flexDirection: 'row'

    },
    share: {
        height: 30,
        width: 30,

    },
    like: {
        height: 30,
        width: 30,
        left: 20,
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
        zIndex: 3,

    },
    arrow: {
        width: 30,
        height: 30,
    }



});

