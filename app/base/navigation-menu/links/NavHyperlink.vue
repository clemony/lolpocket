<script setup lang="ts">
import { NuxtLink } from '#components'
import { NavigationMenuLink } from 'reka-ui'

const { class: className, hash, to, at, nuxt } = defineProps<{
  class?: HTMLAttributes['class']
  to?: string
  hash?: boolean
  at?: boolean
  nuxt?: boolean
}>()

const component = computed (() => nuxt ? NuxtLink : NavigationMenuLink)
</script>

<template>
  <component
    :is="component"
    :class="cn('font-medium text-2 text-bc/70 underline-offset-2 hover:underline hover:text-bc flex  items-center', className)"
    @click="navigateTo(to)">
    <icon
      v-if="at"
      name="at"
      class="size-3.75" />
    <icon
      v-if="hash"
      name="hash"
      class="size-3.75" />
    <slot />
  </component>
</template>