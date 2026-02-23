<script setup lang="ts">
import { Presence } from "reka-ui";
import { regionIndex } from "#shared/constants/misc/region-index"

const {
  class: className,
  present,
  region: r,
} = defineProps<{
  region: keyof typeof regionIndex
  class?: HTMLAttributes["class"]
  present?: boolean
}>()
const emit = defineEmits(["update:region"])
const region = ref("")

onMounted(() => (region.value = r))
watch(
  () => r,
  (newVal) => (region.value = newVal)
)
</script>

<template>
  <LazyUPopover @close-auto-focus.prevent @click.stop>
    <UButton class="grid items-center" no-arrow as-child>
      <UButton
        class="z-1 flex w-14 flex-nowrap items-center text-sm! tracking-[0.5px] text-nowrap text-pc/60 lowercase *:first:text-pc/60"
        variant="ghost"
        size="sm">
        <span class="relative -mr-1 grid place-items-center">
          <icon class="mt-px size-3.25!" name="at" />
        </span>
        {{ region || "" }}
      </UButton>
    </UButton>
    <template #content>
      <LazyRegionPopoverContent @update:model-value="(e) => (region = e)" />
    </template>
  </LazyUPopover>
</template>
