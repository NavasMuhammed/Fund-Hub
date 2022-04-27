import { View, Text, StyleSheet, Image,ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'

const ReviewBody = ({navigation}) => {
    return (
        // <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Image style={styles.pic}
                source={require('./project.jpg')} />
            <Text style={styles.text1}>
                Farm Frenzy: The farm building game:
            </Text>
            <View style={styles.created}>
                <Image style={styles.createdBy}
                    source={require('./user.png')}
                />
                <Text style={styles.createdByText}>
                    Created By
                </Text>
                <Text style={styles.createdByText2}>
                    Sharpie
                </Text>
            </View>
            <View style={styles.discription}>
                <Text style={styles.discriptionText}>
                    Mini RPG game for ultra pro gamers available at playstore and appstore. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has .....

                </Text>
                <Text style={styles.discriptionText1}>
                    Read More about this campaign...
                </Text>
            </View>
            <View style={styles.iconsTray}>
                <Image style={styles.icon1}
                    source={require('./categories.png')}
                    />
                <Text style={styles.iconText}>
                    Simulation game
                </Text>
                <Image style={styles.icon2}
                    source={require('./location.png')}
                />
                <Text style={styles.iconText1}>
                    Oklahoma
                </Text>

                <View style={styles.lineContainer}>
                    <View style={styles.top}>
                        <View style={styles.line}></View>
                        <View style={styles.innerLine}></View>
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.boxes}>
                            <Text style={styles.boxText}>$ 454,333</Text>
                            <Text style={styles.boxText1}>Pledged of $ 700000</Text>
                        </View>
                        <View style={styles.boxes}>
                            <Text style={styles.boxText}>21 backers</Text>
                        </View>
                        <View style={styles.boxes}>
                            <Text style={styles.boxText}>25 days to go</Text>
                        </View>
                    </View>
                        <Text style={styles.footText}>
                            This project will be funded on 27th march,2021.
                        </Text>
                </View>
            </View>
            <View style={styles.footer}>
            <TouchableOpacity onPress={() =>{
                    console.log("button clicked")
                    navigation.navigate('Payment')}
                }>
                <View style={styles.button}>
                    <Text style={styles.submit}>

                        Fund This Project
                    </Text>
                </View>
                    </TouchableOpacity>
            </View>
        </View>
                    // </ScrollView>
    )
}

export default ReviewBody
const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        width: 500,
        height: "100%",
        alignItems: 'center',
        top: -80,
        zIndex:-100,



    },
    pic: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 210,
        width: 400,
        top: 12,

    },
    text1: {
        color: 'white',
        fontSize: 19,
        top: 18,
    },
    created: {
        // backgroundColor:"white",
        width: 144,
        height: 54,
        alignItems: 'center',
        top: 30,
        flexDirection: 'row',
        right: 115,
        // justifyContent: 'center'

    },
    createdBy: {
        width: 50,
        height: 50,
        borderRadius: 50,
        top: 1,
        // right:40,
    },
    createdByText: {
        bottom: 10,
        left: 10,
        color: 'rgba(123, 123, 123, 1)',
    },
    createdByText2: {
        right: 50,
        top: 13,
        fontWeight: "bold",
        color: 'rgba(123, 123, 123, 1)',
    },
    discription: {
        height: 100,
        width: 370,
        top: 40,
    },
    discriptionText: {
        color: 'white',
        fontSize: 16,
    },
    discriptionText1: {
        color: 'rgba(123, 123, 123, 1)',
        top: 10,
    },
    iconsTray: {
        top: 60,
        right: 95,
        flexDirection:'row',
    },
    icon1: {
        left: 200,
        width: 20,
        height: 20,
        borderRadius: 50,
    },
    iconText:{
        color: 'white',
        left: 205,
    },
    icon2: {
        width: 20,
        height: 20,
        left: 250,
        borderRadius: 50,
    },
    iconText1:{
        color: 'white',
        left: 250,
    },
    lineContainer: {
        height: 100,
        width: 380,
        // backgroundColor: 'white',
        top: 50,
        flexDirection: 'column',
    },
    top:{
        
        width: 380,
        height: 50,
        backgroundColor: 'black',
    },
    line:{
        width: '90%',
        height: '8%',
        backgroundColor: 'rgba(156, 154, 151, 1)',
        borderRadius: 100,
    },
    innerLine:{
        bottom: 4,
        width: '49%',
        height: '8%',
        backgroundColor: 'rgba(247, 151, 30, 1)',
        borderRadius: 100,
    },
    bottom:{
        flexDirection: 'row',
        width:"100%",
        justifyContent: 'space-around',
        bottom:20,
        right:10,
        
    },
    boxes:{
        // backgroundColor:"red",
        width:100,
        height:40,
    },
    boxText:{
        color:"white",
        fontSize:16
    },
    boxText1:{
        color:"white",
        fontSize:10,
    },
    footText:{
        textAlign:"center",
        color:"white",
        fontSize:16,
    },
    footer: {
        top:130,
        borderRadius:10,
        // backgroundColor:"white",
        width:413.5,
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