<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    champId: number
    size?: number
  }>(),
  {
    size: 17,
  },
)
const id = ref(null)
const ds = useDataStore()
const champ = computed (() => {
  if (!id.value)
    return
  const a = ds.champions.find(c => c.id == id.value)
  return a
})
console.log('💠 - champ - champ:', champ)

onMounted (async () => {
  id.value = await props.champId
  nextTick()
})
</script>

<template>
  <div class="shadow-sm rounded-lg size-fit">
    <div v-tippy="{ content: champ.name, placement: 'top' }" class="overflow-hidden rounded-lg inset-shadow-rounded" :class="`size-${props.size}`">
      <!--
      <img
        :src="`/img/champion/${champ.name}.webp`"
        class=" scale-116 rounded-lg" :class="`size-${props.size}`" /> -->
    </div>
  </div>
</template>