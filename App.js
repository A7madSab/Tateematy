
import React, { Component } from 'react'
import Navigation from "./src/navigation/Navigation"
import { firebaseConfig } from "./src/config/firebase"
import * as firebase from "firebase"
import firebaseApi from "./src/api/firebaseAPI"
import {createAppContainer} from "react-navigation"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: "en",
      user: {},
      loggedInUser: true
    }
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }
  }

  componentDidMount() {
    const finalid = firebaseApi.currentLoggedInUserId().then(id => {
      if (id  === null) {
        this.setState(() => ({
          userLoggedIn: false,
          user: {}
        }))
      } else {
        this.setState(() => ({
          userLoggedIn: true,
        }))
      }
    })
  }

  render() {
    const AppNavigation = Navigation(this.state.userLoggedIn)
    const RootAppNavigation = createAppContainer(AppNavigation)
    return <RootAppNavigation/>
  }
}


  // console.log("current Logged In User Id before render", firebaseApi.currentLoggedInUserId())
  // componentWillMount() {
  //   firebaseApi.currentLoggedInUserId().then(currentLoggedInUserId => {
  //     console.log("currentLoggedInUserId", currentLoggedInUserId)
  //     if (currentLoggedInUserId) {
  //       this.setState(() => ({
  //         userLoggedIn: true
  //       }))
  //     }
  //     console.log("state", this.state)
  //   })
  // }