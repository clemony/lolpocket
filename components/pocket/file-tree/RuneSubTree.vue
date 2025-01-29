<script lang="ts" setup>
const props = defineProps<{
  folder: Folder
  pocket: pocket
}>()

const champSub = ref()
const eventAt = ref()
</script>

<template>
  <li class="">
    <details
      :key="pocket.key"

      @toggle="
        /* prettier-ignore */
        champSub = $event.newState;
        eventAt = pocket.key
      "
    >
      <summary class="after:hidden flex">
        <span class="grow">Runes</span>

        <PlusMinusExpand
          :key="pocket.key"
          :check="champSub == 'open' && eventAt == pocket.key ? true : false"
        />
      </summary>
      <ul>
        <li v-for="champion in pocket.champions.champions" :key="champion.apiname">
          <a>
            <div class="size-6 overflow-hidden rounded-full">
              <img :src="`/img/champion/${champion.apiname}.webp`" class="size-full scale-110" /></div>
            {{ champion.name }}
          </a>
        </li>
      </ul>
    </details>
  </li>
</template>

<style scoped></style>
