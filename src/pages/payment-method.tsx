import { useState } from 'react'
import './payment-method.css'

function PaymentMethod() {
  // Estado para el método de pago seleccionado en la parte superior
  const [paymentType, setPaymentType] = useState('card') // 'card', 'cash', 'paypal'
  
  // Estado para la tarjeta seleccionada en la lista
  const [selectedCard, setSelectedCard] = useState(1) // ID de la tarjeta seleccionada

  // Datos de las tarjetas guardadas
  const savedCards = [
    { id: 1, type: 'MasterCard', last4: '2048', icon: '🔴🟡' }, // Simulación visual
    { id: 2, type: 'Visa', last4: '1234', icon: '🔵' }
  ]

  return (
    <main className="app-container">
      {/* Cabecera Azul */}
      <header className="app-header payment-header">
        <button className="back-button">‹</button>
        <h1>Payment Method</h1>
      </header>

      <div className="content-scroll-area">
        
        {/* Selector de Tipo de Pago (Círculos Grandes) */}
        <div className="payment-types-row">
          
          {/* Opción: Card */}
          <button 
            className={`payment-type-btn ${paymentType === 'card' ? 'active' : ''}`}
            onClick={() => setPaymentType('card')}
          >
            <div className="icon-circle">
              <span className="payment-icon">💳</span>
            </div>
            <span className="payment-label">Card</span>
          </button>

          {/* Opción: Cash */}
          <button 
            className={`payment-type-btn ${paymentType === 'cash' ? 'active' : ''}`}
            onClick={() => setPaymentType('cash')}
          >
            <div className="icon-circle">
              <span className="payment-icon">💲</span>
            </div>
            <span className="payment-label">Cash</span>
          </button>

          {/* Opción: PayPal */}
          <button 
            className={`payment-type-btn ${paymentType === 'paypal' ? 'active' : ''}`}
            onClick={() => setPaymentType('paypal')}
          >
            <div className="icon-circle">
              <span className="payment-icon">🅿️</span>
            </div>
            <span className="payment-label">PayPal</span>
          </button>
        </div>

        {/* Lista de Tarjetas Guardadas */}
        <div className="saved-cards-list">
          {savedCards.map((card) => (
            <div 
              key={card.id} 
              className={`card-item ${selectedCard === card.id ? 'selected' : ''}`}
              onClick={() => setSelectedCard(card.id)}
            >
              <div className="card-icon">
                {card.type === 'MasterCard' ? (
                   <div className="mc-logo">
                     <div className="circle red"></div>
                     <div className="circle yellow"></div>
                   </div>
                ) : (
                  <div className="visa-logo">VISA</div>
                )}
              </div>
              
              <div className="card-details">
                <span className="card-name">{card.type}</span>
                <span className="card-number">•••• {card.last4}</span>
              </div>

              <div className={`radio-circle ${selectedCard === card.id ? 'selected' : ''}`}>
                {selectedCard === card.id && <div className="radio-inner" />}
              </div>
            </div>
          ))}
        </div>

        {/* Botón Añadir Nueva Tarjeta */}
        <button className="add-card-btn">
          <span className="plus-icon">+</span>
          Add new card
        </button>

      </div>

      {/* Footer Fijo con Botón Next */}
      <div className="footer-fixed">
        <button className="next-btn">Next</button>
      </div>
    </main>
  )
}

export default PaymentMethod