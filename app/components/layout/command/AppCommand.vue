<script lang="ts" setup>
const searchQuery = ref<string>('')

const {
  championResult,
  groupedPages,
  itemResult,
  pageResult,
  pocketResult,
  resultsLength,
} = await useSearch(searchQuery)

const searchVariants = {
  hidden: {
    maxHeight: '46px',
  },
  visible: {
    maxHeight: '100%',
  },
}

const activeItem = ref(null)
const itemOpen = ref<boolean>(false)

watch(
  () => activeItem.value,
  (newVal) => {
    console.log('💠 - newVal:', newVal)

    if (newVal) {
      const i = newVal
      activeItem.value = null
      activeItem.value = i
      itemOpen.value = true
    }
    else {
      itemOpen.value = false
    }
  }
)
</script>

<template>
  <Dialog :modal="true">
    <LazyFadeDialogContent
      class="bg-transparent min-w-130 w-130 p-0 m-0 min-h-200 max-h-200 shadow-none border-none outline-none focus:outline-none focus:ring-none">
      <HiddenDialogHeader
        title="search lolpocket"
        desc="search pages, pockets, items, champions, summoners, & more" />

      <LazyCommandPopover
        v-model:open="itemOpen"
        hydrate-on-visible
        @close-popover="itemOpen = null">
        <LazyItemData
          v-model:id="activeItem"
          class="*:px-2.5 py-4 max-h-200"
          hydrate-on-visible />
      </LazyCommandPopover>

      <div
        class="bg-black-20/80 **:text-white/60 overflow-hidden w-140 drop-shadow-lg inset-shadow-sm relative rounded-box !p-0 border drop-shadow-black/30 shadow-black/20 shadow-md ring-black-15/60 ring-1 border-black-25"
        :variants="searchVariants"
        initial="hidden"
        :animate="resultsLength ? 'visible' : 'hidden'"
        exit="hidden">
        <div
          class="w-full h-15 flex backdrop-blur-3xl items-center relative"
          :class="{ 'border-b border-b-black-25/80': searchQuery }">
          <icon
            name="search"
            class="absolute left-4 top-4.25 opacity-30 dst size-6" />

          <input
            v-model="searchQuery"
            :spellcheck="false"
            class="w-full rounded-3xl text-bc/50 h-14 pl-14 !text-xl" />

          <button
            v-if="searchQuery !== ''"
            class="btn-ghost-dark btn-square !size-9 mr-5.5"
            @click="searchQuery = ''">
            <icon
              name="x-sm"
              class="shrink-0" />
          </button>
        </div>

        <div
          class="backdrop-blur-3xl inset-shadow-sm size-full relative overflow-auto max-h-200 pb-2">
          <CommandCategory
            name="Pages"
            :results="pageResult">
            <PageLinkResult
              v-for="page in pageResult.slice(0, 3)"
              :key="page.name"
              :page="page"
              :link="page.path">
              <PageIcon
                :page="page"
                class="ml-1 -mr-1" />
            </PageLinkResult>

            <CommandMoreResults
              v-if="pageResult.length > 3"
              :results="pageResult">
              <template
                v-for="group in groupedPages.slice(3)"
                :key="group.section">
                <PageLinkResult
                  v-for="page in group.routes"
                  :key="page.name"
                  :link="page.path"
                  :page="page">
                  <PageIcon
                    :page="page"
                    class="ml-1 -mr-1" />
                </PageLinkResult>
              </template>
            </CommandMoreResults>
          </CommandCategory>

          <CommandCategory
            name="Pockets"
            :results="pocketResult">
            <PageLinkResult
              v-for="pocket in pocketResult.slice(0, 3)"
              :key="pocket.key"
              :link="`/pocket/${pocket.key}/`"
              :page="pocket">
              <PocketIcon
                :url="pocket.icon"
                :alt="pocket.key"
                class="size-7 rounded-lg **:text-xxs -mr-2"
                transparent />
            </PageLinkResult>

            <CommandMoreResults
              v-if="pocketResult.length > 3"
              :results="pocketResult">
              <PageLinkResult
                v-for="pocket in pocketResult.slice(3)"
                :key="pocket.key"
                :link="`/pocket/${pocket.key}/`"
                :page="pocket">
                <PocketIcon
                  :url="pocket.icon"
                  :alt="pocket.key"
                  class="size-7 rounded-lg **:text-xxs"
                  transparent />
              </PageLinkResult>
            </CommandMoreResults>
          </CommandCategory>

          <CommandCategory
            name="Champions"
            :results="championResult">
            <CommandResult
              v-for="champion in championResult.slice(0, 3)"
              :key="champion.key">
              <ChampionIcon
                :id="champion.id"
                :alt="champion.key"
                class="size-7 rounded-lg" />
              {{ champion.name }}
            </CommandResult>

            <CommandMoreResults
              v-if="championResult.length > 3"
              :results="championResult">
              <CommandResult
                v-for="champion in championResult.slice(3)"
                :key="champion.id">
                <ChampionIcon
                  :id="champion.id"
                  :alt="champion.key"
                  class="size-7 rounded-lg" />
                {{ champion.name }}
              </CommandResult>
            </CommandMoreResults>
          </CommandCategory>

          <CommandCategory
            name="Items"
            :results="itemResult">
            <CommandItemResult
              v-for="item in itemResult.slice(0, 3)"
              :key="item.id"
              v-model:active-item="activeItem"
              :item="item"
              @update:model-value="(e) => (activeItem = e)" />

            <CommandMoreResults
              v-if="itemResult.length > 3"
              :results="itemResult">
              <CommandItemResult
                v-for="item in itemResult.slice(3)"
                :key="item.id"
                v-model:active-item="activeItem"
                :item="item"
                @update:model-value="(e) => (activeItem = e)" />
            </CommandMoreResults>
          </CommandCategory>
        </div>
      </div>
    </LazyFadeDialogContent>
  </Dialog>
</template>
