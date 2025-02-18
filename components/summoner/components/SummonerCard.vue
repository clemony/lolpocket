<script lang="ts" setup>
const props = defineProps<{
  summoner: any
}>()

const as = useAccountStore()

const summoner = ref(props.summoner)
</script>

<template>
  <div class="flex shadow-black/4 justify-start flex-col gap-2 rounded-xl bg-b2/40 border-b3/50 border shadow-md">
    <div class=" grid place-items-center size-full">
      <Avatar class="size-30  rounded-full  shadow-md  ">
        <AvatarImage

          v-if="summoner.gameName && as.userAccount.session"
          :src="`https://ddragon.leagueoflegends.com/cdn/15.2.1/img/profileicon/${summoner.profileIconId}.png`"
          :alt="summoner.gameName"
          class="size-full [&_img]:scale-115 rounded-full  inset-shadow-sm inset-shadow-black/90"
        />
        <AvatarFallback
          v-else
          class="rounded-full grid place-items-center text-nc text-7 font-semibold"
        >
          LP
        </AvatarFallback>
      </Avatar>
    </div>

    <div class="justify-center items-center flex flex-col px-4 pb-9">
      <h1 class="tracking-tight font-serif !font-black dst">
        {{ summoner.gameName != 'Summoner' ? summoner.gameName : summoner.name != 'Summoner' ? summoner.name : 'Summoner' }}
      </h1>
      <p>#{{ summoner.tagLine }}</p>
      <p class="mt-2">
        <span class="font-semibold">Lv. </span>
        <span class=" font-medium">{{ summoner.summonerLevel }}
        </span>
      </p>
      <p class="mt-2 dst">
        {{ summoner.region }}
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>