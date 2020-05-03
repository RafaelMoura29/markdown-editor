'use strict'

import React, { Component } from 'react'
import MarkDownEditor from './markdown-editor'

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
  }


  render() {
    return (
      <MarkDownEditor
        value={this.state.value}
        handleChange={this.handleChange}
      />
    )
  }
}

export default App
