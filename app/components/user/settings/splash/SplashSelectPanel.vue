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
  searchQuery.value = ""
  selectedChampion.value = null
}

function getRandomSplash() {}

watch(isOpen, (open) => {
  if (!open) reset()
})

const btnProps: ButtonProps & { tabindex?: string } = {
  color: "neutral",
  variant: "soft",
  size: "xs",
  tabindex: "-1",
  square: true
}

const toast = useToast()
function update(skin: Skin) {
  console.log("🥸 - update - skin:", skin)
  emit(
    "updateSplash",
    skin && selectedChampion.value
      ? getSplash(String(selectedChampion.value), "centered", skin)
      : ""
  )
  isOpen.value = false
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
      emit("updateSplash", "")
      emit("close", true)
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
      leadingIcon: "**:stroke[2.2]"
    },
    onClick: () => emit("close", true)
  }
]
</script>

<template>
  <UModal
    v-model:open="isOpen"
    :close="{ onClick: () => emit('close', false) }"
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
                base: 'rounded-full p-0!',
                leadingIcon: cn('opacity-40', v?.ui?.leadingIcon)
              }"
              :icon="v.icon"
              @click="v.onClick" />
          </UTooltip>
        </div>

        <!-- SEARCH -->
        <div class="flex w-full max-w-full items-center gap-3 overflow-hidden">
          <UTooltip
            class=""
            text="Back"
            as-child
            :content="offsetTooltipContent">
            <!-- BACK -->
            <UButton
              :disabled="!selectedChampion"
              color="neutral"
              tabindex="-1"
              square
              :ui="{
                base: 'min-h-10.5! min-w-10.5! shrink-0 rounded-full ring inset-ring-0 ring-n5/30'
              }"
              :variant="selectedChampion ? 'soft' : 'ghost'"
              icon="i-arrow-left"
              @click="selectedChampion = null" />
          </UTooltip>

          <!-- BOX -->
          <div
            v-auto-animate
            class="flex min-h-11 w-full max-w-28 items-center gap-2 overflow-hidden rounded-3xl! bg-n2/30 pr-1 pl-3 inset-ring! inset-ring-n4/60 backdrop-blur-sm placeholder:text-n5 focus-visible:inset-ring-n5">
            <Icon
              name="i-search"
              class="pointer-events-none ml-1 size-5 text-n5/80" />
            <UButton
              v-if="selectedChampion"
              size="sm"
              trailing-icon="i-x"
              color="neutral"
              :ui="{
                base: 'bg-n2/80! hover:bg-n0/60! hover:inset-shadow-xs',
                trailingIcon: 'size-3'
              }"
              variant="soft"
              :label="champNameByKey(selectedChampion)"
              @click="reset()" />
            <UInput
              v-model:model-value="searchQuery"
              v-auto-animate
              variant="none"
              placeholder="Search Champions..."
              :ui="{
                leading: 'relative ml-1 flex items-center gap-1.5',
                root: 'grow',
                base: 'w-full border-0 bg-transparent ring-0 outline-0 focus-visible:ring-0 focus-visible:outline-0'
              }"
              size="lg">
              <template #trailing>
                <InputClear v-if="searchQuery" @clear-input="reset()" />
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
        @update="(e: Skin) => update(e)" />
      <VisuallyHidden>
        <DialogTitle>Select a custom profile splash.</DialogTitle>
      </VisuallyHidden>
      <VisuallyHidden>
        <DialogDescription>Select a custom profile splash.</DialogDescription>
      </VisuallyHidden>
    </template>
  </UModal>
</template>
