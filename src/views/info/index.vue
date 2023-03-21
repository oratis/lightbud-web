<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useAppStore, useInfoStore } from '@/store'
import type { BudInfo } from '@/store/modules/info/helper'
import { NInput, NButton } from 'naive-ui'

const appStore = useAppStore()
const infoStore = useInfoStore()

const theme = computed(() => appStore.theme)
const budInfo = computed(() => InfoStore.budInfo)

const name = ref(budInfo.value.name ?? '')

function saveInfo():void {
      // 将用户输入的文本保存到 localStorage 中
      localStorage.setItem('userText', this.userInput)
    }

function updateBudInfo(options: Partial<budInfo>) {
  infoStore.updateBudInfo(options)
  ms.success(t('common.success'))
}

</script>

<template>
  <div class="flex flex-col w-full h-full">
    <div class="px-4 m-auto space-y-4 text-left max-[400px]">
      <header class="space-y-2">
        <p class="text-base text-left text-slate-500 dark:text-slate-500">
          你的AIID是'uuid'
        </p>

        <h2 class="text-2xl text-left text-slate-800 dark:text-neutral-200">
            <p>你如何称呼你的AI伙伴：</p>
            <n-input v-model="userInput" placeholder="取个名字吧">{{ $t('setting.name') }}</n-input>
        </h2>

        <div class="flex items-center justify-center text-center">
        </div>
      </header>
      <NButton type="primary" @click="saveInfo">
        {{ $t('common.save') }}
      </NButton>
    </div>
  </div>
</template>
