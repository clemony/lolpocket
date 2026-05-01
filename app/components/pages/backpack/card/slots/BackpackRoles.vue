<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed(() => {
  return props.pocket
})

const positions = computed(() => {
  const a = (props.pocket.positions ?? []).filter(
    (r: string) => r !== "" && r !== null
  )
  const b = a.join(", ")
  return b.replace(",", " &")
})
</script>

<template>
  <p
    class="divider divider-start divider-neutral mt-0 mb-3 grow flex-nowrap text-nowrap after:opacity-40"
    :class="{ 'opacity-20': !positions.length }">
    <span class="group/position capitalize">
      {{ positions }}
    </span>
  </p>
</template>
