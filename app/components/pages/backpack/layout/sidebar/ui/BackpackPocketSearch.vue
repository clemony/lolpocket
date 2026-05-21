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
const userStore = user()

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
    :ui="{
      ...props.ui,
      base: cn(
        'min-h-11 grow rounded-xl border-0 px-3 text-sm ring-p3/80',
        props.ui?.base
      ),
      root: cn('max-w-full min-w-12 grow', props.ui?.root)
    }">
    <template #leading>
      <slot name="leading" />
    </template>
    <template #trailing>
      <LazyInputClear v-if="search" size="sm" @clear-input="handleClear()" />
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
</template>
