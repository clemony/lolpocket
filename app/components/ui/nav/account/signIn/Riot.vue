<script setup lang="ts">
</script>

<template>


  <button
    v-tippy="'Sign in with Riot ID'"
    alt="Sign in with Riot ID" class="btn hover:!btn-neutral hover:bg-neutral/90 w-full group h-18 relative overflow-hidden   " >

<div class="size-full relative grid place-items-center pointer-events-none" >
<hicon name="riot" :class="cn('absolute dst transition-colors duration-200 size-7.5 group-hover:!text-nc text-bc/80  ')" />
</div>

</button>
</template>

<style scoped></style>
