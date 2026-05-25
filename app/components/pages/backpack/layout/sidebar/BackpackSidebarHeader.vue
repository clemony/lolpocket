<script lang="ts" setup>
import type { MaybeElementRef } from "@vueuse/core"
import { useBackpack } from "~/domain/backpack/useBackpack"

const { search, toggleSearch, sidebarCollapsed } = useBackpack()
const userStore = user()
watch(
  () => sidebarCollapsed.value,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)
const input = useTemplateRef<{
  inputRef?: HTMLInputElement | { value?: HTMLInputElement | null } | null
}>("input")

const { focused } = useFocus(
  computed(() => input.value?.inputRef) as MaybeElementRef
)

const subSearchKeys = computed(() => userStore.hotkeys.subSearch ?? [])
const watchKeys = computed(() => subSearchKeys.value.join("_"))
const keys = useMagicKeys()
const subSearchPressed = computed(() => {
  const key = watchKeys.value
  return key ? Boolean(toValue(keys[key])) : false
})

whenever(subSearchPressed, () => {
  focused.value = true
})

watch(
  () => focused.value,
  (v) => {
    if (v && v === true) toggleSearch(true)
  }
)

function closeSearch() {
  focused.value = false
  toggleSearch(false)
}

function handleClear() {
  if (search.value) search.value = ""
  closeSearch()
}
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
              :size="sidebarCollapsed ? 'md' : 'lg'"
              icon="i-search"
              square />
          </template>
          <template #content>
            <UInput
              v-model:model-value="search"
              variant="none"
              size="lg"
              placeholder="Search Backpack..."
              :ui="{
                base: 'w-full bg-p0 px-2',
                root: 'w-full',

                leadingIcon: '**:stroke-[2.3]'
              }"
              icon="i-search">
              <template #trailing>
                <LazyInputClear v-if="search" @click="search = ''" />
                <span v-else />
              </template>
            </UInput>
          </template>
        </LazyUPopover>

        <NewOptionsMenu
          v-if="sidebarCollapsed"
          icon="i-more"
          square
          :menu="{
            content: {
              align: 'start',
              side: 'right'
            },
            ui: {
              content: cn('w-(--reka-popper-anchor-width)', {
                'min-w-64': sidebarCollapsed
              }),
              item: 'gap-2.5'
            }
          }"
          :variant="sidebarCollapsed ? 'ghost' : 'ghost'"
          :color="sidebarCollapsed ? 'primary' : 'primary'"
          :size="sidebarCollapsed ? 'md' : 'sm'"
          :ui="{
            base: cn('', {}),
            leadingIcon: cn('size-4.5 rotate-90 **:stroke-[10%]!')
          }" />
      </div>
      <UInput
        v-else
        ref="input"
        v-model:model-value="search"
        icon="i-search"
        variant="outline"
        :size="sidebarCollapsed ? 'md' : 'lg'"
        :ui="{
          base: 'grow rounded-xl px-3 text-sm ring-p3/80',
          root: 'relative h-13! min-h-13! w-full max-w-full min-w-12 grow p-0!'
        }">
        <template #trailing>
          <LazyInputClear
            v-if="search"
            size="sm"
            @clear-input="handleClear()" />
          <LazyUButton
            v-else-if="focused === true"
            color="transparent"
            size="sm"
            icon="i-x"
            @pointerdown.prevent.stop
            @click.stop="closeSearch" />
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
      </UInput>
    </div>
  </div>
</template>
