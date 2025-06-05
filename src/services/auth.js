// src/services/auth.js

export async function login(email, password) {
  console.log('Calling login service with:', email, password)

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'fake-jwt-token',
        user: {
          email: email,
          name: 'Test User',
        },
      })
    }, 1000)
  })
}

export async function register(email, username, password) {
  console.log('Calling register service with:', email, username, password)

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        user: {
          email: email,
          username: username,
        },
      })
    }, 1000)
  })
}
