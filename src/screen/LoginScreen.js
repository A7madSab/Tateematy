import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View, ScrollView, StyleSheet, Button, StatusBar, TextInput, TouchableOpacity } from "react-native"
import { Input, FormValidationMessage } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import firebaseApi from "../api/firebaseAPI"
import * as firebase from "firebase"

export default class LoginScreen extends Component {
    state = {
        email: '',
        password: '',
        errors: []
    }
    focusTheField(nextField) {
        this.refs[nextField].focus();
    }

    onLoginPress = () => {
        console.log(this.state)
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                console.log("error", error.message)
                if (error.message) {
                    this.setState(() => ({
                        errors: error.message
                    }))
                } else {
                    this.props.navigation.navigate("Home")
                }
            })
    }

    onRegisterPress = () => {
        this.props.navigation.navigate("Register")
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} ></StatusBar>

                <TextInput
                    placeholder={'E-Mail'}
                    style={styles.input}
                    blurOnSubmit={false}
                    value={this.state.email}
                    onSubmitEditing={() => { this.focusTheField('password'); }}
                    onChangeText={(email) => this.setState({ email })}
                />

                <TextInput
                    ref="password"
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />

                <View>
                    <Text>{this.state.errors[0]}</Text>
                </View>

                <TouchableOpacity activeOpacity={0.75} style={styles.opa} onPress={this.onLoginPress}>
                    <Text style={styles.textss} >LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.75} style={styles.opa} onPress={this.onRegisterPress}>
                    <Text>REGISTER</Text>
                </TouchableOpacity>

                <Button title="Current Logged in User" onPress={() => { firebaseApi.currentLoggedInUser() }} />
                <Button title="Current Logged in User ID" onPress={() => { firebaseApi.currentLoggedInUserId() }} />
                <Button title="Logout" onPress={() => { firebaseApi.logoutUser() }} />

            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#effdfd',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    opa: {
        alignItems: 'center',
        backgroundColor: '#e7e7e7',
        paddingHorizontal: 50,
        paddingVertical: 20,
        marginTop: 40,
        borderRadius: 50,
    },
    textss: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000'
    },
    input: {
        width: 300,
        height: 50,
        padding: 10,
        borderWidth: 1.6,
        borderColor: '#666666',
        marginBottom: 10,
        fontSize: 18
    },
});
                        // ((item) => {
                        // return <Text> {item}</Text>
                    // })}