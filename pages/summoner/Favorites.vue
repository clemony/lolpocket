<script setup lang="ts">
const as = useAccountStore()
const ts = useTempStore()

const filteredItems = ref['']
const returnData = ref('')
const quickSearch = ref('')

const selectedChampion = computed(() => ts.selectedChampion)

onMounted(async () => {})
</script>

<template>
  <main>
    <div class="*:scrollbar-hide h-full w-full">
      <div class="flex w-full items-end p-4">
        <div class="flex grow items-center">
          <h2 class="text-5 p-1.5 font-bold">
            Favorites
          </h2>
        </div>
      </div>

      <div class="border-b-b3 bg-b1/90 absolute top-0 left-0 z-10 flex h-fit! w-full flex-wrap items-center justify-end gap-4 border-b px-4 py-1 backdrop-blur-md">
        <h2 class="sub-text grow justify-start">
          Champions
        </h2>
      </div>

      <div class="scroll-none flex h-full max-h-full w-full flex-wrap gap-4 overflow-y-scroll p-2 pt-11">
        <div
          v-for="(champion, index) in as.favoriteChamps"
          :key="champion.name"
          :data-index="index"
          class=""
        >
          <button
            class="item-wrapper__item ring-b3 ring-offset-b1 hover:ring-offset-primary has-checked:ring-offset-secondary pointer-events-auto flex aspect-square max-w-[70px] min-w-[60px] grow basis-14 place-items-center overflow-hidden rounded-md bg-cover ring-1 ring-offset-1 drop-shadow-sm has-checked:ring-offset-2"
          >
            <div class="grid-image-container champ">
              <div class="grid-tip">
                {{ champion.name }}
              </div>
            </div>
          </button>
        </div>
      </div>

      <div class="border-b-b3 bg-b1/80 shadow-warm absolute top-0 left-0 z-10 flex h-fit! w-full flex-wrap items-center justify-end gap-4 border-b px-4 py-1 backdrop-blur-md">
        <h2 class="sub-text grow justify-start">
          Primary
        </h2>
      </div>

      <div class="drag-draggable shadow-inset scrollbar-hide h-full! w-full content-start items-start justify-around rounded-b-xl px-3 pt-12 pb-4">
        <div class="aspect-square basis-16"></div>
        <div class="aspect-square basis-16"></div>
        <div class="aspect-square basis-16"></div>
        <div class="aspect-square basis-16"></div>
        <div class="aspect-square basis-16"></div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
