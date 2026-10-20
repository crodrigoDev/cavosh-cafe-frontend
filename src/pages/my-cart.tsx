import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import headerImage from '../assets/images/dash.svg'
import cafe1 from '../assets/images/cafe1.png'
import cafe3 from '../assets/images/cafe3.png'

/* =========================
   ÍCONOS SVG INLINE
   ========================= */

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11.6 4.4 L5.8 9.3 Q5 10 5 10.9 V17.6 Q5 19.5 6.9 19.5 H17.1 Q19 19.5 19 17.6 V10.9 Q19 10 18.2 9.3 L12.4 4.4 Q12 4 11.6 4.4 Z" />
  </svg>
)

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 6.5C10.5 5 8.5 4.5 6 4.5c-1 0-2 .1-3 .4v13c1-.3 2-.4 3-.4 2.5 0 4.5.5 6 2" />
    <path d="M12 6.5C13.5 5 15.5 4.5 18 4.5c1 0 2 .1 3 .4v13c-1-.3-2-.4-3-.4-2.5 0-4.5.5-6 2" />
    <path d="M12 6.5v13" />
  </svg>
)

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const ProfileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
  </svg>
)

const CartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 4h2l2.2 10.5a2 2 0 0 0 2 1.5h7.6a2 2 0 0 0 2-1.6L20.5 7H6" />
    <circle cx="9.5" cy="19.5" r="1.8" fill="currentColor" stroke="none" />
    <circle cx="17" cy="19.5" r="1.8" fill="currentColor" stroke="none" />
  </svg>
)

/* =========================
   COMPONENTE PRINCIPAL
   ========================= */

function MyCart() {
  const navigate = useNavigate()
  const location = useLocation()
  const [promoCode, setPromoCode] = useState('')

  const isActive = (path: string) => location.pathname === path

  const cartItems = [
    {
      id: 1,
      name: 'Caramel Macchiato',
      description: 'Small, Oat milk',
      price: 9.40,
      quantity: 2,
      image: cafe1,
    },
    {
      id: 2,
      name: 'Traditional Cappuccino',
      description: 'Small, Skim milk, No caffeine',
      price: 3.00,
      quantity: 1,
      image: cafe3,
    },
  ]

  const navItems = [
    { id: 'home',      label: 'Home',      Icon: HomeIcon,      path: '/' },
    { id: 'menu',      label: 'Menu',      Icon: MenuIcon,      path: '/choose-cafe' },
    { id: 'favorites', label: 'Favorites', Icon: HeartIcon,     path: '/favorites' },
    { id: 'profile',   label: 'Profile',   Icon: ProfileIcon,   path: '/profile' },
    { id: 'cart',      label: 'Cart',      Icon: CartIcon,      path: '/cart' },
  ]

  return (
    <main className="w-[375px] h-[825px] bg-white rounded-[30px] overflow-hidden flex flex-col shadow-[0_10px_25px_rgba(0,0,0,0.1)] relative mx-auto">
      {/* Cabecera con imagen de fondo */}
      <header
        className="bg-brand text-white flex items-end min-h-[130px] pt-[60px] px-5 pb-[30px] bg-cover bg-center bg-no-repeat rounded-bl-[30px] rounded-br-[30px]"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <h1 className="text-[22px] font-medium m-0 mb-[30px] text-white tracking-[1px]">
          My Cart
        </h1>
      </header>

      <div className="flex-1 overflow-y-auto pt-[30px] pb-[120px] bg-white [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {/* Lista de Productos */}
        <div className="flex flex-col gap-[30px] mb-10 px-5">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-gray-50 rounded-[15px] p-0 relative w-full h-[85px] shadow-[0_6px_12px_-4px_rgba(0,0,0,0.18)]"
            >
              <div className="w-[85px] h-[85px] rounded-[15px] overflow-hidden bg-gray-200 shrink-0 mr-[15px]">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 flex flex-col gap-0.5 items-start text-left pr-[45px]">
                <h3 className="text-sm font-bold text-carbon m-0 text-left">{item.name}</h3>
                <p className="text-[10px] text-gray-500 m-0 leading-[1.3] text-left">{item.description}</p>
                <p className="text-sm font-bold text-carbon mt-1 mb-0 text-left">${item.price.toFixed(2)}</p>
              </div>

              <div className="flex flex-col items-center justify-center bg-accent rounded-[15px] py-2 px-0 w-[34px] h-[85px] absolute right-0 top-1/2 -translate-y-1/2">
                <button type="button" className="bg-transparent border-0 text-white text-base font-bold cursor-pointer p-0 leading-none h-5 flex items-center justify-center">
                  +
                </button>
                <span className="text-white text-sm font-bold my-0.5">{item.quantity}</span>
                <button type="button" className="bg-transparent border-0 text-white text-base font-bold cursor-pointer p-0 leading-none h-5 flex items-center justify-center">
                  −
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Código Promocional */}
        <div className="mb-[25px] p-0">
          <label className="block text-sm font-semibold text-carbon mt-0 mb-2 ml-0 pl-[22px] text-left">
            Promo code
          </label>
          <div className="flex bg-gray-100 rounded-[25px] overflow-hidden p-1 mx-[15px]">
            <input
              type="text"
              className="flex-1 border-0 bg-transparent py-2.5 px-[15px] text-sm outline-none text-carbon font-[inherit]"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button
              type="button"
              className="bg-accent text-white border-0 px-[35px] rounded-[20px] text-sm font-semibold cursor-pointer font-[inherit]"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Resumen de Totales */}
        <div className="flex flex-col gap-3 mb-[30px] px-[22px]">
          <div className="flex justify-between items-center text-sm">
            <span className="font-[550] text-carbon">Cart</span>
            <span className="font-medium text-carbon">$12.40</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="font-[550] text-carbon">Discount</span>
            <span className="font-medium text-carbon">$1.20</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-base font-[550] text-carbon">Total</span>
            <span className="text-base font-[550] text-carbon">$11.20</span>
          </div>
        </div>

        {/* Botón Checkout */}
        <button
          type="button"
          onClick={() => navigate('/review-order')}
          className="w-[90%] mx-auto mb-5 block bg-brand text-white border-0 p-4 rounded-[12px] text-base font-semibold cursor-pointer font-[inherit] hover:opacity-90 transition-opacity"
        >
          Check Out
        </button>
      </div>

      {/* Barra de Navegación Inferior */}
      <nav
        aria-label="Navegación principal"
        className="absolute bottom-0 left-0 right-0 w-full bg-white flex justify-around items-center pt-3 px-2.5 pb-[18px] rounded-t-[40px] shadow-[0_-6px_20px_rgba(0,0,0,0.15)]"
      >
        {navItems.map(({ id, label, Icon, path }) => {
          const active = isActive(path)
          return (
            <button
              key={id}
              type="button"
              aria-current={active ? 'page' : undefined}
              onClick={() => navigate(path)}
              className="flex flex-col items-center gap-1 bg-transparent border-0 cursor-pointer p-[5px] flex-1 font-[inherit]"
            >
              <span
                className={`w-[30px] h-[30px] flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:block ${
                  active
                    ? 'text-accent [&_svg]:stroke-accent [&_svg]:fill-accent [&_svg_*]:stroke-accent [&_svg_*]:fill-accent'
                    : 'text-[#9CA3AF]'
                }`}
              >
                <Icon />
              </span>
              <span
                className={`text-sm ${
                  active ? 'text-accent font-bold' : 'text-[#9CA3AF] font-medium'
                }`}
              >
                {label}
              </span>
            </button>
          )
        })}
      </nav>
    </main>
  )
}

export default MyCart