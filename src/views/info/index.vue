<script lang="ts" setup>

import { defineComponent, reactive } from 'vue'
import { NLayout, NLayoutHeader, NLayoutContent, NNotification } from 'naive-ui'
import Settings from './Settings.vue'


export default defineComponent({
  name: 'App',
  components: {
    Settings,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NNotification
  },
  setup() {
    const state = reactive({
      aiid: ':uuid?',
      name: 'AI小助手',
      personality: 'optimistic',
      chattiness: 50,
      memories: ['我们一起学习吧', '让我们一起成长'],
      isNotificationShown: false
    })

    function handleSaveSettings() {
      // 处理保存设置的逻辑，例如将设置保存到数据库或本地存储中

      state.isNotificationShown = true
    }

    return {
      ...state,
      handleSaveSettings
    }
  }
})
</script>

<template>
  <div class="app">
    <n-layout>
      <n-layout-header>AI 设置</n-layout-header>

      <n-layout-content>
        <settings
          :aiid="aiid"
          :name="name"
          :personality="personality"
          :chattiness="chattiness"
          :memories="memories"
          @save="handleSaveSettings"
        />
      </n-layout-content>
    </n-layout>

    <n-notification v-model:show="isNotificationShown" title="成功" type="success">
      设置已保存。
    </n-notification>
  </div>
</template>

