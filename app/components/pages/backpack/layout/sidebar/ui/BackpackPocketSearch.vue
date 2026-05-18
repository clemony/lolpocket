<script lang="ts" setup>
import type { InputProps } from "@nuxt/ui"
import type { MaybeElementRef } from "@vueuse/core"
import { useBackpack } from "~/domain/backpack/useBackpack"

const props = defineProps<
  Omit<InputProps, "defaultValue"> & {
    sidebarCollapsed: boolean
  }
>()

const delegated = reactiveOmit(props, "sidebarCollapsed")

const { search, toggleSearch, searchVisible } = useBackpack()

const input = useTemplateRef<{
  inputRef?: HTMLInputElement | { value?: HTMLInputElement | null } | null
}>("input")

const { focused } = useFocus(
  computed(() => input.value?.inputRef) as MaybeElementRef
)

const watchKeys = computed(
  () => user().hotkeys?.subSearch && user().hotkeys?.subSearch.join("_")
)
const keys = useMagicKeys()

whenever(keys[watchKeys.value] as ComputedRef<boolean>, () => {
  focused.value = true
})

watch(
  () => focused.value,
  (v) => {
    if (v) toggleSearch(true)
  }
)
watch(searchVisible, (v) => {
  console.log("💠 - watch - newVal:", v)
})
function handleClear() {
  search.value = ""
  toggleSearch(false)
}
</script>

<template>
  <LazyUPopover
    v-if="props.sidebarCollapsed"
    mode="hover"
    :content="{ side: 'right' }">
    <template #default="{ open }">
      <UButton
        :variant="open ? 'solid' : 'ghost'"
        :color="open ? 'neutral' : 'primary'"
        :active="open"
        :ui="{ leadingIcon: 'size-4.5', base: 'anchor rounded-xl' }"
        :size="props.size"
        icon="i-search"
        square />
    </template>
    <template #content>
      <UInput
        v-bind="delegated"
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

  <UInput
    v-else
    ref="input"
    v-bind="delegated"
    v-model:model-value="search"
    placeholder="Search Backpack..."
    :ui="{
      base: 'grow rounded-3xl bg-p0 px-3 text-sm ring-p3/80',
      root: 'max-w-full min-w-12 grow',

      leadingIcon: ''
    }"
    icon="i-search">
    <template #trailing>
      <LazyInputClear v-if="search" @click="handleClear" />

      <div v-else class="inline-flex items-center">
        <UKbd
          v-for="(k, i) in user().hotkeys?.subSearch"
          :key="i"
          variant="ghost"
          color="base"
          square
          :value="k" />
      </div>
    </template>
  </UInput>
</template>
