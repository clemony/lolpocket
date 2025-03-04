<script lang="ts" setup>

</script>

<template>

  <DropdownMenuContent>
        <button v-tippy="'Reset all'"  class="btn btn-sm btn-ghost" @click="is.filterItemTypes = ''">
          <icon name="reset" class="!size-4 shrink-0 ml-2 " />
        </button>
  
      <DropdownMenuRadioGroup v-model:model-value="is.filterItemTypes">
        <MenubarRadioItem v-for="type in itemTypes" :key="type" :value="type">
          {{ type }}
        </MenubarRadioItem>
      </DropdownMenuRadioGroup>
      </DropdownMenuContent>

</template>

<style scoped>

</style>