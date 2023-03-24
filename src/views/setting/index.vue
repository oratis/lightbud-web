<script lang="ts" setup>
import { NButton } from 'naive-ui'

const router = useRouter()

methods: {
  openUrl(url) {
    window.open(url);
  }
}
</script>

<template>
  <div class="flex flex-col w-full h-full">
    <div class="px-4 m-auto space-y-4 text-center max-[400px]">
      <header class="space-y-2">
        <h2 class="text-2xl font-bold text-center text-slate-800 dark:text-neutral-200">
          轻伴
        </h2>
        <p class="text-base text-center text-slate-500 dark:text-slate-500">
          版本号:0.1
        </p>

        <p class="text-base text-center text-slate-500 dark:text-slate-500">
          使用说明：可以从人物选项卡中选择一个人物，复制设定到聊天框，就可以与你设定的人物聊天了
        </p>

        <div class="flex items-center justify-center text-center">

        </div>
      </header>
      <NButton type="primary" @click="openUrl('https://www.gptwiki.net')">
        问题反馈请访问：www.gptwiki.net
      </NButton>
    </div>
  </div>
</template>
