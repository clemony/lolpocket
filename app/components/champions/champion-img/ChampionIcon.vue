<script setup lang="ts">
const { id, alt, class: className} = defineProps<{
    id: number
    alt: string
    class?: HTMLAttributes['class']
  }>()


</script>

<template>
  <label :class="cn('overflow-hidden shadow-sm drop-shadow-sm', className)">
<Img  :img="`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${id}.png`" :alt="alt" class="scale-118 size-full"/>
<slot  />
</label>
</template>
