<script lang="ts" setup>
const ds = useDataStore()
const champions = [
  {
    name: 'Yuumi',
    apiname: 'Yuumi',
    mastery: '1,955,999',
    level: 10,
  },
  {
    name: 'Seraphine',
    apiname: 'Seraphine',
    mastery: '345,000',
    level: 8,
  },
  {
    name: 'Rengar',
    apiname: 'Rengar',

    mastery: '234,555',
    level: 4,
  },
]
</script>

<template>
  <ModuleTemplate title="Top Champion Mastery">
    <div class="grid grid-cols-3 p-i-c pt-10">
      <div v-for="(champion) in champions" :key="champion.name" class="flex flex-col items-center justify-center h-full px-4">
        <div class="rounded-full shadow-sm shadow-black/20 border border-b3">
          <div class="size-22 rounded-full overflow-hidden bg-neutral">
            <img :src="`/img/champion/${champion.apiname}.webp`" class="size-22 rounded-full scale-115" />
          </div>
        </div>

        <img :src="`/img/mastery/mastery-${champion.level}.webp`" class="size-20 drop-shadow-md" />
        <p class="text-5 font-semibold f-tt dst">
          {{ champion.name }}
        </p>
        <p class="pt-2 font-medium">
          Level {{ champion.level }}
        </p>
        <p class="">
          {{ champion.mastery }}
        </p>
      </div>
    </div>
  </ModuleTemplate>
</template>

<style scoped>

</style>