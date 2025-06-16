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
  <Btn v-tippy="'New Pocket'" :class="cn('justify-start text-3 px-3.5 ', props.class)" @click="handleAddClick()">
    <icon name="add-sm" class="size-5.5 opacity-70 stroke-[1.6]" />

    Create New Pocket

    <Grow />

    <Shortcut>⇧P</Shortcut>
  </Btn>
</template>