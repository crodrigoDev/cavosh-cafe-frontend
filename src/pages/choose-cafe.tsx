import { useState } from 'react'
import './choose-cafe.css'

import headerImage from '../assets/images/dash.svg'
import miniDash from '../assets/images/minidash.svg'

function ChooseCafe() {
  const [selectedSection, setSelectedSection] = useState<'frequent' | 'city' | 'near'>('near')
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map')

  const cafesList = [
    { id: 1, name: "Cavosh Cafe", address: "Legnicka 5, Wroclaw", hours: "8:00 AM - 22:00 PM", isOpen: true },
    { id: 2, name: "Starbucks", address: "Rynek 10, Wroclaw", hours: "7:00 AM - 21:00 PM", isOpen: true },
    { id: 3, name: "Costa Coffee", address: "Swidnicka 40, Wroclaw", hours: "9:00 AM - 20:00 PM", isOpen: false },
  ]

  const selectSection = (section: 'frequent' | 'city' | 'near') => {
    setSelectedSection(section)
  }

  return (
    <main className="app-container">
      {/* HEADER */}
      <header className="app-header">
        <img src={headerImage} alt="Cafe" className="header-image" />

        <div className="header-overlay">
          <button
            className="back-button"
            aria-label="Go back"
            onClick={() => window.history.back()}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <h1>Choose Your Cafe</h1>
        </div>
      </header>

      <div className="content-scroll-area">
        {/* Sección 1: Frequently chosen */}
        <div className="selection-section">
          <div className="section-header" onClick={() => selectSection('frequent')}>
            <span className="section-title">Frequently chosen</span>
            <div className={`radio-circle ${selectedSection === 'frequent' ? 'selected' : ''}`}>
              {selectedSection === 'frequent' && <div className="radio-inner" />}
            </div>
          </div>
        </div>

        {/* Sección 2: Search by city */}
        <div className="selection-section">
          <div className="section-header" onClick={() => selectSection('city')}>
            <span className="section-title">Search by city</span>
            <div className={`radio-circle ${selectedSection === 'city' ? 'selected' : ''}`}>
              {selectedSection === 'city' && <div className="radio-inner" />}
            </div>
          </div>

          <div className="section-content">
            <div className="input-wrapper">
              <input type="text" placeholder="City" className="city-input" />
            </div>
          </div>
        </div>

        {/* Sección 3: Cafes near me */}
        <div className="selection-section">
          <div className="section-header" onClick={() => selectSection('near')}>
            <span className="section-title">Cafes near me</span>
            <div className={`radio-circle ${selectedSection === 'near' ? 'selected' : ''}`}>
              {selectedSection === 'near' && <div className="radio-inner" />}
            </div>
          </div>

          <div className="near-subtitle-row">
            <span className="section-subtitle">Turn on location to see nearby cafes.</span>
            <button className="turn-on-btn">Turn On</button>
          </div>

          <div className="section-content expanded-content">
            <div className="view-tabs">
              <button
                className={`view-tab ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                List
              </button>
              <button
                className={`view-tab ${viewMode === 'map' ? 'active' : ''}`}
                onClick={() => setViewMode('map')}
              >
                Map
              </button>
            </div>

            {viewMode === 'map' ? (
              <div className="map-container">
                <div className="map-background">
                  <svg
                    className="map-roads"
                    viewBox="0 0 500 330"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="100%" height="100%" fill="#f4f7f9" />

                    <polygon
                      points="25,255 105,230 145,285 65,310"
                      fill="#e8eff5"
                      stroke="#a4b7c6"
                      strokeWidth="1.5"
                    />

                    <g
                      stroke="#a4b7c6"
                      strokeWidth="18"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    >
                      <path d="M -10,185 C 30,170 60,110 35,40 L 80,-10" />
                      <path d="M 125,-10 L 100,100 L 70,225 L 140,340" />
                      <path d="M 315,-10 L 210,180 L 180,240 L 130,340" />
                      <path d="M 35,160 L 100,100 M 70,225 L 180,240" />
                      <path d="M 180,240 L 330,220" />
                      <path d="M 330,-10 L 490,260" />
                      <path d="M 450,190 L 510,300" />
                    </g>

                    <g
                      stroke="#E6EBEF"
                      strokeWidth="15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    >
                      <path d="M -10,185 C 30,170 60,110 35,40 L 80,-10" />
                      <path d="M 125,-10 L 100,100 L 70,225 L 140,340" />
                      <path d="M 315,-10 L 210,180 L 180,240 L 130,340" />
                      <path d="M 35,160 L 100,100 M 70,225 L 180,240" />
                      <path d="M 180,240 L 330,220" />
                      <path d="M 330,-10 L 490,260" />
                      <path d="M 450,190 L 510,300" />
                    </g>
                  </svg>

                  <div className="map-pin pin-red">
                    <svg viewBox="0 0 44 55" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M 22 0 C 9.8 0 0 9.8 0 22 C 0 38.5 22 55 22 55 C 22 55 44 38.5 44 22 C 44 9.8 34.2 0 22 0 Z"
                        fill="#eb5737"
                      />
                      <circle cx="22" cy="20" r="8" fill="#ffffff" />
                    </svg>
                  </div>

                  <div className="map-pin pin-blue">
                    <svg viewBox="0 0 40 50" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M 20 0 C 9 0 0 9 0 20 C 0 35 20 50 20 50 C 20 50 40 35 40 20 C 40 9 31 0 20 0 Z"
                        fill="#537791"
                      />
                      <circle cx="20" cy="18" r="7" fill="#ffffff" />
                    </svg>
                  </div>

                  {/* Tarjeta flotante con el logo minidash.svg + texto encima */}
                  <div className="map-card">
                    <div className="map-card-logo">
                      <img src={miniDash} alt="Cavosh" className="map-card-logo-img" />
                      <span className="map-card-logo-text">Carvosh</span>
                    </div>
                    <div className="map-card-info">
                      <h3 className="map-card-title">Cavosh Cafe</h3>
                      <p className="map-card-address">
                        Legnicka 5,<br />
                        Wrocław
                      </p>
                    </div>
                    <p className="map-card-hours">Open: 8:00 AM - 22:00 PM</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="list-container">
                {cafesList.map((cafe) => (
                  <div key={cafe.id} className="list-item">
                    <div className="list-item-info">
                      <div className="list-header">
                        <span className="cafe-name">{cafe.name}</span>
                        <span className={`status-dot ${cafe.isOpen ? 'open' : 'closed'}`} />
                      </div>
                      <p className="cafe-address">{cafe.address}</p>
                      <p className="cafe-hours">Open: {cafe.hours}</p>
                    </div>
                    <button className="select-cafe-btn">Select</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER FIJO */}
      <div className="footer-fixed">
        <div className="chosen-info">
          <span className="chosen-label">Chosen cafe</span>
          <span className="chosen-value">Legnicka 5, Wroclaw</span>
        </div>

        <div className="action-buttons">
          <button className="btn-save">Save</button>
          <button className="btn-cancel">Cancel</button>
        </div>
      </div>
    </main>
  )
}

export default ChooseCafe