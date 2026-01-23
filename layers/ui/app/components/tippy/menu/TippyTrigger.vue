<script setup lang="ts">
import type { TippyContext } from './tippy-context'
import { tippyContextKey } from './tippy-context'

const ctx: TippyContext = inject(tippyContextKey)
const el = useTemplateRef<HTMLElement>('triggerEl')
onMounted(() => el.value && ctx?.setTrigger(el.value))
</script>

<template>
  <div ref="triggerEl">
    <slot />
  </div>
</template>
