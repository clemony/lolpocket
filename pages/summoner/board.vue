<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { toast } from 'vue-sonner'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

definePageMeta({
  alias: '/summoner',
  path: '/summoner',
  name: 'Board',
})

const as = useAccountStore()
</script>

<template>
  <div class="size-full relative">
    <ModuleContainer />
  </div>
</template>

<style scoped></style>
