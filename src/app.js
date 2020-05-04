'use strict'

import React, { Component } from 'react'
import MarkDownEditor from 'views/markdown-editor'
import marked from 'marked'

import './css/style.css'

import('highlight.js').then((hljs) => {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code).value
      }
      return hljs.highlightAuto(code).value
    }
  })
})

class App extends Component {

  constructor() {
    super()
    this.state = {
      value: '',
      isSaving: null
    }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value,
        isSaving: true
      })
    }

    this.getMarkup = (e) => {
      return { __html: marked(this.state.value) }
    }
    this.handleSave = () => {
      if (this.state.isSaving) {
        localStorage.setItem('md', this.state.value)
        this.setState({ isSaving: false })
      }
    }
    this.handleRemove = () => {
      this.setState({ value: '' })
      localStorage.removeItem('md')
    }
    this.handleCreate = () => {
      this.setState({ value: '' })
      this.textarea.focus()
    }
    this.textAreaRef = (node) => {
      this.textarea = node
    }
  }

  componentDidMount() {
    const value = localStorage.getItem('md')
    this.setState({ value: value || '' })
  }

  componentDidUpdate() {
    clearInterval(this.timer)
    this.timer = setTimeout(() => {

      this.handleSave()
    }, 300)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <MarkDownEditor
        value={this.state.value}
        isSaving={this.state.isSaving}
        handleChange={this.handleChange}
        getMarkup={this.getMarkup}
        handleRemove={this.handleRemove}
        handleCreate={this.handleCreate}
        textAreaRef={this.textAreaRef}
      />
    )
  }
}

export default App
