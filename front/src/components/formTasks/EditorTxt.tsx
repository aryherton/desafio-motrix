import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Editor } from '@tinymce/tinymce-react'

import { changeTask } from '../../redux/slice/tasksSlice'

function EditorTxt(): JSX.Element {
  const editorRef = useRef(null)
  const dispatch = useDispatch()
  const { task } = useSelector((state: any) => state.tasks)
  const description = task.description

  const handleEditorChange = () => {
    const content = editorRef.current.getContent()
    dispatch(changeTask({ ...task, description: content }))
  }

  return (
    <div id="editorTxt">
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
    </div>
  )
}

export default EditorTxt
