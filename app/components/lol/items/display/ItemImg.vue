<script lang="ts" setup>
const { id, name } = defineProps<{
  name: string
  id: number
}>()
</script>

<template>
  <Image
    v-if="name !== ''"
    class="aspect-square size-full rounded-lg"
    :image="`https://ddragon.leagueoflegends.com/cdn/${patchIndex[0]}/img/items/${id}.png`"
    :alt="`${name} Image`"
  />
</template>
