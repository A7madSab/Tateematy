import React,{Component} from 'react'
import { Text, View, Button,TextInput, StyleSheet  } from "react-native"
import { Input, FormValidationMessage } from 'react-native-elements';


export default class ChildTextInput extends Component {
    state = {
        name: '',
        surName: '',
        
    }

    focusTheField(nextField) {
        this.refs[nextField].focus();
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
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
            />

         <Input 
            label="Enter Sur Name"
            placeholder="Enter Sur Name"
            blurOnSubmit={false}
            value={this.state.surName}
            //onSubmitEditing={() => { this.focusTheField('surName'); }}
            onChangeText={(surName) => this.setState({surName})}
            value={this.state.surName}
            />
        <Button title="Add" onPress={() => { console.log("Add Child details") }} />
    </View>
)
}}

const styles = StyleSheet.create({
    fieldView: {
        flexDirection: "column",
    }
})

