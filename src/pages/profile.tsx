import { useState } from 'react'
import './profile.css'

function Profile() {
  // Estados para los toggles de notificaciones
  const [notifications, setNotifications] = useState(true)
  const [locationData, setLocationData] = useState(false)

  return (
    <main className="app-container">
      {/* Cabecera Azul */}
      <header className="app-header profile-header">
        <h1>Profile</h1>
      </header>

      <div className="content-scroll-area">
        
        {/* Tarjeta de Usuario */}
        <div className="user-card">
          <div className="avatar-container">
            {/* Placeholder de avatar con emoji o imagen */}
            <div className="avatar">👩🏻</div>
          </div>
          <div className="user-info">
            <span className="user-name">Laura Vat</span>
            <div className="user-points">
              <span className="star-icon">★</span>
              <span className="points-text">124 points</span>
            </div>
          </div>
          <button className="edit-profile-btn">✎</button>
        </div>

        {/* Sección: Account */}
        <div className="menu-section">
          <h2 className="section-title">Account</h2>
          <div className="menu-card">
            <button className="menu-item">
              <span className="menu-icon">📄</span>
              <span className="menu-label">Account details</span>
            </button>
            <button className="menu-item">
              <span className="menu-icon">💲</span>
              <span className="menu-label">Payment details</span>
            </button>
            <button className="menu-item">
              <span className="menu-icon">📅</span>
              <span className="menu-label">Order history</span>
            </button>
            <button className="menu-item">
              <span className="menu-icon">⭐</span>
              <span className="menu-label">Rewards</span>
            </button>
            <button className="menu-item">
              <span className="menu-icon">🏷️</span>
              <span className="menu-label">Student discount</span>
            </button>
          </div>
        </div>

        {/* Sección: Notifications */}
        <div className="menu-section">
          <h2 className="section-title">Notifications</h2>
          <div className="menu-card">
            <div className="menu-item toggle-item">
              <span className="menu-icon">🔔</span>
              <span className="menu-label">Receive notifications</span>
              <div 
                className={`toggle-switch ${notifications ? 'active' : ''}`}
                onClick={() => setNotifications(!notifications)}
              >
                <div className="toggle-knob"></div>
              </div>
            </div>
            <div className="menu-item toggle-item">
              <span className="menu-icon">📍</span>
              <span className="menu-label">Share location data</span>
              <div 
                className={`toggle-switch ${locationData ? 'active' : ''}`}
                onClick={() => setLocationData(!locationData)}
              >
                <div className="toggle-knob"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección: Other */}
        <div className="menu-section">
          <h2 className="section-title">Other</h2>
          <div className="menu-card">
            <button className="menu-item">
              <span className="menu-icon">📍</span>
              <span className="menu-label">Location</span>
            </button>
            <button className="menu-item">
              <span className="menu-icon">💲</span>
              <span className="menu-label">Currency</span>
            </button>
          </div>
        </div>

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
        <button className="nav-item active">
          <span className="nav-icon">👤</span>
          <span className="nav-label">Profile</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">🛒</span>
          <span className="nav-label">Cart</span>
        </button>
      </nav>
    </main>
  )
}

export default Profile