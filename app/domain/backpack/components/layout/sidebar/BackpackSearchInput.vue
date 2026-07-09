<script lang="ts" setup>
import type { MaybeElementRef } from "@vueuse/core"
import { useBackpack } from "~/domain/backpack/composables/useBackpack"
import { useBackpackSearch } from "~/domain/backpack/composables/useBackpackSearch"

const userStore = user()

const { sidebarCollapsed } = useBackpack()
const { items, searchTerm, modelValue, clear } = useBackpackSearch()

const input = useTemplateRef<{
  inputRef?: HTMLInputElement | { value?: HTMLInputElement | null } | null
}>("input")

const { focused } = useFocus(
  computed(() => input.value?.inputRef) as MaybeElementRef
)

const subSearchKeys = computed(() => localStore().hotkeys.subSearch ?? [])
const watchKeys = computed(() => subSearchKeys.value.join("_"))
const keys = useMagicKeys()
const subSearchPressed = computed(() => {
  const key = watchKeys.value
  return key ? Boolean(toValue(keys[key])) : false
})

whenever(subSearchPressed, () => {
  focused.value = true
})

function clearSearchTerm() {
  searchTerm.value = ""
}

/* function closeSearch() {
  focused.value = false
  toggleSearch(false)
}

function handleClear() {
  if (search.value) search.value = ""
  closeSearch()
} */
</script>

<template>
  <div
    :class="
      cn(
        'flex w-full flex-col',
        sidebarCollapsed ? 'items-center gap-1' : 'gap-0.5'
      )
    ">
    <div :class="cn('w-full')">
      <div v-if="sidebarCollapsed">
        <LazyUPopover mode="hover" :content="{ side: 'right' }">
          <template #default="{ open }">
            <UButton
              :variant="open ? 'solid' : 'ghost'"
              :color="open ? 'neutral' : 'primary'"
              :active="open"
              :ui="{ leadingIcon: 'size-4.5', base: 'anchor rounded-xl' }"
              size="md"
              icon="i-search"
              square />
          </template>
          <template #content>
            <UInput
              v-model:model-value="searchTerm"
              variant="none"
              size="lg"
              placeholder="Search Backpack..."
              :ui="{
                base: 'w-full bg-p0 px-2',
                root: 'w-full',

                leadingIcon: '**:stroke-[2.3]',
              }"
              icon="i-search">
              <template #trailing>
                <LazyInputClear v-if="searchTerm" @click="clearSearchTerm" />
                <span v-else />
              </template>
            </UInput>
          </template>
        </LazyUPopover>

        <FolderOptionsMenu
          v-if="sidebarCollapsed"
          icon="i-more"
          square
          :menu="{
            content: {
              align: 'start',
              side: 'right',
            },
            ui: {
              content: 'w-(--reka-popper-anchor-width) min-w-64',
              item: 'gap-2.5',
            },
          }"
          variant="ghost"
          color="primary"
          size="md"
          :ui="{
            base: cn('', {}),
            leadingIcon: cn('size-4.5 rotate-90 **:stroke-[10%]!'),
          }" />
      </div>
      <UInputMenu
        v-else
        ref="input"
        v-model:model-value="modelValue"
        v-model:search-term="searchTerm"
        :items="items"
        open-on-focus
        icon="i-search"
        variant="outline"
        size="lg"
        :ui="{
          leadingIcon: 'opacity-60',
          base: 'grow rounded-xl px-3 text-sm ring-p3/80',
          root: 'relative h-13! min-h-13! w-full max-w-full min-w-12 grow p-0!',
        }">
        <template #trailing>
          <LazyInputClear v-if="searchTerm" size="sm" @clear-input="clear()" />
          <LazyUButton
            v-else-if="focused === true"
            color="transparent"
            size="sm"
            icon="i-x"
            @pointerdown.prevent.stop />
          <div v-else class="inline-flex items-center">
            <UKbd
              v-for="(k, i) in subSearchKeys"
              :key="i"
              variant="ghost"
              color="base"
              square
              :value="k" />
          </div>
        </template>
      </UInputMenu>
    </div>
  </div>
</template>
