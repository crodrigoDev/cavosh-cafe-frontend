import { useRef } from "react";
import {FaHome,FaCoffee,FaHeart,FaBell,FaSearch, FaShoppingCart
} from "react-icons/fa";
import caramelImg from "../assets/Caramel-Macchiato.avif";
import vanillaImg from "../assets/Vanilla-latte.jpg";
import whiteChocolateImg from "../assets/White-Chocolate.webp";
function Home() {
  const carruselRef = useRef<HTMLDivElement>(null);
    return (
      <main className="min-h-screen bg-[#f4f6f7] flex justify-center">
        <section className="w-full max-w-[390px] min-h-screen bg-white relative">
  
          {/* CABECERA */}
          <header className="bg-[#304f64] text-white px-5 pt-7 pb-6 rounded-b-[30px]">
  <div className="flex justify-between items-start">
    <div>
      <p className="text-sm font-medium">
        Good morning, user
      </p>

      <h1 className="text-lg font-semibold mt-1">
        Your cafe awaits
      </h1>

      <p className="text-xs text-gray-200 mt-1">
        Legnicka 20, Wroclaw
      </p>
    </div>

    <button className="text-xl cursor-pointer">
  <FaBell />
</button>
  </div>

  <div className="flex items-center bg-white rounded-full mt-5 shadow-sm">
    <input
      type="text"
      placeholder="Search"
      className="flex-1 text-gray-700 px-4 py-3 bg-transparent outline-none text-sm"
    />

<button className="bg-[#f15a3b] w-11 h-11 rounded-full text-white flex items-center justify-center cursor-pointer hover:bg-[#d94c31] transition">
  <FaSearch />
</button>
  </div>
</header>
  
          {/* CONTENIDO */}
          <div className="px-5 pt-6 pb-24">
  
            <h2 className="text-[#304f64] font-bold text-lg mb-4">
              New in
            </h2>
  
            {/* PRODUCTOS NUEVOS */}
            <div className="relative">

  {/* FLECHA IZQUIERDA */}
  <button
    onClick={() =>
      carruselRef.current?.scrollBy({
        left: -180,
        behavior: "smooth",
      })
    }
    className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white shadow-md text-[#304f64] flex items-center justify-center cursor-pointer hover:bg-gray-100"
  >
    ←
  </button>

  {/* CONTENEDOR DE PRODUCTOS */}
  <div
    ref={carruselRef}
    className="flex gap-3 overflow-x-auto pb-3 hide-scrollbar scroll-smooth px-10"
  >

    {/* CARAMEL */}
    <article className="relative min-w-[145px] bg-white border border-gray-200 rounded-2xl p-3 shadow-sm">
      <div className="h-24 bg-[#eef1f3] rounded-xl flex items-center justify-center">
        <img
          src={caramelImg}
          alt="Caramel Macchiato"
          className="h-20 object-contain"
        />
      </div>

      <h3 className="font-semibold text-sm mt-3 pr-10">
        Caramel Macchiato
      </h3>

      <p className="text-[#f15a3b] font-bold text-sm mt-1">
        S/ 14.00
      </p>

      <button className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#f15a3b] text-white flex items-center justify-center text-lg">
        +
      </button>
    </article>

    {/* VANILLA */}
    <article className="relative min-w-[145px] bg-white border border-gray-200 rounded-2xl p-3 shadow-sm">
      <div className="h-24 bg-[#eef1f3] rounded-xl flex items-center justify-center">
        <img
          src={vanillaImg}
          alt="Vanilla Latte"
          className="h-20 object-contain"
        />
      </div>

      <h3 className="font-semibold text-sm mt-3 pr-10">
        Vanilla Latte
      </h3>

      <p className="text-[#f15a3b] font-bold text-sm mt-1">
        S/ 12.00
      </p>

      <button className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#f15a3b] text-white flex items-center justify-center text-lg">
        +
      </button>
    </article>

    {/* WHITE CHOCOLATE */}
    <article className="relative min-w-[145px] bg-white border border-gray-200 rounded-2xl p-3 shadow-sm">
      <div className="h-24 bg-[#eef1f3] rounded-xl flex items-center justify-center">
        <img
          src={whiteChocolateImg}
          alt="White Chocolate"
          className="h-20 object-contain"
        />
      </div>

      <h3 className="font-semibold text-sm mt-3 pr-10">
        White Chocolate
      </h3>

      <p className="text-[#f15a3b] font-bold text-sm mt-1">
        S/ 13.00
      </p>

      <button className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#f15a3b] text-white flex items-center justify-center text-lg">
        +
      </button>
    </article>

  </div>

  {/* FLECHA DERECHA */}
  <button
    onClick={() =>
      carruselRef.current?.scrollBy({
        left: 180,
        behavior: "smooth",
      })
    }
    className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white shadow-md text-[#304f64] flex items-center justify-center cursor-pointer hover:bg-gray-100"
  >
    →
  </button>

</div>
  
            {/* PEDIDOS FRECUENTES */}
            <h2 className="text-[#304f64] font-bold text-lg mt-7 mb-4">
              Frequently ordered
            </h2>
  
            <div className="space-y-3">
  
              <article className="flex items-center bg-white border border-gray-200 rounded-2xl p-3 shadow-sm">
                <div className="w-16 h-16 bg-[#eef1f3] rounded-xl flex items-center justify-center">
  <img
    src={caramelImg}
    alt="Caramel Macchiato"
    className="h-14 object-contain"
  />
</div>
  
                <div className="flex-1 ml-3">
                  <h3 className="font-semibold text-sm">
                    Caramel Macchiato
                  </h3>
  
                  <p className="text-xs text-gray-500">
                    Large, oat milk
                  </p>
  
                  <p className="text-[#f15a3b] font-bold text-sm">
                    S/ 14.00
                  </p>
                </div>
  
                <button className="w-9 h-9 rounded-full bg-[#f15a3b] text-white text-xl cursor-pointer">
                  +
                </button>
              </article>
  
              <article className="flex items-center bg-white border border-gray-200 rounded-2xl p-3 shadow-sm">
                <div className="w-16 h-16 bg-[#eef1f3] rounded-xl flex items-center justify-center">
  <img
    src={whiteChocolateImg}
    alt="Caffe Mocha"
    className="h-14 object-contain"
  />
</div>
  
                <div className="flex-1 ml-3">
                  <h3 className="font-semibold text-sm">
                    Caffe Mocha
                  </h3>
  
                  <p className="text-xs text-gray-500">
                    Large, almond milk
                  </p>
  
                  <p className="text-[#f15a3b] font-bold text-sm">
                    S/ 13.00
                  </p>
                </div>
  
                <button className="w-9 h-9 rounded-full bg-[#f15a3b] text-white text-xl cursor-pointer">
                  +
                </button>
              </article>
  
            </div>

  </div>
          
  
          {/* NAVEGACIÓN INFERIOR */}
          <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex justify-around">

  <button className="flex flex-col items-center text-[#f15a3b] text-xs">
    <FaHome className="text-lg" />
    <span className="mt-1">Home</span>
  </button>

  <button className="flex flex-col items-center text-gray-400 text-xs">
    <FaCoffee className="text-lg" />
    <span className="mt-1">Menu</span>
  </button>

  <button className="flex flex-col items-center text-gray-400 text-xs">
    <FaHeart className="text-lg" />
    <span className="mt-1">Favorites</span>
  </button>

  <button className="flex flex-col items-center text-gray-400 text-xs">
    <FaShoppingCart className="text-lg" />
    <span className="mt-1">Cart</span>
  </button>

</nav>
  
        </section>
      </main>
    )
  }
  
  export default Home