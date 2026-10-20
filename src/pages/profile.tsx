import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import headerImage from '../assets/images/dash.svg'
import loginImage from '../assets/images/login.svg'

/* Clases reutilizables para el comportamiento hover/focus/active */
const iconColorCycle = 'text-icon group-hover:text-ocean group-focus:text-icon-active group-active:text-icon-active transition-colors duration-200'
const labelColorCycle = 'group-hover:text-ocean group-focus:text-icon-active group-active:text-icon-active transition-colors duration-200'

function Profile() {
  const navigate = useNavigate()
  const location = useLocation()
  const [notifications, setNotifications] = useState(true)
  const [locationData, setLocationData] = useState(false)

  const isActive = (path: string) => location.pathname === path

  const navItems = [
    {
      id: 'home', label: 'Home', path: '/',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
        </svg>
      ),
    },
    {
      id: 'menu', label: 'Menu', path: '/choose-cafe',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z" />
          <path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
    },
    {
      id: 'favorites', label: 'Favorites', path: '/favorites',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
    {
      id: 'profile', label: 'Profile', path: '/profile',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8v0H4z" />
        </svg>
      ),
    },
    {
      id: 'cart', label: 'Cart', path: '/cart',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
    },
  ]

  return (
    <main className="w-[375px] h-[760px] bg-white rounded-[30px] overflow-hidden flex flex-col shadow-[0_10px_25px_rgba(0,0,0,0.1)] relative m-auto">
      {/* ============ HEADER ============ */}
      <header
        className="relative bg-ocean bg-cover bg-center bg-no-repeat text-white pt-[50px] px-5 pb-10 flex items-center min-h-[140px] rounded-b-[24px] shrink-0 before:content-[''] before:absolute before:inset-0 before:bg-[rgba(53,83,107,0.45)] before:pointer-events-none before:rounded-b-[24px]"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <h1 className="font-poppins text-2xl font-medium text-white m-0 relative z-[1] tracking-[0.3px] [text-shadow:0_1px_3px_rgba(0,0,0,0.25)]">
          Profile
        </h1>
      </header>

      {/* ============ USER CARD ============ */}
      <div className="px-5 -mt-[35px] relative z-10 shrink-0">
        <div className="flex items-center bg-[#EBEFF2] rounded-full pt-3 pr-[18px] pb-3 pl-3 mb-3 shadow-[0_4px_10px_rgba(0,0,0,0.08)]">
          <div className="mr-[14px]">
            <div className="w-[70px] h-[70px] rounded-full overflow-hidden border-[3px] border-white flex justify-center items-center bg-[#FEF3C7] shrink-0">
              <img
                src={loginImage}
                alt="Laura Vat"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start text-left gap-0.5">
            <span className="text-[17px] font-bold text-ink leading-[1.2]">Laura Vat</span>
            <div className="flex items-center gap-1.5">
              <svg
                className="inline-flex items-center shrink-0 w-8 h-8 text-icon transition-colors"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="#e85d4a"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span className="text-[13px] font-medium text-gray-500">124 points</span>
            </div>
          </div>
          <button
            aria-label="Edit profile"
            className="group bg-transparent border-0 cursor-pointer flex items-center justify-center pt-0 pr-1 pb-0 pl-0 shrink-0 self-start mt-0.5 text-icon transition-colors duration-200 hover:text-ocean focus:text-icon-active active:text-icon-active focus:outline-none [&_svg]:block [&_svg]:w-[22px] [&_svg]:h-[22px]"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* ============ SCROLL AREA ============ */}
      <div className="flex-1 overflow-y-auto px-5 pb-[100px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* --- Sección: Account --- */}
        <div className="mb-1.5 p-0 text-left last:mb-0">
          <h2 className="text-sm font-bold text-ink mt-0 mb-1 ml-0 mr-0 text-left">Account</h2>
          <div className="bg-white rounded-[15px] overflow-hidden flex flex-col">
            <button type="button" className="group flex items-center bg-transparent border-0 py-2 px-[15px] cursor-pointer text-left border-b border-line w-full transition-colors duration-200 last:border-b-0 focus:outline-none focus:border-0 focus:shadow-none">
              <span className={`w-[26px] h-[26px] mr-3 flex items-center justify-center shrink-0 bg-transparent ${iconColorCycle}`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="block bg-transparent">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="8" y1="13" x2="16" y2="13" />
                  <line x1="8" y1="17" x2="16" y2="17" />
                  <line x1="8" y1="9" x2="10" y2="9" />
                </svg>
              </span>
              <span className={`flex-1 text-sm font-semibold text-ink ${labelColorCycle}`}>Account details</span>
            </button>

            <button type="button" className="group flex items-center bg-transparent border-0 py-2 px-[15px] cursor-pointer text-left border-b border-line w-full transition-colors duration-200 last:border-b-0 focus:outline-none focus:border-0 focus:shadow-none">
              <span className={`w-[26px] h-[26px] mr-3 flex items-center justify-center shrink-0 bg-transparent ${iconColorCycle}`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="block bg-transparent">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </span>
              <span className={`flex-1 text-sm font-semibold text-ink ${labelColorCycle}`}>Payment details</span>
            </button>

            <button type="button" className="group flex items-center bg-transparent border-0 py-2 px-[15px] cursor-pointer text-left border-b border-line w-full transition-colors duration-200 last:border-b-0 focus:outline-none focus:border-0 focus:shadow-none">
              <span className={`w-[26px] h-[26px] mr-3 flex items-center justify-center shrink-0 bg-transparent ${iconColorCycle}`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="block bg-transparent">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <line x1="8" y1="14" x2="8" y2="14" />
                  <line x1="12" y1="14" x2="12" y2="14" />
                  <line x1="16" y1="14" x2="16" y2="14" />
                </svg>
              </span>
              <span className={`flex-1 text-sm font-semibold text-ink ${labelColorCycle}`}>Order history</span>
            </button>

            <button type="button" className="group flex items-center bg-transparent border-0 py-2 px-[15px] cursor-pointer text-left border-b border-line w-full transition-colors duration-200 last:border-b-0 focus:outline-none focus:border-0 focus:shadow-none">
              <span className={`w-[26px] h-[26px] mr-3 flex items-center justify-center shrink-0 bg-transparent ${iconColorCycle}`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="block bg-transparent">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </span>
              <span className={`flex-1 text-sm font-semibold text-ink ${labelColorCycle}`}>Rewards</span>
            </button>

            <button type="button" className="group flex items-center bg-transparent border-0 py-2 px-[15px] cursor-pointer text-left border-b border-line w-full transition-colors duration-200 last:border-b-0 focus:outline-none focus:border-0 focus:shadow-none">
              <span className={`w-[26px] h-[26px] mr-3 flex items-center justify-center shrink-0 bg-transparent ${iconColorCycle}`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="block bg-transparent">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
              </span>
              <span className={`flex-1 text-sm font-semibold text-ink ${labelColorCycle}`}>Student discount</span>
            </button>
          </div>
        </div>

        {/* --- Sección: Notifications --- */}
        <div className="mb-1.5 p-0 text-left last:mb-0">
          <h2 className="text-sm font-bold text-ink mt-0 mb-1 ml-0 mr-0 text-left">Notifications</h2>
          <div className="bg-white rounded-[15px] overflow-hidden flex flex-col">
            <div className="flex items-center bg-transparent border-0 py-2 px-[15px] text-left border-b border-line w-full cursor-default last:border-b-0">
              <span className="w-[26px] h-[26px] mr-3 flex items-center justify-center shrink-0 bg-transparent text-icon transition-colors duration-200">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="block bg-transparent">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </span>
              <span className="flex-1 text-sm font-semibold text-ink transition-colors duration-200">Receive notifications</span>
              <div
                role="switch"
                aria-checked={notifications}
                aria-label="Receive notifications"
                tabIndex={0}
                onClick={() => setNotifications(!notifications)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setNotifications(!notifications)
                  }
                }}
                className={`w-[46px] h-[26px] rounded-full relative cursor-pointer transition-colors duration-300 shrink-0 p-0 border-[1.5px] focus:outline-none ${
                  notifications
                    ? 'bg-toggle-on-bg border-toggle-on-border'
                    : 'bg-toggle-off-bg border-toggle-off-border'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full absolute top-1/2 left-0.5 -translate-y-1/2 transition-transform duration-300 ease-out ${
                    notifications
                      ? 'translate-x-5 bg-toggle-on-knob'
                      : 'bg-toggle-off-knob'
                  }`}
                ></div>
              </div>
            </div>

            <div className="flex items-center bg-transparent border-0 py-2 px-[15px] text-left border-b border-line w-full cursor-default last:border-b-0">
              <span className="w-[26px] h-[26px] mr-3 flex items-center justify-center shrink-0 bg-transparent text-icon transition-colors duration-200">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="block bg-transparent">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </span>
              <span className="flex-1 text-sm font-semibold text-ink transition-colors duration-200">Share location data</span>
              <div
                role="switch"
                aria-checked={locationData}
                aria-label="Share location data"
                tabIndex={0}
                onClick={() => setLocationData(!locationData)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setLocationData(!locationData)
                  }
                }}
                className={`w-[46px] h-[26px] rounded-full relative cursor-pointer transition-colors duration-300 shrink-0 p-0 border-[1.5px] focus:outline-none ${
                  locationData
                    ? 'bg-toggle-on-bg border-toggle-on-border'
                    : 'bg-toggle-off-bg border-toggle-off-border'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full absolute top-1/2 left-0.5 -translate-y-1/2 transition-transform duration-300 ease-out ${
                    locationData
                      ? 'translate-x-5 bg-toggle-on-knob'
                      : 'bg-toggle-off-knob'
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Sección: Other --- */}
        <div className="mb-1.5 p-0 text-left last:mb-0">
          <h2 className="text-sm font-bold text-ink mt-0 mb-1 ml-0 mr-0 text-left">Other</h2>
          <div className="bg-white rounded-[15px] overflow-hidden flex flex-col">
            <button type="button" className="group flex items-center bg-transparent border-0 py-2 px-[15px] cursor-pointer text-left border-b border-line w-full transition-colors duration-200 last:border-b-0 focus:outline-none focus:border-0 focus:shadow-none">
              <span className={`w-[26px] h-[26px] mr-3 flex items-center justify-center shrink-0 bg-transparent ${iconColorCycle}`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="block bg-transparent">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span className={`flex-1 text-sm font-semibold text-ink ${labelColorCycle}`}>Location</span>
            </button>

            <button type="button" className="group flex items-center bg-transparent border-0 py-2 px-[15px] cursor-pointer text-left border-b border-line w-full transition-colors duration-200 last:border-b-0 focus:outline-none focus:border-0 focus:shadow-none">
              <span className={`w-[26px] h-[26px] mr-3 flex items-center justify-center shrink-0 bg-transparent ${iconColorCycle}`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="block bg-transparent">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </span>
              <span className={`flex-1 text-sm font-semibold text-ink ${labelColorCycle}`}>Currency</span>
            </button>
          </div>
        </div>
      </div>

      {/* ============ BOTTOM NAV ============ */}
      <nav className="absolute bottom-0 left-0 w-full bg-white flex justify-around items-center pt-1.5 px-2 pb-3.5 border-[1.5px] border-b-0 border-line shadow-[0_-4px_10px_rgba(0,0,0,0.05),0_-1px_0_rgba(0,0,0,0.04),0_0_0_1px_rgba(0,0,0,0.02)] rounded-t-[24px]">
        {navItems.map(({ id, label, path, icon }) => {
          const active = isActive(path)
          return (
            <button
              key={id}
              type="button"
              aria-current={active ? 'page' : undefined}
              onClick={() => navigate(path)}
              className={`group flex flex-col items-center gap-1 bg-transparent border-0 cursor-pointer py-2 px-[5px] flex-1 transition-colors duration-200 focus:outline-none ${
                active
                  ? 'text-accent'
                  : 'text-icon hover:text-ocean focus:text-icon-active active:text-icon-active'
              }`}
            >
              <span className="w-8 h-8 flex items-center justify-center text-inherit bg-transparent transition-colors duration-200 [&_svg]:block [&_svg]:w-[22px] [&_svg]:h-[22px] [&_svg]:bg-transparent">
                {icon}
              </span>
              <span className={`text-[10px] text-inherit transition-colors duration-200 ${active ? 'font-bold' : 'font-medium'}`}>
                {label}
              </span>
            </button>
          )
        })}
      </nav>
    </main>
  )
}

export default Profile