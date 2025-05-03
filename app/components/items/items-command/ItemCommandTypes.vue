<script lang="ts" setup>
const is = useItemStore()
// TODO fix
</script>

<template>
  <p class="font-semibold tracking-tight mb-1.5 mt-4 pl-4">
    Search by Item Category
  </p>

  <div group class="flex flex-col  px-1.5" :appear="false">
    <!--     <label v-for="type in itemTypes" :key="type" class="w-full rounded-md hover:bg-accent capitalize py-1.5 pl-8 has-checked:hidden">
      <input v-model="is.pItemFilter.rank" type="radio" name="item-types" class="peer hidden" :value="type" @change="console.log(is.pItemFilter.rank)" />
      {{ type }}
    </label> -->
  </div>
</template>