'use strict'

import React, { Component } from 'react'
import MarkDownEditor from './markdown-editor'
import hljs from 'highlight.js'
import marked from 'marked'


import './css/style.css'

marked.setOptions({
  highlight: (code) => {
    return hljs.highlightAuto(code).value
  }
})

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
      return {__html: marked(this.state.value)}
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
