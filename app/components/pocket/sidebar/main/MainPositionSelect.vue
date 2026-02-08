<script lang="ts" setup>
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

const emit = defineEmits(['update:select'])

const HeadingTip = resolveComponent('HeadingTip')

const pocket = computed(() => p)
const select = ref('All')

const color = computed(
  () => mapPositions.find(p => p.name === pocket?.value?._role).twColor
).value

const gradientClass = computed(() => `bg-${color} bg-clip-text `)
const open = ref(false)

const trigger = useTemplateRef<HTMLElement>('trigger')
</script>

<template>
  <Select
    v-model:model-value="pocket._role"
    v-model:open="open">
    <SelectTrigger as-child>
      <Button
        class="relative grid size-20 place-items-center overflow-hidden **:pointer-events-none"
        variant="ghost">
        <div class="grid size-12! place-items-center">
          <component
            :is="pocket?._role ? `i-lol-${pocket?._role}` : 'all'"
            class="absolute z-2 size-7! dst"
            :style="{
              color: mapPositions.find((p) => p.name === pocket?._role)
                .color,
            }" />
        </div>
        <!--
        <icon
          name="up-down"
          class=" size-4 absolute right-1.5" /> -->
      </Button>
    </SelectTrigger>
    <LazySelectContent
      class="w-(--reka-select-trigger-width) min-w-54 p-0"
      :side
      :side-offset
      :align
      :reference="trigger"
      :align-offset
      position="popper">
      <div class="flex items-center gap-3 p-2">
        <component
          :is="pocket?._role ? `i-lol-${pocket?._role}` : 'all'"
          class="size-6! dst"
          :style="{
            color: mapPositions.find((p) => p.name === pocket?._role)
              .color,
          }" />
        <h3
          v-memo="[pocket._role]"
          :class="
            cn('truncate', {
              'dst': pocket._role,
              'font-normal! opacity-10': !pocket._role,
            })
          ">
          {{ pocket._role || "Role" }}
        </h3>
      </div>
      <SelectSeparator class="mb-2" />
      <SelectGroup>
        <SelectItem
          v-for="position in mapPositions"
          :key="position.name"
          :value="position.name">
          <PositionBadge :position="position.name" />
        </SelectItem>
      </SelectGroup>
    </LazySelectContent>
  </Select>
</template>
