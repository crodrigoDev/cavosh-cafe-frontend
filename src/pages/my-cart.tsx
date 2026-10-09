import { useState } from 'react'
import './my-cart.css'
import headerImage from '../assets/images/dash.svg'
import cafe1 from '../assets/images/cafe1.png'
import cafe3 from '../assets/images/cafe3.png'

/* =========================
   ÍCONOS SVG INLINE
   ========================= */

const HomeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M11.6 4.4
             L5.8 9.3
             Q5 10 5 10.9
             V17.6
             Q5 19.5 6.9 19.5
             H17.1
             Q19 19.5 19 17.6
             V10.9
             Q19 10 18.2 9.3
             L12.4 4.4
             Q12 4 11.6 4.4
             Z" />
  </svg>
)

const MenuIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 6.5C10.5 5 8.5 4.5 6 4.5c-1 0-2 .1-3 .4v13c1-.3 2-.4 3-.4 2.5 0 4.5.5 6 2" />
    <path d="M12 6.5C13.5 5 15.5 4.5 18 4.5c1 0 2 .1 3 .4v13c-1-.3-2-.4-3-.4-2.5 0-4.5.5-6 2" />
    <path d="M12 6.5v13" />
  </svg>
)

const HeartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const ProfileIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
  </svg>
)

const CartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 4h2l2.2 10.5a2 2 0 0 0 2 1.5h7.6a2 2 0 0 0 2-1.6L20.5 7H6" />
    <circle cx="9.5" cy="19.5" r="1.8" fill="currentColor" stroke="none" />
    <circle cx="17" cy="19.5" r="1.8" fill="currentColor" stroke="none" />
  </svg>
)

/* =========================
   COMPONENTE PRINCIPAL
   ========================= */

function MyCart() {
  const [promoCode, setPromoCode] = useState('')
  const [activeTab, setActiveTab] = useState('cart') // 👈 tab activo

  // Datos de ejemplo para los productos
  const cartItems = [
    {
      id: 1,
      name: 'Caramel Macchiato',
      description: 'Small, Oat milk',
      price: 9.40,
      quantity: 2,
      image: cafe1
    },
    {
      id: 2,
      name: 'Traditional Cappuccino',
      description: 'Small, Skim milk, No caffeine',
      price: 3.00,
      quantity: 1,
      image: cafe3
    }
  ]

  // Configuración de los tabs
  const navItems = [
    { id: 'home',      label: 'Home',      Icon: HomeIcon },
    { id: 'menu',      label: 'Menu',      Icon: MenuIcon },
    { id: 'favorites', label: 'Favorites', Icon: HeartIcon },
    { id: 'profile',   label: 'Profile',   Icon: ProfileIcon },
    { id: 'cart',      label: 'Cart',      Icon: CartIcon }
  ]

  return (
    <main className="app-container">
      {/* Cabecera con imagen de fondo */}
      <header
        className="app-header cart-header"
        style={{
          backgroundImage: `url(${headerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
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
                <button className="qty-btn" type="button">+</button>
                <span className="qty-value">{item.quantity}</span>
                <button className="qty-btn" type="button">-</button>
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
            <button className="apply-btn" type="button">Apply</button>
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
        <button className="checkout-btn" type="button">Check Out</button>
      </div>

      {/* Barra de Navegación Inferior */}
      <nav className="bottom-nav" aria-label="Navegación principal">
        {navItems.map(({ id, label, Icon }) => {
          const isActive = activeTab === id
          return (
            <button
              key={id}
              type="button"
              className={`nav-item${isActive ? ' active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
              onClick={() => setActiveTab(id)}
            >
              <span className="nav-icon"><Icon /></span>
              <span className="nav-label">{label}</span>
            </button>
          )
        })}
      </nav>
    </main>
  )
}

export default MyCart