'use strict'

import React, { PropTypes } from 'react'
import Button from 'components/button'

const MarkDownEditor = ({ isSaving, handleRemove, handleCreate }) => (
  <header className="editor-header">
    {isSaving !== null &&
      <p className="save-message">{isSaving ? 'Salvando...' : 'salvo!'}</p>
    }
    <Button onClick={handleCreate} kind='success'>Criar Novo</Button>
    <Button onClick={handleRemove} kind='danger'>Remover </Button>
  </header>
)

MarkDownEditor.propTypes = {
  isSaving: PropTypes.bool,
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default MarkDownEditor
