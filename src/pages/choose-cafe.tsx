import { useState } from 'react'
import './choose-cafe.css'

function ChooseCafe() {
  // Estado para controlar qué sección está abierta (acordeón)
  const [openSection, setOpenSection] = useState<string | null>('near') 
  
  // Estado para alternar entre Lista y Mapa
  const [viewMode, setViewMode] = useState('map')

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  // Datos de ejemplo para la lista
  const cafesList = [
    { id: 1, name: "Cavosh Cafe", address: "Legnicka 5, Wroclaw", hours: "8:00 AM - 22:00 PM", isOpen: true },
    { id: 2, name: "Starbucks", address: "Rynek 10, Wroclaw", hours: "7:00 AM - 21:00 PM", isOpen: true },
    { id: 3, name: "Costa Coffee", address: "Swidnicka 40, Wroclaw", hours: "9:00 AM - 20:00 PM", isOpen: false },
  ]

  return (
    <main className="app-container">
      {/* Barra superior azul */}
      <header className="app-header">
        <button className="back-button">‹</button>
        <h1>Choose Your Cafe</h1>
      </header>

      <div className="content-scroll-area">
        
        {/* Sección 1: Frecuentes */}
        <div className="selection-section">
          <div className="section-header" onClick={() => toggleSection('frequent')}>
            <span className="section-title">Frequently chosen</span>
            <div className={`radio-circle ${openSection === 'frequent' ? 'selected' : ''}`}>
              {openSection === 'frequent' && <div className="radio-inner" />}
            </div>
          </div>
        </div>

        {/* Sección 2: Buscar por ciudad */}
        <div className="selection-section">
          <div className="section-header" onClick={() => toggleSection('city')}>
            <span className="section-title">Search by city</span>
            <div className={`radio-circle ${openSection === 'city' ? 'selected' : ''}`}>
               {openSection === 'city' && <div className="radio-inner" />}
            </div>
          </div>
          
          {openSection === 'city' && (
            <div className="section-content">
              <div className="input-wrapper">
                <input type="text" placeholder="City" className="city-input" />
                <span className="search-icon">🔍</span>
              </div>
            </div>
          )}
        </div>

        {/* Sección 3: Cafés cerca de mí */}
        <div className="selection-section">
          <div className="section-header" onClick={() => toggleSection('near')}>
            <div className="title-group">
              <span className="section-title">Cafes near me</span>
              <span className="section-subtitle">Turn on location to see nearby cafes.</span>
            </div>
            <div className="header-actions">
              <button className="turn-on-btn">Turn On</button>
              <div className={`radio-circle ${openSection === 'near' ? 'selected' : ''}`}>
                 {openSection === 'near' && <div className="radio-inner" />}
              </div>
            </div>
          </div>

          {openSection === 'near' && (
            <div className="section-content expanded-content">
              
              {/* Tabs Lista / Mapa */}
              <div className="view-tabs">
                <button 
                  className={`view-tab ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >List</button>
                <button 
                  className={`view-tab ${viewMode === 'map' ? 'active' : ''}`}
                  onClick={() => setViewMode('map')}
                >Map</button>
              </div>

              {/* Condicional: Mostrar Mapa o Lista */}
              {viewMode === 'map' ? (
                <div className="map-container">
                  <div className="map-background">
                    <div className="map-line line-1"></div>
                    <div className="map-line line-2"></div>
                    
                    <div className="map-pin pin-1">📍</div>
                    <div className="map-pin pin-2">📍</div>

                    <div className="map-card">
                      <div className="card-header">
                        <span className="cafe-name">Cavosh Cafe</span>
                        <span className="status-dot"></span>
                      </div>
                      <p className="cafe-address">Legnicka 5, Wroclaw</p>
                      <p className="cafe-hours">Open: 8:00 AM - 22:00 PM</p>
                      <button className="details-link">Details</button>
                    </div>

                    <div className="map-tag">Tap pins to select</div>
                  </div>
                </div>
              ) : (
                /* VISTA DE LISTA */
                <div className="list-container">
                  {cafesList.map((cafe) => (
                    <div key={cafe.id} className="list-item">
                      <div className="list-item-info">
                        <div className="list-header">
                          <span className="cafe-name">{cafe.name}</span>
                          <span className={`status-dot ${cafe.isOpen ? 'open' : 'closed'}`}></span>
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
          )}
        </div>
      </div>

      {/* Footer Fijo */}
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