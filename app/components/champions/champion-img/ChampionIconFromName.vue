<script lang="ts" setup>
const props = defineProps<{
name: string
  class?: HTMLAttributes['class']
}>()

const ds = useDataStore()
const id = computed (() => {
const a = ds.champions.find(c => c.name == props.name)
return a.id
})
</script>

<template>
  <div class="size-fit shadow-sm drop-shadow-sm">
  <div class="" :class="cn('size-14 overflow-hidden rounded-lg', props.class)">
    <Image :image="`/img/champion/${id}.webp`" :alt="props.name"  class="scale-116 size-full"/>
  </div>
  </div>
</template>