'use strict'

import React, { PropTypes } from 'react'

const MarkDownEditor = ({value, handleChange, getMarkup}) => (
  <div className='editor'>
    <button onClick={() => localStorage.setItem('md', value)}>SALVAR</button>
    <textarea value={value} onChange={handleChange} autoFocus/>
    <div className='view' dangerouslySetInnerHTML={getMarkup()} >
    </div>
  </div>
)

MarkDownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default MarkDownEditor
