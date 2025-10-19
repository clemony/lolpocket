<script lang="ts" setup>
const { class: className, pocket: p, size } = defineProps<{
  class?: HTMLAttributes['class']
  pocket: Pocket
  size: string
}>()

const pocket = computed(() => p)
</script>

<template>
  <Label
    v-if="pocket"
    v-tippy="{ content: pocket.location?.pinned === true ? 'Unpin' : 'Pin', theme: 'default', placement: 'bottom' }"
    variant="ghost"
    base="btn"
    :size
    hover="neutral"
    :class="cn(' pointer-events-auto !size-7 rounded-full group/pin *:mt-px *:size-4.25  *:absolute', className)">
    <input
      v-model="pocket.location.pinned"
      type="checkbox"
      class="peer hidden" />

    <icon
      name="pin"
      class="group-hover/pin:opacity-0 peer-checked:opacity-0 *:stroke-[1.8]" />

    <icon
      name="pin-solid"
      class="opacity-0 peer-checked:opacity-90 group-hover/pin:not-checked:opacity-100 group-hover/pin:not-checked:text-bc/50" />

    <icon
      name="iconoir:pin-slash-solid"
      class="opacity-0 group-hover/pin:peer-checked:opacity-80 peer-checked:text-bc" />
  </Label>
</template>
