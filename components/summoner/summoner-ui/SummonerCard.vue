<script lang="ts" setup>
const props = defineProps<{
  summoner: any
  class?: HTMLAttributes['class']
}>()

const as = useAccountStore()

const summoner = ref(props.summoner)
</script>

<template>
  <div :class="cn('flex items-center gap-4 mt-2', props.class)">
    <div class="size-15.5  rounded-full shadow-sm drop-shadow-sm">
      <ProfileSummonerIcon
        class="size-full  " />
    </div>

    <div class="flex-col h-full  justify-center -mt-2  flex gap-1 flex-col pr-4  ">
      <div class="flex items-end gap-4 ">
        <SummonerName class="tracking-tight font-serif dst  !font-bold text-7 truncate" />
        <span class="pb-px dst">lv.
        <SummonerLevel class="align-bottom" /></span>
      </div>
      <p class="flex gap-3 tracking-tight  items-center">
        <SummonerTag class=" dst  truncate" />
        <span>#<SummonerRegion class="ml-px  dst lowercase" /></span>
      </p>
    </div>
  </div>
</template>
