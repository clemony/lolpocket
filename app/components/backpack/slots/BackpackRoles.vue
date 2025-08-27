<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed (() => {
  return props.pocket
})

const roles = computed (() => {
  const a = props.pocket.roles.filter(r => r != '' && r != null)
  const b = a.join(', ')
  return b.replace(/,/, ' &')
})
</script>

<template>
  <p
    class="divider divider-start text-nowrap flex-nowrap mt-0 mb-3 dividerneutral after:opacity-40 grow"
    :class="{ 'opacity-20': !roles.length }">
    <span class="group/role capitalize">
      {{ roles }}
    </span>
  </p>
</template>