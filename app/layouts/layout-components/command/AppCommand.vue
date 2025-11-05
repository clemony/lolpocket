<script lang="ts" setup>
import type { regionIndex } from '#shared/appdata'
import { ListboxVirtualizer } from 'reka-ui'

const query = ref<string>('')
const tag = ref<string>('')
const region = shallowRef<keyof typeof regionIndex>('na1')
const queryName = useTemplateRef<HTMLElement>('queryName')

const { focused } = useFocus(queryName)
const router = useRouter()
const route = useRoute()
const user = useSupabaseUser()

const focus = ref<HTMLElement>()

const { champions, clear, pages, pockets } = await useSearch(query, tag, { pages: true })

function navigate(url: string) {
  ui().commandOpen = false
  navigateTo(url)
}
</script>

<template>
  <Dialog
    v-model:open="ui().commandOpen"
    class=""
    :modal="true">
    <slot />
    <LazyDialogContent
      class="p-0 fixed !top-1/3 !translate-y-0 !mt-0">
      <HiddenDialogHeader
        title="search lolpocket"
        desc="search pages, pockets, items, champions, summoners, & more" />

      <Command :highlight-on-hover="true">
        <Input
          ref="queryName"
          v-model:model-value="query"
          type="text"
          placeholder="Search..."
          class="field-sizing-content relative flex w-auto min-w-36 grow peer !rounded-b-none border-b-b3 !ring-0 !outline-0 h-14"
          @update:model-value="e => query = e"
          @clear:input="clear()">
          <icon
            name="search"
            class="!size-4.5" />
          <template #2>
            <SearchTagInput
              :tag
              @focus:return="focused = true"
              @update:tag="e => tag = e" />
            <SearchRegion
              :present="tag.length > 0"
              :region
              @update:region="e => region = e" />
            <DeviceKey
              v-if="!query"
              class="mr-2">
              K
            </DeviceKey>
          </template>
        </Input>

        <CommandList>
          <TransitionExpand group>
            <TabForTag v-if="query" />
            <CommandEmpty>No results found.</CommandEmpty>

            <!-- champions -->
            <CommandGroup
              v-if="champions.length"
              heading="Champions">
              <CommandItem
                v-for="option in champions"
                :key="option.name"
                class="capitalize gap-3 w-full pl-3"
                :value="option"
                @click="navigate(`/champions/${option.key}`)">
                <ChampionIcon
                  :id="option.id"
                  :name="String(option.meta?.icon)"
                  class="size-7 rounded-md" />
                {{ (option.meta?.title || option.name).toString().replace('General', 'Settings') }}
              </CommandItem>
              <CommandSeparator class="mt-2" />
            </CommandGroup>

            <!-- pockets -->
            <CommandGroup
              v-if="pockets.length"
              heading="Pockets">
              <CommandItem
                v-for="option in pockets"
                :key="option.name"
                class="capitalize gap-3 w-full pl-3"
                :value="option"
                @click="navigate(`/champions/${option.key}`)">
                <PocketIcon
                  :id="option.id"
                  :name="String(option.meta?.icon)"
                  class="size-7 rounded-md" />
                {{ (option.meta?.title || option.name).toString().replace('General', 'Settings') }}
              </CommandItem>
              <CommandSeparator class="mt-2" />
            </CommandGroup>
            <!-- pages -->
            <CommandGroup
              v-for="group in pages"
              :key="group.name"
              class="capitalize group/pages"
              :heading="group.name">
              <CommandItem
                v-for="option in group.items"
                :key="option.name"
                class="capitalize gap-4 w-full pl-5"
                :value="option"
                @click="navigate(option.path)">
                <hicon
                  :name="String(option.meta?.icon)"
                  :class="cn('size-5', option.meta?.listClass)" />
                {{ option.meta?.title || option.name }}
              </CommandItem>
              <CommandSeparator class="mt-2 group-last/pages:hidden" />
            </CommandGroup>
          </TransitionExpand>
        </CommandList>
      </Command>
    </LazyDialogContent>
  </Dialog>
</template>
