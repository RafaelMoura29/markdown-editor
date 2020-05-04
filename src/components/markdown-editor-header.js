'use strict'

import React, { PropTypes } from 'react'

const MarkDownEditor = ({ isSaving, handleRemove}) => (
    <header className="editor-header">
      <p className="save-message">{isSaving ? 'Salvando...' : 'salvo!'}</p>
      <button onClick={handleRemove} className="button-remove">Remover</button>
    </header>
)

MarkDownEditor.propTypes = {
    isSaving: PropTypes.bool.isRequired,
    handleRemove: PropTypes.func.isRequired
}

export default MarkDownEditor
