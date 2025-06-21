<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <label>
    <input v-model="is.priceModel" type="radio" name="price" class="radio checked:text-nc radio-sm border-nc !bg-transparent outline outline-nc" :value="2" />

    <icon name="tabler:tag" class="!shrink-0 !size-5 dst -scale-x-100" />

    <icon name="arrow-up" class="!shrink-0 dst !size-6 0 -mx-2 -scale-y-100" />
  </label>
</template>