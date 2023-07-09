<script lang="ts" setup>
import { fetchCourses } from '~/apis/course'
import { CourseResponse } from 'types/api/course'
import { useRouter } from 'vue-router'

const router = useRouter()
const courses = ref<CourseResponse[]>([])

onMounted(async () => {

  try {
    const response = await fetchCourses()
    if (!response) return
    
    // courses.value = response.data // APIにdataとキー名をつけている場合
    courses.value = response // 取得したデータをcoursesに設定

  } catch (error) {
    console.log('失敗！')
    console.error(error) // エラーメッセージをコンソールに表示するなどの処理
  }
})

const breadcrumbsData = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  // ページごとのパンくずリストのデータをここで定義
]

// コンポーネントツリーに提供する
provide('items', breadcrumbsData);
provide('courses', courses) 

/** 詳細ページに移動 */
const showDetail = (id: number): void => {
  router.push(`/course/${id}`)
}

</script>

<template>
  <div class="container">
    <h2 class="heading__lv2">コース一覧</h2>

    <ul class="card-list">
      <li
        v-for="(course, index) in courses" 
        class="card card__col3 shadow-sm"
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
