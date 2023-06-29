<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const id = ref('')
const router = useRoute()

const courseDomain = ref("https://player.vimeo.com")
const courses = ref([])
const course = ref([])

onMounted(async () => {

  try {
    const response = await $fetch('http://127.0.0.1:8000/api/courses')
    const response2 = await $fetch('http://127.0.0.1:8000/api/course/1')

    if (response) {
      console.log('response！')
      console.log(response)
      console.log(response[0])

      // courses.value = response.data // APIにdataとキー名をつけている場合
      courses.value = response // 取得したデータをcoursesに設定
      console.log(courses.value) // データをコンソールに表示するなどの処理

      id.value = router.params.id
      console.log(id.value) 
    }

    if (response2) {
      console.log('response2！')
      console.log(response)

      course.value = response2 // 取得したデータをcoursesに設定
      console.log(course.value) // データをコンソールに表示するなどの処理
    }

  } catch (error) {
    console.log('失敗！')
    console.error(error) // エラーメッセージをコンソールに表示するなどの処理
  }
})

provide('courses', courses) // coursesをコンポーネントツリーに提供する
provide('courses', course) // coursesをコンポーネントツリーに提供する
</script>

<template>
  <div class="container d-flex">
    <!-- <h2>動画名</h2> -->
      <!-- {{ courses }} -->
      <!-- ID名：{{ id }} -->

    <!-- <div class="col-md-4"> -->
    <div class="col block__course">
      <h2 class="heading__lv2">
        {{ course.title }}
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
          <a href="/course/1"  class="commonButton">動画を視聴する</a>
          
          <a href="/courses"  class="commonButton">コースの一覧に戻る</a>
        </div>
      </div>
    </div>
    
    <!-- block__coursePlayerList -->
    <!-- <div class="col-md-4 pt-3"> -->
    <div class="col block__coursePlayerList">

      <div class="row playerList__heading">
        <h3 class="heading__lv3 mb-2">コースの内容</h3>
        <button class="btn btn-info for-sp btn-toggle commonButton">プレイヤーリストを開く</button>
      </div>

      <!-- <p class="label">
        {{ $course->course->name }}
      </p> -->

      <ul class="playerList">
        <li v-for="course in courses" :key="course.code">
          <!-- <a href='{{ route('course.show', ['id' => coursePlayer.id]) }}' class=""
            id='{{ coursePlayer.id }}'>
            {{ coursePlayer.title }}
          </a> -->
          {{ course.title }}
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
.col.block__course {
  width: 65%;
  border: 1px solid #000;
  box-sizing: border-box;
}

// プレイヤーリスト大外
.col.block__coursePlayerList {
  width: 35%;

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
