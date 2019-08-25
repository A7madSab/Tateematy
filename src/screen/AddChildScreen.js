import React from 'react'
import { Text, View, Button } from "react-native"

export default function AddChildScreen() {
    return (
        <View>
            <Text> AddChildScreen </Text>
            <Button title="Click" onPress={() => { console.log("Add Child details") }} />
        </View>
    )
}
