<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { toast } from 'vue-sonner'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

definePageMeta({
  alias: '/nexus',
  path: '/summoner',
  name: 'nexus',
})

const as = useAccountStore()
</script>

<template>
  <PagePlaceholder />
</template>
