import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View, ScrollView, StyleSheet, Button } from "react-native"
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
    }

    focusTheField(nextField) {
        // console.log(nextField)
        this.refs[nextField].focus();
    }

    render() {
        return (
            <KeyboardAwareScrollView>
                <ScrollView>

                    <View style={styles.fieldView}>
                        <Text>Name: </Text>
                        <Input
                            label="Name"
                            placeholder="Name"
                            blurOnSubmit={false}
                            value={this.state.name}
                            leftIcon={<Icon name='user' size={24} color='black' />}
                            onSubmitEditing={() => { this.focusTheField('surName'); }}
                            onChangeText={(name) => this.setState({ name })}
                        />
                    </View>

                    <View style={styles.fieldView}>
                        <Text> SurName:</Text>
                        <Input
                            ref="surName"
                            label="SurName"
                            placeholder="SurName"
                            blurOnSubmit={false}
                            value={this.state.SurName}
                            leftIcon={<Icon name='user' size={16} color='grey' />}
                            onSubmitEditing={() => { this.focusTheField('idNumber'); }}
                            onChangeText={(surName) => this.setState({ surName })}
                        />
                    </View>

                    <View style={styles.fieldView}>
                        <Text> Id Number: </Text>
                        <Input
                            ref="idNumber"
                            label="ID Number: "
                            placeholder='ID Number'
                            blurOnSubmit={false}
                            value={this.state.idNumber}
                            leftIcon={<Icon name='user' size={24} color='black' />}
                            onSubmitEditing={() => { this.focusTheField('street'); }}
                            onChangeText={(idNumber) => this.setState({ idNumber })}
                        />
                    </View>

                    <View style={styles.fieldView}>
                        <Text> Street</Text>
                        <Input
                            ref="street"
                            label="Street"
                            placeholder='Street'
                            blurOnSubmit={false}
                            value={this.state.street}
                            leftIcon={<Icon name='user' size={24} color='black' />}
                            onSubmitEditing={() => { this.focusTheField('city'); }}
                            onChangeText={(street) => this.setState({ street })}
                        />
                    </View>

                    <View style={styles.fieldView}>
                        <Text>City</Text>
                        <Input
                            ref="city"
                            label="City"
                            placeholder='City'
                            blurOnSubmit={false}
                            value={this.state.city}
                            leftIcon={<Icon name='user' size={24} color='black' />}
                            onSubmitEditing={() => { this.focusTheField('email'); }}
                            onChangeText={(city) => this.setState({ city })}
                        />
                    </View>

                    <View style={styles.fieldView}>
                        <Text>Email</Text>
                        <Input
                            ref="email"
                            label="Email"
                            placeholder='Email'
                            blurOnSubmit={false}
                            value={this.state.email}
                            leftIcon={<Icon name='user' size={24} color='black' />}
                            onSubmitEditing={() => { this.focusTheField('password'); }}
                            onChangeText={(email) => this.setState({ email })}
                        />
                    </View>

                    <View style={styles.fieldView}>
                        <Text> Password: </Text>
                        <Input
                            ref="password"
                            label="Password"
                            placeholder='Password'
                            blurOnSubmit={false}
                            value={this.state.password}
                            leftIcon={<Icon name='user' size={24} color='black' />}
                            onSubmitEditing={() => { this.focusTheField('phoneNumber'); }}
                            onChangeText={(password) => this.setState({ password })}
                        />
                    </View>

                    <View style={styles.fieldView}>
                        <Text>Phone Number</Text>
                        <Input
                            ref="phoneNumber"
                            label="Phone Number"
                            placeholder='phoneNumber'
                            value={this.state.phoneNumber}
                            leftIcon={<Icon name='user' size={24} color='black' />}
                            onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                        />
                    </View>

                    <Button
                        title="REGISTER"
                        onPress={this.onRegisterPress}
                    />
                </ScrollView>
            </KeyboardAwareScrollView>
        )
    }
}


const styles = StyleSheet.create({
    fieldView: {
        flexDirection: "row",
    }
})