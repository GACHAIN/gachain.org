<!--
 * @Author: abc
 * @Date: 2021-01-04 16:59:00
 * @LastEditors: abc
 * @LastEditTime: 2021-01-22 10:16:06
 * @Description:  第一部分 第二段 
-->
<template>
  <a-row type="flex" justify="space-around">
    <a-col
      v-for="item in dataSecond"
      :key="item.id"
      :lg="5"
      :xs="22"
      class="home-back-second-item"
    >
      <div class="home-back-second-img">
        <img :src="item.img" :alt="`second-${item.id}`" />
      </div>
      <div class="title-h3__black" style="text-align: left; padding-top: 15px">
        {{ $t(item.title) }}
      </div>
      <div class="home-back-second-content" v-html="$t(item.conntent)"></div>
      <div
        v-if="item.conntent1"
        class="home-back-second-content"
        v-html="$t(item.conntent1)"
      ></div>
      <div
        v-if="item.conntent2"
        class="home-back-second-content"
        v-html="$t(item.conntent2)"
      ></div>
    </a-col>
  </a-row>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      dataSecond: [
        {
          id: 1,
          title: "home.manage",
          conntent: "home.idea",
          conntent1: "home.idea1",
          conntent2: "",
          img: require("../assets/image/second-1.png")
        },
        {
          id: 2,
          title: "home.manage2",
          conntent: "home.idea2",
          conntent1: "home.idea21",
          img: require("../assets/image/second-2.png")
        },
        {
          id: 3,
          title: "home.manage3",
          conntent: "home.idea3",
          conntent1: "home.idea31",
          conntent2: "home.idea32",
          img: require("../assets/image/second-3.png")
        },
        {
          id: 4,
          title: "home.manage4",
          conntent: "home.idea4",
          conntent1: "home.idea41",
          conntent2: "home.idea42",
          img: require("../assets/image/second-4.png")
        },
        {
          id: 5,
          title: "home.manage5",
          conntent: "home.idea5",
          conntent1: "home.idea51",
          conntent2: "",
          img: require("../assets/image/second-5.png")
        },
        {
          id: 6,
          title: "home.manage6",
          conntent: "home.idea6",
          conntent1: "home.idea61",
          conntent2: "",
          img: require("../assets/image/second-6.png")
        },
        {
          id: 7,
          title: "home.manage7",
          conntent: "home.idea7",
          conntent1: "home.idea71",
          conntent2: "",
          img: require("../assets/image/second-7.png")
        },
        {
          id: 8,
          title: "home.manage8",
          conntent: "home.idea8",
          conntent1: "home.idea81",
          conntent2: "",
          img: require("../assets/image/second-8.png")
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
