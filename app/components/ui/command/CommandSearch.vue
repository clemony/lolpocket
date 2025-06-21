<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
const us = useUiStore()

const { ControlRight, ControlLeft, MetaRight, MetaLeft, K } = useMagicKeys()

watchEffect(() => {
  if ((ControlLeft.value || ControlRight.value || MetaRight.value || MetaLeft.value) && K.value)
    console.log('Shift + A have been pressed')
})
</script>

<template>
  <button
    :class="cn('rounded-lg-2  gap-2 ml-2   w-32  border-b4/80  hover:ring-neutral/50 flex h-9 !bg-b1/20 flex-nowrap text-nowrap cursor-text items-center  px-3 !py-0  hover:!bg-b1  hover:ring-1 group inset-shadow-xs group  border', props.class)"
    class="" @click.stop="us.commandOpen = true">
    <icon
      name="search"
      class="size-4 shrink-0 opacity-70 group-hover:opacity-100 dst" />

    <span class=" text-bc/70 text-left mt-px  font-medium tracking-tight  text-2 grow truncate ">
      <slot />
    </span>

    <span
      class="!text-3 font-medium  text-bc/60">
      {{ getDeviceKey() }} K
    </span>
  </button>
</template>