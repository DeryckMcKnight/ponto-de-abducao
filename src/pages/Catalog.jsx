import React, { useState, useMemo } from 'react'
import ProductCard from '../components/ProductCard'
import './Catalog.css'

function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('todos')

  // Dados de produtos reais
  const products = [
    // Cervejas
    {
      id: 1,
      category: 'cervejas',
      name: 'Brahma 600ml',
      price: 4.50,
      image: 'https://via.placeholder.com/200x300?text=Brahma+600ml',
      description: 'Cerveja pilsen refrescante'
    },
    {
      id: 2,
      category: 'cervejas',
      name: 'Skol 600ml',
      price: 4.50,
      image: 'https://via.placeholder.com/200x300?text=Skol+600ml',
      description: 'Cerveja pilsen gelada'
    },
    {
      id: 3,
      category: 'cervejas',
      name: 'Heineken 600ml',
      price: 6.50,
      image: 'https://via.placeholder.com/200x300?text=Heineken+600ml',
      description: 'Cerveja importada premium'
    },
    {
      id: 4,
      category: 'cervejas',
      name: 'Itaipava 600ml',
      price: 4.50,
      image: 'https://via.placeholder.com/200x300?text=Itaipava+600ml',
      description: 'Cerveja pilsen clássica'
    },
    {
      id: 5,
      category: 'cervejas',
      name: 'Bohemia 600ml',
      price: 5.50,
      image: 'https://via.placeholder.com/200x300?text=Bohemia+600ml',
      description: 'Cerveja premium nacional'
    },
    {
      id: 6,
      category: 'cervejas',
      name: 'Corona 330ml',
      price: 5.00,
      image: 'https://via.placeholder.com/200x300?text=Corona+330ml',
      description: 'Cerveja mexicana importada'
    },

    // Vinhos
    {
      id: 7,
      category: 'vinhos',
      name: 'Vinho Tinto Reserva',
      price: 25.00,
      image: 'https://via.placeholder.com/200x300?text=Vinho+Tinto+Reserva',
      description: 'Vinho tinto fino 750ml'
    },
    {
      id: 8,
      category: 'vinhos',
      name: 'Vinho Branco Seco',
      price: 22.00,
      image: 'https://via.placeholder.com/200x300?text=Vinho+Branco+Seco',
      description: 'Vinho branco 750ml'
    },
    {
      id: 9,
      category: 'vinhos',
      name: 'Vinho Rosé Premium',
      price: 28.00,
      image: 'https://via.placeholder.com/200x300?text=Vinho+Rose+Premium',
      description: 'Vinho rosé selecionado 750ml'
    },
    {
      id: 10,
      category: 'vinhos',
      name: 'Espumante Brut',
      price: 35.00,
      image: 'https://via.placeholder.com/200x300?text=Espumante+Brut',
      description: 'Espumante 750ml'
    },

    // Destilados
    {
      id: 11,
      category: 'destilados',
      name: 'Whisky Red Label',
      price: 45.00,
      image: 'https://via.placeholder.com/200x300?text=Whisky+Red+Label',
      description: 'Whisky escocês 750ml'
    },
    {
      id: 12,
      category: 'destilados',
      name: 'Vodka Smirnoff',
      price: 35.00,
      image: 'https://via.placeholder.com/200x300?text=Vodka+Smirnoff',
      description: 'Vodka premium 750ml'
    },
    {
      id: 13,
      category: 'destilados',
      name: 'Gin Tanqueray',
      price: 40.00,
      image: 'https://via.placeholder.com/200x300?text=Gin+Tanqueray',
      description: 'Gin inglês 750ml'
    },
    {
      id: 14,
      category: 'destilados',
      name: 'Rum Bacardi',
      price: 38.00,
      image: 'https://via.placeholder.com/200x300?text=Rum+Bacardi',
      description: 'Rum caribenho 750ml'
    },
    {
      id: 15,
      category: 'destilados',
      name: 'Cachaça 51',
      price: 18.00,
      image: 'https://via.placeholder.com/200x300?text=Cachaca+51',
      description: 'Cachaça brasileira 750ml'
    },

    // Energéticos e Mixers
    {
      id: 16,
      category: 'energeticos',
      name: 'Red Bull 250ml',
      price: 8.50,
      image: 'https://via.placeholder.com/200x300?text=Red+Bull+250ml',
      description: 'Energético premium'
    },
    {
      id: 17,
      category: 'energeticos',
      name: 'Gatorade 500ml',
      price: 5.00,
      image: 'https://via.placeholder.com/200x300?text=Gatorade+500ml',
      description: 'Bebida isotônica'
    },
    {
      id: 18,
      category: 'energeticos',
      name: 'Coca-Cola 2L',
      price: 6.50,
      image: 'https://via.placeholder.com/200x300?text=Coca+Cola+2L',
      description: 'Refrigerante clássico'
    },
    {
      id: 19,
      category: 'energeticos',
      name: 'Água Tônica Schweppes',
      price: 4.50,
      image: 'https://via.placeholder.com/200x300?text=Agua+Tonica+Schweppes',
      description: 'Mixer 750ml'
    },
    {
      id: 20,
      category: 'energeticos',
      name: 'Suco Natural 1L',
      price: 6.00,
      image: 'https://via.placeholder.com/200x300?text=Suco+Natural+1L',
      description: 'Suco natural integral'
    },

    // Tabacaria
    {
      id: 21,
      category: 'tabacaria',
      name: 'Cigarro Marlboro',
      price: 12.00,
      image: 'https://via.placeholder.com/200x300?text=Cigarro+Marlboro',
      description: 'Maço com 20 cigarros'
    },
    {
      id: 22,
      category: 'tabacaria',
      name: 'Cigarro Pall Mall',
      price: 11.50,
      image: 'https://via.placeholder.com/200x300?text=Cigarro+Pall+Mall',
      description: 'Maço com 20 cigarros'
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
      id: 24,
      category: 'tabacaria',
      name: 'Essência Tabaco',
      price: 15.00,
      image: 'https://via.placeholder.com/200x300?text=Essencia+Tabaco',
      description: 'Essência para narguilé'
    },
    {
      id: 25,
      category: 'tabacaria',
      name: 'Acessórios Narguilé',
      price: 30.00,
      image: 'https://via.placeholder.com/200x300?text=Acessorios+Narguile',
      description: 'Kit de acessórios'
    },
    {
      id: 26,
      category: 'tabacaria',
      name: 'Filtro de Cigarro',
      price: 8.00,
      image: 'https://via.placeholder.com/200x300?text=Filtro+Cigarro',
      description: 'Caixa com 100 filtros'
    },

    // Conveniência
    {
      id: 27,
      category: 'conveniencia',
      name: 'Salgadinho Doritos',
      price: 3.50,
      image: 'https://via.placeholder.com/200x300?text=Doritos',
      description: 'Salgadinho crocante'
    },
    {
      id: 28,
      category: 'conveniencia',
      name: 'Chocolate Lacta',
      price: 4.00,
      image: 'https://via.placeholder.com/200x300?text=Chocolate+Lacta',
      description: 'Chocolate premium 100g'
    },
    {
      id: 29,
      category: 'conveniencia',
      name: 'Biscoito Integral',
      price: 5.50,
      image: 'https://via.placeholder.com/200x300?text=Biscoito+Integral',
      description: 'Biscoito saudável 200g'
    },
    {
      id: 30,
      category: 'conveniencia',
      name: 'Chiclete Trident',
      price: 2.50,
      image: 'https://via.placeholder.com/200x300?text=Chiclete+Trident',
      description: 'Chiclete sem açúcar'
    },
    {
      id: 31,
      category: 'conveniencia',
      name: 'Pirulito Sortido',
      price: 1.50,
      image: 'https://via.placeholder.com/200x300?text=Pirulito+Sortido',
      description: 'Pirulito colorido'
    },
    {
      id: 32,
      category: 'conveniencia',
      name: 'Amendoim Salgado',
      price: 4.50,
      image: 'https://via.placeholder.com/200x300?text=Amendoim+Salgado',
      description: 'Amendoim torrado 200g'
    }
  ]

  // Filtrar produtos por categoria
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'todos') {
      return products
    }
    return products.filter(p => p.category === selectedCategory)
  }, [selectedCategory])

  const categories = [
    { id: 'todos', name: 'Todos os Produtos', icon: '🛍️' },
    { id: 'cervejas', name: 'Cervejas', icon: '🍺' },
    { id: 'vinhos', name: 'Vinhos', icon: '🍷' },
    { id: 'destilados', name: 'Destilados', icon: '🥃' },
    { id: 'energeticos', name: 'Energéticos', icon: '⚡' },
    { id: 'tabacaria', name: 'Tabacaria', icon: '🚬' },
    { id: 'conveniencia', name: 'Conveniência', icon: '🎁' }
  ]

  return (
    <div className="catalog">
      <div className="catalog-header">
        <div className="container">
          <h1 className="catalog-title">CATÁLOGO DE PRODUTOS</h1>
          <p className="catalog-subtitle">Explore nossa seleção completa de bebidas e tabacaria</p>
        </div>
      </div>

      <div className="container">
        {/* Filtros de Categoria */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Grid de Produtos */}
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="no-products">
              <p>Nenhum produto encontrado nesta categoria</p>
            </div>
          )}
        </div>

        {/* Informações Adicionais */}
        <div className="catalog-info">
          <div className="info-box">
            <h3>Não encontrou o que procura?</h3>
            <p>Entre em contato conosco pelo WhatsApp para consultar disponibilidade de outros produtos.</p>
            <a 
              href="https://wa.me/5591999999999?text=Olá! Gostaria de consultar sobre produtos específicos"
              target="_blank"
              rel="noopener noreferrer"
              className="info-link"
            >
              Falar com Atendente →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalog
