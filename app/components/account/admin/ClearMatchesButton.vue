<script setup lang="ts">
async function clear() {
  const { clearMatches } = useMatchDexie()
  await clearMatches()
}
</script>

<template>
  <button
    class="btn"
    @click="clear()">
    <icon name="erase" />
    Clear Match History
  </button>
</template>