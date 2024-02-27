import React from 'react'

function Header() {
  return (
    <header className="header">
        <img 
            src="../img/troll-face.png" 
            className="header--image"
        />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React-Testing By Sam</h4>
    </header>
    )
}

export default Header
