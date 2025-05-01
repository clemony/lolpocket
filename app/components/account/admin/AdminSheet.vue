<script lang="ts" setup>
const { summoner, class: className } = defineProps<{
  summoner: Summoner
    class?: HTMLAttributes['class']
}>()
const as = useAccountStore()
const { forceReload, loading } = useSummoner(as.userAccount.puuid)
</script>

<template>
  <Sheet>
    <SheetTrigger :class="cn('', className)" class="btn-xs btn-ghost btn-square grid place-items-center shrink-0">
      <icon name="ph:key" class=" dst pointer-events-none text-bc/70 size-4.5" />
    </SheetTrigger>
    <LazyNestedSheetContent class="h-screen max-h-screen overflow-hidden ">
      <SheetHeader>
        <NestedSheetTitle>
          Admin
        </NestedSheetTitle>
        <SheetDescription>
          Take care of business okay.
        </SheetDescription>
      </SheetHeader>
      <div class="w-full *:w-full pt-10 grid grid-cols-1 h-fit">
        <ClearMatchesButton />
        <LogMatchesButton />

        <NavBtn
          class="" @click="forceReload()">
          <icon
            name="refresh" />
          Force Reload User Summoner
        </NavBtn>
      </div>
    </LazyNestedSheetContent>
  </Sheet>
</template>