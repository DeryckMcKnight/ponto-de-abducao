import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
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

          <div className="hero-buttons">
            <Link to="/catalogo" className="btn btn-primary">
              Ver Catálogo
            </Link>
            <a 
              href="https://wa.me/5591999999999?text=Olá! Gostaria de fazer um pedido no Ponto de Abdução."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Falar pelo WhatsApp
            </a>
          </div>
          
          <div className="beam-light"></div>
        </div>
      </section>

      {/* Informações Section */}
      <section className="info-section">
        <div className="container">
          <h2 className="section-title">INFORMAÇÕES DA NAVE</h2>
          
          <div className="info-grid">
            <div className="info-card">
              <div className="card-icon">📍</div>
              <h3>Localização</h3>
              <p>Av. Cônego Batista Campos<br />Vila dos Cabanos<br />Passando o Supermercado Líder</p>
            </div>
            
            <div className="info-card">
              <div className="card-icon">🛍️</div>
              <h3>Produtos</h3>
              <p>Bebidas Geladas<br />Tabacaria Completa<br />Conveniência 24h</p>
            </div>
            
            <div className="info-card">
              <div className="card-icon">💬</div>
              <h3>Contato</h3>
              <p>WhatsApp: (91) 99999-9999<br />Instagram: @pontodeabducao<br />Entrega Rápida</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias em Destaque */}
      <section className="highlights-section">
        <div className="container">
          <h2 className="section-title">CATEGORIAS EM DESTAQUE</h2>
          
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">🍺</div>
              <h3>Cervejas</h3>
              <p>Seleção de cervejas nacionais e importadas</p>
              <Link to="/catalogo?category=cervejas" className="highlight-link">
                Ver Mais →
              </Link>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">🍷</div>
              <h3>Vinhos</h3>
              <p>Vinhos finos e de qualidade</p>
              <Link to="/catalogo?category=vinhos" className="highlight-link">
                Ver Mais →
              </Link>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">🥃</div>
              <h3>Destilados</h3>
              <p>Whisky, Vodka, Gin e muito mais</p>
              <Link to="/catalogo?category=destilados" className="highlight-link">
                Ver Mais →
              </Link>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">⚡</div>
              <h3>Energéticos</h3>
              <p>Energéticos, refrigerantes e mixers</p>
              <Link to="/catalogo?category=energeticos" className="highlight-link">
                Ver Mais →
              </Link>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">🚬</div>
              <h3>Tabacaria</h3>
              <p>Charutos, cigarros, essências e acessórios</p>
              <Link to="/catalogo?category=tabacaria" className="highlight-link">
                Ver Mais →
              </Link>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">🎁</div>
              <h3>Conveniência</h3>
              <p>Snacks, doces e itens essenciais</p>
              <Link to="/catalogo?category=conveniencia" className="highlight-link">
                Ver Mais →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Promoções Section */}
      <section className="promotions-section">
        <div className="container">
          <h2 className="section-title">PROMOÇÕES ESPECIAIS</h2>
          
          <div className="promotions-grid">
            <div className="promo-card">
              <div className="promo-badge">PROMOÇÃO</div>
              <h3>Compre 2, Leve 3</h3>
              <p>Em selecionados de bebidas</p>
              <a 
                href="https://wa.me/5591999999999?text=Olá! Gostaria de aproveitar a promoção Compre 2, Leve 3"
                target="_blank"
                rel="noopener noreferrer"
                className="promo-link"
              >
                Aproveitar →
              </a>
            </div>

            <div className="promo-card">
              <div className="promo-badge">DESCONTO</div>
              <h3>10% OFF</h3>
              <p>Na primeira compra pelo WhatsApp</p>
              <a 
                href="https://wa.me/5591999999999?text=Olá! Gostaria de aproveitar o desconto de 10% na primeira compra"
                target="_blank"
                rel="noopener noreferrer"
                className="promo-link"
              >
                Aproveitar →
              </a>
            </div>

            <div className="promo-card">
              <div className="promo-badge">FRETE</div>
              <h3>Frete Grátis</h3>
              <p>Acima de R$ 100 em Vila dos Cabanos</p>
              <a 
                href="https://wa.me/5591999999999?text=Olá! Gostaria de fazer um pedido com frete grátis"
                target="_blank"
                rel="noopener noreferrer"
                className="promo-link"
              >
                Aproveitar →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
