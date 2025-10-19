<script setup lang="ts">
import type { regionIndex } from '#shared/appdata'
import { Presence } from 'reka-ui'

const { class: className, present, region: r } = defineProps<{
  region: keyof typeof regionIndex
  class?: HTMLAttributes['class']
  present?: boolean
}>()
const emit = defineEmits(['update:region'])
const region = ref('')

onMounted(() => region.value = r)
watch(() => r, newVal => region.value = newVal)
</script>

<template>
  <Presence
    :present
    class="data-[present=true]:opacity-100 opacity-0">
    <LazyPopover

      @close-auto-focus.prevent
      @click.stop>
      <PopoverTrigger
        no-arrow
        as-child
        class="items-center grid">
        <Button
          variant="ghost"
          size="sm"
          class="  lowercase items-center w-14  tracking-[0.5px]  text-bc/60 *:first:text-bc/60 !text-2 flex-nowrap  flex text-nowrap   z-1">
          <span class="place-items-center grid relative -mr-1">
            <icon
              name="at"
              class="!size-3.25 mt-px" />
          </span>
          {{ region || '' }}
        </Button>
      </PopoverTrigger>
      <LazyRegionPopoverContent @update:model-value="e => region = e" />
    </LazyPopover>
  </Presence>
</template>