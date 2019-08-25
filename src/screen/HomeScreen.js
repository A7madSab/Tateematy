import React from 'react'
import { Text, View, Button, TouchableOpacity } from "react-native"
import { Card } from "react-native-elements"

export default function HomeScreen(props) {
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

            <Button title="Click" onPress={() => { props.navigation.navigate("AddChild") }} />
        </View>
    )
}
