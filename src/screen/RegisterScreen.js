import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View, ScrollView, StyleSheet, Button, StatusBar, TextInput, TouchableOpacity } from "react-native"
import { Input, FormValidationMessage } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import firebaseAPI from "../api/firebaseAPI"

export default class RegisterScreen extends Component {
    state = {
        name: '',
        surName: '',
        idNumber: '',
        street: '',
        city: '',
        email: '',
        password: '',
        phoneNumber: '',
        error: '',
    }

    onRegisterPress = () => {
        const error = firebaseAPI.registerWithEmailAndPassword(
            this.state.name,
            this.state.surName,
            this.state.idNumber,
            this.state.street,
            this.state.city,
            this.state.email,
            this.state.password,
            this.state.phoneNumber
        )
        if (error) console.log(error)
        
        firebaseAPI.signInWithEmailAndPassword(this.state.email,this.state.password)
        this.props.navigation.navigate('signedIn')
    }

    focusTheField(nextField) {
        // console.log(nextField)
        this.refs[nextField].focus();
    }

    render() {
        return (
            
                <View style={styles.container}>

                <StatusBar hidden = { true } ></StatusBar>

                    <View style={styles.container2}>
                        <TextInput
                            label="Name"
                            placeholder={'Name'}
                            style={styles.input2}
                            value={this.state.name}
                            blurOnSubmit={false}
                            onSubmitEditing={() => { this.focusTheField('surName'); }}
                            onChangeText={(name) => this.setState({ name })}
                        />
                        <TextInput
                            ref="surName"
                            placeholder={'Sur Name'}
                            style={styles.input2}
                            blurOnSubmit={false}
                            value={this.state.SurName}
                            onSubmitEditing={() => { this.focusTheField('idNumber'); }}
                            onChangeText={(surName) => this.setState({ surName })}
                        />
                    </View>
                    <TextInput
                        ref="idNumber"
                        placeholder={'ID Number'}
                        style={styles.input1}
                        blurOnSubmit={false}
                        value={this.state.idNumber}
                        onSubmitEditing={() => { this.focusTheField('street'); }}
                        onChangeText={(idNumber) => this.setState({ idNumber })}
                    />
                    <View style={styles.container2}>
                        <TextInput
                            ref="street"
                            placeholder={'Street'}
                            style={styles.input2}
                            blurOnSubmit={false}
                            value={this.state.street}
                            onSubmitEditing={() => { this.focusTheField('city'); }}
                            onChangeText={(street) => this.setState({ street })}
                        />
                        <TextInput
                            ref="city"
                            placeholder={'city'}
                            style={styles.input2}
                            blurOnSubmit={false}
                            value={this.state.city}
                            onSubmitEditing={() => { this.focusTheField('email'); }}
                            onChangeText={(city) => this.setState({ city })}
                        />
                    </View>

                    <TextInput
                        ref="email"
                        value={this.state.email}
                        placeholder={'E-Mail'}
                        style={styles.input1}
                        blurOnSubmit={false}
                        onSubmitEditing={() => { this.focusTheField('password'); }}
                        onChangeText={(email) => this.setState({ email })}
                    />
                
                    <TextInput
                        ref="password"
                        value={this.state.password}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        style={styles.input1}
                        blurOnSubmit={false}
                        onSubmitEditing={() => { this.focusTheField('phoneNumber'); }}
                            onChangeText={(password) => this.setState({ password })}
                    />

                    <TextInput
                        ref="phoneNumber"
                        value={this.state.phoneNumber}
                        placeholder={'Phone Number'}
                        style={styles.input1}
                        onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                    />

                    <TouchableOpacity activeOpacity= {0.75} style={styles.opa}
                    onPress={this.onRegisterPress}
                    >
                    
                        <Text style={styles.textss} >JOIN</Text>
                    
                    </TouchableOpacity>

                </View>
            )
        }
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fffbe5',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    container2: {
        backgroundColor: '#fffbe5',
        alignItems: 'center',
        flex: 0.28,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    opa: {
        alignItems: 'center',
        backgroundColor:'#e7e7e7',
        paddingHorizontal: 50,
        paddingVertical: 20,
        marginTop: 10,
        borderRadius: 50,
    },
    textss: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000'
    },
    input1: {
        width: 300,
        height: 45,
        padding: 5,
        borderWidth: 1,
        borderColor: '#666666',
        marginBottom: 8,
        fontSize: 16
      },
    input2: {
    width: 146,
    height: 45,
    padding: 5,
    borderWidth: 1,
    borderColor: '#666666',
    marginBottom: 4,
    fontSize: 16,
    marginRight: 4.5,
    marginLeft: 2
    },
});