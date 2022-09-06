import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Editor } from '@tinymce/tinymce-react'

import { changeTaskEdit } from '../../redux/slice/tasksSlice'
import { StyleEditorTxtWrapper } from './styleEditorTxt'

function EditorTxt(): JSX.Element {
  const editorRef = useRef(null)
  const dispatch = useDispatch()
  const { taskEdit } = useSelector((state: any) => state.tasks)
  const description = taskEdit.description

  const handleEditorChange = () => {
    const content = editorRef.current.getContent()
    dispatch(changeTaskEdit({ ...taskEdit, description: content }))
  }

  return (
    <StyleEditorTxtWrapper>
      <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={ description }
        init={{
          menubar: false,
        }}
      />
      <button type="button" onClick={ handleEditorChange }>
        Salva
      </button>
    </StyleEditorTxtWrapper>
  )
}

export default EditorTxt
