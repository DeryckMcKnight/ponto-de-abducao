import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className="contact">
      <div className="contact-header">
        <div className="container">
          <h1 className="contact-title">ENTRE EM CONTATO</h1>
          <p className="contact-subtitle">Estamos prontos para atender você</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-content">
          {/* Informações de Contato */}
          <div className="contact-info-section">
            <h2 className="section-title">INFORMAÇÕES DE CONTATO</h2>

            <div className="info-cards-grid">
              <div className="contact-card">
                <div className="card-icon">📍</div>
                <h3>Localização</h3>
                <p>
                  Av. Cônego Batista Campos<br />
                  Vila dos Cabanos<br />
                  Passando o Supermercado Líder<br />
                  <br />
                  <strong>Pará - Brasil</strong>
                </p>
              </div>

              <div className="contact-card">
                <div className="card-icon">💬</div>
                <h3>WhatsApp</h3>
                <p>
                  <a href="https://wa.me/5591999999999" target="_blank" rel="noopener noreferrer">
                    (91) 99999-9999
                  </a>
                </p>
                <p className="card-description">
                  Clique para conversar conosco pelo WhatsApp
                </p>
              </div>

              <div className="contact-card">
                <div className="card-icon">📱</div>
                <h3>Instagram</h3>
                <p>
                  <a href="https://instagram.com/pontodeabducao" target="_blank" rel="noopener noreferrer">
                    @pontodeabducao
                  </a>
                </p>
                <p className="card-description">
                  Siga-nos para promoções e novidades
                </p>
              </div>

              <div className="contact-card">
                <div className="card-icon">🕐</div>
                <h3>Horário de Funcionamento</h3>
                <p>
                  Segunda a Sexta: 08:00 - 20:00<br />
                  Sábado: 08:00 - 18:00<br />
                  Domingo: 09:00 - 17:00
                </p>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="contact-form-section">
            <h2 className="section-title">ENVIE UMA MENSAGEM</h2>

            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefone</label>
                <input type="tel" id="phone" name="phone" />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Assunto</label>
                <input type="text" id="subject" name="subject" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        {/* Mapa */}
        <div className="map-section">
          <h2 className="section-title">NOSSA LOCALIZAÇÃO</h2>
          <div className="map-container">
            <iframe
              title="Ponto de Abdução - Localização"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8195849999996!2d-48.5!3d-1.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a4a4a4a4a4a4a5%3A0x4a4a4a4a4a4a4a4a!2sAv.%20C%C3%B4nego%20Batista%20Campos%2C%20Vila%20dos%20Cabanos!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-box">
            <h3>Pronto para fazer seu pedido?</h3>
            <p>Clique no botão abaixo para conversar conosco pelo WhatsApp</p>
            <a 
              href="https://wa.me/5591999999999?text=Olá! Gostaria de fazer um pedido no Ponto de Abdução."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
