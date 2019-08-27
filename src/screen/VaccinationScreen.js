import React, {Component} from 'react'
import { View,StyleSheet, Picker } from "react-native"
import { Card,CheckBox } from "react-native-elements"

export default class VaccinationScreen extends Component{
    state = {
        language: "en",
        fullDate: new Date().getDate(),
        date : new Date().getDate(),
        month : new Date().getMonth(),
        year : new Date().getFullYear(),
        checked:true
    }
    englishWord = [
        "alksnd"
    ]
    arabicWord = [
        "منشسىي"
    ]
    cyllericWord = [
        "cyll"
    ]

    addMonth = (added) =>{
        // this.setState((prev)=>({
        //     month: added
        // }))
        return this.state.fullDate
    }
    
  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    that.setState({
      date:
        date + '/' + month + '/' + year
    });
  }
    static navigationOptions = {
        header: null
    }
    render(){
        console.log("state", this.state)
        return (
            <View>
                <Picker
                    selectedValue={this.state.language}
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({language: itemValue})
                    }>
                    <Picker.Item label="Arabic" value="ar" />
                    <Picker.Item label="English" value="en" />
                    <Picker.Item label="Cyrillic" value="cl" />
                </Picker>
                <Card title={this.state.fullDate}>
                    <View>
                        <CheckBox
                            title={ this.state.language ==="ar" ? this.arabicWord[0] :
                            this.state.language === "en" ? this.englishWord[0] : this.cyllericWord[0] }
                            checked={this.state.checked}
                        />
                    </View>
                </Card>

                <Card title={this.addMonth(2)}>
                    <View>
                        <CheckBox
                            title={ this.state.language ==="ar" ? this.arabicWord[0] :
                            this.state.language === "en" ? this.englishWord[0] : this.cyllericWord[0] }
                            checked={this.state.checked}
                        />
                    </View>
                </Card>


            </View>
        )
    }
}


const style = StyleSheet.create({

})