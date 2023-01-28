import { useState } from 'react'
import reactLogo from './assets/react.svg'

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
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-slate-400'>
      <div className='border'>
        <div>Login Form</div>
        <div></div>
        <label htmlFor=''></label>
        <input type='text' />
        <button></button>
      </div>
    </div>
  )
}

export default App
