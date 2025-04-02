<script lang="ts" setup>
const props = defineProps<{
  result: any
  modelValue: string
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['update:selectedIcon'])
const selectIcon = ref()
function handleChange(image) {
  console.log('💠 - handleChange - image:', image)
  emit('update:selectedIcon', selectIcon.value)
}

const img = useImage()

onMounted (() => {
  selectIcon.value = props.modelValue
})
</script>

<template>
  <label
    alt="Champion Image"
    :style="{
      backgroundImage: `url(${result.item})`,
      backgroundSize: result.item == img('/img/lp/192.webp') ? '100%' : '450%',
      backgroundPosition: 'center 20%' }" class=""
    :class="cn('shadow-warm size-full has-checked:bg-b2/60 border-b2   shrink-0  overflow-hidden rounded-lg border has-checked:ring-1 has-checked:ring-offset-2 has-checked:ring-neutral has-checked:ring-offset-b1 hover:ring-1', props.class)">

    <input
      v-model="selectIcon"
      type="radio"
      name="iconPicker"
      :value="result.item"
      class="peer hidden"
      @change="handleChange(result.item)" />
  </label>
</template>

<style scoped>

</style>
