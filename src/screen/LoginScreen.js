import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View, ScrollView, StyleSheet, Button } from "react-native"
import { Input, FormValidationMessage } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import firebaseApi from "../api/firebaseAPI"

export default class LoginScreen extends Component {
    state = {
        email: '',
        password: ''
    }
    focusTheField(nextField) {
        this.refs[nextField].focus();
    }
    onLoginPress = () => {
        firebaseApi.signInWithEmailAndPassword(this.state.email, this.state.password)
        this.props.navigation.navigate("signedIn")
    }

    render() {
        return (
            <View>
                {/**<Text> Login Screen</Text> <Text>Email</Text>*/}

                <View style={styles.fieldView}>
                    <Input
                        placeholder='Email'
                        blurOnSubmit={false}
                        value={this.state.email}
                        leftIcon={<Icon name='user' size={24} color='black' />}
                        onSubmitEditing={() => { this.focusTheField('password'); }}
                        onChangeText={(email) => this.setState({ email })}
                    />
                </View>

                <View style={styles.fieldView}>
                    {/**<Text> Password: </Text>*/}
                    <Input
                        ref="password"
                        label="Password"
                        placeholder='Password'
                        value={this.state.password}
                        leftIcon={<Icon name='user' size={24} color='black' />}
                        onChangeText={(password) => this.setState({ password })}
                    />
                </View>




                <Button title="Login" onPress={this.onLoginPress} />
                <Button title="Current Logged in User" onPress={() => { firebaseApi.currentLoggedInUser() }} />
                <Button title="Current Logged in User ID" onPress={() => { firebaseApi.currentLoggedInUserId() }} />
                <Button title="Logout" onPress={() => { firebaseApi.logoutUser() }} />
            </View>
        )
    }
}



const styles = StyleSheet.create({
    fieldView: {
        flexDirection: "row",
    }
})