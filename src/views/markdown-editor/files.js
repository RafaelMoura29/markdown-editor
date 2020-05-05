'use strict'

import React from 'react'

const Files = ({files, handleOpenFile}) => (
  <div>
    <h2 className="files-list-container">
      Files
    </h2>

    <ul>
      {Object.keys(files).map((fileId) => (
        <li key={fileId}>
          <button onClick={handleOpenFile({ fileId })}>{fileId}</button>
        </li>
      ))}
    </ul>
  </div>
)

export default Files