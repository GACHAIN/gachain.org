<script setup lang="ts">
import playIcon from '~/assets/image/612.png'

// 首页政务链介绍视频（原生 <video>）：封面层覆盖视频，点击封面或调用 play() 后隐藏封面并播放
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
      src="/video/gacvideo.mp4"
      poster="/video/poster.png"
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
