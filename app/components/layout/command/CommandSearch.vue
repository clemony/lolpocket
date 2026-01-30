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
  <button
    v-tippy="'Search'"
    class=""
    :class="
      cn(
        'group hover:ringneutral/50 border-b4/60 bg-b1/50 z-1 mx-1 flex h-8 w-20 cursor-text! flex-nowrap items-center self-center rounded-xl border pr-2 pl-2.75 text-sm text-nowrap inset-shadow-xs transition-colors duration-150 hover:ring-1',
        props.class,
      )
    "
    @click.stop="ui().commandOpen = true"
  >
    <span class="relative -left-0.25 grid size-5 place-items-center">
      <icon
        class="dst size-4.75 shrink-0 opacity-60"
        name="weui:search-filled"
      />
    </span>

    <span
      class="text-bc/60 mt-px grow truncate text-left font-medium tracking-tight"
    >
      <slot />
    </span>

    <span class="text-bc/80! px-1 font-medium">{{ getDeviceKey() }} K</span>
  </button>
</template>
