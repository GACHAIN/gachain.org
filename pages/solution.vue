<script setup lang="ts">
import solution1 from '~/assets/image/solution-1.png'
import solution2 from '~/assets/image/solution-2.png'
import solution3 from '~/assets/image/solution-3.png'
import solution4 from '~/assets/image/solution-4.png'
import solution5 from '~/assets/image/solution-5.png'
import solution6 from '~/assets/image/solution-6.png'
import solution7 from '~/assets/image/solution-7.png'
import solution8 from '~/assets/image/solution-8.png'
import solution9 from '~/assets/image/solution-9.png'
import solution10 from '~/assets/image/solution-10.png'

// 解决方案：十个业务场景卡片
const solutions = [
  solution1,
  solution2,
  solution3,
  solution4,
  solution5,
  solution6,
  solution7,
  solution8,
  solution9,
  solution10,
].map((src, index) => ({
  key: index + 1,
  src,
  title: `solution.title${index + 1}`,
  content: `solution.content${index + 1}`,
}))

const isMobile = useIsMobile()

const description =
  '智乾科技推出解决方案栏目，您可以通过浏览解决方案页面，了解更多的相关信息，智乾科技欢迎您的到来。'
useSeoMeta({
  title:
    '区块链解决方案，区块链开发，链改方案，链改溯源，区块链生态，智能合约，区块链定制开发，区块链底层框架',
  keywords:
    '政务链,区块链平台系统开发,区块链技术应用领域,区块链技术开发公司,区块链平台搭建,区块链应用场景,智乾科技,智慧政府,电子政务,大数据,云计算,政务微信,政务微博,政务云,政府信息化,信息化方案,智慧政府规划,企业征信,企业风险监测,企业画像,企业评分,智慧政务系统,智慧政务解决方案,智慧政务,区块链,电子存证,共享交换,数据孤岛,gachian、区块链底层框架、区块链算法、共识、区块链共识、区块链方案、区块链解决方案、区块链应用、智能合约',
  description,
  ogDescription: description,
})
</script>

<template>
  <div class="solution">
    <!-- 第一部分 -->
    <div class="solution-first">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <div v-if="!isMobile" class="solution-first-text">
            {{ $t('solution.text') }}
          </div>
          <div class="solution-first-btn">
            <span>{{ $t('solution.context') }}</span>
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- 第二部分 -->
    <div class="solution-second">
      <a-row type="flex" justify="center">
        <a-col :lg="14" :xs="22">
          <div class="title-h2__black">{{ $t('solution.business') }}</div>
          <div v-if="isMobile" style="padding-bottom: 25px">
            {{ $t('solution.text') }}
          </div>
          <a-row type="flex" justify="space-around">
            <a-col v-for="item in solutions" :key="item.key" :lg="11" :xs="24">
              <div class="solution-second-box">
                <div class="solution-second-box-img">
                  <img :src="item.src" :alt="`solution-${item.key}`">
                </div>
                <div class="solution-second-content">
                  <div class="title-h3__black" style="text-align: left">
                    {{ $t(item.title) }}
                  </div>
                  <!-- eslint-disable-next-line vue/no-v-html -- 语言包内置的富文本 -->
                  <div v-html="$t(item.content)" />
                </div>
              </div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
