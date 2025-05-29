<script setup lang="ts">
import type { TabsTriggerProps } from 'reka-ui'
import { TabsTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<TabsTriggerProps & {
  class?: HTMLAttributes['class']
  store?: any
  value: string
}>()

const store = ref(props.store)
const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
const forwarded = useForwardProps(delegatedProps)

const currentValue = ref()
function handleHoverStart(event) {
  const { target } = event
  const { width } = target.getBoundingClientRect()
  store.value.currentValue = {
    pos: target.offsetLeft,
    width,
  }
  currentValue.value = {
    pos: target.offsetLeft,
    width,
  }
}

const tab = ref<HTMLElement | null>(null)

const returnValue = ref()
function handleClick(event) {
  const { target } = event
  const { width } = target.getBoundingClientRect(tab)
  store.value.returnValue = {
    pos: target.offsetLeft,
    width,
  }
  returnValue.value = {
    pos: target.offsetLeft,
    width,
  }
}
</script>

<template>
  <Motion
    as-child
    @hover-start="handleHoverStart"
    @click="handleClick($event)">
    <TabsTrigger
      ref="tab"
      v-bind="forwarded"
      :class="cn(
        'inline-flex  items-center justify-center whitespace-nowrap rounded-md px-5 py-1 !text-2 font-medium transition-all focus-visible:!outline-0 tldr-20  !outline-0 border-transparent border disabled:pointer-events-none disabled:opacity-50  w-fit  h-10 text-bc/60 data-[state=active]:text-bc z-1 cursor-pointer **:select-none',
        props.class,
      )">
      <span class="truncate pointer-events-none">
        <slot :current-value="currentValue" :return-value="returnValue" />
      </span>
    </TabsTrigger>
  </Motion>
</template>
