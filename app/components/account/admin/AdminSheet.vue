<script lang="ts" setup>
const {  class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
const as = useAccountStore()
const { forceReload, loading } = useSummoner(as.userAccount.riot.puuid)

const keys = useMagicKeys()

const isOpen = ref(false)
whenever(keys.shift_a, () => {
  isOpen.value = true
})
</script>

<template>
  <Sheet v-model:open="isOpen">
    <SheetTrigger :class="cn('', className)" class="btn-xs btn-ghost btn-square grid place-items-center shrink-0">
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

        <Btn
          class="" @click="forceReload()">
          <icon
            name="refresh" />
          Force Reload User Summoner
        </Btn>
      </div>
    </LazyNestedSheetContent>
  </Sheet>
</template>