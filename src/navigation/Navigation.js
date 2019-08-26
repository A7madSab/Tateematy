import React from 'react'
import { Text, View } from "react-native"
import { Icon } from 'react-native-elements'

import { createAppContainer, createMaterialTopTabNavigator, createDrawerNavigator, createStackNavigator, createSwitchNavigator } from "react-navigation"
import { LoginScreen, RegisterScreen, HomeScreen, VaccinationScreen, AddChildScreen, SettingsScreen } from "../screen/index"

const AuthStack = createMaterialTopTabNavigator({
    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: RegisterScreen
    }
})

const HomePageStackNavigation = createStackNavigator({
    Home: {
        screen: HomeScreen,
        path: 'Home',
        navigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon name="menu" onPress={() => { navigation.openDrawer() }} />
                ),
                headerTitle: (
                    <View>
                        <Text> Home </Text>
                    </View>
                )
            }
        }
    },
    AddChild: {
        screen: AddChildScreen,
        path: 'AddChildScreen',
        navigationOptions: {
            headerTitle: (
                <View>
                    <Text> AddChildScreen </Text>
                </View>
            )
        }
    },
    Vaccination: {
        screen: VaccinationScreen,
        path: 'Vaccination',
        navigationOptions: {
            headerTitle: (
                <View>
                    <Text> Vaccination </Text>
                </View>
            )
        }
    }
})

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

const AppNavigation = createDrawerNavigator({
    Home: {
        screen: HomePageStackNavigation
    },
    AddChild: {
        screen: AddChildScreenStackNavigation
    },
    Settings: {
        screen: SettingsScreenStackNavigation
    }
})

const createRootNavigation = (signedIn = false) => {
    console.log(signedIn)
    return createAppContainer(createSwitchNavigator({
        signedIn: {
            screen: AppNavigation
        },
        signedOut: {
            screen: AuthStack
        }
    }, {
            initialRouteName: signedIn ? "signedIn" : "signedOut"
        }))
}

export default createRootNavigation