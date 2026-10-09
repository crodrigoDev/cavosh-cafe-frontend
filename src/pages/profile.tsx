import { useState } from 'react'
import './profile.css'
import headerImage from '../assets/images/dash.svg'
import loginImage from '../assets/images/login.svg'

function Profile() {
  const [notifications, setNotifications] = useState(true)
  const [locationData, setLocationData] = useState(false)

  return (
    <main className="app-container">

      {/* Cabecera con imagen de fondo */}
      <header
        className="app-header profile-header"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <h1 className="profile-title">Profile</h1>
      </header>

      {/* Tarjeta de Usuario superpuesta al header */}
      <div className="user-card-wrapper">
        <div className="user-card">
          <div className="avatar-container">
            <div className="avatar">
              <img src={loginImage} alt="Laura Vat" />
            </div>
          </div>
          <div className="user-info">
            <span className="user-name">Laura Vat</span>
            <div className="user-points">
              {/* Estrella con color #e85d4a */}
              <svg
                className="star-icon"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="#e85d4a"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span className="points-text">124 points</span>
            </div>
          </div>
          {/* Lápiz: ahora usa currentColor */}
          <button className="edit-profile-btn" aria-label="Edit profile">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="content-scroll-area">

        {/* Sección: Account */}
        <div className="menu-section">
          <h2 className="section-title">Account</h2>
          <div className="menu-card">

            <button type="button" className="menu-item">
              <span className="menu-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="8" y1="13" x2="16" y2="13" />
                  <line x1="8" y1="17" x2="16" y2="17" />
                  <line x1="8" y1="9"  x2="10" y2="9" />
                </svg>
              </span>
              <span className="menu-label">Account details</span>
            </button>

            <button type="button" className="menu-item">
              <span className="menu-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </span>
              <span className="menu-label">Payment details</span>
            </button>

            <button type="button" className="menu-item">
              <span className="menu-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8"  y1="2" x2="8"  y2="6" />
                  <line x1="3"  y1="10" x2="21" y2="10" />
                  <line x1="8"  y1="14" x2="8"  y2="14" />
                  <line x1="12" y1="14" x2="12" y2="14" />
                  <line x1="16" y1="14" x2="16" y2="14" />
                </svg>
              </span>
              <span className="menu-label">Order history</span>
            </button>

            <button type="button" className="menu-item">
              <span className="menu-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </span>
              <span className="menu-label">Rewards</span>
            </button>

            <button type="button" className="menu-item">
              <span className="menu-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
              </span>
              <span className="menu-label">Student discount</span>
            </button>

          </div>
        </div>

        {/* Sección: Notifications */}
        <div className="menu-section">
          <h2 className="section-title">Notifications</h2>
          <div className="menu-card">

            <div className="menu-item toggle-item">
              <span className="menu-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </span>
              <span className="menu-label">Receive notifications</span>
              <div
                className={`toggle-switch ${notifications ? 'active' : ''}`}
                role="switch"
                aria-checked={notifications}
                aria-label="Receive notifications"
                tabIndex={0}
                onClick={() => setNotifications(!notifications)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setNotifications(!notifications)
                  }
                }}
              >
                <div className="toggle-knob"></div>
              </div>
            </div>

            <div className="menu-item toggle-item">
              <span className="menu-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </span>
              <span className="menu-label">Share location data</span>
              <div
                className={`toggle-switch ${locationData ? 'active' : ''}`}
                role="switch"
                aria-checked={locationData}
                aria-label="Share location data"
                tabIndex={0}
                onClick={() => setLocationData(!locationData)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setLocationData(!locationData)
                  }
                }}
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

            <button type="button" className="menu-item">
              <span className="menu-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span className="menu-label">Location</span>
            </button>

            <button type="button" className="menu-item">
              <span className="menu-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </span>
              <span className="menu-label">Currency</span>
            </button>

          </div>
        </div>

      </div>

      {/* Barra de Navegación Inferior */}
      <nav className="bottom-nav">

        <button type="button" className="nav-item">
          <span className="nav-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
            </svg>
          </span>
          <span className="nav-label">Home</span>
        </button>

        <button type="button" className="nav-item">
          <span className="nav-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z" />
              <path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z" />
            </svg>
          </span>
          <span className="nav-label">Menu</span>
        </button>

        <button type="button" className="nav-item">
          <span className="nav-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </span>
          <span className="nav-label">Favorites</span>
        </button>

        <button type="button" className="nav-item active">
          <span className="nav-icon">
            <svg width="22" height="22" viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8v0H4z" />
            </svg>
          </span>
          <span className="nav-label">Profile</span>
        </button>

        <button type="button" className="nav-item">
          <span className="nav-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </span>
          <span className="nav-label">Cart</span>
        </button>

      </nav>
    </main>
  )
}

export default Profile