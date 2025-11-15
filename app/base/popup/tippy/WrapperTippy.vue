<script lang="ts" setup>
import { roundArrow } from 'vue-tippy'

const {
  content,
  offset = [0, 10],
  placement = 'bottom',
} = defineProps<{
  content: string
  placement?: string
  offset?: number[]
}>()

const side = computed(() => placement.split('-')[0])

const sharpArrow
  = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5 15h14l-7-8z"/></svg>'
</script>

<template>
  <tippy
    :content="content ?? null"
    tag="span"
    :side="side"
    :follow-cursor="false"
    :hide-on-click="false"
    trigger="click"
    :arrow="roundArrow + roundArrow"
    :placement="placement"
    :offset="offset">
    <slot />
  </tippy>
</template>
