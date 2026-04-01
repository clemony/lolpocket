<script lang="ts" setup>
import { championIndex } from "#shared/constants/champions/championIndex"
import type { ButtonProps, ModalProps } from "@nuxt/ui"
import { DialogDescription, DialogTitle, VisuallyHidden } from "reka-ui"
import { getSplash } from "~/domain/utils/img"
import { offsetTooltipContent } from "~~/layers/ui/app/variants/tooltip"

const { class: className } = defineProps<
  ModalProps & {
    class?: HTMLAttributes["class"]
  }
>()

const emit = defineEmits<{ close: [boolean]; updateSplash: [string | ""] }>()

const champQuery = ref<string | null>("")
const isOpen = ref(false)
const selectedChampion = ref<string | null>(null)
const searchQuery = ref<string>("")

const search = useSearch(championIndex, searchQuery, {
  keys: ["name", "key"]
})

const result = computed(() => {
  if (search?.value?.length) {
    return search.value.length
      ? search.value
      : [...championIndex].sort((a, b) => a.name.localeCompare(b.name))
  } else {
    return championIndex
  }
})

function reset() {
  champQuery.value = ""
  searchQuery.value = ""
  selectedChampion.value = null
}

function getRandomSplash() {}

watch(isOpen, (open) => {
  if (!open) reset()
})

const btnProps: ButtonProps = {
  color: "p0",
  size: "md",
  ui: {
    base: " bg-p1/70 disabled:opacity-50  inset-ring-p3/60 backdrop-blur-sm rounded-full"
  }
}

function update(skin: Skin) {
  emit(
    "updateSplash",
    skin && selectedChampion.value
      ? getSplash(String(selectedChampion.value), "centered", skin)
      : ""
  )
  emit("close", true)
}
</script>

<template>
  <UModal
    :close="{ onClick: () => emit('close', false) }"
    :ui="{
      body: 'rounded-3xl bg-p0/90 px-8! pt-7! shadow-sm shadow-black/16 ring-p3/60 backdrop-blur-sm',
      header:
        'flex h-(--ui-header-height) w-full shrink-0 items-center gap-3 border-0 px-1!',
      content:
        '@container size-full max-h-[60vh]! max-w-300 gap-3! rounded-[1.8rem]! bg-neutral/30 p-2 ring-n5/50 backdrop-blur-md',
      close: 'fixed top-5 right-5 -z-1'
    }">
    <slot />
    <template #header>
      <UTooltip text="Close" :content="offsetTooltipContent">
        <UButton v-bind="btnProps" icon="i-x" @click="emit('close', true)" />
      </UTooltip>
      <UTooltip
        class="ml-5"
        text="Back"
        as-child
        :content="offsetTooltipContent">
        <UButton
          :disabled="!selectedChampion"
          v-bind="btnProps"
          icon="i-arrow-left"
          @click="selectedChampion = null" />
      </UTooltip>
      <UInput
        v-model:model-value="searchQuery"
        placeholder="Search Champions..."
        :ui="{
          leadingIcon: 'ml-1 size-5 text-n5/80',
          root: 'mr-5 grow',
          base: 'w-full rounded-3xl! border-0 bg-n2/30 pl-11! inset-ring! inset-ring-n4/60 backdrop-blur-sm placeholder:text-n5 focus-visible:inset-ring-n5'
        }"
        size="lg"
        icon="search">
        <template #trailing>
          <InputClear v-if="searchQuery" @clear-input="searchQuery = ''" />
          <div v-else class="flex">
            <UKbd
              v-for="(k, i) in user().hotkeys?.search"
              :key="i"
              square
              variant="ghost"
              :value="k"
              class="text-n5! **:text-n5!" />
          </div>
        </template>
      </UInput>
      <UTooltip text="Reset to Automatic" :content="offsetTooltipContent">
        <UButton
          v-bind="btnProps"
          icon="i-refresh"
          @click="
            () => {
              emit('updateSplash', '')
              emit('close', true)
            }
          " />
      </UTooltip>
      <UTooltip text="Randomize" :content="offsetTooltipContent">
        <UButton
          v-bind="btnProps"
          icon="i-shuffle"
          @click="getRandomSplash()" />
      </UTooltip>
    </template>
    <template #body>
      <Listbox
        v-if="!selectedChampion"
        v-model:model-value="selectedChampion"
        :multiple="false"
        selection-behavior="replace">
        <ListboxContent
          v-if="result"
          v-auto-animate
          class="grid h-fit w-full grid-cols-[repeat(auto-fill,minmax(70px,1fr))] justify-between gap-4 p-2">
          <ListboxItem
            v-for="item in result"
            :key="item.key"
            :value="item.key ?? ''"
            class="flex size-24 grow cursor-pointer items-center justify-center">
            <Champion
              :id="item.id"
              side="bottom"
              disabled
              :ui="{ root: 'size-24' }" />
          </ListboxItem>
        </ListboxContent>
      </Listbox>

      <SplashSelectPicker
        v-else
        :selected-champion="selectedChampion"
        @update="update" />
      <VisuallyHidden>
        <DialogTitle>Select a custom profile splash.</DialogTitle>
      </VisuallyHidden>
      <VisuallyHidden>
        <DialogDescription>Select a custom profile splash.</DialogDescription>
      </VisuallyHidden>
    </template>
  </UModal>
</template>
