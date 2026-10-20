import { useNavigate } from 'react-router-dom'
import headerImage from '../assets/images/dash.svg'

/* ===== Iconos SVG inline ===== */

function BackIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="block stroke-current"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function EditIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="block stroke-current"
    >
      <path d="M12 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  )
}

/* Clases reutilizables */
const editBtn = 'bg-transparent border-0 text-ocean cursor-pointer p-2 leading-[0] inline-flex items-center justify-center transition-colors hover:text-ocean-dark'

function ReviewOrder() {
  const navigate = useNavigate()

  const orderItems = [
    { id: 1, name: 'Caramel Macchiato', qty: 1, description: 'Small, Oat milk', price: 9.40 },
    { id: 2, name: 'Traditional Cappuccino', qty: 2, description: 'Small, Skim milk, No caffeine', price: 1.50 },
  ]

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <main className="w-[min(375px,100%)] h-[min(812px,calc(100dvh-40px))] bg-white rounded-[30px] overflow-hidden flex flex-col shadow-[0_10px_25px_rgba(0,0,0,0.1)] relative mx-auto max-[480px]:w-full max-[480px]:h-[100dvh] max-[480px]:rounded-none max-[480px]:shadow-none">
      {/* ===== Cabecera con imagen de fondo ===== */}
      <header
        className="text-white flex items-start gap-[15px] relative shrink-0 m-0 bg-ocean bg-cover bg-center bg-no-repeat h-[130px] pt-[50px] px-5 pb-5 rounded-[30px] before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:z-0 before:pointer-events-none max-[480px]:rounded-none"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <button
          type="button"
          aria-label="Go back"
          onClick={() => navigate(-1)}
          className="relative z-[1] bg-transparent border-0 text-white cursor-pointer p-1.5 -m-1.5 inline-flex items-center justify-center"
        >
          <BackIcon />
        </button>
        <h1 className="absolute tracking-[1px] top-[50px] left-1/2 -translate-x-1/2 text-[22px] font-semibold m-0 whitespace-nowrap text-white z-[1]">
          Review Order
        </h1>
      </header>

      {/* ===== Contenido scrolleable ===== */}
      <div className="flex-1 overflow-y-auto [-webkit-overflow-scrolling:touch] [overscroll-behavior:contain] p-5 pb-[120px] bg-white [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {/* --- Order details --- */}
        <div className="mb-[25px]">
          <h2 className="text-sm font-bold text-ink mt-0 mb-2.5 ml-0 mr-0 pl-0 text-left">
            Order details
          </h2>

          <div className="bg-white rounded-[15px] p-2 relative">
            {orderItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex justify-between items-start gap-3 pb-3 ${
                  index !== orderItems.length - 1 ? 'border-b border-line mb-3' : ''
                }`}
              >
                <div className="flex flex-col items-start gap-0.5 flex-1 min-w-0 text-left">
                  <span className="text-base font-semibold text-ink">
                    {item.name} <span className="font-normal text-ink">x {item.qty}</span>
                  </span>
                  <span className="text-sm text-blue-grey">{item.description}</span>
                </div>
                <span className="text-sm font-bold text-ink shrink-0">
                  ${(item.price * item.qty).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Deliver to --- */}
        <div className="mb-[25px]">
          <h2 className="text-sm font-bold text-ink mt-0 mb-2.5 ml-0 mr-0 pl-0 text-left">
            Deliver to
          </h2>

          <div className="bg-white rounded-[15px] p-2 pr-[44px] relative flex justify-between items-center">
            <div className="flex flex-col items-start gap-0.5 min-w-0 text-left">
              <span className="text-sm font-semibold text-ink">Cavosh Cafe</span>
              <span className="text-[13px] text-gray-500">Legnicka 5, Wroclaw</span>
            </div>
            <button
              type="button"
              aria-label="Edit delivery address"
              onClick={() => navigate('/choose-cafe')}
              className={`${editBtn} absolute right-2.5 top-[21%] -translate-y-1/2`}
            >
              <EditIcon />
            </button>
          </div>
        </div>

        {/* --- Pick up details --- */}
        <div className="mb-[25px]">
          <h2 className="text-sm font-bold text-ink mt-0 mb-2.5 ml-0 mr-0 pl-0 text-left">
            Pick up details
          </h2>

          <div className="bg-white rounded-[15px] p-2 pr-[44px] relative">
            <div className="grid grid-cols-[max-content_1fr] items-center gap-x-4 mb-2 last:mb-0">
              <span className="text-sm font-medium text-ink text-left">Pick-up time</span>
              <span className="text-sm font-semibold text-ink text-left justify-self-start">
                08:30 AM
              </span>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-center gap-x-4 mb-2 last:mb-0">
              <span className="text-sm font-medium text-ink text-left">Pick-up date</span>
              <span className="text-sm font-semibold text-ink text-left justify-self-start">
                Thu 29.11.2022
              </span>
            </div>
            <button
              type="button"
              aria-label="Edit pick up details"
              onClick={() => navigate('/delivery-method')}
              className={`${editBtn} absolute right-2.5 top-[21%] -translate-y-1/2`}
            >
              <EditIcon />
            </button>
          </div>
        </div>

        {/* --- Payment --- */}
        <div className="mb-[25px]">
          <h2 className="text-sm font-bold text-ink mt-0 mb-2.5 ml-0 mr-0 pl-0 text-left">
            Payment
          </h2>

          <div className="bg-white rounded-[15px] p-2 pr-[44px] relative flex justify-between items-center">
            <div className="flex flex-row items-baseline gap-1.5 min-w-0 text-left">
              <span className="text-sm font-semibold text-ink w-auto whitespace-nowrap">Card</span>
              <span className="text-[13px] text-gray-500 w-auto whitespace-nowrap">
                MasterCard /••••2048
              </span>
            </div>
            <button
              type="button"
              aria-label="Edit payment method"
              onClick={() => navigate('/payment-method')}
              className={`${editBtn} absolute right-2.5 top-[21%] -translate-y-1/2`}
            >
              <EditIcon />
            </button>
          </div>
        </div>
      </div>

      {/* ===== Footer fijo ===== */}
      <div className="absolute bottom-0 left-0 w-full bg-white pt-[15px] px-5 pb-[25px] rounded-b-[30px] shadow-[0_-4px_10px_rgba(0,0,0,0.05)] flex justify-between items-center gap-5 max-[480px]:rounded-none">
        <div className="flex flex-col items-start gap-0.5 shrink-0">
          <span className="text-sm font-normal text-ink text-left">Subtotal</span>
          <span className="text-xl font-extrabold text-ink text-left leading-[1.2]">
            <span className="text-accent mr-px">$</span>
            {subtotal.toFixed(2)}
          </span>
        </div>
        <button
          type="button"
          onClick={() => navigate('/payment-method')}
          className="flex-1 bg-brand text-white border-0 p-4 rounded-[12px] text-[15px] font-semibold cursor-pointer transition-[background-color,transform] duration-200 hover:bg-ocean-dark active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
        >
          Place Order
        </button>
      </div>
    </main>
  )
}

export default ReviewOrder