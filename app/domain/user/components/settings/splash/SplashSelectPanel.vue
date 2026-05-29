<script lang="ts" setup>
import { championIndex } from "#shared/constants/champions/championIndex"
import type { ButtonProps } from "@nuxt/ui"
import { getSkinKey } from "~/domain/utils/img"
import { offsetTooltipContent } from "~~/layers/ui/app/variants/tooltip"

const props = withDefaults(
  defineProps<{
    title?: string
    description?: string
  }>(),
  {
    title: "Select a custom profile splash.",
    description: "Glam our profile with a custom skin!"
  }
)
const emit = defineEmits<{
  close: [value?: string | null]
  updateSkin: [string | null]
}>()
const open = defineModel<boolean>("open", { default: false })

const selectedChampion = ref<string>("")
const searchQuery = ref<string>("")

watch(
  () => selectedChampion.value,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)
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
  searchQuery.value = ""
  selectedChampion.value = ""
}

function getRandomSplash() {}

watch(open, (isOpen) => {
  if (!isOpen) reset()
})

const btnProps: ButtonProps & { tabindex?: string } = {
  color: "neutral",
  variant: "soft",
  size: "xs",
  tabindex: "-1",
  square: true
}

const toast = useToast()

function closePanel(value?: string | null) {
  open.value = false
  selectedChampion.value = ""
  searchQuery.value = ""
  emit("close", value)
}

function update(skin: Skin) {
  const skinKey =
    skin && selectedChampion.value
      ? getSkinKey(String(selectedChampion.value), skin)
      : null

  emit("updateSkin", skinKey)
  selectedChampion.value = ""
  closePanel(skinKey)
  toast.add({
    title: "Profile splash successfully updated!",
    color: "neutral",
    orientation: "horizontal",
    icon: "check-solid"
  })
}

const utils = [
  {
    label: "Reset",
    icon: "i-refresh",
    onClick: () => {
      emit("updateSkin", null)
      closePanel(null)
    }
  },
  {
    label: "Random",
    icon: "i-shuffle",
    onClick: () => getRandomSplash()
  },
  {
    label: "Close",
    icon: "i-x",
    ui: {
      leadingIcon: "**:stroke-[2.4] scale-110"
    },
    onClick: () => closePanel()
  }
]
</script>

<template>
  <UModal
    v-model:open="open"
    v-bind="props"
    :close="{ onClick: () => closePanel() }"
    :ui="{
      body: 'rounded-[1.6rem]! bg-p1/90 px-8! pt-7! shadow-sm shadow-black/16 ring-p3/60 backdrop-blur-sm',
      header: 'flex h-24 w-full shrink-0 items-center gap-3 border-0 px-1!',
      content:
        '@container size-full max-h-[60vh]! max-w-300 gap-3! rounded-[1.8rem]! bg-neutral/30 px-2.5 py-2 ring-n5/50 backdrop-blur-md',
      close: 'fixed top-5 right-5 -z-1'
    }">
    <slot />
    <template #header>
      <div class="w-full space-y-3">
        <div class="flex w-full items-center justify-end gap-1.5 pr-1">
          <!-- UTILS -->
          <UTooltip
            v-for="v in utils"
            :key="v.label"
            :text="v.label"
            :content="offsetTooltipContent">
            <UButton
              v-bind="btnProps"
              :ui="{
                base: 'anchor rounded-full! p-0!',
                leadingIcon: cn(
                  'text-nc! opacity-40 **:text-nc!',
                  v?.ui?.leadingIcon
                )
              }"
              :icon="v.icon"
              @click="v.onClick" />
          </UTooltip>
        </div>

        <!-- SEARCH -->
        <div class="flex w-full max-w-full items-center gap-3 overflow-hidden">
          <!--           <UTooltip
            class=""
            text="Back"
            as-child
            :content="offsetTooltipContent"> -->
          <!-- BACK -->
          <!--             <UButton
              :disabled="!selectedChampion"
              color="neutral"
              tabindex="-1"
              square
              :ui="{
                base: 'min-h-10.5! min-w-10.5! shrink-0 rounded-full! ring inset-ring-0 ring-n5/30'
              }"
              :variant="selectedChampion ? 'soft' : 'ghost'"
              icon="i-arrow-left"
              @click="selectedChampion = null" />
          </UTooltip> -->

          <!-- BOX -->
          <UInput
            v-if="!selectedChampion.length"
            v-model:model-value="searchQuery"
            v-auto-animate
            :as="selectedChampion && selectedChampion"
            variant="none"
            :icon="selectedChampion ? 'i-arrow-left' : 'i-search'"
            placeholder="Search Champions..."
            :ui="{
              leading:
                'pointer-events-none relative order-first shrink-0 text-n5/80 **:text-n5/80',
              root: cn(
                'flex max-w-full grow items-center gap-2 overflow-hidden rounded-3xl! px-2 inset-ring! inset-ring-n4/60 focus-within:inset-ring-n5/70!',
                !searchQuery
                  ? ' bg-n2/30  backdrop-blur-sm '
                  : 'bg-transparent!'
              ),

              base: 'flex min-h-11 max-w-full grow overflow-hidden pl-2! text-center text-nc/80 placeholder:text-n5',
              trailing: ''
            }"
            size="lg"
            @click="selectedChampion && selectedChampion !== '' ? reset() : ''">
            <template #trailing>
              <InputClear
                v-if="searchQuery"
                color="tertiary"
                variant="ghost"
                :ui="{
                  base: 'opacity-80! **:text-nc group-hover/label:**:text-pc! group-hover/label:group-hover/btn:bg-p5/80!',
                  label: ''
                }"
                @clear-input="reset()" />

              <div v-else class="flex">
                <UKbd
                  v-for="(k, i) in user().hotkeys?.search"
                  :key="i"
                  square
                  variant="subtle"
                  :value="k"
                  class="text-n5! **:text-n5!" />
              </div>
            </template>
          </UInput>
        </div>
      </div>
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
            class="flex size-24 grow cursor-pointer items-center justify-center"
            @click="searchQuery = item.name ?? ''">
            <Champion
              :id="item.id"
              side="bottom"
              disabled
              :ui="{ root: 'size-24' }" />
          </ListboxItem>
        </ListboxContent>
      </Listbox>

      <LazySplashSelectPicker
        v-else
        :selected-champion="selectedChampion"
        @update="(e: Skin) => update(e)" />
    </template>
  </UModal>
</template>
