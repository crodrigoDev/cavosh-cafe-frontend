import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import headerImage from '../assets/images/dash.svg'
import miniDash from '../assets/images/minidash.svg'

function ChooseCafe() {
  const navigate = useNavigate()
  const [selectedSection, setSelectedSection] = useState<'frequent' | 'city' | 'near'>('near')
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map')
  const [selectedCafe, setSelectedCafe] = useState('Legnicka 5, Wroclaw')

  const cafesList = [
    { id: 1, name: 'Cavosh Cafe', address: 'Legnicka 5, Wroclaw', hours: '8:00 AM - 22:00 PM', isOpen: true },
    { id: 2, name: 'Starbucks', address: 'Rynek 10, Wroclaw', hours: '7:00 AM - 21:00 PM', isOpen: true },
    { id: 3, name: 'Costa Coffee', address: 'Swidnicka 40, Wroclaw', hours: '9:00 AM - 20:00 PM', isOpen: false },
  ]

  const selectSection = (section: 'frequent' | 'city' | 'near') => {
    setSelectedSection(section)
  }

  const radioCircle = (section: 'frequent' | 'city' | 'near') => (
    <div className="w-5 h-5 rounded-full border-2 border-[#D1D5DB] bg-[#EBEFF2] flex justify-center items-center transition-colors shrink-0">
      {selectedSection === section && <div className="w-3 h-3 bg-accent rounded-full" />}
    </div>
  )

  return (
    <main className="w-[375px] h-[812px] bg-white rounded-[30px] overflow-hidden flex flex-col shadow-[0_10px_25px_rgba(0,0,0,0.1)] relative mx-auto">
      {/* HEADER */}
      <header className="relative w-full h-[130px] overflow-hidden shrink-0 bg-brand rounded-bl-[30px] rounded-br-[30px]">
        <img
          src={headerImage}
          alt="Cafe"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        <div className="relative z-[1] w-full h-full flex flex-col justify-center items-center px-5">
          <button
            aria-label="Go back"
            onClick={() => navigate(-1)}
            className="absolute top-1/2 left-5 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-transparent border-0 text-[#F5E6D3] cursor-pointer p-0 transition-opacity z-[2] hover:opacity-80 active:scale-[0.92]"
          >
            <svg
              className="w-[30px] h-[30px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <h1 className="font-poppins text-[23px] font-medium tracking-[0.5px] m-0 text-white text-center [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
            Choose Your Cafe
          </h1>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto pb-[120px]">
        {/* Sección 1: Frequently chosen */}
        <div className="px-5">
          <div
            className="flex justify-between items-center pt-[18px] pb-2 cursor-pointer"
            onClick={() => selectSection('frequent')}
          >
            <span className="text-base font-semibold text-ink block">Frequently chosen</span>
            {radioCircle('frequent')}
          </div>
        </div>

        {/* Sección 2: Search by city */}
        <div className="px-5">
          <div
            className="flex justify-between items-center pt-[18px] pb-2 cursor-pointer"
            onClick={() => selectSection('city')}
          >
            <span className="text-base font-semibold text-ink block">Search by city</span>
            {radioCircle('city')}
          </div>

          <div className="pb-[15px]">
            <div className="relative">
              <input
                type="text"
                placeholder="City"
                className="w-full py-[14px] px-4 border-0 rounded-[20px] bg-[#EBEFF2] text-sm text-muted outline-none font-[inherit]"
              />
            </div>
          </div>
        </div>

        {/* Sección 3: Cafes near me */}
        <div className="px-5">
          <div
            className="flex justify-between items-center pt-[18px] pb-2 cursor-pointer"
            onClick={() => selectSection('near')}
          >
            <span className="text-base font-semibold text-ink block">Cafes near me</span>
            {radioCircle('near')}
          </div>

          <div className="flex justify-start items-center gap-2 pb-[15px]">
            <span className="text-[13px] text-muted block">Turn on location to see nearby cafes.</span>
            <button className="bg-transparent border-0 text-accent font-semibold text-xs cursor-pointer p-0 shrink-0 font-[inherit]">
              Turn On
            </button>
          </div>

          <div className="pb-[15px]">
            <div className="flex justify-between gap-6 mb-[15px] border-b border-line">
              <button
                onClick={() => setViewMode('list')}
                className={`bg-transparent border-0 py-[10px] px-1 text-sm cursor-pointer relative font-[inherit] ${
                  viewMode === 'list'
                    ? "text-accent font-semibold after:content-[''] after:absolute after:-bottom-px after:left-0 after:w-full after:h-0.5 after:bg-accent"
                    : 'text-muted'
                }`}
              >
                List
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`bg-transparent border-0 py-[10px] px-1 text-sm cursor-pointer relative font-[inherit] ${
                  viewMode === 'map'
                    ? "text-accent font-semibold after:content-[''] after:absolute after:-bottom-px after:left-0 after:w-full after:h-0.5 after:bg-accent"
                    : 'text-muted'
                }`}
              >
                Map
              </button>
            </div>

            {viewMode === 'map' ? (
              <div className="h-[260px] rounded-[14px] overflow-hidden relative bg-[#f7f9fb] border border-[#eef2f6]">
                <div className="relative w-full h-full overflow-hidden">
                  <svg
                    className="absolute inset-0 w-full h-full block"
                    viewBox="0 0 500 330"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="100%" height="100%" fill="#f4f7f9" />
                    <polygon
                      points="25,255 105,230 145,285 65,310"
                      fill="#e8eff5"
                      stroke="#a4b7c6"
                      strokeWidth="1.5"
                    />
                    <g
                      stroke="#a4b7c6"
                      strokeWidth="18"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    >
                      <path d="M -10,185 C 30,170 60,110 35,40 L 80,-10" />
                      <path d="M 125,-10 L 100,100 L 70,225 L 140,340" />
                      <path d="M 315,-10 L 210,180 L 180,240 L 130,340" />
                      <path d="M 35,160 L 100,100 M 70,225 L 180,240" />
                      <path d="M 180,240 L 330,220" />
                      <path d="M 330,-10 L 490,260" />
                      <path d="M 450,190 L 510,300" />
                    </g>
                    <g
                      stroke="#E6EBEF"
                      strokeWidth="15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    >
                      <path d="M -10,185 C 30,170 60,110 35,40 L 80,-10" />
                      <path d="M 125,-10 L 100,100 L 70,225 L 140,340" />
                      <path d="M 315,-10 L 210,180 L 180,240 L 130,340" />
                      <path d="M 35,160 L 100,100 M 70,225 L 180,240" />
                      <path d="M 180,240 L 330,220" />
                      <path d="M 330,-10 L 490,260" />
                      <path d="M 450,190 L 510,300" />
                    </g>
                  </svg>

                  <div className="absolute w-11 h-11 drop-shadow-[0_4px_6px_rgba(0,0,0,0.22)] z-[2] transition-transform duration-200 ease-in-out top-[52%] left-[26%] hover:-translate-y-0.5 hover:scale-105">
                    <svg viewBox="0 0 44 55" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block">
                      <path
                        d="M 22 0 C 9.8 0 0 9.8 0 22 C 0 38.5 22 55 22 55 C 22 55 44 38.5 44 22 C 44 9.8 34.2 0 22 0 Z"
                        fill="#eb5737"
                      />
                      <circle cx="22" cy="20" r="8" fill="#ffffff" />
                    </svg>
                  </div>

                  <div className="absolute w-11 h-11 drop-shadow-[0_4px_6px_rgba(0,0,0,0.22)] z-[2] transition-transform duration-200 ease-in-out top-[78%] left-[82%] hover:-translate-y-0.5 hover:scale-105">
                    <svg viewBox="0 0 40 50" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block">
                      <path
                        d="M 20 0 C 9 0 0 9 0 20 C 0 35 20 50 20 50 C 20 50 40 35 40 20 C 40 9 31 0 20 0 Z"
                        fill="#537791"
                      />
                      <circle cx="20" cy="18" r="7" fill="#ffffff" />
                    </svg>
                  </div>

                  {/* Tarjeta flotante */}
                  <div className="absolute top-3.5 right-3.5 bg-white rounded-[18px] py-1.5 px-2 shadow-[0_8px_22px_rgba(31,41,55,0.12)] flex flex-wrap gap-1.5 items-start w-[210px] z-[3]">
                    <div className="w-[58px] h-[58px] rounded-[14px] flex items-center justify-center shrink-0 relative overflow-hidden">
                      <img
                        src={miniDash}
                        alt="Cavosh"
                        className="absolute inset-0 w-full h-full object-cover block z-0 drop-shadow-[0_2px_4px_rgb(0,0,0)]"
                      />
                      <span className="relative z-[1] font-poppins font-normal italic text-[11px] text-[#d1583c] tracking-[0.3px] pointer-events-none">
                        Carvosh
                      </span>
                    </div>
                    <div className="flex flex-col min-w-0 flex-1 items-start text-left pl-0">
                      <h3 className="m-0 mb-1 text-[15px] font-bold text-[#2c3e50] leading-[1.2] text-left w-full">
                        Cavosh Cafe
                      </h3>
                      <p className="m-0 text-xs text-muted leading-[1.35] text-left w-full">
                        Legnicka 5,
                        <br />
                        Wrocław
                      </p>
                    </div>
                    <p className="m-0 text-xs text-muted leading-[1.35] w-full text-left pl-0">
                      Open: 8:00 AM - 22:00 PM
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2.5 max-h-[250px] overflow-y-auto">
                {cafesList.map((cafe) => (
                  <div
                    key={cafe.id}
                    className="flex justify-between items-center p-3 border border-line rounded-[10px] bg-[#F9FAFB] gap-2.5"
                  >
                    <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="font-bold text-[13px] text-ink">{cafe.name}</span>
                        <span
                          className={`w-2 h-2 rounded-full shrink-0 ${
                            cafe.isOpen ? 'bg-[#10B981]' : 'bg-[#EF4444]'
                          }`}
                        />
                      </div>
                      <p className="m-0 text-[10px] text-muted leading-[1.4] truncate">{cafe.address}</p>
                      <p className="m-0 text-[10px] text-muted leading-[1.4] truncate">
                        Open: {cafe.hours}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedCafe(cafe.address)}
                      className="bg-white border border-line py-1.5 px-3 rounded-[15px] text-[11px] font-semibold text-brand cursor-pointer shrink-0 font-[inherit] transition-colors hover:bg-brand hover:text-white"
                    >
                      Select
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER FIJO */}
      <div className="absolute bottom-0 left-0 w-full bg-white pt-[15px] px-5 pb-[25px] border-t border-line shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-10">
        <div className="flex justify-between mb-[15px] text-sm">
          <span className="font-semibold text-ink">Chosen cafe</span>
          <span className="text-ink">{selectedCafe}</span>
        </div>

        <div className="flex gap-[15px]">
          <button
            onClick={() => navigate('/delivery-method')}
            className="flex-1 py-3 px-2 rounded-[30px] text-[15px] font-semibold cursor-pointer border-0 font-[inherit] transition-opacity bg-brand text-white hover:opacity-90"
          >
            Save
          </button>
          <button
            onClick={() => navigate(-1)}
            className="flex-1 py-3 px-2 rounded-[30px] text-[15px] font-semibold cursor-pointer font-[inherit] transition-opacity bg-white text-ink border-[1.5px] border-ink hover:bg-[#f5f5f5]"
          >
            Cancel
          </button>
        </div>
      </div>
    </main>
  )
}

export default ChooseCafe