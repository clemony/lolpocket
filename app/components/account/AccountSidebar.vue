<script lang="ts" setup>
const { summoner, account } = defineProps<{
  summoner: Summoner
  account: userAccount
}>()

</script>

<template>
  <Sheet>
    <SheetTrigger class="rounded-full **:rounded-full **:size-9 grayscale transition duration-200 hover:grayscale-0 shadow-sm drop-shadow-sm border-accent border cursor-pointer hover:ring hover:ring-neutral">
      <LazyProfileSummonerIcon :summoner="summoner" :account="account" hydrate-on-visible />
    </SheetTrigger>
    <SheetContent side="right" class="w-120 min-w-120  pt-9 !border-l-accent/30  flex flex-col  gap-6 h-full">
      <HiddenDialogHeader title="Account Sidebar" desc="Quick Utils" />


      <template v-if="summoner || account">

          <LazySummonerCard :summoner="summoner" :account="account" class="  py-2 mb-2 px-2" />
<CommandTrigger />


          <LazyAccountPinnedPockets :account="account" />

                
            <NavBtn class="capitalize  btn-lg !font-medium" @click="navigateTo('')">
              <icon name="flowbite:clock-arrow-outline" class="size-4.75 " />
           Match History
            </NavBtn>


          <Grow />


     <AccountUtilities :summoner="summoner" :account="account" />
      </template>

      <LazyAdagioLogin v-else />
    </SheetContent>
  </Sheet>
</template>