import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import headerImage from '../assets/images/dash.svg'

function DeliveryMethod() {
  const navigate = useNavigate()
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
    [25, 26, 27, 28, 29, 30, null],
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

    const newPeriod =
      hours === 12 && minutes === 0 ? (period === 'AM' ? 'PM' : 'AM') : period

    const formattedHours = String(hours).padStart(2, '0')
    const formattedMinutes = String(minutes).padStart(2, '0')
    setTime(`${formattedHours}:${formattedMinutes} ${newPeriod}`)
  }

  const handleNext = () => {
    // Navega al carrito con el resumen del método elegido
    const summary = pickupNow
      ? 'Pickup now (5–7 min)'
      : `${method === 'pickup' ? 'Scheduled pickup' : 'Delivery'} on Nov ${selectedDate} at ${time}`
    console.log(`Next → ${summary}`)
    navigate('/cart')
  }

  return (
    <main className="w-[375px] h-[820px] bg-white rounded-[30px] overflow-hidden flex flex-col shadow-[0_10px_25px_rgba(0,0,0,0.1)] relative mx-auto">
      {/* Cabecera con imagen de fondo */}
      <header
        className="text-white pt-[25px] px-5 pb-[30px] flex items-center relative bg-ocean bg-cover bg-center bg-no-repeat min-h-[150px] shrink-0 rounded-[30px] overflow-hidden [&>*]:relative [&>*]:z-[1]"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="flex items-center gap-[15px] w-full">
          <button
            aria-label="Go back"
            onClick={() => navigate(-1)}
            className="bg-transparent border-0 text-white text-[50px] cursor-pointer p-0 leading-none"
          >
            ‹
          </button>
          <h1 className="font-poppins text-[23px] font-medium m-0 flex-1 tracking-[0.5px] text-center pr-6 text-white">
            Delivery Method
          </h1>
        </div>
      </header>

      {/* Tabs anclados al app-container */}
      <div className="flex bg-gray-200 rounded-[25px] p-0 absolute top-[150px] left-5 right-5 -translate-y-1/2 z-20 shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
        <button
          className={`flex-1 p-4 border-0 rounded-[20px] text-base font-semibold cursor-pointer transition-all ${
            method === 'pickup'
              ? 'bg-accent text-white shadow-[0_2px_5px_rgba(0,0,0,0.1)]'
              : 'bg-transparent text-gray-500'
          }`}
          onClick={() => setMethod('pickup')}
        >
          Pick up
        </button>
        <button
          className={`flex-1 p-4 border-0 rounded-[20px] text-base font-semibold cursor-pointer transition-all ${
            method === 'delivery'
              ? 'bg-accent text-white shadow-[0_2px_5px_rgba(0,0,0,0.1)]'
              : 'bg-transparent text-gray-500'
          }`}
          onClick={() => setMethod('delivery')}
        >
          Delivery
        </button>
      </div>

      {/* Área scrolleable (scrollbar oculto) */}
      <div className="flex-1 overflow-y-auto pt-[55px] px-5 pb-[100px] [scrollbar-width:none] [-ms-overflow-style:none] [overscroll-behavior:contain] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
        {/* ===== Scheduled pick up ===== */}
        <div className="mb-[25px]">
          <div
            className="flex justify-between items-center mb-[5px] cursor-pointer"
            onClick={() => setPickupNow(false)}
          >
            <h2 className="text-base font-bold text-ink m-0">Scheduled pick up</h2>
            <div className="w-[22px] h-[22px] rounded-full border-2 border-gray-300 flex justify-center items-center bg-[#EBEFF2] transition-all shrink-0">
              {!pickupNow && <div className="w-[13px] h-[13px] bg-accent rounded-full" />}
            </div>
          </div>

          <p className="text-base text-ink m-0 mb-[15px] text-left">Choose date</p>

          {/* Calendario */}
          <div className="bg-gray-100 rounded-[10px] p-[15px] mb-[15px] border border-[#88888815]">
            <div className="flex justify-between items-center mb-[15px]">
              <button className="bg-transparent border-0 text-lg text-ink cursor-pointer px-[10px] py-0">
                ‹
              </button>
              <span className="text-base font-bold text-ink">November 2022</span>
              <button className="bg-transparent border-0 text-lg text-ink cursor-pointer px-[10px] py-0">
                ›
              </button>
            </div>

            <div className="grid grid-cols-7 gap-y-2 text-center">
              {daysOfWeek.map((day) => (
                <div key={day} className="text-[13px] font-medium text-gray-400 mb-[5px]">
                  {day}
                </div>
              ))}

              {calendarDays.flat().map((day, index) => {
                const isEmpty = day === null
                const isSelected = day === selectedDate
                return (
                  <div
                    key={index}
                    className={`text-[13px] font-medium w-[30px] h-[30px] leading-[30px] rounded-full justify-self-center transition-all ${
                      isEmpty
                        ? 'cursor-default text-ink'
                        : isSelected
                          ? 'bg-accent text-white font-bold cursor-pointer'
                          : 'text-ink cursor-pointer hover:bg-gray-200'
                    }`}
                    onClick={() => {
                      if (day) {
                        setSelectedDate(day)
                        setPickupNow(false)
                      }
                    }}
                  >
                    {day}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Selector de hora */}
          <div className="flex justify-between items-center">
            <span className="text-base font-semibold text-ink">Choose time</span>
            <div className="flex items-center justify-between bg-slate-50 border-[1.5px] border-slate-200 rounded-[10px] py-[3px] px-[10px] min-w-[150px] shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="border-0 bg-transparent text-base font-semibold text-slate-600 w-[75px] text-left outline-none font-[inherit] pl-1"
              />
              <div className="flex flex-col items-center justify-center text-[17px] text-[#020202c5] cursor-pointer select-none leading-[0] gap-[5px]">
                <span
                  className="px-[3px] transition-colors inline-block scale-x-[1.6] hover:text-ocean"
                  onClick={() => adjustTime(1)}
                >
                  ⌃
                </span>
                <span
                  className="px-[3px] transition-colors inline-block scale-x-[1.6] hover:text-ocean"
                  onClick={() => adjustTime(-1)}
                >
                  ⌄
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Pickup now ===== */}
        <div className="mb-[25px] cursor-pointer" onClick={() => setPickupNow(true)}>
          <div className="flex justify-between items-center mb-[5px]">
            <h2 className="text-base font-bold text-ink m-0">Pickup now</h2>
            <div className="w-[22px] h-[22px] rounded-full border-2 border-gray-300 flex justify-center items-center bg-[#EBEFF2] transition-all shrink-0">
              {pickupNow && <div className="w-[13px] h-[13px] bg-accent rounded-full" />}
            </div>
          </div>
          <p className="text-base text-ink m-0 mb-[15px] text-left">
            Your order will be ready in 5-7 minutes.
          </p>
        </div>
      </div>

      {/* Footer fijo */}
      <div className="absolute bottom-0 left-0 w-full bg-white pt-[15px] px-5 pb-[35px] shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-[15]">
        <button
          className="w-full bg-brand text-white border-0 p-[18px] rounded-[20px] text-base font-semibold cursor-pointer"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </main>
  )
}

export default DeliveryMethod