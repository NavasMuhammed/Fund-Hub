import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Card = () => {
    return (
        
            <View  style={styles.card}>

                <Image style={styles.project}  source={require('./project.jpg')} />
                <Text style={styles.text}>Farm Frenzy: The farm building game:</Text>
                <Text style={styles.sub}>grow animals and sell products and create profit and
                    upgrade farm
                </Text>
                <View style={styles.line}>
                    <View style={styles.inner}></View>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.bottomin}>
                        <Text style={styles.bottomtext}>
                            58%
                            funded
                        </Text>
                    </View>
                    <View style={styles.bottomin}>
                        <Text style={styles.bottomtext}>
                            21
                            backers
                        </Text>
                    </View>
                    <View style={styles.bottomin}>
                        <Text style={styles.bottomtext}>
                            21  days to go
                        </Text>
                    </View>
                </View>
                <View style={styles.category}>
                    <Image style={styles.cate} source={require('./categories.png')} />
                    <Text style={styles.catetext}>  simulation game</Text>
                </View>





            </View>
   
    )
}

export default Card
const styles = StyleSheet.create({
    card: {
        // top:50,
        // position: 'relative',
        width: 400,
        height: 450,
        backgroundColor: 'rgba(31, 29, 29, 1)',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 15,

    },
    text: {
        bottom: 90,
        color: 'white',
        fontSize: 20,

    },
    sub: {
        color: 'white',
        bottom: 80,
        fontSize: 15,

    },
    project: {
        width: 400,
        height: 220,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        bottom: 110,
    },
    line: {
        width: 350,
        height: 5,
        backgroundColor: 'rgba(156, 154, 151, 1)',
        top: -65,
        borderRadius: 100,

    },
    inner: {
        width: 195,
        height: 5,
        backgroundColor: 'rgba(255, 199, 0, 1)',
        borderRadius: 100,

    },
    bottom: {
        width: 299,
        height: 10,
        bottom: 55,

        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottomin: {
        width: 70,
        height: 50,

        flexDirection: 'column',



    },
    bottomtext: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
    },
    category: {
        flexDirection: 'row',
        left: -100,


    },
    cate: {
        width: 25,
        height: 25,

    },
    catetext: {
        color: 'white',
        height: 40,
    }
})