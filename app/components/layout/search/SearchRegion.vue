<script setup lang="ts">
import { Presence } from 'reka-ui'

const {
  class: className,
  present,
  region: r,
} = defineProps<{
  region: keyof typeof regionIndex
  class?: HTMLAttributes['class']
  present?: boolean
}>()
const emit = defineEmits(['update:region'])
const region = ref('')

onMounted(() => (region.value = r))
watch(
  () => r,
  newVal => (region.value = newVal)
)
</script>

<template>
  <Presence class="opacity-0 data-[present=true]:opacity-100" :present>
    <LazyPopover @close-auto-focus.prevent @click.stop>
      <PopoverTrigger class="grid items-center" no-arrow as-child>
        <Button
          class="text-bc/60 *:first:text-bc/60 z-1 flex w-14 flex-nowrap items-center text-sm! tracking-[0.5px] text-nowrap lowercase"
          variant="ghost"
          size="sm"
        >
          <span class="relative -mr-1 grid place-items-center">
            <icon class="mt-px size-3.25!" name="at" />
          </span>
          {{ region || "" }}
        </Button>
      </PopoverTrigger>
      <LazyRegionPopoverContent @update:model-value="(e) => (region = e)" />
    </LazyPopover>
  </Presence>
</template>
