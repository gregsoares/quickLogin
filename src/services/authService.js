const loginDatabase = {
  email: '123@abc.info',
  password: '123456',
}

export const login = async (email, password) => {
  const checkEmail = loginDatabase.email === email
  const checkPassword = loginDatabase.password === password
  return new Promise((resolve, reject) => {
    if (checkEmail && checkPassword) {
      console.debug('Login successful')
      resolve({ status: 200, message: 'Login successful' })
    }
    console.debug('Debug:login:: Invalid email or password')
    reject({ status: 403, message: new Error('Invalid email or password') })
  })
}
