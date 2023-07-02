<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { API_BASE_URL } from '~/constants/common'

const router = useRouter()
const courses = ref([])

onMounted(async () => {

  try {
    // const response = await $fetch(`${API_BASE_URL}/courses`)
    const response = await $fetch(`${API_BASE_URL}/courses2`)
    if (response) {
      console.log(response)

      // courses.value = response.data // APIにdataとキー名をつけている場合
      courses.value = response // 取得したデータをcoursesに設定
      console.log(courses.value) // データをコンソールに表示するなどの処理

    }

  } catch (error) {
    console.log('失敗！')
    console.error(error) // エラーメッセージをコンソールに表示するなどの処理
  }
})

provide('courses', courses) // coursesをコンポーネントツリーに提供する

/** 詳細ページに移動 */
const showDetail = (id) => {
  router.push(`/course/${id}`)
}

</script>

<template>
  <div class="container">
    <h2 class="heading__lv2">コース一覧</h2>

    <ul class="card-list">
      <li
        v-for="(course, index) in courses" 
        class="card__col3 shadow-sm"
        :key="index"
        @click="() => showDetail(course.courseId)"
      >
        <img :src="`${course.imageSrc}`" alt="">

        <div class="card-content">
          {{ course.name }}
        </div>
      </li>
    </ul>
  </div>
</template>
