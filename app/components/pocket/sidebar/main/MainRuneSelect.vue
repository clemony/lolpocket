<script lang="ts" setup>
import { HeadingTip } from '#components'
import { SelectTrigger } from 'reka-ui'

const {
  side = 'bottom',
  sideOffset,
  align = 'start',
  class: className,
  pocket: p,
  type = 'card',
} = defineProps<{
  class?: HTMLAttributes['class']
  pocket: Pocket
  type?: 'card' | 'btn'
  side?: Side
  sideOffset?: number
  align?: Align
  alignOffset?: number
}>()

const pocket = computed(() => p)
const mainSet = computed(() =>
  pocket.value.runes.find(s => s.id === pocket.value.main?.runes)
)

const open = ref(false)

const trigger = useTemplateRef<HTMLElement>('trigger')
</script>

<template>
  <Select
    v-model:model-value="pocket.main.runes"
    v-model:open="open">
    <slot :open />
    <LazySelectContent
      :side
      :side-offset
      :align
      :reference="trigger"
      :align-offset
      position="popper"
      class="p-0 w-[var(--reka-select-trigger-width)]  min-w-54">
      <SelectGroup>
        <SelectLabel class="justify-between flex items-center">
          Main Runes

          <Button
            variant="ghost"
            size="xs"
            title="Clear main runes"
            class="aspect-square *:opacity-60 hover:*:opacity-100 btn-square"
            @click="pocket.main?.runes === ''">
            <icon
              name="backspace"
              class="size-5 **:stroke-2" />
          </Button>
        </SelectLabel>
        <SelectItem
          v-for="set in pocket.runes"
          :key="set.id"
          class="h-14 !p-0"
          :value="set.id">
          <KeystoneAndPath
            :set="set"
            x-class="size-8"
            k-class="scale-130" />
        </SelectItem>
      </SelectGroup>
    </LazySelectContent>
  </Select>
</template>
