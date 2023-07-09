<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

// const email = ref('')
// const password = ref('')

const router = useRouter()

const login = async () => {
  const formData = {
    email: 'admin@example.com',
    password: '123456789',
  }
  // const formData = {
  //   email: email.value,
  //   password: password.value
  // }

  try {
    // const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    // const response = await axios.post('/api/login', formData)
    const response = await axios.post('http://127.0.0.1:8000/api/login', formData)
    // const response = await axios.post('http://127.0.0.1:8000/api/login', formData, {
    //   headers: {
    //     'X-CSRF-TOKEN': csrfToken
    //   }
    // })

    console.log("response", response)

    // ステータスコードが200の場合は成功として処理する
    if (response.status === 200) {
      const { user, token } = response.data
      localStorage.setItem('token', token)

      // ログイン成功後の処理を追加する
      router.push(`/courses`)

      alert("ログインに成功しました！")

    } else {
      console.error('ログインに失敗しました')
      // エラーメッセージなどを表示する
      // ...
    }

  } catch (error) {
    console.error('エラーの処理：')
    console.error(error) // エラーハンドリングなど、適切な処理を行ってください
  }
}
</script>

<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>
      <button type="submit">Login</button>
    </form>
  </div>
</template>
