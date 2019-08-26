import React from 'react'
import { Text, View, Button } from "react-native"
import firebaseApi from "../api/firebaseAPI"

export default function SettingsScreen() {
    return (
        <View>
            <Text>SettingsScreen </Text>
            <Button title="Logout" onPress={() => { firebaseApi.logoutUser() }} />
        </View>
    )
}
