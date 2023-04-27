import React from 'react'

function Pin(props) {
  return (
    <div style={{
        ...style.pin,
        ...style[props.size]
    }}>

    </div>
  )
}

const style = {
    pin: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
        backgroundColor: 'red'
    },
    small: {
        gridRowEnd: 'span 26'
    },
    medium: {
        gridRowEnd: 'span 33'
    },
    large: {
        gridRowEnd: 'span 45'
    },
}

export default Pin