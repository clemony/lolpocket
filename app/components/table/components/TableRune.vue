<script lang="ts" setup>
const props = defineProps<{
  params: any
}>()

const p = ref(props.params)

// console.log('💠 - params:', props.params)
</script>

<template>
  d
<!--   <div  v-if="props.params.value" v-tippy="rune.keystone.name" class="ti-container">
    <div class="ti-wrapper">
      <img :src="`/img/runes/${rune.path.name}/${rune.keystone.name.replace(' ', '')}.webp`" class="size-full " />
    </div>
  </div>

  <div v-else-if="props.params.data != undefined && p.colDef.field == 'Path'" v-tippy="rune.name" class="ti-container">
    <div class="ti-wrapper">
      <img :src="`/img/runes/${rune.name}.webp`" class="size-full " />
    </div>
  </div> -->
</template>

<style scoped>

</style>