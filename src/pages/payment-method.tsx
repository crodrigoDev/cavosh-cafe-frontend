import { useState } from 'react'
import './payment-method.css'
import headerImage from '../assets/images/dash.svg'

const savedCards = [
  { id: 1, type: 'MasterCard', last4: '2048' },
  { id: 2, type: 'Visa', last4: '1234' }
]

/* ============================
   Íconos SVG inline
   ============================ */
function CardIcon() {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="5.5"
        width="19"
        height="13"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line
        x1="2.5"
        y1="9.5"
        x2="21.5"
        y2="9.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function CashIcon() {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" />
      <path
        d="M12 6.5V17.5 M14.5 9.2c0-1.1-1.1-1.8-2.5-1.8s-2.5.7-2.5 1.8 1.1 1.7 2.5 1.8 2.5.7 2.5 1.8-1.1 1.8-2.5 1.8-2.5-.7-2.5-1.8"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PayPalIcon() {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9.5 4.5h5.2c2.6 0 4.2 1.4 3.8 3.9-.4 2.4-2.2 3.7-4.7 3.7h-1.9l-.8 4.9H7.3L9.5 4.5z"
        fill="#1B3A5C"
      />
      <path
        d="M11.2 7.5h4.6c2.4 0 3.9 1.3 3.5 3.6-.4 2.3-2.1 3.6-4.5 3.6h-1.7l-.7 4.4h-3.4l2.2-11.6z"
        fill="#3B82C4"
        opacity="0.9"
      />
    </svg>
  )
}

/* ============================
   Componente principal
   ============================ */
function PaymentMethod({ onBack = () => {}, onNext = () => {} }) {
  const [paymentType, setPaymentType] = useState('card')
  const [selectedCard, setSelectedCard] = useState(savedCards[0]?.id ?? null)

  return (
    <main className="app-container">
      {/* Cabecera con dash.svg como fondo completo */}
      <header
        className="app-header payment-header"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <button
          type="button"
          className="back-button"
          aria-label="Back"
          onClick={onBack}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M15 5L8 12L15 19"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1>Payment Method</h1>
      </header>

      <div className="content-scroll-area">
        {/* Selector de Tipo de Pago */}
        <div
          className="payment-types-row"
          role="radiogroup"
          aria-label="Payment type"
        >
          <button
            type="button"
            role="radio"
            aria-checked={paymentType === 'card'}
            className={`payment-type-btn ${
              paymentType === 'card' ? 'active' : ''
            }`}
            onClick={() => setPaymentType('card')}
          >
            <div className="icon-circle">
              <span className="payment-icon card">
                <CardIcon />
              </span>
            </div>
            <span className="payment-label">Card</span>
          </button>

          <button
            type="button"
            role="radio"
            aria-checked={paymentType === 'cash'}
            className={`payment-type-btn ${
              paymentType === 'cash' ? 'active' : ''
            }`}
            onClick={() => setPaymentType('cash')}
          >
            <div className="icon-circle">
              <span className="payment-icon cash">
                <CashIcon />
              </span>
            </div>
            <span className="payment-label">Cash</span>
          </button>

          <button
            type="button"
            role="radio"
            aria-checked={paymentType === 'paypal'}
            className={`payment-type-btn ${
              paymentType === 'paypal' ? 'active' : ''
            }`}
            onClick={() => setPaymentType('paypal')}
          >
            <div className="icon-circle">
              <span className="payment-icon paypal">
                <PayPalIcon />
              </span>
            </div>
            <span className="payment-label">PayPal</span>
          </button>
        </div>

        {paymentType === 'card' && (
          <>
            <div
              className="saved-cards-list"
              role="radiogroup"
              aria-label="Saved cards"
            >
              {savedCards.map((card) => (
                <label
                  key={card.id}
                  className={`card-item ${
                    selectedCard === card.id ? 'selected' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="saved-card"
                    value={card.id}
                    checked={selectedCard === card.id}
                    onChange={() => setSelectedCard(card.id)}
                    className="sr-only"
                  />
                  <div className="card-icon">
                    {card.type === 'MasterCard' ? (
                      <div className="mc-logo">
                        <div className="circle red" />
                        <div className="circle yellow" />
                      </div>
                    ) : (
                      <div className="visa-logo">VISA</div>
                    )}
                  </div>
                  <div className="card-details">
                    <span className="card-name">{card.type}</span>
                    <span className="card-number">•••• {card.last4}</span>
                  </div>
                  <div
                    className={`radio-circle ${
                      selectedCard === card.id ? 'selected' : ''
                    }`}
                  >
                    {selectedCard === card.id && <div className="radio-inner" />}
                  </div>
                </label>
              ))}
            </div>

            <button type="button" className="add-card-btn">
              <span className="plus-icon">+</span>
              Add new card
            </button>
          </>
        )}

        {paymentType === 'cash' && (
          <div className="payment-placeholder">
            <p>Pay with cash on delivery.</p>
          </div>
        )}

        {paymentType === 'paypal' && (
          <div className="payment-placeholder">
            <p>You will be redirected to PayPal to complete your payment.</p>
          </div>
        )}
      </div>

      <div className="footer-fixed">
        <button type="button" className="next-btn" onClick={onNext}>
          Next
        </button>
      </div>
    </main>
  )
}

export default PaymentMethod