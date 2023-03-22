<script setup lang='ts'>
import PromptStore from '@/components/common'

export default {
    name: 'Info',
    components: {
      PromptStore,
    },
  }

</script>

<template>
  <div class="flex flex-col w-full h-full">
    <div class="px-4 m-auto space-y-4 text-center max-[400px]">
		   <PromptStore></PromptStore>
  </div>
    </div>
  </div>
</template>
