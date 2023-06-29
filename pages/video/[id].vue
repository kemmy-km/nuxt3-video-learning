<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { API_BASE_URL } from '~/constants/common'

const id = ref('')
const router = useRoute()

const videoDomain = ref("https://player.vimeo.com")
const videos = ref([])

onMounted(async () => {

  try {
    // const response = await $fetch(`${API_BASE_URL}/videos`)
    const response = await $fetch(`${API_BASE_URL}/videos2`)
    if (response) {
      console.log('response！')
      // console.log(response)
      // console.log(response[0])

      // videos.value = response.data // APIにdataとキー名をつけている場合
      // videos.value = response // 取得したデータをvideosに設定
      videos.value = response // 取得したデータをvideosに設定
      console.log(videos.value) // データをコンソールに表示するなどの処理
      console.log(`${videoDomain.value}/video/${videos.value.video_number}`)

      id.value = router.params.id
      console.log(id.value)
    }

  } catch (error) {
    console.log('失敗！')
    console.error(error) // エラーメッセージをコンソールに表示するなどの処理
  }
})

provide('videos', videos) // videosをコンポーネントツリーに提供する
</script>

<template>
  <div class="container d-flex">

    <!-- <div class="col-md-4"> -->
    <div class="col block__video">
      <div v-for="video in videos" :key="video.code" class="block__videoPlayer">
        <h2>{{ video.title }}</h2>

          <!-- :src="`${videoDomain}/video/${video.videoNumber}?h=c2865f861a`" -->
        <iframe
          title="vimeo-player"
          :src="`${videoDomain}/video/${video.video_number}`"
          width="640" height="360" frameborder="0" 
          allowfullscreen>
        </iframe>

        <!-- <iframe
          :src="`${videoDomain}/video/838454524`" width="640"
          height="360"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
        </iframe> -->
          <!-- src="https://player.vimeo.com/video/838454524?h=24551a3754" width="640" -->


        <!-- <div style="width: 100px;">
          <img :src="video.imageSrc" alt="Thumbnail" style="width: 100%;">
        </div> -->
      </div>

      <div class="block__video_detail">
        <div class="textWrapper">
          <p>動画タイトルサンプル：</p>
          <p>更新日：</p>
          <p>概要：</p>
        </div>

        <div class="buttonWrapper">
          <button class="commonButton">＜ 前の動画へ</button>
          <button class="commonButton">次の動画へ ＞</button>
        </div>

        <div class="buttonWrapper">
          <a href="/videos"  class="commonButton">コースの一覧に戻る</a>
        </div>

      </div>

        <!-- <div class="col-md-8 iframe-wrapper mb-2">
        <iframe
          title="vimeo-player"
          :src="`${videoDomain}/video/${videoNumber}?h=c2865f861a`"
          width="640" height="360" frameborder="0" 
          allowfullscreen>
        </iframe>
    </div> -->
        <!-- src="https://player.vimeo.com/video/832017580?h=c2865f861a" -->
    </div>
    
    <!-- block__videoPlayerList -->
    <!-- <div class="col-md-4 pt-3"> -->
    <div class="col block__videoPlayerList">

      <div class="row playerList__heading">
        <h3 class="heading__lv3 mb-2">コースの内容</h3>
        <button class="btn btn-info for-sp btn-toggle commonButton">プレイヤーリストを開く</button>
      </div>

      <!-- <p class="label">
        {{ $course->course->name }}
      </p> -->

      <!-- コースに所属する動画一覧を表示させたい -->
      <ul class="playerList">
        <!-- <li class="" v-for=""> -->
        <!-- <li v-for="video in videos" :key="video.code"> -->
        <li v-for="(video, index) in videos" :key="index">
          <!-- <a href='{{ route('video.show', ['id' => videoPlayer.id]) }}' class=""
            id='{{ videoPlayer.id }}'>
            {{ videoPlayer.title }}
          </a> -->
          <!-- タイトル： -->
          <a :href="`/video/${video.video_code}`">
            {{ video.title }}
          </a>
          <!-- {{ videos.image_src }} -->
          <br>
        </li>
      </ul>

    </div>

  </div>
</template>

<style lang="scss">
.container {
  // padding: 0 1200px;
}

// 動画枠
.col.block__video {
  width: 65%;
  border: 1px solid #000;
  box-sizing: border-box;
}

// プレイヤーリスト大外
.col.block__videoPlayerList {
  width: 35%;

  border: 1px solid #000;
  box-sizing: border-box;
}

.block__videoPlayer {
  border: 1px solid #000;
  box-sizing: border-box;
}

.block__video_detail {
  border: 1px solid #000;
  box-sizing: border-box;
  // width: 94%;
  max-width: 90%;
  min-height: 40vh;

  margin-top: 1rem;
}

.textWrapper {
  min-height: 10rem;
}

// 上書き
.d-flex {
  justify-content: flex-start !important;
}

@media (max-width: 1060px) {
  .col.block__video {
    width: 100% !important;
  }
  .col.block__videoPlayerList {
    width: 100% !important;
  }
}
</style>
