<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

/** コース一覧に移動 */
const showCourses = () => {
  router.push(`/courses`)
}

</script>

<template>
  <div class="container">
    <h2 class="heading__lv2">動画で学習できるサービス</h2>

    <div class="buttonWrapper flex mb-1">
      <button
        @click="showCourses"
        class="commonButton"
      >コースを見てみる</button>
    </div>

    <!-- <TestScriptSetupTest 
      title="ここにタイトルが入ります"
      @custom-event="parentMethod"  
    /> -->
  </div>

  <section>
    <h3 class="heading__lv3 text-center">
      VideoLearningの特徴
    </h3>
  </section>

  <section>
    <h3 class="heading__lv3 text-center">
      人気のコース
    </h3>
  </section>

  <!-- <section>
    <h3 class="heading__lv3 text-center">
      人気のカテゴリー
    </h3>
  </section> -->
  
  
</template>
