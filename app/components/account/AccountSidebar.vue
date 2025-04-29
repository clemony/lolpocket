<script lang="ts" setup>
import { VisuallyHidden } from 'reka-ui'

const { summoner, account } = defineProps<{
  summoner: Summoner
  account: userAccount
}>()

const summonerg = ref(false)
</script>

<template>
  <Sheet>
    <SheetTrigger class="rounded-full **:rounded-full **:size-10 grayscale transition duration-200 hover:grayscale-0 shadow-sm drop-shadow-sm">
      <!--  <ProfileSummonerIcon :summoner="summoner" /> -->
      okay...
    </SheetTrigger>
    <SheetContent side="right" class="w-120 min-w-120 px-0">
      <template v-if="summoner || account">
        <SheetHeader class="mb-6  px-6 pb-6 pt-2 ">
<!--           <p class="font-medium justify-end w-full flex grow pr-6 -mt-1">{{getGreeting()}}</p> -->

<SummonerCard :summoner="summoner"  :account="account" />
          <VisuallyHidden>
          <SheetTitle class="gap-4 flex items-center">
 {{summoner.name}}'s Sidebar
          </SheetTitle>
          <SheetDescription>
          </SheetDescription>
          </VisuallyHidden>
        </SheetHeader>
<div class=" px-6 w-full">
<Accordion type="single" collapsible>
        <AccountPinnedPockets :account="account" />
<AdminSheet v-if="account && account.role == 'admin'" :account="account" :summoner="summoner"/>
  </Accordion>
        <SettingsTheme />

        <footer class="absolute bottom-0 left-0 w-full px-6 py-6 flex gap-3">
          <button v-if="summoner" class="btn btn-neutral" @click="signOut()">
            <icon name="ph:sign-out" />
            Sign out
          </button>
        </footer>
      </div>
      </template>

      <AdagioLogin v-else />
    </SheetContent>
  </Sheet>
</template>