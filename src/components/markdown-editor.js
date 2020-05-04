'use strict'

import React, { PropTypes } from 'react'
import Header from './markdown-editor-header'

const MarkDownEditor = ({ value, isSaving,handleChange, getMarkup }) => (
  <section className='editor'>
    <Header isSaving={isSaving}/>
    <textarea value={value} onChange={handleChange} autoFocus />
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)

MarkDownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isSaving: PropTypes.bool.isRequired,
  getMarkup: PropTypes.func.isRequired
}

export default MarkDownEditor
