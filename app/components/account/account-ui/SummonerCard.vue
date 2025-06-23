<script setup lang="ts">
const { account: acc } = defineProps<{
  account?: UserAccount
}>()

const as = useAccountStore()

const account = computed (() => {
  if (acc)
    return acc

  else if (!acc)
    return as.userAccount

  else
    return as.defaultUser
})
</script>

<template>
  <div class="flex w-full  field-box p-2 items-center gap-4 ">
    <div class=" size-fit grid place-items-center rounded-full drop-shadow-sm  shadow-sm shrink-0 relative">
      <ProfileSummonerIcon v-if="account" :account="account" class="size-12 rounded-full" />
    </div>

    <div class="flex flex-col grow justify-center gap-1.5 drop-shadow-sm">
      <div class="flex w-fit items-end gap-4 h-6">
        <h1 class="!text-6 font-serif  leading-none  font-bold  truncate">
          {{ account.riot.name || account.name || 'Summoner' }}
        </h1>

        <div class=" flex items-center h-full relative">
          <span class="absolute flex items-center -bottom-0.75 font-medium">

          </span>
        </div>
      </div>

      <div class="flex items-center lowercase gap-4 align-baseline font-normal">
        <span class="lowercase flex items-center">
          <icon name="lucide:hash" class="size-3.75" />
          {{ account.riot.tag }}
        </span>

        <span class="">
          lv. {{ account.riot.level }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
