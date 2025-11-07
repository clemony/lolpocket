<script lang="ts" setup>
import { SelectTrigger } from 'reka-ui'
import { championPositions } from '~~/shared/references'

const {
  side,
  sideOffset,
  align,
  alignOffset,
  class: className,
  modelValue: mv,
  size = '12',
  variant = 'input'
} = defineProps<{
  class?: HTMLAttributes['class']
  modelValue: string | null
  side?: Side
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
  sideOffset?: number
  align?: Align
  alignOffset?: number
}>()

const emit = defineEmits(['update:select'])
const currentValue = shallowRef<string>(null)

watch(() => mv, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
  if (newVal)
    currentValue.value = mv
})
onMounted(() => {
  currentValue.value ? currentValue.value = mv : currentValue.value = 'All'
})
</script>

<template>
  <Select
    v-model:model-value="currentValue"
    @update:model-value="emit('update:select', currentValue)">
    <SelectTrigger
      :class="
        cn(buttonVariants({ size, variant, hover: 'input' }),
           'justify-start relative w-44 hover:ring hover:ring-bc/50 transition-all duration-200 fx-0 inset-shadow-xs group/s',
           className,
        )
      "
      :position="currentValue">
      <component
        :is="`i-lol-${currentValue}`"
        :class="cn('!size-4.5 !text-bc  dst shrink-0')" />

      <SelectValue
        placeholder="all" />
      <icon
        name="select"
        class="group-hover/s:!text-bc absolute right-1.5 size-4  opacity-50  group-hover/s:opacity-100" />
    </SelectTrigger>
    <LazySelectContent
      :side="side"
      :side-offset="sideOffset"
      :align="align"
      :align-offset="alignOffset"
      position="popper"
      class="top-[calc(var(--reka-select-trigger-height)+2px)] !w-[var(--reka-select-trigger-width)]">
      <SelectGroup>
        <SelectLabel>Select main position</SelectLabel>
        <SelectItem
          v-for="position in championPositions"
          :key="position.name"
          :value="position.name">
          <PositionBadge
            :position="position.name"
            active />
        </SelectItem>
      </SelectGroup>
    </LazySelectContent>
  </Select>
</template>
