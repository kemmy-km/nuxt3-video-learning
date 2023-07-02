<script lang="ts" setup>
import { fetchVideoDetail, fetchVideosByCourseId } from '~/apis/video'
import { VideoResponse } from 'types/api/video'
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { VIDEO_DOMAIN_URL } from '~/constants/common'

const router = useRouter()
const currentVideoCode = ref<number>(0)
const videoDomain = ref<string>(VIDEO_DOMAIN_URL)

/** ここに$fetch()した結果を代入させる */
const video = ref<VideoResponse>()

/** コースに所属している動画List */
let courseVideos = ref<VideoResponse[]>([])

onMounted(async () => {

  // ルートパラメータから`videoCode`の値を取得
  currentVideoCode.value = Number(router.currentRoute.value.params.id)

  try {
    const response = await fetchVideoDetail(currentVideoCode.value)
    if (!response) return

    video.value = response

    /** コース動画プレイヤー一覧 */
    const response2 = await fetchVideosByCourseId(video.value.courseId)
    if (!response2) return

    // 取得したデータを`courseVideos`に設定
    courseVideos.value = response2

  } catch (error) {
    console.log('失敗！')
    console.error(error)
  }
})

/** 現在のビデオかどうかを判定する関数 */
const isCurrentVideo = (video: VideoResponse): boolean => {
  return currentVideoCode.value === video.videoCode
}

/** そのコースに所属する「前」or「次」の動画に遷移 */
const showFrontOrRearVideo = (isToFront: boolean): void => {
  let code: number = 0

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

/** コース一覧に移動する */
const moveToCourses = (): void => {
  const code: number = courseVideos.value[0].courseId
  router.push(`/course/${code}`)
}

/** コース内の動画で、最小のvideoCodeを取得する */
const minVideoCode = computed<number>(() => {
  return Math.min(...courseVideos.value.map(video => video.videoCode))
})

/** コース内の動画で、最大のvideoCodeを取得する */
const maxVideoCode = computed<number>(() => {
  return Math.max(...courseVideos.value.map(video => video.videoCode))
})

// currentVideoCodeとminVideoCodeを比較し、最小のvideoCodeを持つ動画かどうかを判定する
const isMinVideoCode = computed<boolean>(() => {
  return currentVideoCode.value === minVideoCode.value
})

const isMaxVideoCode = computed<boolean>(() => {
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
          <p>動画タイトル：{{ video?.title }}</p>
          <p>更新日： {{ video?.updatedAt }}</p>
          <p>概要：{{ video?.overview }}</p>
        </div>

        <div class="buttonWrapper flex mb-4">
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
          <button @click="moveToCourses"  class="commonButton">コースの詳細に戻る</button>
        </div>

      </div>
    </div>
    
    <!-- <div class="col-md-4 pt-3"> -->
    <div class="col block__videoPlayerList">

      <div class="playerList heading__lv3 text-center">
        <!-- ここに、コースの名前を表示させたい -->
        コース名：{{ video?.courseId }}
        <!-- <button class="btn btn-info for-sp btn-toggle commonButton">プレイヤーリストを開く</button> -->
      </div>

      <!-- <p class="label">
        {{ $course->course->name }}
      </p> -->

      <!-- コースに所属する動画一覧を表示させたい -->
      <ul class="playerList">
        <li
          v-for="(video, index) in courseVideos"
          :key="index"
          :class="{ 'current-bg': isCurrentVideo(video) }"
        >
          <a :href="`/video/${video.videoCode}`">
            {{ video.title }}
          </a>
          <!-- {{ videos.imageSrc }} -->
        </li>
      </ul>

    </div>

  </div>
</template>

<style lang="scss">
// 動画枠
.col.block__video {
  width: 70%;
  border: 1px solid #000;
  box-sizing: border-box;
}

// プレイヤーリスト大外
.col.block__videoPlayerList {
  width: 30%;

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

.playerList {
  padding-left: 0 !important;

  &.heading__lv3 {
    color: #fff;
    padding: 1rem;
    background: linear-gradient(to bottom, #1abc9c, #2ecc71);
    margin-bottom: 0 !important;
  }

  li {

    a {
      display: block;
      padding: 0.5rem 1.4rem;
      border: 1px solid #000;

      &:hover {
        // opacity: 0.8;
        background-color: beige;
        // background: linear-gradient(to bottom, #1abc9c, #2ecc71);
      }
    }
  }
}

.current-bg {
  /* ハイライトされるスタイル */
  background-color: beige;
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
