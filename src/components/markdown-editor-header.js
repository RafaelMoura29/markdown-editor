'use strict'

import React, { PropTypes } from 'react'

const MarkDownEditor = ({onSave }) => (
    <header className="editor-header">
      <button onClick={onSave} className="save">SALVAR</button>
    </header>
)

MarkDownEditor.propTypes = {
    onSave: PropTypes.func.isRequired,
}

export default MarkDownEditor
