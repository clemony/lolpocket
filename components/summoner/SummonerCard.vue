<script lang="ts" setup>
const props = defineProps<{
summoner: any
}>()

const summoner = ref(props.summoner)
const summonerIcon = ref('/img/summoner-icons/space-yuumi.jpg')

</script>

<template>
 <div class="flex justify-start flex-col gap-2 rounded-xl bg-b2/40 border-b2 border">
    
              <div class=" grid place-items-center size-full" >
      <Avatar class="size-26 ring-1 ring-b3 rounded-full  shadow-md border border-neutral ">
        <AvatarImage

          :src="summonerIcon"
          v-if="summoner"
          :alt="summoner.gameName"
          class="size-full [&_img]:scale-115 rounded-full  inset-shadow-sm inset-shadow-black"
        />
        <AvatarFallback
          v-else
          class="rounded-full"
        >
          LP
        </AvatarFallback>
      </Avatar>
</div>

          <div class="justify-center items-center flex flex-col px-4 pb-5">

      <h1 class="tracking-tight font-serif !font-black dst">
        {{ summoner.gameName }}
      </h1>
      <p>#{{summoner.tagLine}}</p>
       <p class="mt-2">
        <span class="font-semibold">Lv. </span>
        <span class=" font-medium" >{{summoner.summonerLevel}}
          </span>
        </p>
      <p class="mt-2 dst">{{summoner.region}}</p>

          </div>
          </div>
</template>

<style scoped>

</style>