import { ref } from "vue"

export const useSession = () => {
  const isLoggedIn = ref(false)
  console.log("isLoggedIn", isLoggedIn)

  const login = async (email, password) => {
    console.log("login始動")

    try {
      // const response = await fetch("/api/login", {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      console.log("aaa")

      if (response.ok) {
        isLoggedIn.value = true
      }

      console.log("isLoggedIn:", isLoggedIn)
    } catch (error) {
      console.log("error:")
      console.error(error)
    }
  }

  const logout = async () => {
    try {
      // await fetch("/api/logout", {
      await fetch("http://127.0.0.1:8000/api/logout", {
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
