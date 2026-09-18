import { useState } from 'react'
import './order-tracking.css'

function OrderTracking() {
  // Estado para alternar entre las pestañas "Tracking" y "Order details"
  const [activeTab, setActiveTab] = useState('tracking')

  // Datos simulados para la línea de tiempo del pedido
  // El estado puede ser: 'completed', 'active', 'pending'
  const trackingSteps = [
    { id: 1, label: 'Order placed', time: '8:00 AM', status: 'completed' },
    { id: 2, label: 'Preparing', time: '8:05 AM', status: 'active' }, // En progreso
    { id: 3, label: 'Order is ready!', time: '--:--', status: 'pending' },
  ]

  return (
    <main className="app-container">
      {/* Cabecera Azul */}
      <header className="app-header tracking-header">
        <h1>Thank you for the order!</h1>
      </header>

      <div className="content-scroll-area">
        
        {/* Pestañas de Navegación (Tracking / Order details) */}
        <div className="tracking-tabs-container">
          <div className="tracking-tabs">
            <button 
              className={`tab-btn ${activeTab === 'tracking' ? 'active' : ''}`}
              onClick={() => setActiveTab('tracking')}
            >
              Tracking
            </button>
            <button 
              className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`}
              onClick={() => setActiveTab('details')}
            >
              Order details
            </button>
          </div>
        </div>

        {/* Tarjeta de Número de Pedido */}
        <div className="order-number-card">
          <span className="order-number-label">Order number</span>
          <div className="order-number-badge">
            <span className="badge-number">76</span>
          </div>
        </div>

        {/* Información de Recogida */}
        <div className="pickup-info-grid">
          <div className="info-row">
            <span className="info-label">Pick-up time</span>
            <span className="info-value">8:00 AM</span>
          </div>
          <div className="info-row">
            <span className="info-label">Pick-up location</span>
            <div className="info-value multiline">
              <span>Cavosh Cafe</span>
              <span>Legnicka 20, Wroclaw</span>
            </div>
          </div>
        </div>

        {/* Sección de Seguimiento (Timeline) */}
        <div className="tracking-section">
          <h2 className="section-title">Order tracking</h2>
          
          <div className="timeline-container">
            {/* Línea vertical de fondo */}
            <div className="timeline-line-bg"></div>
            
            {/* Barra de progreso vertical (azul oscuro) */}
            <div className="timeline-progress-bar" style={{ height: '33%' }}></div>

            {trackingSteps.map((step) => (
              <div key={step.id} className={`timeline-item ${step.status}`}>
                
                {/* Indicador visual (Círculo) */}
                <div className="timeline-indicator">
                  {step.status === 'completed' && <div className="circle filled"></div>}
                  {step.status === 'active' && <div className="circle active"></div>}
                  {step.status === 'pending' && <div className="circle pending"></div>}
                </div>

                {/* Texto del paso */}
                <div className="timeline-content">
                  <span className="step-label">{step.label}</span>
                  
                  {/* Checkmark para completados */}
                  {step.status === 'completed' && (
                    <span className="check-icon">✓</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer Fijo con Botón Back Home */}
      <div className="footer-fixed">
        <button className="back-home-btn">Back Home</button>
      </div>
    </main>
  )
}

export default OrderTracking