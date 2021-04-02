/*
 * @Author: abc
 * @Date: 2021-01-04 11:38:35
 * @LastEditors: abc
 * @LastEditTime: 2021-01-08 18:10:27
 * @Description:视频插件
 */
/* import Vue from "vue";
// import VideoPlayer from "vue-video-player";
window.videojs = VideoPlayer.videojs;
const VideoPlayer = require("vue-video-player/dist/ssr");
require("vue-video-player/src/custom-theme.css");
require("video.js/dist/video-js.css");
require("video.js/dist/lang/zh-CN.js");
Vue.use(VideoPlayer);
 */
/* import Vue from "vue";
const VideoPlayer = require("vue-video-player/dist/ssr");
window.videojs = VideoPlayer.videojs;
require("video.js/dist/video-js.css");
require("vue-video-player/node_modules/video.js/dist/video-js.css");
require("vue-video-player/src/custom-theme.css");
Vue.use(VideoPlayer); */
/* import Vue from "vue";
import VideoPlayer from "vue-video-player";
import Video from "video.js";
import "vue-video-player/src/custom-theme.css";
import "video.js/dist/video-js.css";
import zhCN from "../lang/video-zh-cn.json";
import "vue-video-player/node_modules/video.js/dist/video-js.css";
Video.addLanguage("zh-CN", zhCN); // 添加中文支持
Vue.use(VideoPlayer);
 */
import Vue from "vue";

const VueVideoPlayer = require("vue-video-player/dist/ssr");
Vue.use(VueVideoPlayer);
