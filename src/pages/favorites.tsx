import headerImage from '../assets/images/dash.svg'
import cafe1 from '../assets/images/cafe1.png'
import cafe2 from '../assets/images/cafe2.png'
import cafe3 from '../assets/images/cafe3.png'
import cafe4 from '../assets/images/cafe4.png'
import './favorites.css'

/* =========================
   ÍCONOS SVG INLINE
   ========================= */

const HomeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" />
  </svg>
)

const MenuIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 6.5C10.5 5 8.5 4.5 6 4.5c-1 0-2 .1-3 .4v13c1-.3 2-.4 3-.4 2.5 0 4.5.5 6 2" />
    <path d="M12 6.5C13.5 5 15.5 4.5 18 4.5c1 0 2 .1 3 .4v13c-1-.3-2-.4-3-.4-2.5 0-4.5.5-6 2" />
    <path d="M12 6.5v13" />
  </svg>
)

const HeartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const ProfileIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
  </svg>
)

const CartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 4h2l2.2 10.5a2 2 0 0 0 2 1.5h7.6a2 2 0 0 0 2-1.6L20.5 7H6" />
    <circle cx="9.5" cy="19.5" r="1.3" />
    <circle cx="17" cy="19.5" r="1.3" />
  </svg>
)

/* =========================
   COMPONENTE
   ========================= */

function Favorites() {
  const favoriteItems = [
    {
      id: 1,
      name: "Caramel Macchiato",
      description: "Large, Oat milk",
      price: 6.70,
      image: cafe1
    },
    {
      id: 2,
      name: "Caffe Mocha",
      description: "Large, Almond milk",
      price: 7.00,
      image: cafe2
    },
    {
      id: 3,
      name: "Traditional Cappuccino",
      description: "Small, Skim milk",
      price: 3.00,
      image: cafe3
    },
    {
      id: 4,
      name: "Cinnamon Roll",
      description: "",
      price: 3.50,
      image: cafe4
    }
  ]

  return (
    <main className="app-container">
      <header className="app-header">
        <img src={headerImage} alt="" className="header-image" />
        <div className="header-overlay">
          <h1>Favorites</h1>
        </div>
      </header>

      <div className="content-scroll-area">
        <div className="items-counter">
          <span>{favoriteItems.length} items</span>
        </div>

        <div className="favorites-list">
          {favoriteItems.map((item) => (
            <div key={item.id} className="favorite-card">
              <div className="favorite-image-wrapper">
                <img src={item.image} alt={item.name} className="favorite-image" />
              </div>

              <div className="favorite-details">
                <h3 className="favorite-name">{item.name}</h3>
                {item.description && (
                  <p className="favorite-description">{item.description}</p>
                )}
                <p className="favorite-price">${item.price.toFixed(2)}</p>
              </div>

              <button
                className="add-favorite-btn"
                type="button"
                aria-label={`Añadir ${item.name}`}
              >
                <span aria-hidden="true">+</span>
              </button>
            </div>
          ))}
        </div>

        <div className="edit-section">
          <button className="edit-btn" type="button">Edit</button>
        </div>
      </div>

      {/* =========================
          BOTTOM NAVIGATION
          ========================= */}
      <nav className="bottom-nav" aria-label="Navegación principal">

        <button className="nav-item" type="button">
          <span className="nav-icon"><HomeIcon /></span>
          <span className="nav-label">Home</span>
        </button>

        <button className="nav-item" type="button">
          <span className="nav-icon"><MenuIcon /></span>
          <span className="nav-label">Menu</span>
        </button>

        <button
          className="nav-item active"
          type="button"
          aria-current="page"
        >
          <span className="nav-icon"><HeartIcon /></span>
          <span className="nav-label">Favorites</span>
        </button>

        <button className="nav-item" type="button">
          <span className="nav-icon"><ProfileIcon /></span>
          <span className="nav-label">Profile</span>
        </button>

        <button className="nav-item" type="button">
          <span className="nav-icon"><CartIcon /></span>
          <span className="nav-label">Cart</span>
        </button>

      </nav>
    </main>
  )
}

export default Favorites