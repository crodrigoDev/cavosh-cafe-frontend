// src/App.tsx
import { Routes, Route, Navigate } from 'react-router-dom'

import ChooseCafe from './pages/choose-cafe'
import DeliveryMethod from './pages/delivery-method'
import Favorites from './pages/favorites'
import MyCart from './pages/my-cart'
import OrderTracking from './pages/order-tracking'
import PaymentMethod from './pages/payment-method'
import Profile from './pages/profile'
import ReviewOrder from './pages/review-order'

function App(): import("react").JSX.Element {
  return (
    <Routes>
      {/* Pantalla inicial */}
      <Route path="/" element={<Navigate to="/choose-cafe" replace />} />

      {/* Flujo de compra */}
      <Route path="/choose-cafe" element={<ChooseCafe />} />
      <Route path="/delivery-method" element={<DeliveryMethod />} />
      <Route path="/review-order" element={<ReviewOrder />} />
      <Route path="/payment-method" element={<PaymentMethod />} />
      <Route path="/order-tracking" element={<OrderTracking />} />

      {/* Pantallas con bottom nav */}
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<MyCart />} />

      {/* Cualquier ruta desconocida → a la raíz */}
      <Route path="*" element={<Navigate to="/choose-cafe" replace />} />
    </Routes>
  )
}

export default App