import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src="/logo.jpg" alt="Ponto de Abdução" className="header-logo" />
          <span className="brand-text">PONTO DE ABDUÇÃO</span>
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/catalogo" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Catálogo
          </Link>
          <Link to="/contato" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Contato
          </Link>
          <a 
            href="https://wa.me/5591999999999?text=Olá! Gostaria de fazer um pedido no Ponto de Abdução." 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link whatsapp-btn"
            onClick={() => setIsMenuOpen(false)}
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
