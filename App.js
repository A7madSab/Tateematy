
import React, { Component } from 'react'
import Navigation from "./src/navigation/Navigation"
import { firebaseConfig } from "./src/config/firebase"
import * as firebase from "firebase"
import firebaseApi from "./src/api/firebaseAPI"

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
    firebaseApi.currentLoggedInUserId().then(id => {
      if (id === null) {
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
    const Layout = Navigation(this.state.userLoggedIn)
    return <Layout />
  }
}
