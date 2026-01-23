<script setup lang="ts">
import type { VueInstance } from '@vueuse/core'
import type { ListboxItemEmits, ListboxItemProps } from 'reka-ui'
import { useCurrentElement } from '@vueuse/core'
import { ListboxItem, useForwardPropsEmits, useId } from 'reka-ui'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<
  ListboxItemProps & { class?: HTMLAttributes['class'] }
>()
const emits = defineEmits<ListboxItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const id = useId()

const itemRef = shallowRef<VueInstance>()
const currentElement = useCurrentElement(itemRef)
</script>

<template>
  <ListboxItem
    v-bind="forwarded"
    :id="id"
    ref="itemRef"
    :class="
      cn('relative flex cursor-default items-center gap-3 rounded-md px-2 py-1.75 text-md outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:border-b3/60 data-highlighted:bg-b2 data-highlighted:shadow-xs [&_svg]:-mx-1 [&_svg]:size-5 [&_svg]:shrink-0',
         props.class,
      )
    ">
    <slot />
  </ListboxItem>
</template>
