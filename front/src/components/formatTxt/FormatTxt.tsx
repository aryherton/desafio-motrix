import React from 'react'

function FormatTxt({ text }) {
  const parser = new DOMParser()
  const html = parser.parseFromString(text, 'text/html')
  const txt = html.body.textContent || ''

  return (
    <div id="txt">
      <p>{txt}</p>
    </div>
  )
}

export default FormatTxt
