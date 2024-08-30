<script setup lang="ts">
import { Alert } from 'tdesign-vue-next'

const props = withDefaults(
  defineProps<{
    message: string
  }>(),
  {
    message: '远程组件'
  }
)
</script>

<template>
  <Alert theme="success" :message="props.message" />
</template>

<style scoped></style>
