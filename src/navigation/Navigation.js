import React from 'react'
import { Text, View, Button } from "react-native"
import { Icon } from 'react-native-elements'
import { createAppContainer, createMaterialTopTabNavigator, createDrawerNavigator, createStackNavigator, createSwitchNavigator } from "react-navigation"
import { LoginScreen, RegisterScreen, HomeScreen, VaccinationScreen, AddChildScreen, SettingsScreen } from "../screen/index"
import FirebaseApi from '../api/firebaseAPI';

const AddChildScreenStackNavigation = createStackNavigator({
    AddChild: {
        screen: AddChildScreen
    },
}, {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon name="menu" onPress={() => { navigation.openDrawer() }} />
                )
            }
        }
    })
    const SettingsScreenStackNavigation = createStackNavigator({
        Settings: {
            screen: SettingsScreen
        }
    }, {
            defaultNavigationOptions: ({ navigation }) => {
                return {
                    headerLeft: (
                        <Icon name="menu" onPress={() => { navigation.openDrawer() }} />
                    )
                }
            }
        })
    
    
const VaccinationScreenStackNavigation = createStackNavigator({
    Vaccination: {
        screen: VaccinationScreen,
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
    }}
})

    const createRootNavigation = (signedIn = false)=>{
        return  createStackNavigator({
            Login: {
                screen: LoginScreen,
                navigationOptions: {
                    headerTitle: (
                        <View style={{felx:1, flexDirection:"row", alignItems:"center"}}>
                            <Text> Login </Text>
                        </View>
                    )
                }
            },
            Register: {
                screen: RegisterScreen
            },
            Home: {
                screen: HomeScreen,
                navigationOptions: ({ navigation }) => {
                        return {
                            headerLeft: (
                                <Button title="Logout " onPress={()=>{
                                    FirebaseApi.logoutUser()
                                    navigation.navigate("Login")
                                }}/>
                            ),
                        }
                    }
            },
            AddChild: {
                screen: AddChildScreenStackNavigation
            },
            Vaccination: {
                screen: VaccinationScreenStackNavigation,
                navigationOptions:{
                    headerTitle:(
                        <Text>Vaccination</Text>
                    )
                }
            },
            Settings: {
                screen: SettingsScreenStackNavigation
            }
        },{
            initialRouteName: signedIn ? "Home" : "Login"
        })
    }

export default createRootNavigation