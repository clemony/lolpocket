<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const as = useAccountStore()

const summoner = computed(() => {
  return as.userAccount ? as.userAccount : defaultUser
})

//wtf
</script>

<template>
  <div :class="cn('size-12  aspect-square rounded-full  shadow-md', props.class) ">
    <img

      v-if="summoner.gameName && as.userAccount.session"
      :src="`https://ddragon.leagueoflegends.com/cdn/15.2.1/img/profileicon/${summoner.profileIconId}.png`"
      :alt="summoner.gameName"
      class="size-full [&_img]:scale-115 rounded-full  inset-shadow-sm inset-shadow-black/90 avatar"
    />
    <div
      v-else
      class="rounded-full avatar bg-neutral grid place-items-center text-nc text-2 size-full font-semibold"
    >
      LP
    </div>

    <slot  />
  </div>
</template>

<style scoped>

</style>