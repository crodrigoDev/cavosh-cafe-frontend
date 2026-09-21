import { useState } from 'react'
import './Auth.css'
import facebookIcon from '../assets/facebook.avif'
import googleIcon from '../assets/google.webp'
import appleIcon from '../assets/apple.svg'

function Auth() {
  const [modo, setModo] = useState<'signin' | 'register'>('signin')

  return (
    <main className="auth-page">
      <section className="auth-card">

        <div className="auth-header">
          <h1>
            {modo === 'signin'
              ? "Let's get you signed in!"
              : "Let's get you registered!"}
          </h1>
        </div>

        <div className="auth-tabs">
          <button
            type="button"
            className={modo === 'signin' ? 'tab active' : 'tab'}
            onClick={() => setModo('signin')}
          >
            Sign In
          </button>

          <button
            type="button"
            className={modo === 'register' ? 'tab active' : 'tab'}
            onClick={() => setModo('register')}
          >
            Register
          </button>
        </div>

        <div className="auth-content">

          {modo === 'signin' && (
            <>
              <input
                className="auth-input"
                type="email"
                placeholder="Email"
              />

              <input
                className="auth-input"
                type="password"
                placeholder="Password"
              />

              <button className="forgot-password">
                Forgot Password?
              </button>

              <button className="main-auth-button">
                Login
              </button>

              <p className="social-text">
                Or login with
              </p>
            </>
          )}

          {modo === 'register' && (
            <>
              <input
                className="auth-input"
                type="text"
                placeholder="Full Name"
              />

              <input
                className="auth-input"
                type="email"
                placeholder="Email Address"
              />

              <input
                className="auth-input"
                type="password"
                placeholder="Password"
              />

              <input
                className="auth-input"
                type="password"
                placeholder="Confirm Password"
              />

              <button className="main-auth-button">
                Register
              </button>

              <p className="social-text">
                Or register with
              </p>
            </>
          )}

<div className="social-buttons">
  <button className="social-button">
    <img src={facebookIcon} alt="Facebook" />
  </button>

  <button className="social-button">
    <img src={googleIcon} alt="Google" />
  </button>

  <button className="social-button">
    <img src={appleIcon} alt="Apple" />
  </button>
</div>
          {modo === 'signin' ? (
            <p className="change-mode-text">
              Don't have an account?

              <button onClick={() => setModo('register')}>
                Register Now
              </button>
            </p>
          ) : (
            <p className="change-mode-text">
              Already have an account?

              <button onClick={() => setModo('signin')}>
                Login Now
              </button>
            </p>
          )}

        </div>
      </section>
    </main>
  )
}

export default Auth