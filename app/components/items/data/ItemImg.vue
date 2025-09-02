<script lang="ts" setup>
const { name, id } = defineProps<{
  name: string
  id: number
}>()

const ds = useDataStore()
</script>

<template>
  <Image
    v-if="name != ''"
    :image="`https://ddragon.leagueoflegends.com/cdn/${ds.currentPatch}/img/items/${id}.png`"
    :alt="`${name} Image`"
    class="aspect-square size-full rounded-lg" />
</template>