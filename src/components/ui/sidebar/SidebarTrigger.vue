<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

import { useSidebar } from './utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()


const sidebar = useSidebar()
const { toggleSidebar } = useSidebar()
const state = sidebar.state
</script>

<template><Button data-sidebar="trigger" v-shortkey.once="['meta', 'l']" @shortkey="toggleSidebar()" @click="toggleSidebar"
  variant="ghost" size="sm" :class="cn('w-full justify-start', props.class)">
  <div class="flex size-7 items-center justify-center rounded-md">
    <icon v-if="state == 'expanded'" icon="teenyicons:send-left-outline" class="size-3.5" />
    <icon v-if="state == 'collapsed'" icon="teenyicons:send-right-outline" class="size-3.5" />
  </div>

  <span class="font-medium  text-start  grow">{{ state == 'expanded' ? 'Collapse Sidebar' : 'Expand Sidebar' }}</span>



  <div class='justify-self-end justify-end text-xs opacity-80 pr-2'>
    ⌘ L
  </div>
</Button></template>
