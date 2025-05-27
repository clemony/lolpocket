<script lang="ts" setup>
</script>

<template>
  <div class="flex size-full oveflow-hidden">
    <menu class="overflow-hidden">
      <ItemFilterSidebar />
    </menu>
    <main class="overflow-y-auto grow relative  border-l border-l-b3/80">
      <slot />
    </main>
  </div>
</template>