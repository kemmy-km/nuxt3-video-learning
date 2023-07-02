<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { API_BASE_URL } from '~/constants/common'

const router = useRouter()
const currentVideoCode = ref(0)
const videoDomain = ref("https://player.vimeo.com")

/** ここに$fetch()した結果を代入させる */
const video = ref()

/** コースに所属している動画群 */
let courseVideos = ref([])

onMounted(async () => {

  // ルートパラメータから`videoCode`の値を取得
  currentVideoCode.value = Number(router.currentRoute.value.params.id)

  try {
    const response = await $fetch(`${API_BASE_URL}/video/${currentVideoCode.value}`)
    if (!!response) {
      console.log('動画詳細ページのresponse！')

      // ここで`video`に代入
      video.value = response

      /** コース動画プレイヤー一覧 */
      const response2 = await $fetch(`${API_BASE_URL}/course/videos/${video.value.courseId}`)

      // 取得したデータを`courseVideos`に設定
      courseVideos.value = response2
    }

  } catch (error) {
    console.log('失敗！')
    console.error(error)
  }
})

/** そのコースに所属する「前」or「次」の動画に遷移 */
const showFrontOrRearVideo = (isToFront) => {
  let code = ""

  if (isToFront) {
    // 「前へ」ボタン

    // 降順にソートする
    courseVideos.value = courseVideos.value.sort((a, b) => b.videoCode - a.videoCode);

    for (let courseVideo of courseVideos.value) {
      if (courseVideo.videoCode < currentVideoCode.value) {

        // `courseVideo.videoCode`を「前ボタン」で使う変数に代入
        code = courseVideo.videoCode
        break
      }
    }

  } else {
    // 「次へ」ボタン

    for (let courseVideo of courseVideos.value) {
      if (courseVideo.videoCode > currentVideoCode.value) {

        // `courseVideo.videoCode`を「次ボタン」で使う変数に代入
        code = courseVideo.videoCode
        break
      }
    }
  }

  router.push(`/video/${code}`)
}

/** コース内の動画で、最小のvideoCodeを取得する */
const minVideoCode = computed(() => {
  return Math.min(...courseVideos.value.map(video => video.videoCode))
})

/** コース内の動画で、最大のvideoCodeを取得する */
const maxVideoCode = computed(() => {
  return Math.max(...courseVideos.value.map(video => video.videoCode))
})

// currentVideoCodeとminVideoCodeを比較し、最小のvideoCodeを持つ動画かどうかを判定する
const isMinVideoCode = computed(() => {
  return currentVideoCode.value === minVideoCode.value
})

const isMaxVideoCode = computed(() => {
  return currentVideoCode.value === maxVideoCode.value
})

// コンポーネントツリーに提供する
provide('video', video)
provide('courseVideos', courseVideos)

</script>

<template>
  <div class="container d-flex">
    <!-- <div class="col-md-4"> -->
    <div class="col block__video">
      <div class="block__videoPlayer">
        <h2>{{ video?.title }}</h2>

        <iframe
          title="vimeo-player"
          :src="`${videoDomain}/video/${video?.videoNumber}`"
          width="640" height="360" frameborder="0" 
          allowfullscreen>
        </iframe>
      </div>

      <div class="block__video_detail">
        <div class="textWrapper">
          <p>動画タイトルサンプル：</p>
          <p>更新日：</p>
          <p>概要：</p>
        </div>

        <div class="buttonWrapper flex mb-1">
          <button
            class="commonButton"
            v-if="!isMinVideoCode"
            @click="showFrontOrRearVideo(true)"
          >＜ 前の動画へ</button>
          <button
            class="commonButton"
            v-if="!isMaxVideoCode"
            @click="showFrontOrRearVideo(false)"
          >次の動画へ ＞</button>

        </div>

        <div class="buttonWrapper">
          <a href="/videos"  class="commonButton">コースの一覧に戻る</a>
        </div>

      </div>
    </div>
    
    <!-- <div class="col-md-4 pt-3"> -->
    <div class="col block__videoPlayerList">

      <div class="row playerList__heading">
        <!-- ここに、コースの名前を表示させたい -->
        <h3 class="heading__lv3 mb-2">コースの内容：{{ video?.courseId }}</h3>
        <button class="btn btn-info for-sp btn-toggle commonButton">プレイヤーリストを開く</button>
      </div>

      <!-- <p class="label">
        {{ $course->course->name }}
      </p> -->

      <!-- コースに所属する動画一覧を表示させたい -->
      <ul class="playerList">
        <li v-for="(video, index) in courseVideos" :key="index">
          <a :href="`/video/${video.videoCode}`">
            {{ video.title }}
          </a>
          <!-- {{ videos.imageSrc }} -->
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
