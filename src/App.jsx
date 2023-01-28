import { useEffect, useState } from 'react'
import Dashboard from './components/Dashboard/Dashboard'
import LoginForm from './components/LoginForm/LoginForm'
import { login } from './services/authService'

/**
 * Tasks:
 * The login button should be disabled if the Email or Password fields are empty.
 * Login should trigger login() function imported from './services/authService'
 * If login is successful, redirect to /dashboard
 * If login is unsuccessful, show an error message
 * Disable Login button while login is in progress
 *
 */

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = (email, password) => {
    login(email, password)
      .then(res => {
        console.log('response', res)
        setLoggedIn(true)
      })
      .catch(err => {
        console.log(err.message)
      })
      .finally(res => {
        console.log('Object from finally', res)
      })
  }

  const handleLogout = () => {
    setLoggedIn(false)
  }

  return (
    <div className='min-h-screen bg-slate-400 m-0 p-2'>
      {loggedIn ? (
        <Dashboard logout={handleLogout} />
      ) : (
        <LoginForm
          emailCtrl={{ value: email, onChange: e => setEmail(e.target.value) }}
          passwordCtrl={{
            value: password,
            onChange: e => setPassword(e.target.value),
          }}
          login={(email, password) => handleLogin(email, password)}
        />
      )}
    </div>
  )
}

export default App
