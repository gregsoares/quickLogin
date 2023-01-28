const LoginForm = ({ emailCtrl, passwordCtrl, login }) => {
  const email = emailCtrl.value,
    setEmail = emailCtrl.onChange,
    password = passwordCtrl.value,
    setPassword = passwordCtrl.onChange

  return (
    <div className='border mx-auto m-0 p-4 w-fit'>
      <p className=''>Login Form</p>
      <div className='p-2 m-1 float'>
        <label className='mr-2' htmlFor='email'>
          Email:
        </label>
        <input
          className='p-1 ml-2 float-right'
          type='text'
          value={email}
          onChange={e => setEmail(e)}
        />
      </div>
      <div className='p-2 m-1 float'>
        <label className='mr-2' htmlFor='password'>
          Password
        </label>
        <input
          className='p-1 ml-2 float-right'
          type='text'
          value={password}
          onChange={e => setPassword(e)}
        />
      </div>
      <section className='py-2 ' id='controlContainer'>
        <button
          className='mx-2 my-1 px-2 py-1 bg-slate-300'
          onClick={() => login(email, password)}
        >
          Login
        </button>
        <button
          className='mx-2 my-1 px-2 py-1 bg-slate-300'
          onClick={() => {
            setEmail({ target: { value: '' } })
            setPassword({ target: { value: '' } })
          }}
        >
          Clear
        </button>
      </section>
    </div>
  )
}

export default LoginForm
