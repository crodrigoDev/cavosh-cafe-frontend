import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import headerImage from '../assets/images/dash.svg'

function OrderTracking() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('tracking')

  const trackingSteps = [
    { id: 1, label: 'Order placed', status: 'completed' },
    { id: 2, label: 'Preparing', status: 'active' },
    { id: 3, label: 'Order is ready!', status: 'pending' },
  ]

  const totalSteps = trackingSteps.length
  const completedIndex = trackingSteps.findIndex((s) => s.status === 'completed')
  const activeIndex = trackingSteps.findIndex((s) => s.status === 'active')

  const completedHeight = ((completedIndex + 1) / totalSteps) * 100
  const activeHeight = ((activeIndex + 1) / totalSteps) * 100

  return (
    <main className="w-[375px] h-[900px] bg-white rounded-[30px] overflow-hidden flex flex-col relative mx-auto font-poppins">
      {/* Fondo del dashboard */}
      <img
        src={headerImage}
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-[150px] object-cover z-0 pointer-events-none rounded-b-[30px]"
      />

      {/* Overlay con gradiente */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-[150px] z-[1] pointer-events-none rounded-b-[30px] bg-[linear-gradient(to_bottom,rgba(53,83,107,0.85),rgba(53,83,107,0.4))]"
      ></div>

      {/* Título */}
      <h1 className="absolute top-[50px] left-5 right-5 z-10 m-0 text-white text-[22px] font-bold leading-[1.3] text-center tracking-[0.2px] [text-shadow:0_1px_2px_rgba(0,0,0,0.15)] pointer-events-none">
        Thank you for the order!
      </h1>

      {/* Tabs */}
      <div role="tablist" className="absolute top-[130px] left-5 right-5 z-10 flex p-0 bg-[#EDEFF3] rounded-[24px] shadow-[0_2px_6px_rgba(0,0,0,0.06)]">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'tracking'}
          onClick={() => setActiveTab('tracking')}
          className={`flex-1 p-3 border-0 rounded-[20px] text-sm font-semibold font-poppins cursor-pointer transition-all duration-[250ms] ease-out focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
            activeTab === 'tracking'
              ? 'bg-accent text-white shadow-[0_2px_6px_rgba(231,76,60,0.35)]'
              : 'bg-transparent text-ink hover:bg-white/[0.55]'
          }`}
        >
          Tracking
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'details'}
          onClick={() => setActiveTab('details')}
          className={`flex-1 p-3 border-0 rounded-[20px] text-sm font-semibold font-poppins cursor-pointer transition-all duration-[250ms] ease-out focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
            activeTab === 'details'
              ? 'bg-accent text-white shadow-[0_2px_6px_rgba(231,76,60,0.35)]'
              : 'bg-transparent text-ink hover:bg-white/[0.55]'
          }`}
        >
          Order details
        </button>
      </div>

      {/* Área scrolleable */}
      <div className="flex-1 overflow-y-auto pt-[150px] px-5 pb-[100px] relative z-[2] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {activeTab === 'tracking' ? (
          <>
            {/* Tarjeta de Número de Pedido */}
            <div className="flex justify-between items-center bg-[#EBEFF2] rounded-[22px] p-px mb-[25px] mt-[70px]">
              <span className="text-sm font-semibold text-ink pl-[14px]">
                Order number
              </span>
              <div
                className="w-[65px] h-[70px] rounded-[20px] flex justify-center items-center text-white bg-ocean bg-cover bg-center bg-no-repeat shadow-[inset_0_0_0_1000px_rgba(53,83,107,0.55)] -mr-3"
                style={{ backgroundImage: `url(${headerImage})` }}
              >
                <span className="text-[25px] font-normal relative">76</span>
              </div>
            </div>

            {/* Información de Recogida */}
            <div className="flex flex-col gap-[15px] mb-[35px] items-start">
              <div className="flex flex-row justify-start items-start gap-2">
                <span className="text-[13px] font-semibold text-ink w-[130px] shrink-0 text-left whitespace-nowrap">
                  Pick-up time
                </span>
                <span className="text-[13px] text-ink w-auto text-left">
                  8:00 AM
                </span>
              </div>
              <div className="flex flex-row justify-start items-start gap-2">
                <span className="text-[13px] font-semibold text-ink w-[130px] shrink-0 text-left whitespace-nowrap">
                  Pick-up location
                </span>
                <div className="flex flex-col gap-0.5 items-start">
                  <span className="text-[13px] text-ink text-left">Cavosh Cafe</span>
                  <span className="text-[13px] text-ink text-left">Legnicka 20, Wroclaw</span>
                </div>
              </div>
            </div>

            {/* Tracking */}
            <div className="mb-5">
              <h2 className="text-lg font-bold text-ink m-0 mb-5 text-left">
                Order tracking
              </h2>

              <div className="flex gap-5 items-stretch">
                {/* Barra del timeline */}
                <div className="w-[38px] min-h-[255px] bg-timeline-light rounded-[19px] relative overflow-hidden shrink-0">
                  <div
                    className="absolute top-0 left-0 right-0 rounded-b-[19px] bg-timeline-active z-[1]"
                    style={{ height: `${activeHeight}%` }}
                  ></div>
                  <div
                    className="absolute top-0 left-0 right-0 rounded-b-[19px] bg-timeline-dark z-[2]"
                    style={{ height: `${completedHeight}%` }}
                  ></div>
                </div>

                {/* Pasos */}
                <div className="flex-1 flex flex-col">
                  {trackingSteps.map((step) => (
                    <div
                      key={step.id}
                      className="flex-1 flex justify-between items-center py-2.5"
                    >
                      <span
                        className={`text-[15px] text-left ${
                          step.status === 'completed'
                            ? 'font-bold text-timeline-dark'
                            : step.status === 'active'
                              ? 'font-semibold text-timeline-active'
                              : 'font-medium text-gray-400'
                        }`}
                      >
                        {step.label}
                      </span>

                      {step.status === 'completed' ? (
                        <span
                          aria-label="Completado"
                          className="relative w-7 h-7 inline-flex items-center justify-center shrink-0 text-accent"
                        >
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 28 28"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 w-full h-full"
                          >
                            <rect
                              x="0"
                              y="0"
                              width="28"
                              height="28"
                              rx="8"
                              ry="8"
                              fill="#F3F4F6"
                            />
                          </svg>
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative w-[150%] h-[150%] overflow-visible z-[1]"
                          >
                            <path
                              d="M4 12.5 L9.5 18 L20 6.5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      ) : (
                        <div className="w-[22px] h-[22px] bg-[#EBEFF2] rounded-lg shrink-0"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="mb-5">
            <h2 className="text-lg font-bold text-ink m-0 mb-5 text-left">
              Order details
            </h2>
            <div className="bg-gray-100 rounded-[12px] p-[15px]">
              <div className="flex justify-between py-2">
                <span className="text-[13px] text-gray-500">Item</span>
                <span className="text-[13px] font-medium text-ink">1x Flat White</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-[13px] text-gray-500">Item</span>
                <span className="text-[13px] font-medium text-ink">1x Croissant</span>
              </div>
              <div className="flex justify-between py-3 mt-2 border-t border-line font-bold">
                <span className="text-[13px] font-bold text-ink">Total</span>
                <span className="text-[13px] font-bold text-ink">$8.50</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Fijo */}
      <div className="absolute bottom-0 left-0 w-full bg-white pt-[15px] px-5 pb-[25px] shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-[3]">
        <button
          type="button"
          onClick={() => navigate('/choose-cafe')}
          className="w-full bg-brand text-white border-0 p-4 rounded-[12px] text-base font-semibold font-poppins cursor-pointer transition-opacity hover:opacity-90"
        >
          Back Home
        </button>
      </div>
    </main>
  )
}

export default OrderTracking