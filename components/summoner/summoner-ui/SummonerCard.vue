<script lang="ts" setup>
const props = defineProps<{
  summoner: any
    class?: HTMLAttributes['class']
}>()

const as = useAccountStore()

const summoner = ref(props.summoner)
</script>

<template>
  <div  :class="cn('flex items-center gap-2 mt-2 pl-5 pr-3', props.class)">
      <div class="size-13.5  rounded-xl shadow-md drop-shadow-sm">
        <SummonerIcon
          class="size-full [&_img]:scale-115 rounded-xl **:rounded-xl  " />

      </div>

    <div class="flex-col h-14  justify-between -mt-2.5 flex gap-2 flex-col px-4  ">
      <div class="flex items-end gap-2">
      <SummonerName class="tracking-tight font-serif text-shadow-xs !font-black dst text-6 truncate" />
      <SummonerTag class="pb-0.25 text-4 font-medium tracking-tight truncate" />
      </div>
      <p class="flex gap-1  items-end">
        <span class="font-semibold">Lv. </span>
        <SummonerLevel class=" font-medium align-bottom"  />
      <SummonerRegion class=" dst lowercase ml-3 "  />
      </p>
    </div>
  </div>
</template>
