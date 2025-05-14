<script lang="ts" setup>
const { summoner, account } = defineProps<{
  summoner: Summoner
  account: userAccount
}>()
</script>

<template>
  <Sheet>
    <SheetTrigger class="btn btn-ghost  gap-0 btn-circle hover:bg-b2 hover:border-b3/80 relative group/btn relative">
      <LazyProfileSummonerIcon :summoner="summoner" :account="account" hydrate-on-visible class="rounded-full **:rounded-full size-9 grayscale transition duration-200 group-hover/btn:grayscale-0 shadow-sm drop-shadow-sm " />
<!-- <div class="absolute right-3.5 dst opacity-80 -top-1.5 *:absolute *:size-7 *:shrink-0">
      <icon name="basil:chat-solid" class=" text-b1" />
      <icon name="basil:chat-outline" class=" text-bc/60" />
      </div> -->
    </SheetTrigger>
    <SheetContent side="right" class="w-120 min-w-120  pt-9 !border-l-accent/30  flex flex-col  gap-6 h-full">
      <HiddenDialogHeader title="Account Sidebar" desc="Quick Utils" />

      <template v-if="summoner || account">
        <LazySummonerCard :summoner="summoner" :account="account" class="  py-2 mb-2 px-2" />
        <CommandTrigger />

        <Field class="">
          <SidebarAddPocket />
        </Field>

        <LazyAccountPinnedPockets :account="account" />

        <Field >
          <NavBtn class=" justify-start  btn-lg !font-medium" @click="navigateTo('')">
            <icon name="flowbite:clock-arrow-outline" class=" " />
            Match History
          </NavBtn>
        </Field>
        <Grow />

        <AccountUtilities :summoner="summoner" :account="account" />
      </template>

      <LazyAdagioLogin v-else />
    </SheetContent>
  </Sheet>
</template>