import React from 'react'
import './Center.css'

const style =  {
    display: 'flex',
    justifyContent: 'center'
  }

function Center (props) {
  return <div style={style}>{props.children}</div>
}

export default Center