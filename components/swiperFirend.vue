<!--
 * @Author: abc
 * @Date: 2021-01-19 12:11:12
 * @LastEditors: abc
 * @LastEditTime: 2021-01-26 10:27:55
 * @Description: 
-->
<template>
  <client-only>
    <div v-if="isMobile" class="mobile">
      <swiper ref="mySwiper" :options="optionMobile">
        <swiper-slide class="swiper-slide">
          <a
            v-for="item in arrFirend1"
            :key="item.key"
            href="javascript:;"
            class="home-sixth-box-item"
          >
            <img :src="item.src" alt="item.key" />
          </a>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <a
            v-for="item in arrFirend2"
            :key="item.key"
            href="javascript:;"
            class="home-sixth-box-item"
          >
            <img :src="item.src" alt="item.key" />
          </a>
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
      arrFirend1: [
        { key: 1, href: "javascript:;", src: require("../assets/image/1.png") },
        { key: 2, href: "javascript:;", src: require("../assets/image/2.png") },
        { key: 3, href: "javascript:;", src: require("../assets/image/3.png") },
        { key: 4, href: "javascript:;", src: require("../assets/image/4.png") },
        { key: 5, href: "javascript:;", src: require("../assets/image/5.png") },
        { key: 6, href: "javascript:;", src: require("../assets/image/6.png") }
      ],
      arrFirend2: [
        { key: 7, href: "javascript:;", src: require("../assets/image/7.png") },
        { key: 8, href: "javascript:;", src: require("../assets/image/8.png") },
        { key: 9, href: "javascript:;", src: require("../assets/image/9.png") },
        {
          key: 10,
          href: "javascript:;",
          src: require("../assets/image/10.png")
        }
      ],
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
.home-sixth .swiper-container {
  z-index: 0;
  width: 100%;
  display: inline-flex;
  justify-content: center;
}
.home-sixth .mobile .swiper-slide {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 30px;
}
.home-sixth .computer .swiper-slide {
  width: 25%;
}
.home-sixth .swiper-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
}
.home-sixth .mobile .swiper-slide-active {
  width: 100%;
}
.home-sixth .computer .swiper-slide-active {
  width: 35%;
}
.home-sixth .swiper-slide {
  background-position: center;
  background-size: cover;
  transition: 300ms;
  transform: scale(0.8);
  opacity: 0.8;
}
.home-sixth .swiper-slide-active {
  z-index: 100;
  opacity: 1;
}
.home-sixth .swiper-slide-active,
.home-sixth .swiper-slide-duplicate-active {
  transform: scale(1);
}
.home-sixth .swiper-img {
  border-radius: 10px;
  width: 100%;
  height: 450px;
}
.home-sixth .swiper-container .swiper-pagination {
  bottom: 0;
  z-index: 100;
}
.home-sixth .swiper-pagination-bullet {
  width: 25px;
  height: 10px;
  border-radius: 5px;
}
.home-sixth .swiper-button-next,
.home-sixth .swiper-container-rtl .swiper-button-prev {
  background-image: url("../assets/image/next.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  width: 10px;
  height: 20px;
  right: 0;
  left: auto;
  top: 110px;
}

.home-sixth .swiper-button-prev,
.home-sixth .swiper-container-rtl .swiper-button-next {
  background-image: url("../assets/image/pre.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  width: 10px;
  height: 20px;
  left: 0;
  top: 110px;
  right: auto;
}
.home-sixth .swiper-pagination-bullet-active {
  background: #c4171d;
}
</style>
