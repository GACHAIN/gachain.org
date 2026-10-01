<script setup lang="ts">
import p1 from '~/assets/image/p-1.png'
import p2 from '~/assets/image/p-2.png'
import p3 from '~/assets/image/p-3.png'
import p4 from '~/assets/image/p-4.png'
import product1 from '~/assets/image/product-1.png'
import product2 from '~/assets/image/product-2.png'
import product3 from '~/assets/image/product-3.png'
import product4 from '~/assets/image/product-4.png'
import product5 from '~/assets/image/product-5.png'
import product6 from '~/assets/image/product-6.png'
import product7 from '~/assets/image/product-7.png'
import product7Mobile from '~/assets/image/product-7-1.png'
import product8 from '~/assets/image/product-8.png'
import product9 from '~/assets/image/product-9.png'
import product10 from '~/assets/image/product-10.png'
import product11 from '~/assets/image/product-11.png'
import product12 from '~/assets/image/product-12.png'
import product13 from '~/assets/image/product-13.png'
import third1 from '~/assets/image/third-1.png'
import third2 from '~/assets/image/third-2.png'
import third3 from '~/assets/image/third-3.png'
import third4 from '~/assets/image/third-4.png'
import third5 from '~/assets/image/third-5.png'

// 产品介绍：政务链能力、优势、安全与共享交换
const isMobile = useIsMobile()

const pictures = [third1, third2, third3]
const capabilities = [
  { key: 1, src: p1, title: 'product.docking', content: 'product.base' },
  { key: 2, src: p2, title: 'product.draw', content: 'product.govis' },
  { key: 3, src: p3, title: 'product.configure', content: 'product.tps' },
  { key: 4, src: p4, title: 'product.chainopen', content: 'product.cooperation' },
]
const advantages = [
  { key: 1, src: product1, title: 'product.business', content: 'product.unite' },
  { key: 2, src: product2, title: 'product.data', content: 'product.hash' },
  { key: 3, src: product3, title: 'product.file', content: 'product.code' },
]
const features = [
  { key: 9, src: product9, title: 'product.one', content: 'product.build' },
  { key: 10, src: product10, title: 'product.n', content: 'product.fen' },
  { key: 11, src: product11, title: 'product.five', content: 'product.catalog' },
  { key: 12, src: product12, title: 'product.two', content: 'product.system' },
]

const capabilityStyle = computed(() =>
  isMobile.value
    ? { alignItems: 'center', paddingBottom: '20px', height: 'auto' }
    : { alignItems: 'flex-start', paddingBottom: 0, height: '100%' },
)
const cardPadding = computed(() =>
  isMobile.value ? { padding: '0 20px 20px 20px' } : { padding: '20px 50px 35px 35px' },
)

const description =
  '政务链在技术上是一个嵌入式平台，同时也是一个基于区块链的操作系统平台，具有创建和执行智能合约和智能法律的机制。 因此，该平台也可以成功应用于各种金融、供应链、智慧医疗、智慧交通、传统实体商业和文化版权保护等其他社会应用，如政府服务中心、公安部门、交通管理局、证券交易所、商业银行、保险和信贷机构、各个领域的会计和管理系统、医药保健、房地产买卖登记、商业供应链等， 以及对社会提供BaaS服务'
useSeoMeta({
  title: '产品介绍，区块链开发，链改方案',
  keywords:
    '区块链平台系统开发,区块链技术应用领域,区块链技术开发公司,区块链平台搭建,区块链应用场景,智乾科技,智慧政府,电子政务,大数据,云计算,政务微信,政务微博,政务云,政府信息化,信息化方案,智慧政府规划,企业征信,企业风险监测,企业画像,政务链,企业评分,智慧政务系统,智慧政务解决方案,智慧政务,区块链,电子存证,共享交换,数据孤岛,gachian',
  description,
  ogDescription: description,
})
</script>

<template>
  <div class="product">
    <!-- eslint-disable vue/no-v-html -- 本页 v-html 均渲染语言包内置的富文本 -->
    <!-- 第一部分 -->
    <div class="product-first">
      <a-row type="flex" justify="center" align="middle">
        <a-col :lg="16" :xs="22">
          <div class="title-h1__white">
            {{ $t('product.chain') }}
          </div>
          <div class="home-back-text" :style="isMobile ? { textAlign: 'left' } : undefined">
            {{ $t('product.gochain') }}
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- 第二部分 -->
    <div class="product-second">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="23">
          <a-row type="flex" justify="space-around">
            <a-col v-for="item in capabilities" :key="item.key" :lg="11" :xs="23">
              <div class="home-three-last" :style="capabilityStyle">
                <div class="home-three-last-content">
                  <div class="title-h3__black">{{ $t(item.title) }}</div>
                  <div class="home-back-second-content">{{ $t(item.content) }}</div>
                </div>
                <img :src="item.src" :alt="`p-${item.key}`" class="product-second-img">
              </div>
            </a-col>
          </a-row>
          <!-- 第三部分 -->
          <h2 class="home-three-title">{{ $t('product.goodness') }}</h2>
          <a-row type="flex" justify="space-around">
            <a-col v-for="item in advantages" :key="item.key" :lg="7" :xs="7">
              <div class="product-third">
                <img :src="item.src" :alt="`product-${item.key}`" class="product-third-img">
                <div class="title-h3__black">{{ $t(item.title) }}</div>
                <div class="home-back-second-content">{{ $t(item.content) }}</div>
              </div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <!-- 第四部分 -->
    <h2 class="home-three-title">{{ $t('product.promote') }}</h2>
    <div class="product-fourth product-fourth-white">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :lg="6" :xs="24">
              <img :src="product4" alt="product-4" class="product-fourth-img computer">
              <div class="mobile">
                <a-row type="flex" justify="space-between" align="middle">
                  <a-col :xs="13">
                    <div class="title-h3__black" style="text-align: left">
                      {{ $t('product.security') }}
                    </div>
                  </a-col>
                  <a-col :xs="7">
                    <img :src="product4" alt="product-4" class="product-fourth-img product-back">
                  </a-col>
                </a-row>
              </div>
            </a-col>
            <a-col :lg="15" :xs="24">
              <div v-if="!isMobile" class="title-h3__black mobile-line" style="text-align: left">
                {{ $t('product.security') }}
              </div>
              <div class="home-back-second-content" v-html="$t('product.government')" />
              <div class="home-back-second-content" v-html="$t('product.government1')" />
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <div class="product-fourth">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :lg="15" :xs="24">
              <div v-if="isMobile" class="title-h3__black mobile-title-h3__black">
                <span class="mobile-line">{{ $t('product.core') }}</span>
              </div>
              <div v-else class="title-h3__black mobile-line" style="text-align: left">
                {{ $t('product.core') }}
              </div>
              <div class="home-back-second-content" v-html="$t('product.time')" />
            </a-col>
            <a-col :lg="6" :xs="22">
              <img :src="product5" alt="product-5" class="product-fourth-img">
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <div class="product-fourth product-fourth-white">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :lg="6" :xs="24">
              <img :src="product6" alt="product-6" class="product-fourth-img computer">
              <div class="mobile">
                <a-row type="flex" justify="space-between" align="middle">
                  <a-col :xs="13">
                    <div class="title-h3__black" style="text-align: left">
                      {{ $t('product.credible') }}
                    </div>
                  </a-col>
                  <a-col :xs="7">
                    <img :src="product6" alt="product-6" class="product-fourth-img">
                  </a-col>
                </a-row>
              </div>
            </a-col>
            <a-col :lg="15" :xs="24">
              <div class="title-h3__black computer mobile-line" style="text-align: left">
                {{ $t('product.credible') }}
              </div>
              <div class="home-back-second-content" v-html="$t('product.department')" />
              <div class="home-back-second-content" v-html="$t('product.department1')" />
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <!-- 南沙案例 -->
    <div class="product-third">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <div
            class="title-h3__black title-h__center"
            :style="{ paddingBottom: isMobile ? '20px' : '40px' }"
          >
            <img :src="third4" alt="third-4">
            <span style="padding: 0 10px">{{ $t('home.nan') }}</span>
            <img :src="third5" alt="third-5">
          </div>
          <p class="home-back-second-content" v-html="$t('home.sha')" />
          <p class="home-back-second-content" v-html="$t('home.sha1')" />
          <div class="home-carousel">
            <ImageCarousel :source="pictures" wide />
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- 第五部分 -->
    <a-row type="flex" justify="center">
      <a-col :lg="16" :xs="22">
        <div class="title-h2__black">{{ $t('product.share') }}</div>
        <div class="home-back-second-content" v-html="$t('product.change')" />
        <div class="home-back-second-content" v-html="$t('product.change1')" />
        <div
          class="home-back-second-content"
          :style="{ paddingBottom: isMobile ? '0' : '60px' }"
          v-html="$t('product.change2')"
        />
        <div class="product-img product-fourth-white computer" :style="cardPadding">
          <img :src="product7" alt="product-7">
        </div>
      </a-col>
    </a-row>
    <div class="mobile">
      <div class="product-img">
        <img :src="product7Mobile" alt="product-7-1">
      </div>
    </div>
    <!-- 第六部分 -->
    <a-row type="flex" justify="space-around">
      <a-col :lg="16" :xs="22">
        <div class="title-h2__black">{{ $t('product.info') }}</div>
        <a-row type="flex" justify="space-between">
          <a-col v-for="item in features" :key="item.key" :lg="5" :xs="11">
            <div class="product-third">
              <img :src="item.src" :alt="`product-${item.key}`" class="product-third-img">
              <h4 class="home-three-title-samll">{{ $t(item.title) }}</h4>
              <div :class="{ 'product-third-text': item.key === 9 }">{{ $t(item.content) }}</div>
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <div class="product-sixth">
      <a-row type="flex" justify="space-around">
        <a-col :lg="16" :xs="24">
          <div class="product-fourth-white" :style="cardPadding">
            <div class="title-h3__black title-h__center" style="padding-bottom: 25px">
              <img :src="third4" alt="third-4" class="third-4">
              <span style="padding: 0 10px">{{ $t('product.mou') }}</span>
              <img :src="third5" alt="third-5" class="third-4">
            </div>
            <div class="product-sixth-img">
              <img :src="product8" alt="product-8">
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="product-seventh">
      <!-- 第七部分 -->
      <a-row type="flex" justify="center">
        <a-col :lg="14" :xs="22">
          <div class="title-h2__black">{{ $t('product.develop') }}</div>
          <div class="product-text" v-html="$t('product.we')" />
          <div class="product-text" v-html="$t('product.we1')" />
          <div class="product-img" style="text-align: center; margin-bottom: 30px">
            <img :src="product13" alt="product-13" :style="{ width: isMobile ? '100%' : '80%' }">
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
