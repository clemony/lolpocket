<script setup lang="ts">
import { getSplashFromSkinKey } from "~/domain/utils/img"
import { useScrollProvider } from "~~/layers/lib/app/composables/navigation/useElementScroll"

definePageMeta({
  title: "guide",
  order: 0,
  search: false
})
const route = useRoute()
const store = pocketStore()
const pocket = computed(() => store.getPocket(String(route.params.pocket_key)))

const splash = computed(() =>
  getSplashFromSkinKey(pocket.value?.skin, "uncentered")
)

const el = useTemplateRef<HTMLElement>("el")
useScrollProvider(el)

console.log(threads().threads)
console.log(publicUsers().cache)

watch(
  () => publicUsers().cache,
  (newVal) => {
    console.log("💠 - watch - newVal:", newVal)
  }
)
</script>

<template>
  <div class="relative size-full max-w-full">
    <!-- Header block -->
    <div
      :class="
        cn('pointer-events-none z-0 grid size-full grid-cols-2 overflow-hidden')
      ">
      <div
        class="w-40% z-1 flex size-full grow flex-col items-start justify-center pt-16 pl-68 *:z-1">
        <h1 class="drop-shadow-2xs">
          {{ pocket?.label }}
        </h1>
      </div>
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
            <UButton @click="void (threads().threads = {})">
              clear comments
            </UButton>

            <UButton @click="console.log('ass bad: ', publicUsers().accounts)">
              logggg accs
            </UButton>
          </div>
          <CommentsThread :thread-id="pocket.key as UUID" />
        </div> -->
    </div>
    <slot name="fab" />
  </div>
</template>
