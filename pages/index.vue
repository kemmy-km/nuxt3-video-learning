<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

/** コース一覧に移動 */
const showCourses = (): void => {
  router.push(`/courses`)
}

</script>

<template>
  <section class="section gradient-background">
    <div class="container index">
      <h2 class="heading__lv2 text-center">動画で学習できるサービス</h2>

      <div class="lead-text text-center">
        君もこのサービスで周りと差をつけよう！
      </div>

      <div class="buttonWrapper flex mb-1 mt-4">
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
  </section>

  <section class="section feature">
    <h3 class="heading__lv3 text-center">
      VideoLearningの特徴
    </h3>

    <div class="container d-flex">
      <div class="left-box">
        <div class="text-wrapper">
          <h4 class="heading__lv4">速やかに学べる</h4>
          <p class="text">たくさんのコンテンツ！</p>
        </div>
      </div>

      <div class="right-box">
        <img src="https://thumb.photo-ac.com/42/42afd1bda88d88af5323f0b8a84620ff_t.jpeg" alt="">
      </div>
    </div>

    <div class="container d-flex">
      <div class="left-box">
        <div class="text-wrapper">
          <h4 class="heading__lv4">速やかに学べる</h4>
          <p class="text">たくさんのコンテンツ！</p>
        </div>
      </div>

      <div class="right-box">
        <img src="https://thumb.photo-ac.com/42/42afd1bda88d88af5323f0b8a84620ff_t.jpeg" alt="">
      </div>
    </div>

    <div class="container d-flex">
      <div class="left-box">
        <div class="text-wrapper">
          <h4 class="heading__lv4">速やかに学べる</h4>
          <p class="text">たくさんのコンテンツ！</p>
        </div>
      </div>

      <div class="right-box">
        <img src="https://thumb.photo-ac.com/42/42afd1bda88d88af5323f0b8a84620ff_t.jpeg" alt="">
      </div>
    </div>
  </section>

  <section class="section">
    <h3 class="heading__lv3 text-center">
      人気のコース
    </h3>

    <div class="container">
      <ul class="card-list">
        <li class="card card__col3 shadow-sm">
          <img src="https://thumb.photo-ac.com/42/42afd1bda88d88af5323f0b8a84620ff_t.jpeg" alt="">

          <div class="card-content">
            仮タイトル
          </div>
        </li>

        <li class="card card__col3 shadow-sm">
          <img src="https://thumb.photo-ac.com/42/42afd1bda88d88af5323f0b8a84620ff_t.jpeg" alt="">

          <div class="card-content">
            仮タイトル
          </div>
        </li>

        <li class="card card__col3 shadow-sm">
          <img src="https://thumb.photo-ac.com/42/42afd1bda88d88af5323f0b8a84620ff_t.jpeg" alt="">

          <div class="card-content">
            仮タイトル
          </div>
        </li>

        <li class="card card__col3 shadow-sm">
          <img src="https://thumb.photo-ac.com/42/42afd1bda88d88af5323f0b8a84620ff_t.jpeg" alt="">

          <div class="card-content">
            仮タイトル
          </div>
        </li>
      </ul>
    </div>
  </section>

  <!-- <section class="section">
    <h3 class="heading__lv3 text-center">
      人気のカテゴリー
    </h3>
  </section> -->
</template>

<style lang="scss">
.container.index {
  min-height: 70vh;
}

.feature {
  .container {
    padding-top: 2rem;
  }

  .container:nth-child(2n) {
    flex-direction: row-reverse;
  }
}

.text-wrapper {
  padding: 1rem;
}

.lead-text {
  color: #fff;
}

.gradient-background {
  /* ランダムな角度を指定 */
  background: linear-gradient(135deg,

    /* #1c1d1f を含むランダムな色を指定 */
    rgb(140, 212, 222),
    #1c1d1f,
    rgb(101, 144, 198)
  );


  .heading__lv2 {
    color: #fff;
    font-weight: bold;
  }
}
</style>