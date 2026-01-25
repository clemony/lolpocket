<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed(() => {
  return props.pocket
})

const roles = computed(() => {
  const a = props.pocket.roles.filter(r => r !== '' && r !== null)
  const b = a.join(', ')
  return b.replace(/,/, ' &')
})
</script>

<template>
  <p
    class="
      divider mt-0 mb-3 divider-start grow flex-nowrap divider-neutral
      text-nowrap after:opacity-40
    "
    :class="{ 'opacity-20': !roles.length }"
  >
    <span class="group/role capitalize">
      {{ roles }}
    </span>
  </p>
</template>
