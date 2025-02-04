<script lang="ts" setup>
const ps = usePocketStore()
</script>

<template>
  <ul class="list bg-base-100 rounded-box shadow-md min-w-150">
    <li class="p-4 pb-2  opacity-60 tracking-wide font-medium text-3">
      Best Recent Builds
    </li>

    <li v-for="(pocket, index) in ps.pockets" :key="pocket.key" class="list-row items-center">
      <div class="text-[2.3rem] font-thin opacity-30 tabular-nums">
        0{{ index }}
      </div>
      <div>
        <PocketIcon class="size-15 rounded-lg **:rounded-lg" :image="pocket.icon" />
      </div>
      <div class="list-col-grow text-4 ">
        <div class="capitalize  mb-1 tracking-tight">
          {{ pocket.name }}
        </div>
        <div class="text-xs uppercase  opacity-60">
          <template v-for="(champion, i) in pocket.champions.champions" :key="champion.name">
            <span v-if="i <= 2" class="text-2 font-medium">{{ champion.name }}<span v-if="i != 2 && i != pocket.champions.champions.length">, </span></span>
          </template>
        </div>
      </div>
      <button class="btn btn-square btn-ghost">
        <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
      </button>
    </li>
  </ul>
</template>

<style scoped>

</style>