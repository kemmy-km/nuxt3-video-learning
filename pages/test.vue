<script lang="ts" setup>
import { API_BASE_URL } from '~/constants/common'

// const API_BASE_URL = useRuntimeConfig().public.apiUrl

const fetchData = async() => {
  const URL = `${API_BASE_URL}/videos`

  /** DBの作成・接続が完了したら、こちらを使用する */
  const URL2 = `${API_BASE_URL}/videos/1`

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
