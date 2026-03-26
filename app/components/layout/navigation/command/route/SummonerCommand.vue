<script lang="ts" setup>
import { LazyReport } from "#components"
import type { DropdownMenuItem } from "@nuxt/ui"
import { getSummonerIcon } from "~/domain/utils/img"
import { descriptionLabel } from "../build/styles"

const emit = defineEmits(["update:open"])
const { summoner, currentSummonerNav } = storeToRefs(sSession())
const s = safeObject(summoner)

const route = useRoute()
const overlay = useOverlay()

const report = overlay.create(LazyReport, {
  props: {}
})
async function openReport(): Promise<void> {
  emit("update:open", false)
  report.open()
}

const toolbar = computed(() => [
  [
    {
      label: "Message",
      icon: "i-chat"
    }
  ],
  [
    {
      label: "Block",
      icon: "i-ban"
    },
    {
      label: "Report",
      icon: "i-warning",
      onClick: () => openReport()
    }
  ]
])

const { settings } = storeToRefs(user())
const isFavorite = computed(() =>
  settings.value?.favorite_summoners.includes(String(s.value?.puuid))
)

const nav = computed(() => ({
  id: "summoner",
  description: `Deep dive into data analysis, pick ${summoner.value?.name}'s pockets, or view their current match status.`,
  items: currentSummonerNav.value.children.map((item) => ({
    ...item,
    value: item.label,
    ui: {
      leadingIcon: cn("size-4.5", item.ui?.leadingIcon)
    }
  }))
}))
</script>

<template>
  <div class="grid w-full grid-cols-[0.64fr_1fr] gap-x-3 self-start py-2 pl-4">
    <UpdateSummonerCard />
    <CommandGroup :items="nav">
      <div class="relative flex w-full">
        <UUser
          size="xl"
          :ui="{
            root: 'mb-2 ml-1 w-full',
            name: 'mb-1 inline-flex w-full grow items-center justify-between align-baseline',
            wrapper: 'pr-6'
          }"
          :description="nav.description">
          <template #name>
            <div>
              <span class="mr-1 text-md font-bold">{{ summoner?.name }}</span>
              <span
                class="inline-flex flex-nowrap items-center text-xs text-n4">
                <Icon
                  name="i-hash"
                  class="inline size-3 align-baseline text-n5" />
                {{ summoner?.tag }}
              </span>
            </div>
          </template>
        </UUser>

        <div
          class="pointer-events-auto absolute -top-1.5 -right-4.5 flex grow items-center justify-end gap-5 pl-5">
          <UTooltip
            v-if="s?.puuid && settings?.favorite_summoners"
            :content="{ side: 'bottom', sideOffset: 16 }"
            as-child
            :text="
              s?.puuid === user().account?.puuid
                ? 'Is you.'
                : isFavorite
                  ? 'Remove from faves'
                  : 'Add to faves'
            ">
            <!--
                      :disabled="s?.puuid === user().account?.puuid" -->
            <ToggleGroup v-model:model-value="settings.favorite_summoners">
              <ToggleGroupItem class="absolute" :value="s.puuid" as-child>
                <UButton
                  variant="ghost"
                  size="sm"
                  square
                  :ui="{
                    base: 'gap-0',
                    label: 'group-hover/btn:underline'
                  }">
                  <Icon
                    :name="
                      isFavorite //|| s?.puuid === user().account?.puuid
                        ? 'i-streamline-heart-solid'
                        : 'i-streamline-heart'
                    "
                    :class="
                      cn(
                        'absolute size-3.75! scale-100 **:stroke-[1.6]!',
                        isFavorite //|| s?.puuid === user().account?.puuid
                          ? 'animate-heartbeat text-dom-400/90!'
                          : 'text-n5'
                      )
                    " />
                </UButton>
              </ToggleGroupItem>
            </ToggleGroup>
          </UTooltip>

          <UDropdownMenu
            :content="{
              side: 'top',
              align: 'end',
              sideOffset: 3,
              alignOffset: -14
            }"
            size="sm"
            class="pointer-events-auto"
            :items="toolbar"
            :ui="{
              item: 'gap-2',
              content: 'min-w-44 rounded-lg shadow-sm drop-shadow-sm',
              itemLeadingIcon: 'size-4 **:stroke-[2.6]'
            }">
            <Tooltip label="Menu">
              <UButton
                square
                size="sm"
                :ui="{
                  base: '',
                  leadingIcon: 'size-4!'
                }"
                icon="i-more"
                variant="ghost" />
            </Tooltip>
          </UDropdownMenu>
          <Grow />
        </div>
      </div>
    </CommandGroup>
  </div>
</template>
