<script lang="ts" setup>
const quote = ref(null)
onMounted (async () => {
  quote.value = formattedQuote()
})
</script>

<template>
  <div class="flex items-center gap-8">
    <h1>
      Champions
    </h1>
    <p class="text-4 font-serif font-semibold w-full">
      {{ quote }}
    </p>
  </div>
</template>