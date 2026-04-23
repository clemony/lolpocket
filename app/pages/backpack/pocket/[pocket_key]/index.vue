<script setup lang="ts">
import { useScrollProvider } from "~~/layers/lib/app/composables/navigation/useElementScroll"

definePageMeta({
  name: "pocket-core",
  title: "core",
  order: 0,
  search: false
})

const route = useRoute()
const pocket = computed(() =>
  usePockets().getPocket(String(route.params.pocket_key))
)

const el = useTemplateRef<HTMLElement>("el")
useScrollProvider(el)

console.log(threads().threads)
console.log(summonerAccounts().accounts)

watch(
  () => summonerAccounts().accounts,
  (newVal) => {
    console.log("💠 - watch - newVal:", newVal)
  }
)
</script>

<template>
  <div class="relative size-full max-w-full">
    <div class="fixed top-0 left-15 z-12 flex h-15 w-56 items-center">
      <icon class="-mx-1 size-6.5 stroke-2" name="" />
      <PocketMenubar />
    </div>
    <div class="absolute top-0 left-0 z-5 h-15 w-full overflow-hidden">
      <BgSplash size="full" :src="pocket?.icon" />
    </div>

    <BgSplash size="full" :src="pocket?.icon" />

    <!-- Header block -->
    <div
      :class="
        cn(
          'pointer-events-none z-0 grid size-full h-[70vh] max-h-[70vh] min-h-[70vh] grid-cols-2 overflow-hidden'
        )
      ">
      <div
        class="w-40% z-1 flex size-full grow flex-col items-start justify-center pt-16 pl-68 *:z-1">
        <BlurReveal>
          <h1 class="text-[3.4rem]! drop-shadow-2xs">
            {{ pocket?.name }}
          </h1>
        </BlurReveal>
      </div>
    </div>

    <!-- Scrollable content -->
    <div
      ref="el"
      :class="
        cn(
          'absolute inset-0 top-0 max-w-full overflow-x-hidden overflow-y-auto pt-[70vh]',
          {}
        )
      ">
      <!-- Sticky Tabs (now ABOVE parent header) -->
      <div
        class="pointer-events-none sticky -top-[70vh] z-13 flex h-15 min-h-15 w-full items-end gap-4 overflow-hidden pl-66">
        <Separator class="absolute bottom-0 left-0 z-0 w-full bg-p3/60" />
        <NavFileTabs />
      </div>

      <!-- Context wrapper -->
      <div class="relative z-1 -mt-px min-h-full w-full max-w-full bg-p0">
        <CoreContent />

        <!--    <div class="mt-12 flex w-full flex-col items-center pb-54">
          <div class="flex gap-4">
           <UButton
              class="w-max"
              @click="fetchThread(pocket.key)">
              fetch comments
            </UButton>
            <UButton @click="threads().threads = {}">
              clear comments
            </UButton>

            <UButton @click="console.log('ass bad: ', summonerAccounts().accounts)">
              logggg accs
            </UButton>
          </div>
          <CommentsThread :thread-id="pocket.key as UUID" />
        </div> -->
        <SiteFooter />
      </div>
      <slot name="fab" />
    </div>
  </div>
</template>
