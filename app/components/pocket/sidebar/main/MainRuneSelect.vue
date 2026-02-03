<script lang="ts" setup>
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
const HeadingTip = resolveComponent('HeadingTip')
const pocket = computed(() => p)
const mainSet = computed(() =>
  pocket.value.runes.find(s => s.id === pocket.value._runes)
)

const open = ref(false)

const trigger = useTemplateRef<HTMLElement>('trigger')
</script>

<template>
  <Select v-model:model-value="pocket._runes" v-model:open="open">
    <slot :open />
    <LazySelectContent
      class="w-(--reka-select-trigger-width) min-w-54 p-0"
      :side
      :side-offset
      :align
      :reference="trigger"
      :align-offset
      position="popper"
    >
      <SelectGroup>
        <SelectLabel class="flex items-center justify-between">
          Main Runes

          <Button
            class="btn-square aspect-square *:opacity-60 hover:*:opacity-100"
            variant="ghost"
            size="sm"
            title="Clear main runes"
            @click="pocket._runes === ''"
          >
            <icon class="size-5 **:stroke-2" name="backspace" />
          </Button>
        </SelectLabel>
        <SelectItem
          v-for="set in pocket.runes"
          :key="set.id"
          class="h-14 p-0!"
          :value="set.id"
        >
          <KeystoneAndPath :set="set" x-class="size-8" k-class="scale-130" />
        </SelectItem>
      </SelectGroup>
    </LazySelectContent>
  </Select>
</template>
