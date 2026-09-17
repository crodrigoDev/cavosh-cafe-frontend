import coffeeImg from '../assets/coffee.png'
import './Welcome.css'

function Welcome() {
  return (
    <main className="welcome-page">
      <div className="welcome-decoration bean-one"></div>
      <div className="welcome-decoration bean-two"></div>

      <section className="welcome-content">

        <div className="welcome-illustration">
          <div className="coffee-circle">
          <img
  src={coffeeImg}
  alt="Cavosh Welcome"
  className="welcome-image"
/>
          </div>
        </div>

        <div className="welcome-text">
          <p>Welcome to</p>
          <h1>Cavosh</h1>
        </div>

        <button className="get-started-button">
          Get Started
        </button>

      </section>
    </main>
  )
}

export default Welcome