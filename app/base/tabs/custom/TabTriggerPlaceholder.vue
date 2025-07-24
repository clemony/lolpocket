<script lang="ts" setup>
const props = defineProps<{
  store: any
  modelValue: string
  value: string
}>()

const tabStyle = computed (() => {
  return props.value == props.modelValue && props.store.returnValue.width == 0
})

const isInitialized = ref(false)

const parentEl = useParentElement()
const { isOutside } = useMouseInElement(parentEl)

const store = computed (() => {
  return props.store
})

watchEffect(() => {
  if (!isOutside.value && !isInitialized.value) {
    const indicator: HTMLDivElement = document.querySelector('.indicator')
    const { width } = useElementBounding(indicator)
    store.value.returnValue = { pos: indicator.offsetLeft, width }
    isInitialized.value = true
  }
})

function onHoverStart() {}
</script>

<template>
  <Motion
    :transition="{
      type: 'spring',
      stiffness: 300,
      damping: 20,
    }"
    class="indicator px-5 py-1 !text-2 font-medium select-none relative pointer-events-none rounded-field z-0 h-10 scale-90 items-center w-fit justify-center whitespace-nowrap  opacity-100  rounded-field  !transition-all !duration-700 "
    :class="{ ' opacity-0  ring-transparent border-transparent ': props.modelValue != props.value, 'inset-shadow-sm inset-shadow-b3/30 border border-b3/60 bg-b2 btn  ': props.modelValue == props.value && props.store.returnValue.width != 0, 'border border-b3  drop-shadow-xxs btn ring-1 ring-b3/30 shadow-xs !bg-b1  drop-shadow-xs  text-bc': tabStyle }"
    @hover-start="(event) => console.log('hover start', event)">
    <span class="opacity-0">
      {{ props.value }}
    </span>
  </Motion>
</template>