import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import React from 'react'

const Menu = () => {
    return (

        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.backButton}>
                <Image style={styles.crossIcon} source={require('./plus.png')} />

            </View>
            </TouchableOpacity>
            <View style={styles.iconBox}>
                <Image style={styles.icon} source={require('./logo.png')} />
            </View>
            <View style={styles.items}>
                <TouchableOpacity>

                    <View style={styles.button}>
                        <Image style={styles.iconSize} source={require('./home.png')} />
                        <Text style={styles.buttonText}>Home</Text>

                    </View>
                </TouchableOpacity>
                    <TouchableOpacity >
                <View style={styles.button}>
                        <View style={styles.button}>
                            <Image style={styles.iconSize} source={require('./love.png')} />
                            <Text style={styles.buttonText}>Favorite</Text>

                        </View>
                </View>
                    </TouchableOpacity>
                <TouchableOpacity>

                    <View style={styles.button}>
                        <View style={styles.button}>
                            <Image style={styles.iconSize} source={require('./plus.png')} />
                            <Text style={styles.buttonText}>Add New Project</Text>

                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Menu
const styles = StyleSheet.create({
    container: {
        width: 300,
        height: "100%",
        left: -6,
        top: 35,
        backgroundColor: "black",
        position: "absolute",
        zIndex: 1,

    },
    backButton: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        top: 20,
        backgroundColor: "black",
        borderColor: 'yellow',
        borderWidth: .8,
        marginLeft: 270,
        alignItems: 'center',
        justifyContent: 'center',

    },
    crossIcon: {
        height: 40,
        width: 40,
        transform: [{ rotate: '45deg' }]

    },
    iconBox: {
        top: 50,
        width: 300,
        height: 100,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: 200,
        height: 100,
    },
    items: {
        backgroundColor: "black",
        width: 300,
        height: 250,
        top: 70,
        alignItems: 'center',
        justifyContent: "center",
        justifyContent: "space-around",
    },
    button: {
        backgroundColor: "#585858",
        width: 236,
        height: 50,

        borderRadius: 10,
        alignItems: 'center',
        // justifyContent:"center",
        flexDirection: "row",
    },
    iconSize: {
        width: 30,
        height: 30,
        left: 10,
    },
    buttonText: {
        color: "black",
        left: 15,
        fontSize: 16,
    },

})