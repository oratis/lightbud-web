<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

import { defineComponent } from 'vue'
import { NInput, NButton } from 'naive-ui'

const aiInfo = defineComponent({
  name: 'SaveText',
  components: { NInput, NButton },
  data() {
    return {
      userInput: ''
    }
  },
  methods: {
    saveText() {
      // 将用户输入的文本保存到 localStorage 中
      localStorage.setItem('userText', this.userInput)
    }
  }
})

export default aiInfo

</script>

<template>
  <div class="flex flex-col w-full h-full">
    <div class="px-4 m-auto space-y-4 text-left max-[400px]">
      <header class="space-y-2">
        <h2 class="text-2xl text-left text-slate-800 dark:text-neutral-200">
            <n-input v-model="userInput" placeholder="请输入文本"></n-input>
        </h2>
        <p class="text-base text-left text-slate-500 dark:text-slate-500">
          你的AIID是'uuid'
        </p>
        <div class="flex items-center justify-center text-center">
        </div>
      </header>
      <NButton type="primary" @click="save">
        保存设置
      </NButton>
    </div>
  </div>
</template>
