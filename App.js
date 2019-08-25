
import React, { Component } from 'react'
import Navigation from "./src/navigation/Navigation"
import { firebaseConfig } from "./src/config/firebase"
import * as firebase from "firebase"

export default class App extends Component {
  constructor(props) {
    super(props)

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }
  }

  render() {
    return (
      <Navigation />
    )
  }
}
