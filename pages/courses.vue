<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { API_BASE_URL } from '~/constants/common'


const id = ref('')
const router = useRoute()

const courses = ref([])

onMounted(async () => {

  try {
    const response = await $fetch(`${API_BASE_URL}/courses`)
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

  } catch (error) {
    console.log('失敗！')
    console.error(error) // エラーメッセージをコンソールに表示するなどの処理
  }
})

provide('courses', courses) // coursesをコンポーネントツリーに提供する

const showDetail = (code) => {
  // クリックイベントの処理を記述
  console.log('Button clicked', code);

  // 別のページに移動する処理
    router.push(`/course/${id.value}`) // 移動先のパスを指定します
}

</script>

<template>
  <div class="container">
    <h2>コース一覧</h2>

    <ul class="card-list">
      <li
        v-for="course in courses" 
        class="card__col3 shadow-sm"
        :key="course.code"
        @click="() => showDetail(course.code)"
      >
        <!-- @click="showDetail(course.code)" -->
        <img :src="`${course.imgSrc}`" alt="">

        <div class="card-content">
          {{ course.title }}
        </div>
      </li>
    </ul>
  </div>
</template>
