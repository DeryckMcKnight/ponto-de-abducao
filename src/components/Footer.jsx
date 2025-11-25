import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Ponto de Abdução</h4>
            <p>Distribuidora, Conveniência e Tabacaria</p>
          </div>

          <div className="footer-section">
            <h4>Localização</h4>
            <p>Av. Cônego Batista Campos<br />Vila dos Cabanos<br />Passando o Supermercado Líder</p>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <p>
              <a href="https://wa.me/5591999999999" target="_blank" rel="noopener noreferrer">
                WhatsApp: (91) 99999-9999
              </a>
              <br />
              <a href="https://instagram.com/pontodeabducao" target="_blank" rel="noopener noreferrer">
                Instagram: @pontodeabducao
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Ponto de Abdução - Todos os direitos reservados</p>
          <p>Uma experiência fora deste mundo</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
