<script lang="ts" setup>
const props = defineProps<{
  result: any
  modelValue: string
}>()

const emit = defineEmits(['update:selectedIcon'])
const selectIcon = ref()
function handleChange(image) {
  console.log('💠 - handleChange - image:', image)
  emit('update:selectedIcon', selectIcon.value)
}

onMounted (() => {
  selectIcon.value = props.modelValue
})
</script>

<template>
  <label
    alt="Champion Image"
    :style="{
      backgroundImage: `url(${result.item})`,
      backgroundSize: result.item == '/img/champion/centered/1.webp' ? '100%' : '450%',
      backgroundPosition: 'center 20%',
      height: '64px',
      width: '64px' }" class="shadow-warm size-full has-checked:bg-b2/60 border-b2   shrink-0  overflow-hidden rounded-lg border has-checked:ring-1 has-checked:ring-offset-2 has-checked:ring-neutral has-checked:ring-offset-b1 hover:ring-1"
  >

    <input
      v-model="selectIcon"
      type="radio"
      name="iconPicker"
      :value="result.item"
      class="peer hidden"
      @change="handleChange(result.item)"
    />
  </label>
</template>

<style scoped>

</style>
