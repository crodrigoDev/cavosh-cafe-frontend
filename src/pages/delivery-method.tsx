import { useState } from 'react'
import headerImage from '../assets/images/dash.svg' // Importa la imagen SVG del header
import './delivery-method.css'

function DeliveryMethod() {
  const [method, setMethod] = useState('pickup')
  const [selectedDate, setSelectedDate] = useState(4)
  const [time, setTime] = useState('08:00 AM')
  const [pickupNow, setPickupNow] = useState(false)

  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

  const calendarDays = [
    [null, null, null, null, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, null]
  ]

  const adjustTime = (direction: number) => {
    const [timePart, period] = time.split(' ')
    let [hours, minutes] = timePart.split(':').map(Number)

    minutes += direction * 30

    if (minutes >= 60) {
      minutes = 0
      hours += 1
    } else if (minutes < 0) {
      minutes = 30
      hours -= 1
    }

    if (hours > 12) {
      hours = 1
    } else if (hours < 1) {
      hours = 12
    }

    const newPeriod = hours === 12 && minutes === 0
      ? (period === 'AM' ? 'PM' : 'AM')
      : period

    const formattedHours = String(hours).padStart(2, '0')
    const formattedMinutes = String(minutes).padStart(2, '0')
    setTime(`${formattedHours}:${formattedMinutes} ${newPeriod}`)
  }

  const handleNext = () => {
    const summary = pickupNow
      ? 'Pickup now (5–7 min)'
      : `${method === 'pickup' ? 'Scheduled pickup' : 'Delivery'} on Nov ${selectedDate} at ${time}`
    alert(`Next → ${summary}`)
  }

  return (
    <main className="app-container">

      {/* Cabecera: la imagen SVG cubre todo el header */}
      <header
        className="app-header delivery-header"
        style={{ backgroundImage: `url(${headerImage})` }} // Aquí se inyecta el SVG como fondo del header
      >
        <div className="header-top-row">
          <button className="back-button">‹</button>
          <h1>Delivery Method</h1>
        </div>
      </header>

      {/* Tabs anclados al app-container: nunca se mueven */}
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

      <div className="content-scroll-area">

        <div className="section-block">
          <div
            className="section-header-row"
            onClick={() => setPickupNow(false)}
            style={{ cursor: 'pointer' }}
          >
            <h2 className="section-title">Scheduled pick up</h2>
            <div className={`radio-circle ${!pickupNow ? 'selected' : ''}`}>
              {!pickupNow && <div className="radio-inner" />}
            </div>
          </div>

          <p className="section-subtitle">Choose date</p>

          <div className="calendar-container">
            <div className="calendar-header">
              <button className="cal-nav-btn">‹</button>
              <span className="cal-month">November 2022</span>
              <button className="cal-nav-btn">›</button>
            </div>

            <div className="calendar-grid">
              {daysOfWeek.map(day => (
                <div key={day} className="cal-day-name">{day}</div>
              ))}

              {calendarDays.flat().map((day, index) => (
                <div
                  key={index}
                  className={`cal-day ${day === selectedDate ? 'selected' : ''} ${day === null ? 'empty' : ''}`}
                  onClick={() => {
                    if (day) {
                      setSelectedDate(day)
                      setPickupNow(false)
                    }
                  }}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>

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
                <span onClick={() => adjustTime(1)}>⌃</span>
                <span onClick={() => adjustTime(-1)}>⌄</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="section-block"
          onClick={() => setPickupNow(true)}
          style={{ cursor: 'pointer' }}
        >
          <div className="section-header-row">
            <h2 className="section-title">Pickup now</h2>
            <div className={`radio-circle ${pickupNow ? 'selected' : ''}`}>
              {pickupNow && <div className="radio-inner" />}
            </div>
          </div>
          <p className="section-subtitle">Your order will be ready in 5-7 minutes.</p>
        </div>

      </div>

      <div className="footer-fixed">
        <button className="next-btn" onClick={handleNext}>Next</button>
      </div>
    </main>
  )
}

export default DeliveryMethod