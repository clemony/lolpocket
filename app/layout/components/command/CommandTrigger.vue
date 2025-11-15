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
  <SheetClose
    as-child
    class="">
    <button
      :class="
        cn(
          `
            group input flex! h-12 w-full cursor-text flex-nowrap items-center
            gap-2 rounded-lg-2 bg-transparent! px-3 text-nowrap
            hover:ring-1 hover:ring-b4
          `,
          props.class,
        )
      "
      class=""
      @click.stop="ui().commandOpen = true">
      <icon
        name="search"
        class="
          size-4 shrink-0 opacity-70 dst
          group-hover:opacity-100
        " />

      <span
        class="
          mt-px grow text-left text-2 font-medium tracking-tight text-bc/70
        ">
        summoners, data, pockets...
      </span>

      <span class="text-3! font-medium text-bc/60">{{ getDeviceKey() }} K</span>
    </button>
  </SheetClose>
</template>
