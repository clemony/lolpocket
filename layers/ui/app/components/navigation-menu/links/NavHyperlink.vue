<script setup lang="ts">
import { NuxtLink } from '#components'
import { NavigationMenuLink } from 'reka-ui'

const {
  at,
  class: className,
  hash,
  nuxt,
  to,
} = defineProps<{
  class?: HTMLAttributes['class']
  to?: string
  hash?: boolean
  at?: boolean
  nuxt?: boolean
}>()

const component = computed(() => (nuxt ? NuxtLink : NavigationMenuLink))
</script>

<template>
  <component
    :is="component"
    :class="
      cn('text-bc/70 hover:text-bc flex items-center text-sm font-medium underline-offset-2 hover:underline',
         className,
      )
    "
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
