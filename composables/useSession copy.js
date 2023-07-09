import { ref } from "vue"

export default function useSession() {
  const isLoggedIn = ref(false)

  async function login(email, password) {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        isLoggedIn.value = true
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function logout() {
    try {
      await fetch("/api/logout", {
        method: "POST",
      })

      isLoggedIn.value = false
    } catch (error) {
      console.error(error)
    }
  }

  return {
    isLoggedIn,
    login,
    logout,
  }
}
