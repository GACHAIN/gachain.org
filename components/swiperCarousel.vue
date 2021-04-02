<!--
 * @Author: abc
 * @Date: 2021-01-19 12:11:12
 * @LastEditors: abc
 * @LastEditTime: 2021-01-26 15:16:07
 * @Description: 
-->
<template>
  <client-only>
    <div v-if="isMobile" class="mobile">
      <swiper ref="mySwiper" :options="optionMobile">
        <swiper-slide
          v-for="(item, index) in source"
          :key="index"
          class="swiper-slide"
        >
          <img class="swiper-img" :src="item.src" />
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
        <div slot="button-prev" class="swiper-button-prev"></div>
        <div slot="button-next" class="swiper-button-next"></div>
      </swiper>
    </div>
    <div v-else class="computer">
      <swiper ref="mySwiper" :options="option">
        <swiper-slide
          v-for="(item, index) in source"
          :key="index"
          class="swiper-slide"
        >
          <img class="swiper-img" :src="item.src" />
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
        <div slot="button-prev" class="swiper-button-prev"></div>
        <div slot="button-next" class="swiper-button-next"></div>
      </swiper>
    </div>
  </client-only>
</template>
<script>
export default {
  props: {
    source: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      option: {
        watchSlidesProgress: true,
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        loopedSlides: 7,
        autoplay: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true // 允许分页点击跳转
        },
        on: {
          progress() {
            console.log(this.slides);
            for (let i = 0; i < this.slides.length; i++) {
              const slide = this.slides.eq(i);
              const slideProgress = this.slides[i].progress;
              let modify = 1;
              if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
              }
              const translate = slideProgress * modify * 90 + "px";
              const scale = 1 - Math.abs(slideProgress) / 5;
              const zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
              slide.transform(
                "translateX(" + translate + ") scale(" + scale + ")"
              );
              slide.css("zIndex", zIndex);
              slide.css("opacity", 1);
              if (Math.abs(slideProgress) > 3) {
                slide.css("opacity", 0);
              }
            }
          },
          setTransition(transition) {
            for (let i = 0; i < this.slides.length; i++) {
              const slide = this.slides.eq(i);
              slide.transition(transition);
            }
          }
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      optionMobile: {
        watchSlidesProgress: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 0,
        loop: true,
        //  loopedSlides: 3,
        autoplay: false,
        on: {
          progress() {
            console.log(this.slides);
            for (let i = 0; i < this.slides.length; i++) {
              const slide = this.slides.eq(i);
              const slideProgress = this.slides[i].progress;
              let modify = 1;
              if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
              }
              const translate = slideProgress * modify * 90 + "px";
              const scale = 1 - Math.abs(slideProgress) / 5;
              const zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
              slide.transform(
                "translateX(" + translate + ") scale(" + scale + ")"
              );
              slide.css("zIndex", zIndex);
              slide.css("opacity", 1);
              if (Math.abs(slideProgress) > 3) {
                slide.css("opacity", 0);
              }
            }
          },
          setTransition(transition) {
            for (let i = 0; i < this.slides.length; i++) {
              const slide = this.slides.eq(i);
              slide.transition(transition);
            }
          }
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true // 允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style>
.swiper-container {
  z-index: 0;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  padding-bottom: 30px;
}
.mobile .swiper-slide {
  width: 80%;
}
.computer .swiper-slide {
  width: 30%;
}
.swiper-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  transition: 300ms;
  transform: scale(0.8);
  opacity: 0.8;
}

.swiper-img {
  width: 100%;
}
.swiper-container .swiper-pagination {
  bottom: 0;
  z-index: 100;
}
.swiper-pagination-bullet {
  width: 25px;
  height: 10px;
  border-radius: 5px;
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  background-image: url("../assets/image/next.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  width: 20px;
  height: 30px;
  right: 10px;
  left: auto;
}

.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  background-image: url("../assets/image/pre.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  width: 20px;
  height: 30px;
  left: 10px;
  right: auto;
}
.swiper-pagination-bullet-active {
  background: #c4171d;
}
</style>
