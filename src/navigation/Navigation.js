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

const AppStackNavigation = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    AddChild: {
        screen: AddChildScreen
    },
    Vaccination: {
        screen: VaccinationScreen
    }
})

const AppDrawerNavigation = createDrawerNavigator({
    Home: {
        screen: AppStackNavigation
    },
    AddChild: {
        screen: AddChildScreen
    },
    Vaccination: {
        screen: VaccinationScreen
    },
    Settings: {
        screen: SettingsScreen
    }
})

// const Navigation = createStackNavigator({
//     Stack: AppStackNavigation,
//     Drawer: AppDrawerNavigation,
// })

// const AddChildStackNavigation = createStackNavigator({
//     Home: {
//         screen: HomeScreen
//     },
//     AddChild: {
//         screen: AddChildScreen
//     },
//     Vaccination: {
//         screen: VaccinationScreen
//     }
// })


// const VaccinationStackNavigation = createStackNavigator({
//     Home: {
//         screen: HomeScreen
//     },

// })



const AppNavigation = createSwitchNavigator({
    Auth: {
        screen: AuthStack
    },
    App: {
        screen: AppDrawerNavigation
    }
})


export default createAppContainer(AppNavigation)