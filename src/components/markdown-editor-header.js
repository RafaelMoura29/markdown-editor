'use strict'

import React, { PropTypes } from 'react'

const MarkDownEditor = ({ isSaving}) => (
    <header className="editor-header">
      <p className="save-message">{isSaving ? 'Salvando...' : 'salvo!'}</p>
      
    </header>
)

MarkDownEditor.propTypes = {
    isSaving: PropTypes.bool.isRequired,
}

export default MarkDownEditor
