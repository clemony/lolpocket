<script lang="ts" setup>
import { getDeviceKey } from '~/utils/config/handleDevice'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { ControlLeft, ControlRight, K, MetaLeft, MetaRight } = useMagicKeys()

watchEffect(() => {
  if (
    (ControlLeft.value
      || ControlRight.value
      || MetaRight.value
      || MetaLeft.value)
    && K.value
  ) {
    console.log('Shift + A have been pressed')
  }
})
</script>

<template>
  <button
    v-tippy="'Search'"
    :class="
      cn(
        'flex group bg-b1/50 w-20 flex-nowrap text-nowrap !cursor-text items-center flex self-center items-center h-8 border border-b4/60 pl-2.75 pr-2 rounded-xl  transition-colors text-xs  mx-1 duration-150 hover:ringneutral/50  hover:ring-1 z-1 inset-shadow-xs border',
        props.class,
      )
    "
    class=""
    @click.stop="ui().commandOpen = true">
    <span class="relative size-5 grid place-items-center -left-0.25">
      <icon
        name="weui:search-filled"
        class="size-4.75 shrink-0 opacity-60 dst" />
    </span>

    <span
      class="text-bc/60 text-left mt-px font-medium tracking-tight grow truncate">
      <slot />
    </span>

    <span class="font-medium px-1 !text-bc/80">{{ getDeviceKey() }} K</span>
  </button>
</template>
