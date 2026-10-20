import { useNavigate, useLocation } from 'react-router-dom'
import headerImage from '../assets/images/dash.svg'
import cafe1 from '../assets/images/cafe1.png'
import cafe2 from '../assets/images/cafe2.png'
import cafe3 from '../assets/images/cafe3.png'
import cafe4 from '../assets/images/cafe4.png'

/* =========================
   ÍCONOS SVG INLINE
   ========================= */

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" />
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
    <circle cx="9.5" cy="19.5" r="1.3" />
    <circle cx="17" cy="19.5" r="1.3" />
  </svg>
)

/* =========================
   COMPONENTE
   ========================= */

function Favorites() {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  const favoriteItems = [
    { id: 1, name: 'Caramel Macchiato',      description: 'Large, Oat milk',   price: 6.70, image: cafe1 },
    { id: 2, name: 'Caffe Mocha',            description: 'Large, Almond milk', price: 7.00, image: cafe2 },
    { id: 3, name: 'Traditional Cappuccino', description: 'Small, Skim milk',  price: 3.00, image: cafe3 },
    { id: 4, name: 'Cinnamon Roll',          description: '',                  price: 3.50, image: cafe4 },
  ]

  return (
    <main className="w-[375px] h-[812px] bg-white rounded-[30px] overflow-hidden flex flex-col shadow-[0_10px_25px_rgba(0,0,0,0.1)] relative mx-auto">
      {/* ============ HEADER ============ */}
      <header className="relative w-full h-[130px] overflow-hidden p-0 block shrink-0 bg-ocean rounded-bl-[30px] rounded-br-[30px]">
        <img
          src={headerImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center z-0 rounded-bl-[30px] rounded-br-[30px]"
        />
        <div className="relative z-[1] w-full h-full flex flex-col justify-center items-start px-6 box-border rounded-bl-[30px] rounded-br-[30px]">
          <h1 className="font-poppins text-[22px] font-medium tracking-[0.5px] m-0 text-white text-left [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
            Favorites
          </h1>
        </div>
      </header>

      {/* ============ SCROLL AREA ============ */}
      <div className="flex-1 overflow-y-auto px-5 pb-[120px]">
        <div className="text-right pt-[15px] pb-[10px] text-[13px] font-semibold text-ocean">
          <span>{favoriteItems.length} items</span>
        </div>

        <div className="flex flex-col gap-[15px]">
          {favoriteItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-gray-100 rounded-[15px] p-2.5 pr-[62px] relative overflow-hidden shadow-[0_4px_8px_rgba(3,3,3,0.1)]"
            >
              <div className="w-[65px] h-[65px] rounded-[12px] overflow-hidden bg-gray-200 shrink-0 mr-[15px]">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 flex flex-col gap-0.5">
                <h3 className="text-sm font-bold text-ink m-0">{item.name}</h3>
                {item.description && (
                  <p className="text-[11px] text-gray-500 m-0">{item.description}</p>
                )}
                <p className="text-sm font-bold text-ink mt-1 mb-0">
                  ${item.price.toFixed(2)}
                </p>
              </div>

              <button
                type="button"
                aria-label={`Añadir ${item.name}`}
                onClick={() => navigate('/cart')}
                className="absolute bottom-0 right-0 w-[55px] h-[42px] bg-[#E65737] border-0 rounded-tl-[16px] rounded-tr-none rounded-br-[20px] rounded-bl-none cursor-pointer flex items-center justify-center transition-colors duration-200 hover:bg-[#c44535] active:bg-[#a83a2b] active:scale-[0.96]"
              >
                <span aria-hidden="true" className="text-white text-[28px] font-normal leading-none">
                  +
                </span>
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-5">
          <button
            type="button"
            onClick={() => navigate('/choose-cafe')}
            className="bg-transparent border-0 text-accent text-sm font-semibold cursor-pointer p-[5px]"
          >
            Edit
          </button>
        </div>
      </div>

      {/* ============ BOTTOM NAV ============ */}
      <nav
        aria-label="Navegación principal"
        className="absolute bottom-0 left-0 w-full bg-white flex justify-around items-center pt-3 px-2 pb-[22px] rounded-tl-[26px] rounded-tr-[26px] shadow-[0_-6px_20px_rgba(0,0,0,0.06)]"
      >
        <button
          type="button"
          onClick={() => navigate('/')}
          aria-current={isActive('/') ? 'page' : undefined}
          className={`flex flex-col items-center justify-center gap-[5px] bg-transparent border-0 cursor-pointer p-1 flex-1 transition-all duration-200 ease-out active:scale-[0.94] ${
            isActive('/') ? 'text-accent font-bold' : 'text-[#9CA3AF]'
          }`}
        >
          <span className="w-[26px] h-[26px] flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:block">
            <HomeIcon />
          </span>
          <span className="text-[11px] font-medium leading-none text-inherit">Home</span>
        </button>

        <button
          type="button"
          onClick={() => navigate('/choose-cafe')}
          aria-current={isActive('/choose-cafe') ? 'page' : undefined}
          className={`flex flex-col items-center justify-center gap-[5px] bg-transparent border-0 cursor-pointer p-1 flex-1 transition-all duration-200 ease-out active:scale-[0.94] ${
            isActive('/choose-cafe') ? 'text-accent font-bold' : 'text-[#9CA3AF]'
          }`}
        >
          <span className="w-[26px] h-[26px] flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:block">
            <MenuIcon />
          </span>
          <span className="text-[11px] font-medium leading-none text-inherit">Menu</span>
        </button>

        <button
          type="button"
          onClick={() => navigate('/favorites')}
          aria-current={isActive('/favorites') ? 'page' : undefined}
          className={`flex flex-col items-center justify-center gap-[5px] bg-transparent border-0 cursor-pointer p-1 flex-1 transition-all duration-200 ease-out active:scale-[0.94] ${
            isActive('/favorites') ? 'text-accent font-bold' : 'text-[#9CA3AF]'
          }`}
        >
          <span className="w-[26px] h-[26px] flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:block">
            <HeartIcon />
          </span>
          <span className="text-[11px] font-medium leading-none text-inherit">Favorites</span>
        </button>

        <button
          type="button"
          onClick={() => navigate('/profile')}
          aria-current={isActive('/profile') ? 'page' : undefined}
          className={`flex flex-col items-center justify-center gap-[5px] bg-transparent border-0 cursor-pointer p-1 flex-1 transition-all duration-200 ease-out active:scale-[0.94] ${
            isActive('/profile') ? 'text-accent font-bold' : 'text-[#9CA3AF]'
          }`}
        >
          <span className="w-[26px] h-[26px] flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:block">
            <ProfileIcon />
          </span>
          <span className="text-[11px] font-medium leading-none text-inherit">Profile</span>
        </button>

        <button
          type="button"
          onClick={() => navigate('/cart')}
          aria-current={isActive('/cart') ? 'page' : undefined}
          className={`flex flex-col items-center justify-center gap-[5px] bg-transparent border-0 cursor-pointer p-1 flex-1 transition-all duration-200 ease-out active:scale-[0.94] ${
            isActive('/cart') ? 'text-accent font-bold' : 'text-[#9CA3AF]'
          }`}
        >
          <span className="w-[26px] h-[26px] flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:block">
            <CartIcon />
          </span>
          <span className="text-[11px] font-medium leading-none text-inherit">Cart</span>
        </button>
      </nav>
    </main>
  )
}

export default Favorites