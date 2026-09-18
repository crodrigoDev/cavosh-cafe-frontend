import { useState } from 'react'
import './my-cart.css'

function MyCart() {
  const [promoCode, setPromoCode] = useState('')

  // Datos de ejemplo para los productos
  const cartItems = [
    {
      id: 1,
      name: "Caramel Macchiato",
      description: "Small, Oat milk",
      price: 9.40,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=150&h=150" // Placeholder de café
    },
    {
      id: 2,
      name: "Traditional Cappuccino",
      description: "Small, Skim milk, No caffeine",
      price: 3.00,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=150&h=150" // Placeholder de café
    }
  ]

  return (
    <main className="app-container">
      {/* Cabecera */}
      <header className="app-header cart-header">
        <h1>My Cart</h1>
      </header>

      <div className="content-scroll-area">
        
        {/* Lista de Productos */}
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-card">
              <div className="item-image-wrapper">
                <img src={item.image} alt={item.name} className="item-image" />
              </div>
              
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">{item.description}</p>
                <p className="item-price">${item.price.toFixed(2)}</p>
              </div>

              <div className="quantity-control">
                <button className="qty-btn">+</button>
                <span className="qty-value">{item.quantity}</span>
                <button className="qty-btn">-</button>
              </div>
            </div>
          ))}
        </div>

        {/* Código Promocional */}
        <div className="promo-section">
          <label className="promo-label">Promo code</label>
          <div className="promo-input-group">
            <input 
              type="text" 
              className="promo-input" 
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button className="apply-btn">Apply</button>
          </div>
        </div>

        {/* Resumen de Totales */}
        <div className="totals-section">
          <div className="total-row">
            <span className="total-label">Cart</span>
            <span className="total-value">$12.40</span>
          </div>
          <div className="total-row">
            <span className="total-label">Discount</span>
            <span className="total-value">$1.20</span>
          </div>
          <div className="total-row grand-total">
            <span className="total-label">Total</span>
            <span className="total-value">$11.20</span>
          </div>
        </div>

        {/* Botón Checkout */}
        <button className="checkout-btn">Check Out</button>
      </div>

      {/* Barra de Navegación Inferior */}
      <nav className="bottom-nav">
        <button className="nav-item">
          <span className="nav-icon">🏠</span>
          <span className="nav-label">Home</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">📖</span>
          <span className="nav-label">Menu</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">❤️</span>
          <span className="nav-label">Favorites</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">👤</span>
          <span className="nav-label">Profile</span>
        </button>
        <button className="nav-item active">
          <span className="nav-icon">🛒</span>
          <span className="nav-label">Cart</span>
        </button>
      </nav>
    </main>
  )
}

export default MyCart