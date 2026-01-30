<script lang="ts" setup>
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
  <SheetClose class="" as-child>
    <button
      class=""
      :class="
        cn(
          'group input rounded-lg-2 hover:ring-b4 flex! h-12 w-full cursor-text flex-nowrap items-center gap-2 bg-transparent! px-3 text-nowrap hover:ring-1',
          props.class,
        )
      "
      @click.stop="ui().commandOpen = true"
    >
      <icon
        class="dst size-4 shrink-0 opacity-70 group-hover:opacity-100"
        name="search"
      />

      <span
        class="text-bc/70 mt-px grow text-left text-sm font-medium tracking-tight"
      >
        summoners, data, pockets...
      </span>

      <span class="text-md! text-bc/60 font-medium">
        {{ getDeviceKey() }} K
      </span>
    </button>
  </SheetClose>
</template>
