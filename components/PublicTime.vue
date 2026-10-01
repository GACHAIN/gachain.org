<script setup lang="ts">
import type { ApiResponse, EventItem } from '~/types/api'

// 发展历程时间轴：奇数项文字在轴下方，偶数项在轴上方
const { $api } = useNuxtApp()

const { data: events } = await useAsyncData('events', () => $api<ApiResponse<EventItem[]>>('/events'), {
  transform: (res) => (res.code === 0 ? res.data.map((item) => ({ ...item, info: item.info.trimEnd() })) : []),
  default: () => [],
})
</script>

<template>
  <div class="timeBox">
    <div class="time">
      <template v-for="item in events" :key="item.id">
        <div v-if="item.id % 2 === 0" class="time-item">
          <div class="time-item-even">
            <div class="time-item-even-line" />
            <div class="time-item-even-text">
              <span class="time-item-even-text__info">{{ item.info }}</span>
              <strong>{{ item.date }}</strong>
            </div>
          </div>
          <div class="time-item-axis" />
          <div class="time-item-even" />
        </div>
        <div v-else class="time-item">
          <div class="time-item-odd" />
          <div class="time-item-axis" />
          <div class="time-item-odd">
            <div class="time-item-odd-line" />
            <div class="time-item-odd-text">
              <strong>{{ item.date }}</strong>
              <span>{{ item.info }}</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="less">
@import '~/assets/less/variable.less';

.timeBox {
  overflow-x: auto;
  height: 330px;
  cursor: pointer;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: rgba(0, 0, 0, 0.1);
    display: none;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }
}
.time {
  padding: 70px 20px;
  display: flex;
  height: auto;
  &-item {
    width: 150px;
    margin-left: 25px;
    &-axis {
      width: 150px;
      height: 3px;
      background-color: rgba(@primary-color, 0.1); /* 不支持线性的时候显示 */
      background-image: linear-gradient(
        to right,
        #fff,
        rgba(@primary-color, 1)
      );
      border-radius: 5px;
      position: relative;
      &::before {
        position: absolute;
        right: -22px;
        bottom: -9px;
        content: "";
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #f3cdcf;
      }
      &::after {
        position: absolute;
        right: -19px;
        bottom: -6px;
        content: "";
        display: block;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color: @primary-color;
      }
    }
    &-odd {
      position: relative;
      height: 80px;
      &-line {
        width: 3px;
        height: 80px;
        background-image: linear-gradient(to bottom, @primary-color, #fff);
        border-radius: 5px;
        right: -13px;
        top: 12px;
        margin-left: 159px;
        margin-top: 14px;
      }
      &-text {
        position: absolute;
        right: -100px;
        top: 80px;
        width: 180px;
        & > * {
          display: block;
          font-size: 14px;
        }
        strong {
          font-size: 16px;
          font-weight: bold;
          text-align: center;
        }
      }
    }
    &-even {
      position: relative;
      height: 80px;
      &-line {
        width: 3px;
        height: 80px;
        background-image: linear-gradient(to bottom, #fff, @primary-color);
        border-radius: 5px;
        right: -14px;
        top: 15px;
        margin-left: 160px;
        margin-top: -2px;
      }
      &-text {
        position: absolute;
        right: -100px;
        top: -65px;
        width: 180px;
        & > * {
          display: block;
          font-size: 14px;
        }
        span {
          height: 42px;
          display: table-cell;
          vertical-align: bottom;
          letter-spacing: 0;
        }
        strong {
          font-size: 16px;
          font-weight: bold;
          text-align: center;
        }
      }
    }
  }
}
</style>
