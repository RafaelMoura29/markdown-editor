'use strict'

import React, { Component } from 'react'
import MarkDownEditor from './markdown-editor'

import 'normalize.css'
import './css/style.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      value: ''
    }

    this.handleChange = (e) => {
      this.setState({ value: e.target.value })
    }

    this.getMarkup = (e) => {
      return {__html: this.state.value}
    }
  }

  

  render() {
    return (
      <MarkDownEditor
        value={this.state.value}
        handleChange={this.handleChange}
        getMarkup= {this.getMarkup}
      />
    )
  }
}

export default App
