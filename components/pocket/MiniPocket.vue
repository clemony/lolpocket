<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()
</script>

<template>
  <Card class="w-full">
    <CardHeader class="px-6">
      <CardTitle class="flex justify-between w-full flex-nowrap">
        <h2 class="grow w-full text-nowrap">
          {{ pocket.name }}
        </h2>

        <NuxtLink
          :to="`/pocket/${pocket.key}`"
          class="justify-self-end text-3 font-normal flex gap-3 items-center grow"
        >
          <icon name="iconamoon:edit-light" />
          Edit
        </NuxtLink>
      </CardTitle>
    </CardHeader>

    <CardContent class="px-6">
      <div class="flex gap-2 h-21 items-center p-1">
        <Champion :champion="pocket.champions.starred || pocket.champions.champions[0]" class="size-20" />

        <div class="flex flex-col h-full justify-between">
          <div v-for="spell in pocket.spells" :key="spell.name" class="btn btn-md p-0 aspect-square">
            <img :src="`/img/spells/${spell.name}.webp`" class="rounded-md overflow-hidden" />
          </div>
        </div>
      </div>

      <div v-if="pocket.items.starred || pocket.items.sets[0]" class="flex gap-2">
        <div v-for="item in pocket.items.starred || pocket.items.sets[0]" :key="item.name">
          <img :src="item.img" />
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<style scoped>

</style>