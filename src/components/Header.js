import React from 'react'

const Header = ({handleToggleDarkMode}) => {
  return (
    <div className='header'>
        <h1><b>NOTES</b></h1>
        <button onClick={() => handleToggleDarkMode((previousDarkMode) => !(previousDarkMode))} className='save'><b>Toggle Mode</b></button>
    </div>
  )
}

export default Header;