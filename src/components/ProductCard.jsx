import React from 'react'
import './ProductCard.css'

function ProductCard({ product }) {
  const whatsappMessage = `Olá! Gostaria de fazer um pedido de: ${product.name} - R$ ${product.price.toFixed(2)}`
  const whatsappUrl = `https://wa.me/5591999999999?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-overlay"></div>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        
        {product.description && (
          <p className="product-description">{product.description}</p>
        )}

        <div className="product-footer">
          <span className="product-price">R$ {product.price.toFixed(2)}</span>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            Pedir
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
