<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

import { defineComponent } from 'vue'
import { NInput, NButton } from 'naive-ui'

function saveInfo():void {
      // 将用户输入的文本保存到 localStorage 中
      localStorage.setItem('userText', this.userInput)
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
            <n-input v-model="userInput" placeholder="取个名字吧"></n-input>
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
