<script setup lang="ts">
import logoFooter from '~/assets/image/logo-footer.png'
import phoneIcon from '~/assets/image/phone.png'
import emailIcon from '~/assets/image/email.png'
import addressIcon from '~/assets/image/address.png'
import messageIcon from '~/assets/image/message.png'
import aboutIcon from '~/assets/image/about.png'
import weiboIcon from '~/assets/image/w.png'
import jinseIcon from '~/assets/image/gold.png'
import weilaiIcon from '~/assets/image/future.png'
import chainforIcon from '~/assets/image/chain.png'
import onlineQr from '~/assets/image/online.png'
import weixinQr from '~/assets/image/weixin.png'

const localePath = useLocalePath()
const isMobile = useIsMobile()

const contacts = [
  { icon: phoneIcon, alt: 'phone', label: 'footer.phone' },
  { icon: emailIcon, alt: 'email', label: 'footer.email' },
  { icon: addressIcon, alt: 'address', label: 'footer.address' },
]
const navLinks = [
  { path: '/service', icon: messageIcon, label: 'footer.message' },
  { path: '/about', icon: aboutIcon, label: 'footer.about' },
]
// 媒体账号
const mediaLinks = [
  { href: 'https://weibo.com/gachainorg?refer_flag=1001030103_', icon: weiboIcon, alt: 'w' },
  { href: 'https://www.jinse.com/member?id=67798', icon: jinseIcon, alt: 'f' },
  { href: 'http://www.weilaicaijing.com/AuthorDetailed?id=100119&author_type=user', icon: weilaiIcon, alt: 'm' },
  { href: 'https://www.chainfor.com/writer/942.html', icon: chainforIcon, alt: 't' },
]
// 二维码：在线沟通、公众号
const qrCodes = [
  { icon: onlineQr, alt: 'online', label: 'footer.chart' },
  { icon: weixinQr, alt: 'weixin', label: 'official' },
]
</script>

<template>
  <div class="footer">
    <a-row type="flex" justify="center">
      <a-col :lg="16" :xs="22">
        <a-row type="flex" justify="space-between">
          <a-col :lg="12" :xs="22">
            <div class="footer-box">
              <div class="footer-box-logo">
                <NuxtLink :to="localePath('/')">
                  <img :src="logoFooter" alt="logo-footer" >
                </NuxtLink>
              </div>
              <div v-for="item in contacts" :key="item.alt" class="footer-box-text">
                <img :src="item.icon" :alt="item.alt" >
                <span>{{ $t(item.label) }}</span>
              </div>
            </div>
          </a-col>
          <a-col v-if="!isMobile" :lg="4" :xs="22">
            <div class="footer-message">
              <NuxtLink v-for="item in navLinks" :key="item.path" :to="localePath(item.path)" class="footer-message-item">
                <img :src="item.icon" alt="chart" >
                <span>{{ $t(item.label) }}</span>
              </NuxtLink>
            </div>
            <div class="footer-message">
              <a v-for="item in mediaLinks" :key="item.href" :href="item.href" target="_blank">
                <img :src="item.icon" :alt="item.alt" class="footer-message-img" >
              </a>
            </div>
          </a-col>
          <a-col v-if="!isMobile" :lg="6" :xs="22">
            <div v-for="item in qrCodes" :key="item.alt" class="footer-wei">
              <img :src="item.icon" :alt="item.alt" >
              <span>{{ $t(item.label) }}</span>
            </div>
          </a-col>
        </a-row>
        <div v-if="isMobile" class="mobile">
          <div class="footer-message-mobile">
            <NuxtLink v-for="item in navLinks" :key="item.path" :to="localePath(item.path)">
              <img :src="item.icon" alt="chart" >
              <span>{{ $t(item.label) }}</span>
            </NuxtLink>
          </div>
          <div class="mobile-footer-message">
            <a v-for="item in mediaLinks" :key="item.href" :href="item.href" target="_blank">
              <img :src="item.icon" :alt="item.alt" class="footer-message-img" >
            </a>
          </div>
          <div v-for="item in qrCodes" :key="item.alt" class="footer-wei">
            <img :src="item.icon" :alt="item.alt" >
            <span>{{ $t(item.label) }}</span>
          </div>
        </div>
      </a-col>
    </a-row>
    <div class="footer-bottom">{{ $t('footer.bottom') }}</div>
  </div>
</template>
