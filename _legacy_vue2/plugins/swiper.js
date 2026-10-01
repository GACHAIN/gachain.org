/*
 * @Author: abc
 * @Date: 2021-01-19 14:47:23
 * @LastEditors: abc
 * @LastEditTime: 2021-01-19 15:04:23
 * @Description:swiper用法
 */
import Vue from "vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

Vue.component("Swiper", swiper);
Vue.component("SwiperSlide", swiperSlide);
