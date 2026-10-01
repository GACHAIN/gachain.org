// wowjs 无类型声明；以经典脚本加载后挂在 window.WOW 上（见 layouts/default.vue）
declare module 'wowjs' {
  export interface WOWOptions {
    boxClass?: string
    animateClass?: string
    offset?: number
    mobile?: boolean
    live?: boolean
    scrollContainer?: string | null
  }
  export class WOW {
    constructor(options?: WOWOptions)
    init(): void
    sync(): void
  }
}

interface Window {
  WOW?: typeof import('wowjs').WOW
}
