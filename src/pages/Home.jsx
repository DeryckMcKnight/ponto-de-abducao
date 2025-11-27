import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import ProductCard from '../components/ProductCard'

// Dados de produtos de exemplo para destaque na Home
const featuredProducts = [
  {
    id: 1,
    category: 'cervejas',
    name: 'Heineken 600ml',
    price: 6.50,
    image: 'https://via.placeholder.com/200x300?text=Heineken+600ml',
    description: 'Cerveja importada premium'
  },
  {
    id: 11,
    category: 'destilados',
    name: 'Whisky Red Label',
    price: 45.00,
    image: 'https://via.placeholder.com/200x300?text=Whisky+Red+Label',
    description: 'Whisky escocês 750ml'
  },
  {
    id: 23,
    category: 'tabacaria',
    name: 'Charuto Premium',
    price: 25.00,
    image: 'https://via.placeholder.com/200x300?text=Charuto+Premium',
    description: 'Charuto importado'
  },
  {
    id: 16,
    category: 'energeticos',
    name: 'Red Bull 250ml',
    price: 8.50,
    image: 'https://via.placeholder.com/200x300?text=Red+Bull+250ml',
    description: 'Energético premium'
  },
]

function Home({ baseUrl = '' }) {
  return (
    <div className="home">
      {/* Hero Section - Banner de Destaque */}
      <section className="hero-banner">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="brand-name">PONTO DE ABDUÇÃO</span>
              <br />
              SUA CONVENIÊNCIA FORA DESTE MUNDO
            </h1>
            <p className="hero-subtitle">
              Distribuidora, Conveniência e Tabacaria em Vila dos Cabanos.
            </p>
            <Link to="/catalogo" className="btn btn-primary">
              EXPLORAR CATÁLOGO
            </Link>
          </div>
        </div>
      </section>

      {/* Categorias em Destaque - Grid de 3 ou 4 colunas */}
      <section className="categories-highlight">
        <div className="container">
          <h2 className="section-title">NOSSAS CATEGORIAS</h2>
          <div className="categories-grid">
            <Link to="/catalogo?category=cervejas" className="category-item">
              <div className="category-icon">🍺</div>
              <h3>Cervejas</h3>
            </Link>
            <Link to="/catalogo?category=vinhos" className="category-item">
              <div className="category-icon">🍷</div>
              <h3>Vinhos</h3>
            </Link>
            <Link to="/catalogo?category=destilados" className="category-item">
              <div className="category-icon">🥃</div>
              <h3>Destilados</h3>
            </Link>
            <Link to="/catalogo?category=energeticos" className="category-item">
              <div className="category-icon">⚡</div>
              <h3>Energéticos</h3>
            </Link>
            <Link to="/catalogo?category=tabacaria" className="category-item">
              <div className="category-icon">🚬</div>
              <h3>Tabacaria</h3>
            </Link>
            <Link to="/catalogo?category=conveniencia" className="category-item">
              <div className="category-icon">🎁</div>
              <h3>Conveniência</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque - Grid de Produtos */}
      <section className="featured-products">
        <div className="container">
          <h2 className="section-title">PRODUTOS EM ÓRBITA</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/catalogo" className="btn btn-secondary">
              VER CATÁLOGO COMPLETO
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section - Localização e Contato */}
      <section className="info-section">
        <div className="container">
          <h2 className="section-title">INFORMAÇÕES DA NAVE</h2>
          
          <div className="info-grid">
            <div className="info-card">
              <div className="card-icon">📍</div>
              <h3>Localização</h3>
              <p>Av. Cônego Batista Campos<br />Vila dos Cabanos<br />Passando o Supermercado Líder</p>
              <Link to="/contato" className="info-link">Ver no Mapa →</Link>
            </div>
            
            <div className="info-card">
              <div className="card-icon">💬</div>
              <h3>Pedidos WhatsApp</h3>
              <p>Entre em contato para pedidos e entregas rápidas.</p>
              <a 
                href="https://wa.me/5591999999999?text=Olá! Gostaria de fazer um pedido no Ponto de Abdução."
                target="_blank"
                rel="noopener noreferrer"
                className="info-link"
              >
                Falar com Atendente →
              </a>
            </div>
            
            <div className="info-card">
              <div className="card-icon">🕐</div>
              <h3>Horário</h3>
              <p>Consulte nossos horários de funcionamento na página de Contato.</p>
              <Link to="/contato" className="info-link">Ver Horários →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
