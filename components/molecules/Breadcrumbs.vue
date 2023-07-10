<script setup>
// import { ref } from 'vue'

let items = ref([]) // パンくずリストのデータをここで定義

const breadcrumbsData = [
  { label: 'VideoApp', path: '/' },
  { label: 'Course', path: '/courses' },
  // ページごとのパンくずリストのデータをここで定義
]

onMounted(async () => {
  items.value = breadcrumbsData

  console.log(items.value)
})

// パンくずリストのデータをレイアウトファイル内のパンくずリストコンポーネントに渡す
provide('items', breadcrumbsData)

</script>

<template>
  <nav>
    <!-- パンくずリストの表示 -->
    <ul>
      <li v-for="item in items" :key="item.path">
        <nuxt-link :to="item.path">{{ item.label }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
