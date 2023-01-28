import React from 'react'

const Dashboard = ({ logout }) => {
  return (
    <div>
      <section className='w-full float'>
        <button
          className='border float-right px-2 py-1 bg-slate-300 shadow-lg'
          type='button'
          onClick={logout}
        >
          Logout
        </button>
      </section>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
