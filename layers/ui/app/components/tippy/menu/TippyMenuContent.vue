<script setup lang="ts">
import type { TippyContext } from './tippy-context'
import { tippyContextKey } from './tippy-context'

const ctx: TippyContext = inject(tippyContextKey)
const el = useTemplateRef<HTMLElement>('contentEl')
onMounted(() => el.value && ctx?.setContent(el.value))
</script>

<template>
  <div ref="contentEl" class="tippy-content">
    <slot />
  </div>
</template>
