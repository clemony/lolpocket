<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
const ss = useSummonerStore()
const as = useAccountStore()
const user = inject<User | null>('user')
const { forceReload, loading } = useSummoner(user?.account?.riot?.puuid)

const keys = useMagicKeys()

const isOpen = ref(false)
whenever(keys.shift_a, () => {
  isOpen.value = true
})
</script>

<template>
  <Sheet
    v-if="as && as.userAccount?.role == 'admin'"
    v-model:open="isOpen">
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
        <button
          class="btn w-full"
          @click="ss.clearAll()">
          clear summoner store
        </button>

        <ClearMatchesButton />

        <LogMatchesButton />

        <Btn
          class=""
          @click="forceReload()">
          <icon
            name="refresh" />
          Force Reload User Summoner
        </Btn>
      </div>
    </LazyNestedSheetContent>
  </Sheet>
</template>