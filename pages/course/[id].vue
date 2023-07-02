<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { API_BASE_URL } from '~/constants/common'

const router = useRouter()
const currentCourseCode = ref(0)

/** ここに$fetch()した結果を代入させる */
const course = ref([])

/** コースに所属している動画List */
let courseVideos = ref([])

onMounted(async () => {
  currentCourseCode.value = Number(router.currentRoute.value.params.id)

  try {
    const response = await $fetch(`${API_BASE_URL}/course/${currentCourseCode.value}`)

    if (!!response) {
      // 取得したデータをcoursesに設定
      course.value = response
    }

    const response2 = await $fetch(`${API_BASE_URL}/course/videos/${course.value.courseId}`)

    // 取得したデータを`courseVideos`に設定
    courseVideos.value = response2

  } catch (error) {
    console.log('失敗！')
    console.error(error)
  }
})

/** コース詳細から、コースの一番最初の動画の詳細ページに移動する */
const showCourseVideo = () => {
  // courseIdを持つ動画Listを特定したい。その配列の最初のvideoCodeを指定すれば良い
  const code = courseVideos.value[0].videoCode
  router.push(`/video/${code}`)
}

// コンポーネントツリーに提供する
provide('course', course)

</script>

<template>
  <div class="container d-flex">
    <!-- <div class="col-md-4"> -->
    <div class="col block__course">
      <h2 class="heading__lv2">
        {{ course.name }}
      </h2>

      <div style="width: 100px;">
        <img :src="course.imageSrc" alt="Thumbnail" style="width: 100%;">
      </div>

      <div class="block__course_detail">
        <div class="textWrapper">

          <p>更新日：</p>
          <p>概要：</p>
        </div>

        <div class="buttonWrapper">
          <!-- このコースのListの一番最初のコードを指定する -->
          <!-- <a href="/course/1"  class="commonButton">動画を視聴する</a> -->
          <button @click="showCourseVideo"  class="commonButton">動画を視聴する</button>
          
          <a href="/courses"  class="commonButton">コースの一覧に戻る</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  // padding: 0 1200px;
}

// 動画枠
.col.block__course {
  width: 70%;
  border: 1px solid #000;
  box-sizing: border-box;
}

// プレイヤーリスト大外
.col.block__coursePlayerList {
  width: 30%;

  border: 1px solid #000;
  box-sizing: border-box;
}

.block__coursePlayer {
  border: 1px solid #000;
  box-sizing: border-box;
}

.block__course_detail {
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
  .col.block__course {
    width: 100% !important;
  }
  .col.block__coursePlayerList {
    width: 100% !important;
  }
}
</style>
