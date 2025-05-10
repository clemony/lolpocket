<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
  modelValue: string
  set: RuneSet
  type?: number
}>()

const emit = defineEmits(['update:path'])
const ds = useDataStore()

// Ensure model stays in sync
const model = ref(props.modelValue)
watch(() => props.modelValue, (newVal) => {
  model.value = newVal
})

const set = ref(props.set)

watch(
  () => props.set,
  (newVal) => {
    if (newVal) {
      set.value = newVal
    }
  },
)
const pathNames = computed(() => ds.paths.map(p => p.name))

const filteredPaths = computed(() => {
  return props.type == 2 ? pathNames.value.filter(p => p != set.value.primary.path) : pathNames.value
})

watch(
  () => props.set.primary.path,
  (newVal) => {
    console.log('💠 - Primary path changed:', newVal)
  },
)
onMounted(() => {
  if (props.modelValue) {
    model.value = props.modelValue
  }
})/*
      :style="{
        background: modelValue == set.primary.path && path == set.primary.path ? `linear-gradient(110deg, transparent, var(--color-${set.primary.path.toLowerCase()}))` : modelValue == set.secondary.path && path == set.secondary.path ? `linear-gradient(110deg, transparent, var(--color-${set.secondary.path.toLowerCase()}))` : '' }" */
</script>

<template>
  <div class=" h-18 w-114 justify-evenly   overflow-hidden rounded-xl py-3   flex items-center ">
    <label
      v-for="path in filteredPaths"
      :key="path"
      v-tippy="path.replace(/^([a-z])/, '\U$1')"
      class=" aspect-square size-16  rounded-full "
      :class="{
        'shadow-warm-2 drop-shadow-xs    p-0 duration-500': path == model, 'hidden': path == 'empty',
      }"

    >
      <div
        class="size-full place-items-center grid rounded-full"
        :class="{
          'bg-gradient-to-br from-b1 to-b1/80   p-0 duration-500': path == model, 'hidden': path == 'empty',
        }"
      >
        <input
          v-model="model"
          type="radio"
          :value="path"
          class="hidden"
          :name="`${path}-selected-path`"
          @change="emit('update:path', model)"
        />
        <img
          :src="`/img/runes/${path}.webp`"
          :alt="`${path} icon`"
          class="z-10 h-9 w-auto brightness-90 grayscale transition-all duration-300 dst shrink-0"
          :class="{
            'brightness-100 grayscale-0': path == model,
          }"
        />

      </div>
    </label>
  </div>
</template>

<style scoped>

</style>