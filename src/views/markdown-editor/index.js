'use strict'

import React, { PropTypes } from 'react'
import Header from './header'

const MarkDownEditor = ({ value, handleChange, getMarkup, textAreaRef, ...props }) => (
  <section className='editor'>
    <Header {...props} />
    <textarea value={value} onChange={handleChange} autoFocus ref={textAreaRef}/>
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)

MarkDownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textAreaRef: PropTypes.func.isRequired,
}

export default MarkDownEditor
