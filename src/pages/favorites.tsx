import { useState } from 'react'
import './favorites.css'

function Favorites() {
  // Datos de ejemplo para los productos favoritos
  const favoriteItems = [
    {
      id: 1,
      name: "Caramel Macchiato",
      description: "Large, Oat milk",
      price: 6.70,
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      id: 2,
      name: "Caffe Mocha",
      description: "Large, Almond milk",
      price: 7.00,
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      id: 3,
      name: "Traditional Cappuccino",
      description: "Small, Skim milk",
      price: 3.00,
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      id: 4,
      name: "Cinnamon Roll",
      description: "", // Sin descripción en este item
      price: 3.50,
      image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ]

  return (
    <main className="app-container">
      {/* Cabecera Azul */}
      <header className="app-header favorites-header">
        <h1>Favorites</h1>
      </header>

      <div className="content-scroll-area">
        
        {/* Contador de Items */}
        <div className="items-counter">
          <span>{favoriteItems.length} items</span>
        </div>

        {/* Lista de Favoritos */}
        <div className="favorites-list">
          {favoriteItems.map((item) => (
            <div key={item.id} className="favorite-card">
              
              {/* Imagen del producto */}
              <div className="favorite-image-wrapper">
                <img src={item.image} alt={item.name} className="favorite-image" />
              </div>
              
              {/* Detalles del producto */}
              <div className="favorite-details">
                <h3 className="favorite-name">{item.name}</h3>
                {item.description && (
                  <p className="favorite-description">{item.description}</p>
                )}
                <p className="favorite-price">${item.price.toFixed(2)}</p>
              </div>

              {/* Botón de Añadir (+) con diseño de esquina */}
              <button className="add-favorite-btn">
                <span>+</span>
              </button>
            </div>
          ))}
        </div>

        {/* Botón de Editar */}
        <div className="edit-section">
          <button className="edit-btn">Edit</button>
        </div>

      </div>

      {/* Barra de Navegación Inferior */}
      <nav className="bottom-nav">
        <button className="nav-item">
          <span className="nav-icon">🏠</span>
          <span className="nav-label">Home</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">📖</span>
          <span className="nav-label">Menu</span>
        </button>
        <button className="nav-item active">
          <span className="nav-icon">❤️</span>
          <span className="nav-label">Favorites</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">👤</span>
          <span className="nav-label">Profile</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">🛒</span>
          <span className="nav-label">Cart</span>
        </button>
      </nav>
    </main>
  )
}

export default Favorites