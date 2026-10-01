<script setup lang="ts">
import type { NuxtError } from '#app'

// 错误页（替代旧 layouts/error.vue），沿用默认布局
defineProps<{ error: NuxtError }>()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLayout>
    <div style="padding: 40px">
      <h2 v-if="error.statusCode === 404">404 - 页面不存在</h2>
      <h2 v-else>500 - 服务器错误</h2>
      <ul>
        <li><a :href="localePath('/')" @click.prevent="clearError({ redirect: localePath('/') })">HOME</a></li>
      </ul>
    </div>
  </NuxtLayout>
</template>
