<script lang="ts" setup>

const props = defineProps<{
container: any
}>()
const as = useAccountStore()
</script>

<template>
<Trinket size="mini" :container="props.container">
        <div class=" size-full place-items-center grid ">
    <img src="/img/crests/platinum.webp"  class="h-55 shrink-0 object-cover w-auto contrast-85 pointer-events-none drop-shadow-md drop-shadow-[#000]/40"/>
    </div>
  </Trinket>
</template>
