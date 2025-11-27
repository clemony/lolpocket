<script lang="ts" setup>

</script>

<template>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Select Patch" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem
        v-for="patch in patchIndex"
        :key="patch"
        :value="patch">
        {{ patch }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>