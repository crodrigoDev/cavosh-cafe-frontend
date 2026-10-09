import './review-order.css'
import headerImage from '../assets/images/dash.svg'

/* ===== Iconos SVG inline ===== */

function BackIcon() {
  return (
    <svg
      className="icon"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function EditIcon() {
  return (
    <svg
      className="icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {/* Cuadrado abierto en la esquina superior derecha */}
      <path d="M12 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6" />
      {/* Lápiz en diagonal */}
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  )
}

function ReviewOrder() {
  // Datos de ejemplo para el pedido
  const orderItems = [
    { id: 1, name: "Caramel Macchiato", qty: 1, description: "Small, Oat milk", price: 9.40 },
    { id: 2, name: "Traditional Cappuccino", qty: 2, description: "Small, Skim milk, No caffeine", price: 1.50 }
  ]

  // Subtotal derivado de los items (price = precio unitario)
  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <main className="app-container">

      {/* Cabecera con imagen de fondo — título centrado */}
      <header
        className="app-header review-header header-with-image"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <button type="button" className="back-button" aria-label="Go back">
          <BackIcon />
        </button>
        <h1>Review Order</h1>
      </header>

      <div className="content-scroll-area">

        {/* Sección: Order details */}
        <div className="review-section">
          <h2 className="section-label">Order details</h2>

          <div className="info-card">
            {orderItems.map((item, index) => (
              <div
                key={item.id}
                className={`order-item-row ${index !== orderItems.length - 1 ? 'with-border' : ''}`}
              >
                <div className="item-info">
                  <span className="item-name">
                    {item.name} <span className="item-qty">x {item.qty}</span>
                  </span>
                  <span className="item-desc">{item.description}</span>
                </div>
                <span className="item-price">
                  ${(item.price * item.qty).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sección: Deliver to */}
        <div className="review-section">
          <h2 className="section-label">Deliver to</h2>

          <div className="info-card single-row has-action">
            <div className="text-content">
              <span className="main-text">Cavosh Cafe</span>
              <span className="sub-text">Legnicka 5, Wroclaw</span>
            </div>
            <button
              type="button"
              className="edit-icon-btn absolute-right"
              aria-label="Edit delivery address"
            >
              <EditIcon />
            </button>
          </div>
        </div>

        {/* Sección: Pick up details */}
        <div className="review-section">
          <h2 className="section-label">Pick up details</h2>

          <div className="info-card has-action">
            <div className="detail-row">
              <span className="detail-label">Pick-up time</span>
              <span className="detail-value">08:30 AM</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Pick-up date</span>
              <span className="detail-value">Thu 29.11.2022</span>
            </div>
            <button
              type="button"
              className="edit-icon-btn absolute-right"
              aria-label="Edit pick up details"
            >
              <EditIcon />
            </button>
          </div>
        </div>

        {/* Sección: Payment */}
        <div className="review-section">
          <h2 className="section-label">Payment</h2>

          <div className="info-card single-row has-action">
            <div className="text-content text-content-inline">
              <span className="main-text">Card</span>
              <span className="sub-text">MasterCard /••••2048</span>
            </div>
            <button
              type="button"
              className="edit-icon-btn absolute-right"
              aria-label="Edit payment method"
            >
              <EditIcon />
            </button>
          </div>
        </div>

      </div>

      {/* Footer fijo con Subtotal y botón */}
      <div className="footer-fixed review-footer">
        <div className="footer-left">
          <span className="subtotal-label">Subtotal</span>
          <span className="subtotal-value">
            <span className="subtotal-currency">$</span>{subtotal.toFixed(2)}
          </span>
        </div>
        <button type="button" className="place-order-btn">Place Order</button>
      </div>
    </main>
  )
}

export default ReviewOrder