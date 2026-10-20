import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import headerImage from '../assets/images/dash.svg'

const savedCards = [
  { id: 1, type: 'MasterCard', last4: '2048' },
  { id: 2, type: 'Visa', last4: '1234' },
]

/* ============================
   Íconos SVG inline
   ============================ */
function CardIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" stroke="currentColor" strokeWidth="1" />
      <line x1="2.5" y1="9.5" x2="21.5" y2="9.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function CashIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" />
      <path
        d="M12 6.5V17.5 M14.5 9.2c0-1.1-1.1-1.8-2.5-1.8s-2.5.7-2.5 1.8 1.1 1.7 2.5 1.8 2.5.7 2.5 1.8-1.1 1.8-2.5 1.8-2.5-.7-2.5-1.8"
        stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

function PayPalIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M9.5 4.5h5.2c2.6 0 4.2 1.4 3.8 3.9-.4 2.4-2.2 3.7-4.7 3.7h-1.9l-.8 4.9H7.3L9.5 4.5z" fill="#1B3A5C" />
      <path d="M11.2 7.5h4.6c2.4 0 3.9 1.3 3.5 3.6-.4 2.3-2.1 3.6-4.5 3.6h-1.7l-.7 4.4h-3.4l2.2-11.6z" fill="#3B82C4" opacity="0.9" />
    </svg>
  )
}

/* ============================
   Clases reutilizables
   ============================ */
const focusRing = 'focus-visible:outline-[3px] focus-visible:outline-[rgba(43,108,176,0.35)] focus-visible:outline-offset-2'

/* ============================
   Componente principal
   ============================ */
function PaymentMethod() {
  const navigate = useNavigate()
  const [paymentType, setPaymentType] = useState('card')
  const [selectedCard, setSelectedCard] = useState(savedCards[0]?.id ?? null)

  return (
    <main className="flex flex-col w-full max-w-[380px] h-[100dvh] max-h-[820px] mx-auto bg-[#f5f6fa] font-poppins relative overflow-hidden rounded-[20px] min-[480px]:h-[min(calc(100dvh-48px),820px)] min-[480px]:shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
      {/* Cabecera con dash.svg como fondo completo */}
      <header
        className="relative grid grid-cols-[40px_1fr_40px] items-center py-4 px-5 min-h-[150px] text-white bg-link bg-cover bg-center bg-no-repeat overflow-hidden rounded-bl-[24px] rounded-br-[24px] shrink-0 [&>*]:relative [&>*]:z-[2] max-[360px]:min-h-[80px]"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <button
          type="button"
          aria-label="Back"
          onClick={() => navigate(-1)}
          className={`col-[1/2] justify-self-start bg-transparent border-0 text-white text-[50px] leading-none cursor-pointer py-0 px-1.5 rounded-md transition-colors duration-200 hover:bg-white/15 ${focusRing}`}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M15 5L8 12L15 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h1 className="col-[2/3] font-poppins text-[25px] font-[450] text-white m-0 text-center [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
          Payment Method
        </h1>
      </header>

      {/* Área scrolleable */}
      <div className="flex-1 min-h-0 overflow-y-auto [-webkit-overflow-scrolling:touch] pt-[50px] px-4 pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {/* Selector de Tipo de Pago */}
        <div className="flex justify-around gap-2.5 mb-[55px]" role="radiogroup" aria-label="Payment type">
          <button
            type="button"
            role="radio"
            aria-checked={paymentType === 'card'}
            onClick={() => setPaymentType('card')}
            className={`flex flex-col items-center justify-start gap-5 w-[95px] h-[150px] pt-[18px] px-2 pb-3.5 border-2 rounded-[60px] cursor-pointer transition-colors duration-200 max-[360px]:w-[84px] max-[360px]:pt-3.5 max-[360px]:px-1.5 max-[360px]:pb-3 ${focusRing} ${
              paymentType === 'card' ? 'bg-coral border-coral' : 'bg-[#EBEFF2] border-[#e2e8f0]'
            }`}
          >
            <div
              className={`w-[70px] h-[70px] rounded-full flex items-center justify-center transition-colors duration-200 -mt-2 max-[360px]:w-[52px] max-[360px]:h-[52px] max-[360px]:-mt-1.5 ${
                paymentType === 'card' ? 'bg-coral-soft' : 'bg-[#f5f6fa]'
              }`}
            >
              <span className={`flex items-center justify-center leading-none transition-colors duration-200 ${paymentType === 'card' ? 'text-coral' : 'text-[#c0392b]'}`}>
                <CardIcon />
              </span>
            </div>
            <span className={`text-sm font-medium transition-colors duration-200 max-[360px]:text-xs ${paymentType === 'card' ? 'text-white font-semibold' : 'text-[#4a5568]'}`}>
              Card
            </span>
          </button>

          <button
            type="button"
            role="radio"
            aria-checked={paymentType === 'cash'}
            onClick={() => setPaymentType('cash')}
            className={`flex flex-col items-center justify-start gap-5 w-[95px] h-[150px] pt-[18px] px-2 pb-3.5 border-2 rounded-[60px] cursor-pointer transition-colors duration-200 max-[360px]:w-[84px] max-[360px]:pt-3.5 max-[360px]:px-1.5 max-[360px]:pb-3 ${focusRing} ${
              paymentType === 'cash' ? 'bg-coral border-coral' : 'bg-[#EBEFF2] border-[#e2e8f0]'
            }`}
          >
            <div
              className={`w-[70px] h-[70px] rounded-full flex items-center justify-center transition-colors duration-200 -mt-2 max-[360px]:w-[52px] max-[360px]:h-[52px] max-[360px]:-mt-1.5 ${
                paymentType === 'cash' ? 'bg-coral-soft' : 'bg-[#f5f6fa]'
              }`}
            >
              <span className="flex items-center justify-center leading-none transition-colors duration-200 text-[#1b3a5c]">
                <CashIcon />
              </span>
            </div>
            <span className={`text-sm font-medium transition-colors duration-200 max-[360px]:text-xs ${paymentType === 'cash' ? 'text-white font-semibold' : 'text-[#4a5568]'}`}>
              Cash
            </span>
          </button>

          <button
            type="button"
            role="radio"
            aria-checked={paymentType === 'paypal'}
            onClick={() => setPaymentType('paypal')}
            className={`flex flex-col items-center justify-start gap-5 w-[95px] h-[150px] pt-[18px] px-2 pb-3.5 border-2 rounded-[60px] cursor-pointer transition-colors duration-200 max-[360px]:w-[84px] max-[360px]:pt-3.5 max-[360px]:px-1.5 max-[360px]:pb-3 ${focusRing} ${
              paymentType === 'paypal' ? 'bg-coral border-coral' : 'bg-[#EBEFF2] border-[#e2e8f0]'
            }`}
          >
            <div
              className={`w-[70px] h-[70px] rounded-full flex items-center justify-center transition-colors duration-200 -mt-2 max-[360px]:w-[52px] max-[360px]:h-[52px] max-[360px]:-mt-1.5 ${
                paymentType === 'paypal' ? 'bg-coral-soft' : 'bg-[#f5f6fa]'
              }`}
            >
              <span className="flex items-center justify-center leading-none transition-colors duration-200 text-[#1b3a5c]">
                <PayPalIcon />
              </span>
            </div>
            <span className={`text-sm font-medium transition-colors duration-200 max-[360px]:text-xs ${paymentType === 'paypal' ? 'text-white font-semibold' : 'text-[#4a5568]'}`}>
              PayPal
            </span>
          </button>
        </div>

        {paymentType === 'card' && (
          <>
            <div className="flex flex-col gap-3 mb-10" role="radiogroup" aria-label="Saved cards">
              {savedCards.map((card) => {
                const isSelected = selectedCard === card.id
                return (
                  <label
                    key={card.id}
                    className="flex items-center gap-1 pt-1.5 pr-4 pb-3.5 pl-1.5 bg-white border-2 border-[#e2e8f0] rounded-xl cursor-default transition-colors duration-200 focus-within:outline-[3px] focus-within:outline-[rgba(43,108,176,0.35)] focus-within:outline-offset-2"
                  >
                    <input
                      type="radio"
                      name="saved-card"
                      value={card.id}
                      checked={isSelected}
                      onChange={() => setSelectedCard(card.id)}
                      className="sr-only"
                    />
                    <div className="w-10 min-w-10 h-10 flex items-center justify-start shrink-0">
                      {card.type === 'MasterCard' ? (
                        <div className="relative w-10 h-[26px]">
                          <div className="absolute w-[26px] h-[26px] rounded-full top-0 bg-[#eb001b] left-0" />
                          <div className="absolute w-[26px] h-[26px] rounded-full top-0 bg-[#f79e1b] right-0 opacity-90" />
                        </div>
                      ) : (
                        <div className="text-[13px] font-extrabold text-[#1a1f71] tracking-[1px] italic">
                          VISA
                        </div>
                      )}
                    </div>
                    <div className="flex-1 flex flex-col gap-0.5 min-w-0 items-start text-left ml-1">
                      <span className="text-sm font-semibold text-[#2d3748]">{card.type}</span>
                      <span className="text-[15px] text-[#5b626d] tracking-[1px] font-black">
                        •••• {card.last4}
                      </span>
                    </div>
                    <div className="w-[22px] h-[22px] rounded-full border-2 border-[#cbd5e0] flex items-center justify-center shrink-0 transition-colors duration-200">
                      {isSelected && <div className="w-3.5 h-3.5 rounded-full bg-accent" />}
                    </div>
                  </label>
                )
              })}
            </div>

            <button
              type="button"
              className={`flex items-center justify-start gap-2.5 w-full p-5 bg-[#EBEFF2] border-0 rounded-xl text-sm font-semibold text-black cursor-pointer transition-colors duration-200 hover:bg-[#f0f7ff] ${focusRing}`}
            >
              <span className="text-xl leading-none font-normal">+</span>
              Add new card
            </button>
          </>
        )}

        {paymentType === 'cash' && (
          <div className="py-6 px-4 bg-white border-2 border-dashed border-[#e2e8f0] rounded-xl text-center text-[#718096] text-sm">
            <p className="m-0">Pay with cash on delivery.</p>
          </div>
        )}

        {paymentType === 'paypal' && (
          <div className="py-6 px-4 bg-white border-2 border-dashed border-[#e2e8f0] rounded-xl text-center text-[#718096] text-sm">
            <p className="m-0">You will be redirected to PayPal to complete your payment.</p>
          </div>
        )}
      </div>

      <div className="shrink-0 pt-4 px-5 pb-[calc(16px+env(safe-area-inset-bottom,0px))] bg-transparent">
        <button
          type="button"
          onClick={() => navigate('/order-tracking')}
          className={`w-full p-3.5 bg-brand text-white border-0 rounded-[10px] text-base font-semibold cursor-pointer transition-colors duration-200 hover:bg-[#2c4659] ${focusRing}`}
        >
          Next
        </button>
      </div>
    </main>
  )
}

export default PaymentMethod