<script lang="ts" setup>
import { ref } from "vue"
// import { ref, defineProps } from "vue"

/** Propsダウン */
const props = defineProps({
  title: String
})

const emitTest = defineEmits(["custom-event"])

const count = ref<number>(0)

const increment = () => {
  count.value++
}
const decrement = () => {
  count.value--
}
</script>

<template>
  <h2>ここは、ScriptSetupTestです。</h2>
  <span>{{ props.title }}</span>
  <h1>{{ count }}</h1>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>

  <button @click="emitTest('custom-event', '子からの値')">emit実行</button>
</template>

<style lang="scss">
  
</style>
