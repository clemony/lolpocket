<script lang="ts" setup>
import { championPositions } from '#shared/appdata'
import { SelectTrigger } from 'reka-ui'

const {
  side,
  sideOffset,
  align,
  alignOffset,
  class: className,
  modelValue: mv,
  size = 'lg',
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
        class="opacity-50 size-4 absolute group-hover/s:!text-bc  group-hover/s:opacity-100  right-1.5" />
    </SelectTrigger>
    <LazySelectContent
      :side="side"
      :side-offset="sideOffset"
      :align="align"
      :align-offset="alignOffset"
      position="popper"
      class="!w-[var(--reka-select-trigger-width)] top-[calc(var(--reka-select-trigger-height)+2px)]">
      <SelectGroup>
        <SelectLabel>Select main position</SelectLabel>
        <SelectItem
          v-for="position in championPositions"
          :key="position.name"
          :value="position.name">
<<<<<<< HEAD
          <PositionBadge
            :position="position.name"
            active />
=======
          <PositionBadge :position="position.name" />
>>>>>>> refs/remotes/origin/main
        </SelectItem>
      </SelectGroup>
    </LazySelectContent>
  </Select>
</template>
