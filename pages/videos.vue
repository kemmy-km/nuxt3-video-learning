<script lang="ts" setup>
import { fetchVideos } from '~/apis/video'
import { VideoResponse } from 'types/api/video'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const videos = ref<VideoResponse[]>([])

onMounted(async () => {

  try {
    const response = await fetchVideos()
    if (!response) return

    // videos.value = response.data // APIにdataとキー名をつけている場合
    videos.value = response // 取得したデータをvideosに設定

  } catch (error) {
    console.log('失敗！')
    console.error(error) // エラーメッセージをコンソールに表示するなどの処理
  }
})

provide('videos', videos) // coursesをコンポーネントツリーに提供する

/** 詳細ページに移動 */
const showDetail = (videoCode: number): void => {
  router.push(`/video/${videoCode}`)
}

</script>

<template>
  <div class="container">
    <h2 class="heading__lv2">動画一覧</h2>

    <ul class="card-list">
      <li
        v-for="video in videos" 
        class="card__col3 shadow-sm"
        :key="video.videoCode"
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
