import React from 'react'
// import './styles.scss'

const Icon = (src, customClass) => {
  return (
    <div className={'iconContainer'} >
      <img className={`iconStyles ${customClass}`} src={src} />
    </div>
  )
}

export default Menu