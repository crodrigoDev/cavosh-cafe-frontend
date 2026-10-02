import caramelImg from "../assets/Caramel-Macchiato.avif";
import vanillaImg from "../assets/Vanilla-latte.jpg";
import whiteChocolateImg from "../assets/White-Chocolate.webp";
import { useState } from "react";
import {FaArrowLeft,FaSearch,FaHeart,FaHome,FaCoffee,FaShoppingCart,
  } from "react-icons/fa";
  
  function Menu() {
    const [categoria, setCategoria] = useState("hot");
    const hotDrinks = [
        {
          id: 1,
          nombre: "Caramel Macchiato",
          precio: 14,
          imagen: caramelImg,
        },
        {
          id: 2,
          nombre: "Vanilla Latte",
          precio: 12,
          imagen: vanillaImg,
        },
        {
          id: 3,
          nombre: "White Chocolate",
          precio: 13,
          imagen: whiteChocolateImg,
        },
      ];
      const coldDrinks = [
        {
          id: 1,
          nombre: "Iced Caramel",
          precio: 15,
          imagen: caramelImg,
        },
        {
          id: 2,
          nombre: "Iced Vanilla",
          precio: 13,
          imagen: vanillaImg,
        },
        {
          id: 3,
          nombre: "Cold Chocolate",
          precio: 14,
          imagen: whiteChocolateImg,
        },
      ];
      
      const snacks = [
        {
          id: 1,
          nombre: "Chocolate Cookie",
          precio: 8,
          imagen: whiteChocolateImg,
        },
        {
          id: 2,
          nombre: "Vanilla Muffin",
          precio: 10,
          imagen: vanillaImg,
        },
        {
          id: 3,
          nombre: "Caramel Cake",
          precio: 12,
          imagen: caramelImg,
        },
      ];
    return (
      <main className="min-h-screen bg-[#f4f6f7] flex justify-center">
        <section className="w-full max-w-[390px] min-h-screen bg-white relative">
  
          {/* CABECERA */}
          <header className="bg-[#304f64] text-white px-5 pt-7 pb-5 rounded-b-[28px]">
            <div className="flex items-center justify-between">
              <button className="text-lg">
                <FaArrowLeft />
              </button>
  
              <h1 className="text-lg font-semibold">
                Menu
              </h1>
  
              <button className="text-lg">
                <FaHeart />
              </button>
            </div>
  
            {/* BUSCADOR */}
            <div className="flex items-center bg-white rounded-full mt-5 shadow-sm">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 px-4 py-3 text-sm text-gray-700 bg-transparent outline-none"
              />
  
              <button className="w-11 h-11 rounded-full bg-[#f15a3b] text-white flex items-center justify-center">
                <FaSearch />
              </button>
            </div>
          </header>
  
          {/* CONTENIDO */}
          <div className="px-5 pt-5 pb-24">
  
            <h2 className="text-[#304f64] font-bold text-base mb-3">
              Categories
            </h2>
  
            <div className="flex gap-3 overflow-x-auto hide-scrollbar">

  <button
    onClick={() => setCategoria("hot")}
    className={
      categoria === "hot"
        ? "px-4 py-2 rounded-full bg-[#f15a3b] text-white text-sm"
        : "px-4 py-2 rounded-full bg-[#eef1f3] text-[#304f64] text-sm"
    }
  >
    Hot drinks
  </button>

  <button
    onClick={() => setCategoria("cold")}
    className={
      categoria === "cold"
        ? "px-4 py-2 rounded-full bg-[#f15a3b] text-white text-sm"
        : "px-4 py-2 rounded-full bg-[#eef1f3] text-[#304f64] text-sm"
    }
  >
    Cold drinks
  </button>

  <button
    onClick={() => setCategoria("snacks")}
    className={
      categoria === "snacks"
        ? "px-4 py-2 rounded-full bg-[#f15a3b] text-white text-sm"
        : "px-4 py-2 rounded-full bg-[#eef1f3] text-[#304f64] text-sm"
    }
  >
    Snacks
  </button>

</div>
<div className="mt-6">

{categoria === "hot" && (
  <div>
    <h3 className="text-[#304f64] font-bold mb-4">
      Hot drinks
    </h3>

    <div className="grid grid-cols-2 gap-4">
      {hotDrinks.map((producto) => (
        <article
          key={producto.id}
          className="relative bg-white border border-gray-200 rounded-2xl p-3 shadow-sm"
        >
          <div className="h-28 bg-[#eef1f3] rounded-xl flex items-center justify-center">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="h-24 object-contain"
            />
          </div>

          <h4 className="font-semibold text-sm mt-3 pr-8">
            {producto.nombre}
          </h4>

          <p className="text-[#f15a3b] font-bold text-sm mt-1">
            S/ {producto.precio.toFixed(2)}
          </p>

          <button className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#f15a3b] text-white flex items-center justify-center text-lg hover:bg-[#d94c31] transition cursor-pointer">
            +
          </button>
        </article>
      ))}
    </div>
  </div>
)}

{categoria === "cold" && (
  <div>
    <h3 className="text-[#304f64] font-bold mb-4">
      Cold drinks
    </h3>

    <div className="grid grid-cols-2 gap-4">
      {coldDrinks.map((producto) => (
        <article
          key={producto.id}
          className="relative bg-white border border-gray-200 rounded-2xl p-3 shadow-sm"
        >
          <div className="h-28 bg-[#eef1f3] rounded-xl flex items-center justify-center">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="h-24 object-contain"
            />
          </div>

          <h4 className="font-semibold text-sm mt-3 pr-8">
            {producto.nombre}
          </h4>

          <p className="text-[#f15a3b] font-bold text-sm mt-1">
            S/ {producto.precio.toFixed(2)}
          </p>

          <button className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#f15a3b] text-white flex items-center justify-center text-lg hover:bg-[#d94c31] transition cursor-pointer">
            +
          </button>
        </article>
      ))}
    </div>
  </div>
)}

{categoria === "snacks" && (
  <div>
    <h3 className="text-[#304f64] font-bold mb-4">
      Snacks
    </h3>

    <div className="grid grid-cols-2 gap-4">
      {snacks.map((producto) => (
        <article
          key={producto.id}
          className="relative bg-white border border-gray-200 rounded-2xl p-3 shadow-sm"
        >
          <div className="h-28 bg-[#eef1f3] rounded-xl flex items-center justify-center">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="h-24 object-contain"
            />
          </div>

          <h4 className="font-semibold text-sm mt-3 pr-8">
            {producto.nombre}
          </h4>

          <p className="text-[#f15a3b] font-bold text-sm mt-1">
            S/ {producto.precio.toFixed(2)}
          </p>

          <button className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#f15a3b] text-white flex items-center justify-center text-lg hover:bg-[#d94c31] transition cursor-pointer">
            +
          </button>
        </article>
      ))}
    </div>
  </div>
)}

</div>
          </div>
  
          {/* NAVEGACIÓN INFERIOR */}
          <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex justify-around">
  
            <button className="flex flex-col items-center text-gray-400 text-xs">
              <FaHome className="text-lg" />
              <span className="mt-1">Home</span>
            </button>
  
            <button className="flex flex-col items-center text-[#f15a3b] text-xs">
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
    );
  }
  
  export default Menu;