<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { API_BASE_URL } from '~/constants/common'

const router = useRouter()
const videos = ref([])

onMounted(async () => {

  try {
    const response = await $fetch(`${API_BASE_URL}/videos`)
    // const response = await $fetch(`${API_BASE_URL}/videos2`)
    if (response) {
      console.log('response！')
      console.log(response)

      // videos.value = response.data // APIにdataとキー名をつけている場合
      videos.value = response // 取得したデータをvideosに設定
      console.log(videos.value) // データをコンソールに表示するなどの処理

      // id.value = router.params.id
    }

  } catch (error) {
    console.log('失敗！')
    console.error(error) // エラーメッセージをコンソールに表示するなどの処理
  }
})

provide('videos', videos) // coursesをコンポーネントツリーに提供する

/** 詳細ページに移動 */
const showDetail = (id) => {
  router.push(`/video/${id}`)
}

</script>

<template>
  <div class="container">
    <h2 class="heading__lv2">動画一覧</h2>

    <ul class="card-list">
      <li
        v-for="video in videos" 
        class="card__col3 shadow-sm"
        :key="videos.code"
        @click="() => showDetail(video.videoCode)"
      >
        <img :src="`${video.imageSrc}`" alt="">

        <div class="card-content">
          {{ video.title }}
        </div>
      </li>
    </ul>
  </div>
</template>