<!--
 * @Author: abc
 * @Date: 2020-12-31 16:46:06
 * @LastEditors: abc
 * @LastEditTime: 2021-01-26 10:08:17
 * @Description: 
-->
<template>
  <div class="footer">
    <a-row type="flex" justify="center">
      <a-col :lg="16" :xs="22">
        <a-row type="flex" justify="space-between">
          <a-col :lg="12" :xs="22">
            <div class="footer-box">
              <div class="footer-box-logo">
                <nuxt-link :to="{ name: 'index' }">
                  <img
                    src="../assets/image/logo-footer.png"
                    alt="logo-footer"
                  />
                </nuxt-link>
              </div>
              <div class="footer-box-text">
                <img src="../assets/image/phone.png" alt="phone" />
                <span>{{ $t("footer.phone") }}</span>
              </div>
              <div class="footer-box-text">
                <img src="../assets/image/email.png" alt="email" />
                <span>{{ $t("footer.email") }}</span>
              </div>
              <div class="footer-box-text">
                <img src="../assets/image/address.png" alt="address" />
                <span>{{ $t("footer.address") }}</span>
              </div>
            </div>
          </a-col>
          <a-col v-if="!isMobile" :lg="4" :xs="22">
            <div class="footer-message">
              <!-- <div class="footer-message-item">
                <img src="../assets/image/chart.png" alt="chart" />
                <span>{{ $t("footer.chart") }}</span>
              </div> -->
              <nuxt-link :to="{ name: 'service' }" class="footer-message-item">
                <img src="../assets/image/message.png" alt="chart" />
                <span>{{ $t("footer.message") }}</span>
              </nuxt-link>
              <nuxt-link :to="{ name: 'about' }" class="footer-message-item">
                <img src="../assets/image/about.png" alt="chart" />
                <span>{{ $t("footer.about") }}</span>
              </nuxt-link>
            </div>
            <div class="footer-message">
              <a
                href="https://weibo.com/gachainorg?refer_flag=1001030103_"
                target="_blank"
              >
                <img
                  src="../assets/image/w.png"
                  alt="w"
                  class="footer-message-img"
                />
              </a>
              <a href="https://www.jinse.com/member?id=67798" target="_blank">
                <img
                  src="../assets/image/gold.png"
                  alt="f"
                  class="footer-message-img"
                />
              </a>
              <a
                href="http://www.weilaicaijing.com/AuthorDetailed?id=100119&author_type=user"
                target="_blank"
              >
                <img
                  src="../assets/image/future.png"
                  alt="m"
                  class="footer-message-img"
                />
              </a>
              <a
                href="https://www.chainfor.com/writer/942.html"
                target="_blank"
              >
                <img
                  src="../assets/image/chain.png"
                  alt="t"
                  class="footer-message-img"
                />
              </a>
            </div>
          </a-col>
          <a-col v-if="!isMobile" :lg="6" :xs="22">
            <div class="footer-wei">
              <img src="../assets/image/online.png" alt="second-2" />
              <span>{{ $t("footer.chart") }}</span>
            </div>
            <div class="footer-wei">
              <img src="../assets/image/weixin.png" alt="second-1" />
              <span>{{ $t("official") }}</span>
            </div>
          </a-col>
        </a-row>
        <div v-if="isMobile" class="mobile">
          <div class="footer-message-mobile">
            <!--  <div class="footer-message-item">
                  <img src="../assets/image/chart.png" alt="chart" />
                  <span>{{ $t("footer.chart") }}</span>
                </div> -->
            <nuxt-link :to="{ name: 'service' }">
              <img src="../assets/image/message.png" alt="chart" />
              <span>{{ $t("footer.message") }}</span>
            </nuxt-link>
            <nuxt-link :to="{ name: 'about' }">
              <img src="../assets/image/about.png" alt="chart" />
              <span>{{ $t("footer.about") }}</span>
            </nuxt-link>
          </div>
          <div class="mobile-footer-message">
            <a
              href="https://weibo.com/gachainorg?refer_flag=1001030103_"
              target="_blank"
            >
              <img
                src="../assets/image/w.png"
                alt="w"
                class="footer-message-img"
              />
            </a>
            <a href="https://www.jinse.com/member?id=67798" target="_blank">
              <img
                src="../assets/image/gold.png"
                alt="f"
                class="footer-message-img"
              />
            </a>
            <a
              href="http://www.weilaicaijing.com/AuthorDetailed?id=100119&author_type=user"
              target="_blank"
            >
              <img
                src="../assets/image/future.png"
                alt="m"
                class="footer-message-img"
              />
            </a>
            <a href="https://www.chainfor.com/writer/942.html" target="_blank">
              <img
                src="../assets/image/chain.png"
                alt="t"
                class="footer-message-img"
              />
            </a>
          </div>
          <div class="footer-wei">
            <img src="../assets/image/online.png" alt="online" />
            <span>{{ $t("footer.chart") }}</span>
          </div>
          <div class="footer-wei">
            <img src="../assets/image/weixin.png" alt="weixin" />
            <span>{{ $t("official") }}</span>
          </div>
        </div>
      </a-col>
    </a-row>
    <div class="footer-bottom">{{ $t("footer.bottom") }}</div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
