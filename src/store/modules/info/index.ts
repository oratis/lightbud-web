import { defineStore } from 'pinia'
import type { BudInfo, budState } from './helper'
import { defaultSetting, getLocalState, setLocalState } from './helper'

export const useInfoStore = defineStore('info-store', {
  state: (): budState => getLocalState(),
  actions: {
    updateBudInfo(budInfo: Partial<budInfo>) {
      this.budInfo = { ...this.budInfo, ...budInfo }
      this.recordState()
    },

    resetBudInfo() {
      this.budInfo = { ...defaultSetting().budInfo }
      this.recordState()
    },

    recordState() {
      setLocalState(this.$state)
    },
  },
})
