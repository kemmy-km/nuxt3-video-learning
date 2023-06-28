<script setup lang="ts">
async function fetchData() {
  const URL = 'http://127.0.0.1:8000/api/videos'

  /** DBの作成・接続が完了したら、こちらを使用する */
  const URL2 = 'http://127.0.0.1:8000/api/videos/1'

  try {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)

    const response2 = await fetch(URL2)
    const data2 = await response2.json()
    console.log(data2)

  } catch (error) {
    console.error(error)
  }
}

fetchData()
</script>

<template>
  <h2>test.vue</h2>
</template>
