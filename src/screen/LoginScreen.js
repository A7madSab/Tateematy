import React, { Component } from 'react';
import { View, Text, Button } from "react-native"


export default class LoginScreen extends Component {
    render() {
        return (
            <View>
                <Text> Login Screen</Text>
                <Button title="Login" onPress={() => { this.props.navigation.navigate("App") }} />
            </View>
        )
    }
}
