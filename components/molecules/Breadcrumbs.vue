<script setup>
import { APP_NAME } from "~/constants/common"

/** パンくずリストのデータをここで定義 */
const items = ref([])

const breadcrumbsData = [
  { label: APP_NAME, path: '/' },
  { label: 'Course', path: '/courses' },
]

onMounted(async () => {
  items.value = breadcrumbsData

  console.log(items.value)
})

// パンくずリストのデータをレイアウトファイル内のパンくずリストコンポーネントに渡す
provide('items', breadcrumbsData)

</script>

<template>
  <nav class="l-breadcrumb">
    <!-- パンくずリストの表示 -->
    <ul>
      <li v-for="item in items" :key="item.path">
        <nuxt-link :to="item.path">{{ item.label }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.l-breadcrumb {
  background: #1c1d1f;

  a {
    color: #fff;
    text-decoration: none;
  }
}
</style>