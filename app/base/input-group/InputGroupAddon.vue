<script setup lang="ts">
<<<<<<< HEAD
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { Primitive } from 'reka-ui'

const props = withDefaults(defineProps<PrimitiveProps & {
  align?: InputGroupAddonVariants['align']
=======
import type { HTMLAttributes } from 'vue'

const props = withDefaults(defineProps<{
  align?: InputGroupVariants['align']
>>>>>>> refs/remotes/origin/main
  class?: HTMLAttributes['class']
}>(), {
  align: 'inline-start',
})

function handleInputGroupAddonClick(e: MouseEvent) {
  const currentTarget = e.currentTarget as HTMLElement | null
  const target = e.target as HTMLElement | null
  if (target && target.closest('button')) {
    return
  }
  if (currentTarget && currentTarget?.parentElement) {
    currentTarget.parentElement?.querySelector('input')?.focus()
  }
}
</script>

<template>
<<<<<<< HEAD
  <Primitive
    role="group"
    v-bind="props"
=======
  <div
    role="group"
>>>>>>> refs/remotes/origin/main
    data-slot="input-group-addon"
    :data-align="props.align"
    :class="cn(inputGroupAddonVariants({ align: props.align }), props.class)"
    @click="handleInputGroupAddonClick">
    <slot />
<<<<<<< HEAD
  </Primitive>
=======
  </div>
>>>>>>> refs/remotes/origin/main
</template>
