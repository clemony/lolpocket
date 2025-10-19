<script lang="ts" setup>
import { HeadingTip } from '#components'
import { championPositions } from '#shared/appdata'
import { SelectTrigger, } from 'reka-ui'

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

const emit = defineEmits(['update:select'])
const pocket = computed(() => p)
const select = ref('All')

const color = computed(
  () => championPositions.find(p => p.name === pocket?.value?.main?.role).twColor
).value

const gradientClass = computed (() => `bg-${color} bg-clip-text `)
const open = ref(false)

const trigger = useTemplateRef<HTMLElement>('trigger')
</script>

<template>
  <Select
    v-model:model-value="pocket.main.role"
    v-model:open="open">
    <SelectTrigger as-child>
      <Button
        variant="ghost"
        class="overflow-hidden relative size-20  grid place-items-center   **:pointer-events-none ">
        <div
          class="!size-12 grid place-items-center ">
          <component
            :is="pocket?.main?.role ? `i-lol-${pocket?.main?.role}` : 'all'"
            :style="{
              color: championPositions.find(p => p.name === pocket?.main?.role).color,
            }"
            class="!size-7  absolute dst z-2" />
        </div><!--
        <icon
          name="select"
          class=" size-4 absolute right-1.5" /> -->
      </Button>
    </SelectTrigger>
    <LazySelectContent
      :side
      :side-offset
      :align
      :reference="trigger"
      :align-offset
      position="popper"
      class="p-0 w-[var(--reka-select-trigger-width)]  min-w-54">
      <div class="flex gap-3 p-2 items-center">
        <component
          :is="pocket?.main?.role ? `i-lol-${pocket?.main?.role}` : 'all'"
          :style="{
            color: championPositions.find(p => p.name === pocket?.main?.role).color,
          }"
          class="!size-6 dst " />
        <h3
          v-memo="[pocket.main.role]"
          :class="cn('truncate', {
            'dst': pocket.main.role,
            '!font-normal  opacity-10': !pocket.main.role,
          })">
          {{ pocket.main.role || "Role" }}
        </h3>
      </div>
      <SelectSeparator class="mb-2" />
      <SelectGroup>
        <SelectItem
          v-for="position in championPositions"
          :key="position.name"
          :value="position.name">
          <PositionBadge :position="position.name" />
        </SelectItem>
      </SelectGroup>
    </LazySelectContent>
  </Select>
</template>
