import React from 'react';
import "../styles/Header.css"

class Header extends React.Component {
    render() {
      return <header>
          <div className="logo" alt="logo"></div>
          <nav>
              <a href="gallery"className="navLink">Accueil</a>
              <a href="gallery" className="navLink">A propos</a>
          </nav>
      </header>
    }
  }

  export default Header