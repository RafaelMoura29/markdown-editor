'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/button'
import SaveMessage from 'components/save-message'

const MarkDownEditor = ({ isSaving, handleRemove, handleCreate }) => (
  <header className="editor-header">
    <SaveMessage isSaving={isSaving}/>
    <Button onClick={handleCreate} kind='success'>Criar Novo</Button>
    <Button onClick={handleRemove} kind='danger'>Remover </Button>
  </header>
)

MarkDownEditor.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default MarkDownEditor
