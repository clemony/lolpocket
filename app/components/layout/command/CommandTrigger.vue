<script lang="ts" setup>
import { getDeviceKey } from '~/utils/config/handleDevice'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
const ui = useUiStore()

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
    <div
      :class="
        cn(
          'rounded-lg-2 px-3 input gap-2  !bg-transparent !flex   hover:ring-b4 flex-nowrap text-nowrap cursor-text items-center   w-full h-12   hover:ring-1 group ',
          props.class,
        )
      "
      class=""
      @click.stop="ui.commandOpen = true">
      <icon
        name="search"
        class="size-4 shrink-0 opacity-70 group-hover:opacity-100 dst" />

      <span
        class="text-bc/70 text-left mt-px font-medium tracking-tight text-xs grow">
        summoners, data, pockets...
      </span>

      <span class="!text-sm font-medium text-bc/60">{{ getDeviceKey() }} K</span>
    </div>
  </SheetClose>
</template>
