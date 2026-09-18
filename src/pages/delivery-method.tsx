import { useState } from 'react'
import './delivery-method.css'

function DeliveryMethod() {
  const [method, setMethod] = useState('pickup') // 'pickup' o 'delivery'
  const [selectedDate, setSelectedDate] = useState(4) // Día 4 seleccionado por defecto
  const [time, setTime] = useState('08:00 AM')
  const [pickupNow, setPickupNow] = useState(false)

  // Datos simulados para el calendario de Noviembre 2022
  // (Empezando en Lunes)
  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
  
  // Matriz que representa las semanas del mes. 
  // null representa espacios vacíos o días de otro mes.
  const calendarDays = [
    [null, null, null, null, 1, 2, 3], // Semana 1 (Jueves empieza el 1)
    [4, 5, 6, 7, 8, 9, 10],           // Semana 2 (Día 4 seleccionado)
    [11, 12, 13, 14, 15, 16, 17],     // Semana 3
    [18, 19, 20, 21, 22, 23, 24],     // Semana 4
    [25, 26, 27, 28, 29, 30, null]    // Semana 5
  ]

  return (
    <main className="app-container">
      {/* Cabecera Azul */}
      <header className="app-header delivery-header">
        <button className="back-button">‹</button>
        <h1>Delivery Method</h1>
      </header>

      <div className="content-scroll-area">
        
        {/* Tabs Pick up / Delivery */}
        <div className="method-tabs">
          <button 
            className={`method-tab ${method === 'pickup' ? 'active' : ''}`}
            onClick={() => setMethod('pickup')}
          >
            Pick up
          </button>
          <button 
            className={`method-tab ${method === 'delivery' ? 'active' : ''}`}
            onClick={() => setMethod('delivery')}
          >
            Delivery
          </button>
        </div>

        {/* Sección: Scheduled pick up */}
        <div className="section-block">
          <div className="section-header-row">
            <h2 className="section-title">Scheduled pick up</h2>
            <div className={`radio-circle ${!pickupNow ? 'selected' : ''}`}>
              {!pickupNow && <div className="radio-inner" />}
            </div>
          </div>
          
          <p className="section-subtitle">Choose date</p>

          {/* Calendario */}
          <div className="calendar-container">
            <div className="calendar-header">
              <button className="cal-nav-btn">‹</button>
              <span className="cal-month">November 2022</span>
              <button className="cal-nav-btn">›</button>
            </div>

            <div className="calendar-grid">
              {/* Días de la semana */}
              {daysOfWeek.map(day => (
                <div key={day} className="cal-day-name">{day}</div>
              ))}
              
              {/* Días del mes */}
              {calendarDays.flat().map((day, index) => (
                <div 
                  key={index} 
                  className={`cal-day ${day === selectedDate ? 'selected' : ''} ${day === null ? 'empty' : ''}`}
                  onClick={() => day && setSelectedDate(day)}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>

          {/* Selector de Hora */}
          <div className="time-selector-row">
            <span className="time-label">Choose time</span>
            <div className="time-input-wrapper">
              <input 
                type="text" 
                value={time} 
                onChange={(e) => setTime(e.target.value)}
                className="time-input"
              />
              <div className="time-arrows">
                <span>▲</span>
                <span>▼</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sección: Pickup now */}
        <div className="section-block" onClick={() => setPickupNow(true)}>
          <div className="section-header-row">
            <h2 className="section-title">Pickup now</h2>
            <div className={`radio-circle ${pickupNow ? 'selected' : ''}`}>
              {pickupNow && <div className="radio-inner" />}
            </div>
          </div>
          <p className="section-subtitle">Your order will be ready in 5-7 minutes.</p>
        </div>

      </div>

      {/* Footer Fijo con Botón Next */}
      <div className="footer-fixed">
        <button className="next-btn">Next</button>
      </div>
    </main>
  )
}

export default DeliveryMethod