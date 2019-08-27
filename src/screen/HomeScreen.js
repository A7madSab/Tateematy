
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Card } from "react-native-elements"
import firebaseApi from "../api/firebaseAPI"
// import sendMail from "../config/mail"


export default function HomeScreen(props) {
    console.log(firebaseApi.currentLoggedInUser())
    return (
        <View>
            <TouchableOpacity onPress={() => { props.navigation.navigate("Vaccination") }} style={styles.opa}>
                <Card title="10/15/2019" style={styles.container} >
                    <View style={styles.container2}>
                        <View style={{ flex: 1 }}>
                            <Text> NAME: AHMAD</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text> AGE: 3 Months</Text>
                        </View>
                    </View>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { props.navigation.navigate("Vaccination") }} style={styles.opa}>
                <Card title="10/15/2019" style={styles.container} >
                    <View style={styles.container2}>
                        <View style={{ flex: 1 }}>
                            <Text> NAME: AHMAD</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text> AGE: 3 Months</Text>
                        </View>
                    </View>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.75} style={styles.opaa} onPress={this.onRegisterPress}>
                <Text style={styles.ttextss} >Add Child</Text>
            </TouchableOpacity>
            {/**
                <Button title='send mail' onPress={()=> {sendMail()}}></Button>
             */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#effdfd',
        //alignItems: 'center',
        flex: 1,
        marginBottom: 10,
        paddingBottom: 15
        //justifyContent: 'center',
    },
    container2: {
        backgroundColor: '#effdfd',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        //justifyContent: 'center',
    },
    opa: {
        backgroundColor: '#ffffff',
        marginBottom: 15,
    },
    textss: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000'
    },
    container3: {
        margin: 50
    },
    opaa: {
        alignItems: 'center',
        backgroundColor: '#e7e7e7',
        paddingHorizontal: 100,
        paddingVertical: 20,
        marginTop: 10,
        borderRadius: 50,
    },
    ttextss: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000000'
    },
});