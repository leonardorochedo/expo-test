export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(emailRegex.test(email)) {
      return true
    }
  }