<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'
import { ListboxVirtualizer, useFilter } from 'reka-ui'

const query = ref<string>('')

const {
  championResult,
  groupedPages,
  itemResult,
  pageResult,
  pocketResult,
  resultsLength,
} = await useSearch(query)

const searchVariants = {
  hidden: {
    maxHeight: '46px',
  },
  visible: {
    maxHeight: '100%',
  },
}

const router = useRouter()
const route = useRoute()
const user = useSupabaseUser()

const { contains } = useFilter({ sensitivity: 'base' })
const pages = computed (() => router.getRoutes().filter(p => contains(String(p.name), query.value)))

const items = computed (() => pages.value.filter(r => !r.meta?.search && r.path.split('/').length === 2))
const groups = computed (() => {
  const g = shallowRef([])
  pages.value.filter(r => r.meta?.search === 'children').forEach((parent) => {
    g.value.push({
      name: parent.meta?.title || parent.name,
      items: parent.children as RouteRecordRaw[],
      order: parent.meta?.order
    })
  })
  return g.value.sort((a, b) => (b.order - a.order))
})
console.log('🌱 - groups:', groups)
</script>

<template>
  <Dialog
    v-model:open="ui().commandOpen"
    :modal="true">
    <slot />
    <LazyDialogContent
      class="p-0">
      <HiddenDialogHeader
        title="search lolpocket"
        desc="search pages, pockets, items, champions, summoners, & more" />

      <Command :highlight-on-hover="true">
        <Search
          icon
          class="!rounded-b-none border-b-b3 !ring-0 !outline-0 h-14 " />

        <CommandList>
          <TabForTag />
          <SlideInTopOutBottom>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup
              v-for="group in groups"
              :key="group.name"
              class="capitalize"
              :heading="group.name">
              <ListboxVirtualizer
                v-slot="{ option }"
                :options="group.items"
                :text-content="(opt: RouteRecordRaw) => opt.name?.toString() ?? ''">
                <CommandItem
                  class="capitalize gap-3 w-full pl-4"
                  :value="option">
                  <hicon
                    :name="String(option.meta?.icon)"
                    class="size-5" />
                  {{ option.meta?.title || option.name }}
                </CommandItem>
              </ListboxVirtualizer>
              <CommandSeparator />
            </CommandGroup>
          </SlideInTopOutBottom>
        </CommandList>
      </Command>
    </LazyDialogContent>
  </Dialog>
</template>
