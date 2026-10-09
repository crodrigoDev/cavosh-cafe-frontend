import { useState } from 'react'
import './order-tracking.css'
import headerImage from '../assets/images/dash.svg'

function OrderTracking() {
  const [activeTab, setActiveTab] = useState('tracking')

  const trackingSteps = [
    { id: 1, label: 'Order placed', status: 'completed' },
    { id: 2, label: 'Preparing', status: 'active' },
    { id: 3, label: 'Order is ready!', status: 'pending' },
  ]

  // Calculamos los porcentajes de altura para cada capa de color
  const totalSteps = trackingSteps.length
  const completedIndex = trackingSteps.findIndex((s) => s.status === 'completed')
  const activeIndex = trackingSteps.findIndex((s) => s.status === 'active')

  const completedHeight = ((completedIndex + 1) / totalSteps) * 100
  const activeHeight = ((activeIndex + 1) / totalSteps) * 100

  return (
    <main className="app-container">
      <img src={headerImage} alt="" className="dashboard-bg" aria-hidden="true" />
      <div className="dashboard-overlay" aria-hidden="true"></div>

      <h1 className="dashboard-title">Thank you for the order!</h1>

      <div className="method-tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'tracking'}
          className={`method-tab ${activeTab === 'tracking' ? 'active' : ''}`}
          onClick={() => setActiveTab('tracking')}
        >
          Tracking
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'details'}
          className={`method-tab ${activeTab === 'details' ? 'active' : ''}`}
          onClick={() => setActiveTab('details')}
        >
          Order details
        </button>
      </div>

      <div className="content-scroll-area">
        {activeTab === 'tracking' ? (
          <>
            {/* Tarjeta de Número de Pedido */}
            <div className="order-number-card">
              <span className="order-number-label">Order number</span>
              <div
                className="order-number-badge"
                style={{ backgroundImage: `url(${headerImage})` }}
              >
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

            {/* Sección de Seguimiento */}
            <div className="tracking-section">
              <h2 className="section-title">Order tracking</h2>

              <div className="timeline-wrapper">
                {/* La barra: una sola pieza con capas superpuestas */}
                <div className="timeline-bar">
                  <div
                    className="timeline-bar-fill active"
                    style={{ height: `${activeHeight}%` }}
                  ></div>
                  <div
                    className="timeline-bar-fill completed"
                    style={{ height: `${completedHeight}%` }}
                  ></div>
                </div>

                {/* Los textos, alineados con los segmentos */}
                <div className="timeline-steps">
                  {trackingSteps.map((step) => (
                    <div key={step.id} className={`timeline-step ${step.status}`}>
                      <span className="step-label">{step.label}</span>

                      {step.status === 'completed' ? (
                        <span className="check-icon" aria-label="Completado">
                          {/* Cuadrado gris de fondo */}
                          <svg
                            className="check-bg"
                            viewBox="0 0 28 28"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <rect
                              x="0"
                              y="0"
                              width="28"
                              height="28"
                              rx="8"
                              ry="8"
                              fill="#F3F4F6"
                            />
                          </svg>

                          {/* Check rojo con puntas redondeadas */}
                          <svg
                            className="check-mark"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              d="M4 12.5 L9.5 18 L20 6.5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      ) : (
                        <div className="check-placeholder"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="order-details-section">
            <h2 className="section-title">Order details</h2>
            <div className="order-details-card">
              <div className="detail-row">
                <span className="detail-label">Item</span>
                <span className="detail-value">1x Flat White</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Item</span>
                <span className="detail-value">1x Croissant</span>
              </div>
              <div className="detail-row total">
                <span className="detail-label">Total</span>
                <span className="detail-value">$8.50</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Fijo */}
      <div className="footer-fixed">
        <button type="button" className="back-home-btn">
          Back Home
        </button>
      </div>
    </main>
  )
}

export default OrderTracking