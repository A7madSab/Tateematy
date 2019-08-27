import React, { Component } from 'react'
import { View, Button, StyleSheet } from "react-native"
import { Input } from 'react-native-elements'
import FirebaseApi from '../api/firebaseAPI';


export default class ChildTextInput extends Component {
    state = {
        name: '',
        surName: '',
        month: 0
    }
    /***
     *TODO: each page check if session is still open 
     */
    componentDidMount() {
        console.log("current logged in user", FirebaseApi.currentLoggedInUserId())
        if (FirebaseApi.currentLoggedInUserId() === null) {
            this.props.navigation.navigate("Login")
        }
    }

    focusTheField(nextField) {
        this.refs[nextField].focus();
    }

    onAddChildPress = () => {
        FirebaseApi.addChild(this.state.name, this.state.surName)
    }

    render() {
        return (
            <View style={styles.fieldView}>
                <Input
                    label="Enter child's Name"
                    placeholder="Enter Child's Name"
                    blurOnSubmit={false}
                    value={this.state.name}
                    onSubmitEditing={() => { this.focusTheField('surName'); }}
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />

                <Input
                    ref="surName"
                    label="Enter Sur Name"
                    placeholder="Enter Sur Name"
                    blurOnSubmit={false}
                    value={this.state.surName}
                    onSubmitEditing={() => { this.focusTheField('month'); }}
                    onChangeText={(surName) => this.setState({ surName })}
                    value={this.state.surName}
                />

                <Input
                    ref="month"
                    label="Enter Month of birth"
                    placeholder="5"
                    blurOnSubmit={true}
                    value={this.state.month}
                    onChangeText={(month) => this.setState({ month })}
                    value={this.state.month}
                />

                <Button title="Add Child" onPress={this.onAddChildPress} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fieldView: {
        flexDirection: "column",
    }
})

