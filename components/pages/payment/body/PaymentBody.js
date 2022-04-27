import { View, Text, StyleSheet, Image,ScrollView } from 'react-native'
import React from 'react'

const PaymentBody = () => {
    return (
        <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <View style={styles.mainTextContainer}>
                <Text style={styles.mainText}>Farm Frenzy: The farm building game:</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.pledgeBox}>
                <Text style={styles.pledgeText}>Your pledge amount</Text>
                <View style={styles.pledgeInner}>
                    <Image style={styles.add}
                        source={require('./add.png')} />
                    <Image style={styles.sub}
                        source={require('./sub.png')} />
                    <View style={styles.amountBox}>
                        <Text style={styles.amount}>45$</Text>
                    </View>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.totalBox}>
                <View style={styles.totalText}>
                    <Text style={styles.texts1}>Total</Text>
                    <Text style={styles.texts2}>45$</Text>
                </View>
                <View style={styles.totalDescription}>
                    <Text style={styles.totalTextDescription}>
                    If the project reaches its funding goal, you will be charged US$ 4 on 27th March 2022.
                    </Text>
                </View>
                <View style={styles.totalMessage}>
                    <View style={styles.iconBox}>
                    <Image style={styles.iconKart}
                        source={require('./cart.png')} />
                    </View>
                    <View style={styles.iconTextBox}>
                    <Text style={styles.iconTexts1}>FundHub is not a store.</Text>
                    <Text style={styles.iconText}>It's a way to bring creativev projects to life.</Text>
                    <Text style={styles.iconTextYellow}>Learn more about accountability.</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.button}>
                    <Text style={styles.submit}>
                        Pledge
                    </Text>
                </View>
            </View>
        </View>
                        </ScrollView>
    )
}

export default PaymentBody
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',

    },
    mainTextContainer: {
        width: 420,
        height: 60,
        // backgroundColor:'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText: {
        color: 'white',
        fontSize: 19,
    },
    line: {
        height: 1,
        width: 420,
        backgroundColor: "rgba(156, 154, 151, 1)",
    },
    pledgeBox: {
        width: 420,
        height: 220,
        // backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',

    },
    pledgeText: {
        color: "white",
        bottom: 30,
        right: 105,
        fontSize: 16,


    },
    pledgeInner: {
        width: 240,
        height: 45,
        // backgroundColor: "white",
        // bottom:30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },
    add: {
        width: 50,
        height: 50,
        // backgroundColor: "white",
    },
    sub: {
        width: 50,
        height: 50,
        // backgroundColor: "white",
        marginLeft: 15,
    },
    amountBox: {
        width: 89,
        height: 45,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: 162,
    },
    amount: {
        fontSize: 17,
        fontWeight: "bold",
    },
    totalBox: {
        alignItems: 'center',
        width: 420,
        
        // backgroundColor: 'white',
    },
    totalText:{
        width: 300,
        height:30,
        top:35,
        // backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'flex-end',
        right:15

    },
    texts1: {
        color: "white",
        fontSize: 19,
        
        marginLeft: -10,

    },
    texts2: {
        color: "white",
        fontSize: 19,
        
        marginLeft: 230,
    },
    totalDescription:{
        top:25,
        // backgroundColor: "white",
        width: 350,
        height: 200,
        

    },
    totalTextDescription:{
        color: "white",
        top:65,
        fontSize: 15,
    },
    totalMessage:{
        alignItems: 'center',
        justifyContent: 'center',
        width:366,
        height: 100,
        backgroundColor: "rgba(196, 196, 196, 0.21)",
        borderRadius: 15,
        flexDirection: 'row'
    },
    iconKart:{
        width: 40,
        height: 40,
    },
    iconTextBox:{
        left:10,
        alignItems: 'center',
    },
    iconTexts1:{
        color: 'white',
        fontSize:15,
    },
    iconText:{
        color: 'white',
        fontSize:15,
    },
    iconTextYellow:{
        color: 'rgba(251, 255, 54, 1)',
        fontSize:15,
    },
    footer: {
        top:20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        // backgroundColor:"white",
        width:413.5,
        left:3.25,
        alignItems: 'center',
        justifyContent: 'center',
        height:80,
        borderWidth:1.5,
        borderColor:'rgba(247, 151, 30, 1)',
    },
    button: {
        height:40,
        width:190,
        backgroundColor:"rgba(247, 151, 30, 1)",
        borderRadius: 11,
        alignItems: 'center',
        justifyContent: 'center'

    },
    submit:{
        fontWeight:'bold',

    }
})