<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
/*
const emit = defineEmits(['update:modelValue']) */


  const ps = usePocketStore()
function handleAddClick() {
  ps.newPocketOpen = true
/*   emit('update:modelValue') */
}


const keys = useMagicKeys()

whenever(keys.shift_p, () => {
  ps.newPocketOpen = true
})
</script>

<template>
  <NavBtn v-tippy="'New Pocket'"  @click="handleAddClick()" :class="cn('justify-start px-3.5 ', props.class)">
    <icon name="add-sm" class="size-5.5opacity-70 stroke-[1.6]" />

    Create New Pocket

<Grow  />

        <Badge>⇧P</Badge>
  </NavBtn>
</template>