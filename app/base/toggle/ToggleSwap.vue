<script lang="ts" setup>
import type { ToggleVariants } from '@variants'
import type { ToggleProps } from 'reka-ui'
import { toggleVariants } from '@variants'

interface ToggleItem {
  icon: string
  text: string
  variant: ToggleVariants['variant']
}

const props = defineProps<ToggleProps & {
  items?: ToggleItem[]
  class?: HTMLAttributes['class']
  size?: any
  base?: any
  shape?: any
  hover?: any
  value: boolean
}>()

const emit = defineEmits(['update:model-value'])
const buttonRef = ref<HTMLButtonElement>()
const modelValue = ref<boolean>(false)

const currentVariant = computed(() => {
  return modelValue.value ? props.items[1] : props.items[0]
})

const oppositeVariant = computed(() => {
  return modelValue.value ? props.items[0] : props.items[1]
})
console.log('🌱 - currentVariant:', currentVariant)

watch(() => currentVariant.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})

onMounted(() => {
  modelValue.value = props.value
})
</script>

<template>
  <Toggle
    ref="buttonRef"
    v-model:model-value="modelValue"
    as="button"
    :class="cn(
      toggleVariants({ variant: currentVariant?.variant, size, base, hover, shape }),
      'group relative w-max cursor-pointer hover:data-[state=on]:**:text-bc data-[state=on]:bg-neutral/90 overflow-hidden rounded-full border px-3 !py-0 text-center',
      props.class,
    )"
    @update:model-value="emit('update:model-value', modelValue)">
    <div class="flex flex-nowrap size-full relative items-center gap-2">
      <div
        :class="
          cn(
            toggleVariants({ variant: oppositeVariant?.variant }),
            'size-2 !p-0 shrink-0  scale-100  rounded-full shadow-none drop-shadow-xs transition-all duration-350 group-hover:scale-[110] absolute -left-4 -translate-x-4',
          )
        ">
      </div>

      <span
        :class="cn(
          '!inline-block items-center flex gap-1 flex-nowrap text-nowrap whitespace-nowrap mx-auto transition-all duration-350 group-hover:translate-x-12 group-hover:opacity-0',
        )">
        <icon
          :name="currentVariant?.icon"
          class="!size-3.5 inline align-[-1.5px]" />
        {{ currentVariant?.text }}
      </span>
    </div>

    <div
      :class="
        cn(
          toggleVariants({ variant: oppositeVariant?.variant }),
          'absolute top-0 z-10 flex size-full translate-x-24 items-center justify-center gap-2 opacity-0 transition-all duration-350 group-hover:-translate-x-0 group-hover:opacity-100',
        )
      ">
      <span class="whitespace-nowrap flex items-center gap-1">
        <icon
          :name="oppositeVariant?.icon"
          class="!size-3.5 inline align-[-1.5px]" />
        {{ oppositeVariant?.text }}
      </span>
    </div>
  </Toggle>
</template>