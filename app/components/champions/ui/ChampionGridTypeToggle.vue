<script lang="ts" setup>

</script>

<template>
  <ToggleGroup
    v-model:model-value="cs().championGridType"
    type="single">
    <ToggleGroupItem value="calculated">
      Level
    </ToggleGroupItem>

    <ToggleGroupItem value="base">
      Base
    </ToggleGroupItem>

    <ToggleGroupItem value="growth">
      Growth
    </ToggleGroupItem>
  </ToggleGroup>
</template>
