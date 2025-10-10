<script lang="ts" setup>
</script>

<template>
  <Label class="flex items-center text-2 font-medium">
    <span>{{ is().filters.purchasable ? "Purchasable" : "All" }}</span>
    <Switch
      v-model:model-value="is().filters.purchasable"
      class="dst ml-2" />
  </Label>

  <Button
    variant="neutral"
    size="lg">
    Reset Filters
  </Button>
</template>
