import React from 'react'

const Alert = ({alert}) => {
  return (
    <div className={`${alert.error ? 'red' : 'blue' } alert`}>
      {alert.msg}
    </div>
  )
}

export default Alert