<script setup lang="ts">
import service1 from '~/assets/image/service-1.png'
import service2 from '~/assets/image/service-2.png'
import service3 from '~/assets/image/service-3.png'
import service4 from '~/assets/image/service-4.png'
import service5 from '~/assets/image/service-5.png'
import service6 from '~/assets/image/service-6.png'
import service7 from '~/assets/image/service-7.png'
import service8 from '~/assets/image/service-8.png'
import service9 from '~/assets/image/service-9.png'
import github from '~/assets/image/github.png'

// 技术开源：节点类型、共识机制、跨链能力与开源入口
const isMobile = useIsMobile()

const textLeft = { textAlign: 'left' } as const
const textCenter = { textAlign: 'center' } as const
const nodeBorder = { borderBottom: '1px solid #dfdfdf', marginBottom: '2em' }

const description =
  '智乾政务链采用公链，用户可自定义上链的数据，并且支持第三方系统对接如跨链数据、其他中心化系统数据等。自主开发相关语言与集成开发环境图灵完备的智能合约语言-智语言(G Language)用户界面开发模板语言-乾语言(Chain Language)集成开发环境Molis客户端，开发者不需要丰富的区块链知识即可创建应用。'
useSeoMeta({
  title: '技术开源，区块链加密机制，区块链底层语言，智能合约开发，链改，政务应用解决方案',
  keywords:
    '政务链,gachain,智语言,乾语言,跨链,共享交换,去中心化,自主开发,智乾科技,智乾区块链,智慧园区,智慧城市,智慧政务,共享交换',
  description,
  ogDescription: description,
})
</script>

<template>
  <div class="service">
    <!-- eslint-disable vue/no-v-html -- 本页 v-html 均渲染语言包内置的富文本 -->
    <!-- 第一部分 -->
    <div class="service-first">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <a-row type="flex" :justify="isMobile ? 'center' : 'space-between'">
            <a-col :lg="10" :xs="22" :style="isMobile ? textCenter : undefined">
              <div class="title-h1__white">
                {{ $t('service.title') }}
              </div>
              <div class="home-back-text" style="text-align: left">
                {{ $t('service.text') }}
              </div>
              <div class="computer">
                <div class="service-btn">
                  <a href="https://gachain.readthedocs.io" target="_blank" rel="noopener">
                    {{ $t('service.manual') }}
                  </a>
                  <a href="https://github.com/gachain" target="_blank" rel="noopener">
                    {{ $t('service.forum') }}
                  </a>
                </div>
              </div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <div class="mobile mobile-first">
      <div class="service-btn service-btn1">
        <a href="https://gachain.readthedocs.io" target="_blank" rel="noopener">
          {{ $t('service.manual') }}
        </a>
        <a href="https://github.com/gachain" target="_blank" rel="noopener">
          {{ $t('service.forum') }}
        </a>
      </div>
    </div>
    <!-- 第二部分 -->
    <div class="service-second">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <div class="title-h2__black">{{ $t('service.trait') }}</div>
          <div
            class="product-text mobile-product-text"
            :style="isMobile ? textLeft : textCenter"
            style="margin-bottom: 25px"
          >
            {{ $t('service.gachain') }}
          </div>
          <a-row type="flex" justify="space-between">
            <a-col :lg="16" :xs="24" :style="isMobile ? nodeBorder : undefined">
              <div class="service-second-left">
                <div class="title-h2__black">{{ $t('service.node') }}</div>
                <a-row type="flex" justify="space-around">
                  <a-col :lg="7" :xs="7">
                    <div class="product-third">
                      <img :src="service1" alt="service-1" class="product-third-img">
                      <div class="title-h3__black">{{ $t('service.super') }}</div>
                      <div class="product-text">{{ $t('service.save') }}</div>
                    </div>
                  </a-col>
                  <a-col :lg="7" :xs="7">
                    <div class="product-third">
                      <img :src="service2" alt="service-2" class="product-third-img">
                      <div class="title-h3__black">{{ $t('service.common') }}</div>
                      <div class="product-text" v-html="$t('service.source')" />
                      <div class="product-text" v-html="$t('service.source1')" />
                    </div>
                  </a-col>
                  <a-col :lg="7" :xs="7">
                    <div class="product-third">
                      <img :src="service3" alt="service-3" class="product-third-img">
                      <div class="title-h3__black">{{ $t('service.child') }}</div>
                      <div class="product-text" v-html="$t('service.first')" />
                      <div class="product-text" v-html="$t('service.first1')" />
                    </div>
                  </a-col>
                </a-row>
              </div>
              <div class="service-second-left">
                <h4 class="service-title">{{ $t('service.merger') }}</h4>
                <a-row type="flex" justify="space-around">
                  <a-col :lg="7" :xs="7">
                    <div class="product-third">
                      <img :src="service4" alt="service-4" class="product-third-img">
                      <div class="title-h3__black">{{ $t('service.poa') }}</div>
                      <div class="product-text" v-html="$t('service.move')" />
                      <div class="product-text" v-html="$t('service.move1')" />
                    </div>
                  </a-col>
                  <a-col :lg="7" :xs="7">
                    <div class="product-third">
                      <img :src="service5" alt="service-5" class="product-third-img">
                      <div class="title-h3__black">{{ $t('service.poc') }}</div>
                      <div class="product-text" v-html="$t('service.careful')" />
                      <div class="product-text" v-html="$t('service.careful1')" />
                    </div>
                  </a-col>
                  <a-col :lg="7" :xs="7">
                    <div class="product-third">
                      <img :src="service6" alt="service-6" class="product-third-img">
                      <div class="title-h3__black">{{ $t('service.pos') }}</div>
                      <div class="product-text">{{ $t('service.on') }}</div>
                    </div>
                  </a-col>
                </a-row>
              </div>
            </a-col>
            <a-col v-if="!isMobile" :lg="7" :xs="24">
              <div class="service-second-right">
                <div class="product-third">
                  <img :src="service7" alt="service-7" class="product-third-img">
                  <div class="title-h3__black">{{ $t('service.high') }}</div>
                  <div class="product-text" v-html="$t('service.second')" />
                  <div class="product-text" v-html="$t('service.second1')" />
                </div>
              </div>
              <div class="service-second-right">
                <div class="product-third">
                  <img :src="service8" alt="service-8" class="product-third-img">
                  <div class="title-h3__black">{{ $t('service.saves') }}</div>
                  <div class="product-text" v-html="$t('service.data')" />
                  <div class="product-text" v-html="$t('service.data1')" />
                  <div class="product-text" v-html="$t('service.data2')" />
                </div>
              </div>
            </a-col>
          </a-row>
          <a-row v-if="isMobile" type="flex" justify="space-around">
            <a-col :xs="11">
              <div class="product-third">
                <img :src="service7" alt="service-7" class="product-third-img">
                <div class="title-h3__black">{{ $t('service.high') }}</div>
                <div class="product-text" v-html="$t('service.second')" />
                <div class="product-text" v-html="$t('service.second1')" />
              </div>
            </a-col>
            <a-col :xs="11">
              <div class="product-third">
                <img :src="service8" alt="service-8" class="product-third-img">
                <div class="title-h3__black">{{ $t('service.saves') }}</div>
                <div class="product-text" v-html="$t('service.data')" />
                <div class="product-text" v-html="$t('service.data1')" />
                <div class="product-text" v-html="$t('service.data2')" />
              </div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <!-- 第三部分 -->
    <a-row type="flex" justify="center">
      <a-col :lg="12" :xs="22">
        <div class="title-h2__black">{{ $t('gavic') }}</div>
        <div
          class="product-text"
          :style="isMobile ? textLeft : textCenter"
          v-html="$t('service.gavic')"
        />
        <div class="product-video">
          <IntroVideo src="/video/show.MP4" />
        </div>
      </a-col>
    </a-row>
    <!-- 第四部分 -->
    <div class="service-fourth">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <div class="title-h2__black">{{ $t('service.virtual') }}</div>
          <div
            class="product-text"
            :style="isMobile ? textLeft : undefined"
            v-html="$t('service.cross')"
          />
          <div v-if="isMobile" class="product-img">
            <img :src="service9" alt="service-9">
          </div>
          <a-row
            type="flex"
            :justify="isMobile ? 'center' : 'space-between'"
            align="middle"
            style="margin-bottom: 30px"
          >
            <a-col :lg="10" :xs="22">
              <div class="service-fourth-box">
                <div class="product-text" v-html="$t('service.oracle')" />
                <div class="product-text" v-html="$t('service.oracle1')" />
                <div class="product-text" v-html="$t('service.oracle2')" />
              </div>
            </a-col>
            <a-col v-if="!isMobile" :lg="12" :xs="22">
              <div class="product-img">
                <img :src="service9" alt="service-9">
              </div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <!-- 第五部分 -->
    <div class="service-fifth">
      <a-row type="flex" justify="center">
        <a-col :lg="16" :xs="22">
          <div class="product-text" style="margin-bottom: 30px">
            {{ $t('service.github') }}
          </div>
          <div class="service-fifth-btn">
            <a href="https://github.com/GACHAIN" target="_blank" rel="noopener" class="service-fifth-github">
              <img :src="github" alt="github">
              {{ $t('service.go') }}
            </a>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
