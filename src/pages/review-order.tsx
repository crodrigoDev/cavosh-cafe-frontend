import { useState } from 'react'
import './review-order.css'

function ReviewOrder() {
  // Datos de ejemplo para el pedido
  const orderItems = [
    { id: 1, name: "Caramel Macchiato", qty: 2, description: "Small, Oat milk", price: 9.40 },
    { id: 2, name: "Traditional Cappuccino", qty: 1, description: "Small, Skim milk, No caffeine", price: 3.00 }
  ]

  const subtotal = 11.20

  return (
    <main className="app-container">
      {/* Cabecera Azul */}
      <header className="app-header review-header">
        <button className="back-button">‹</button>
        <h1>Review Order</h1>
      </header>

      <div className="content-scroll-area">
        
        {/* Sección: Order details */}
        <div className="review-section">
          <h2 className="section-label">Order details</h2>
          
          <div className="info-card">
            {orderItems.map((item, index) => (
              <div key={item.id} className={`order-item-row ${index !== orderItems.length - 1 ? 'with-border' : ''}`}>
                <div className="item-info">
                  <span className="item-name">
                    {item.name} <span className="item-qty">x {item.qty}</span>
                  </span>
                  <span className="item-desc">{item.description}</span>
                </div>
                <span className="item-price">${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sección: Deliver to */}
        <div className="review-section">
          <h2 className="section-label">Deliver to</h2>
          
          <div className="info-card single-row">
            <div className="text-content">
              <span className="main-text">Cavosh Cafe</span>
              <span className="sub-text">Legnicka 5, Wroclaw</span>
            </div>
            <button className="edit-icon-btn">✎</button>
          </div>
        </div>

        {/* Sección: Pick up details */}
        <div className="review-section">
          <h2 className="section-label">Pick up details</h2>
          
          <div className="info-card">
            <div className="detail-row">
              <span className="detail-label">Pick-up time</span>
              <span className="detail-value">08:30 AM</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Pick-up date</span>
              <span className="detail-value">Thu 29.11.2022</span>
            </div>
            {/* Icono de edición flotante a la derecha */}
            <button className="edit-icon-btn absolute-right">✎</button>
          </div>
        </div>

        {/* Sección: Payment */}
        <div className="review-section">
          <h2 className="section-label">Payment</h2>
          
          <div className="info-card single-row">
            <div className="text-content payment-content">
              <span className="main-text">Card</span>
              <span className="sub-text">MasterCard /••••2048</span>
            </div>
            <button className="edit-icon-btn">✎</button>
          </div>
        </div>

      </div>

      {/* Footer Fijo con Subtotal y Botón */}
      <div className="footer-fixed review-footer">
        <div className="footer-left">
          <span className="subtotal-label">Subtotal</span>
          <span className="subtotal-value">${subtotal.toFixed(2)}</span>
        </div>
        <button className="place-order-btn">Place Order</button>
      </div>
    </main>
  )
}

export default ReviewOrder