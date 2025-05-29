<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col h-full w-screen max-w-screen relative overflow-hidden px-8 ">
    <ChampionFilters />

    <main class="overflow-y-auto grow relative h-full relative ">
      <slot />
    </main>
  </div>
</template>