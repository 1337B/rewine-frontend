// src/services/auth.js

// Por ahora simulamos con un fake promise (después lo conectamos con el backend)
export async function login(email, password) {
  // Log para ver que se llama
  console.log('Calling login service with:', email, password)

  // Simulación: devolvemos un "fake token"
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'fake-jwt-token',
        user: {
          email: email,
          name: 'Test User',
        },
      })
    }, 1000) // Simula delay de red
  })
}
