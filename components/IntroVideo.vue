<script setup lang="ts">
import playIcon from '~/assets/image/612.png'

// 介绍视频（原生 <video>）：播放图标层覆盖视频，点击图标或调用 play() 后隐藏图标并播放
defineProps<{
  src: string
  poster?: string
}>()

const video = useTemplateRef<HTMLVideoElement>('video')
const started = ref(false)

function play() {
  started.value = true
  video.value?.play()
}

defineExpose({ play })
</script>

<template>
  <div class="video">
    <video
      ref="video"
      class="video-content"
      :src="src"
      :poster="poster"
      controls
      controlslist="nodownload noremoteplayback"
      muted
      playsinline
      webkit-playsinline="true"
      x5-playsinline="true"
      x5-video-player-type="h5"
      x5-video-player-fullscreen="true"
      x-webkit-airplay="allow"
    >
      您的浏览器不支持 video 标签。
    </video>
    <div v-show="!started" class="video-poster" @click="play">
      <img :src="playIcon" alt="play">
    </div>
  </div>
</template>

<style scoped>
/* 容器按 16:9 自适应（替代旧页面挂载后用 JS 计算高度） */
.video {
  height: auto;
  aspect-ratio: 16 / 9;
}
.video-content {
  width: 100%;
  height: 100%;
}
</style>
