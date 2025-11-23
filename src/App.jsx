import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    setIsLoaded(true)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="app">
      {/* Cursor personalizado */}
      <div 
        className="custom-cursor"
        style={{
          left: mousePosition.x,
          top: mousePosition.y
        }}
      />

      {/* Partículas de fundo */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }} />
        ))}
      </div>

      {/* Hero Section */}
      <section className={`hero ${isLoaded ? 'loaded' : ''}`}>
        <div className="hero-content">
          <div className="logo-container">
            <img src="/logo.jpg" alt="Ponto de Abdução" className="logo" />
            <div className="logo-glow"></div>
          </div>
          
          <h1 className="hero-title">
            <span className="typing-text">BEM-VINDOS AO</span>
            <br />
            <span className="brand-name">PONTO DE ABDUÇÃO</span>
          </h1>
          
          <p className="hero-subtitle">
            Distribuidora, Conveniência e Tabacaria
          </p>
          
          <div className="beam-light"></div>
        </div>
      </section>

      {/* Informações Section */}
      <section className="info-section">
        <div className="container">
          <h2 className="section-title">INFORMAÇÕES DA NAVE</h2>
          
          <div className="info-grid">
            <div className="info-card">
              <div className="card-icon">
                <div className="alien-icon">👽</div>
              </div>
              <h3>Localização</h3>
              <p>Av. Cônego Batista Campos<br />Vila dos Cabanos<br />Passando o Supermercado Líder</p>
            </div>
            
            <div className="info-card">
              <div className="card-icon">
                <div className="ufo-icon">🛸</div>
              </div>
              <h3>Produtos</h3>
              <p>Bebidas Geladas<br />Tabacaria Completa<br />Conveniência 24h</p>
            </div>
            
            <div className="info-card">
              <div className="card-icon">
                <div className="rocket-icon">🚀</div>
              </div>
              <h3>Contato</h3>
              <p>WhatsApp: (91) 99999-9999<br />Instagram: @pontodeabducao<br />Entrega Rápida</p>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">PRODUTOS EM ÓRBITA</h2>
          
          <div className="products-carousel">
            <div className="product-item">
              <div className="product-glow"></div>
              <h4>Bebidas Geladas</h4>
              <p>Cervejas, Refrigerantes, Energéticos</p>
            </div>
            
            <div className="product-item">
              <div className="product-glow"></div>
              <h4>Tabacaria</h4>
              <p>Cigarros, Charutos, Acessórios</p>
            </div>
            
            <div className="product-item">
              <div className="product-glow"></div>
              <h4>Conveniência</h4>
              <p>Snacks, Doces, Itens Básicos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Ponto de Abdução - Todos os direitos reservados</p>
          <p>Uma experiência fora deste mundo</p>
        </div>
      </footer>
    </div>
  )
}

export default App
