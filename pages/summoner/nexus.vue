<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { toast } from 'vue-sonner'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

definePageMeta({
  path: '/summoner/nexus',
  name: 'nexus',
  alias: '/nexus'
})

const as = useAccountStore()
</script>

<template>
  <PagePlaceholder />
</template>
