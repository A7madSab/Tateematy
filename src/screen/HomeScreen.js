
import React, { Component } from 'react'
import { Text, View, Button, TouchableOpacity, Alert } from "react-native"
import { Card } from "react-native-elements"
import firebaseApi from "../api/firebaseAPI"

export default class HomeScreen extends Component {
    render() {
        console.log(firebaseApi.currentLoggedInUser())
        return (
            <View>
                <Text> HomeScreen </Text>

                <TouchableOpacity onPress={() => { props.navigation.navigate("Vaccination") }}>
                    <Card>
                        <Text>
                            Aliquip exercitation enim velit reprehenderit cillum ullamco Lorem nostrud.
                        </Text>
                    </Card>
                </TouchableOpacity>

                <Button title="Logout" onPress={() => {
                    firebaseApi.logoutUser()
                    this.props.navigation.navigate("AppNavigation", {}, NavigationActions.navigate({ routeName: 'signedOut' }))
                }} />
                <Button title="Click" onPress={() => { props.navigation.navigate("AddChild") }} />
            </View>
        )
    }
}
