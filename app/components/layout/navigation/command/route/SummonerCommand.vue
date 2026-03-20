<script lang="ts" setup>
import { LazyReport } from "#components"
import type { DropdownMenuItem } from "@nuxt/ui"
import { getSummonerIcon } from "~/domain/utils/img"
import { descriptionLabel } from "../build/styles"

const emit = defineEmits(["update:open"])
const { summoner } = storeToRefs(sSession())
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

const toolbar = computed<DropdownMenuItem[]>(() => [
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
</script>

<template>
  <div class="grid w-full grid-cols-[1fr_2fr] gap-x-5 self-start py-2">
    <UpdateSummonerCard />
    <div class="flex flex-col gap-y-1">
      <div
        :class="
          cn(descriptionLabel.itemLabel, 'w-full justify-start pt-2 pb-1')
        ">
        <div
          class="justify-betaween pointer-events-none relative flex w-full grow items-center pr-2 text-start">
          <h6 :class="cn(descriptionLabel.itemLabelBase, 'text-md font-bold')">
            {{ s?.name }}
          </h6>

          <span
            class="-ml-1.5 inline-flex items-center gap-0 align-baseline text-sm">
            <Icon
              name="i-hash"
              class="inline size-3.5! align-baseline text-n5" />
            {{ s?.tag }}
          </span>

          <Grow />
          <div
            class="inline-flex shrink-0 items-center gap-1 justify-self-end align-baseline">
            <Tooltip
              v-if="s?.puuid && settings?.favorite_summoners"
              side="bottom"
              class="pointer-events-auto"
              as-child
              :label="
                s?.puuid === user().account?.puuid
                  ? 'Is you.'
                  : isFavorite
                    ? 'Remove from faves'
                    : 'Add to faves'
              ">
              <!--
                  :disabled="s?.puuid === user().account?.puuid" -->
              <ToggleGroup v-model:model-value="settings.favorite_summoners">
                <ToggleGroupItem class="w-full!" :value="s.puuid" as-child>
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
            </Tooltip>
            <UpdateSummoner
              id="update-summoner"
              v-slot="{ disabled, isLoading }"
              class="pointer-events-auto"
              size="sm"
              variant="ghost"
              as-child
              :ui="{
                base: 'grid cursor-pointer place-items-center rounded-md',
                leadingIcon: '**:stroke-[2.3]'
              }">
              <UButton
                size="sm"
                :variant="disabled ? 'solid' : 'ghost'"
                :ui="{
                  base: disabled ? 'shadow-none inset-shadow-xs' : '',
                  leadingIcon: disabled
                    ? 'opacity-30'
                    : isLoading
                      ? 'animate-rotate repeat-infinite'
                      : 'transition-rotate size-3.5! opacity-60 duration-600 ease-out group-hover/btn:opacity-100 group-hover/label:rotate-360'
                }"
                :icon="disabled ? 'i-lucide-refresh-cw-off' : 'i-refresh'" />
            </UpdateSummoner>
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
              <UButton
                square
                size="sm"
                :ui="{
                  base: '',
                  leadingIcon: 'size-4!'
                }"
                icon="i-more"
                variant="ghost" />
            </UDropdownMenu>
          </div>
        </div>

        <p :class="descriptionLabel.itemLabelSuffix">
          Deep dive into data analysis, pick {{ s?.name }}'s pockets, or view
          their current match status.
        </p>
      </div>

      <menu class="flex flex-col pt-px">
        <UButton
          v-for="link in sSession().currentSummonerNav.children"
          :key="link.label"
          as="li"
          :trailing-icon="link.to === route.path ? 'i-tick' : 'i-link'"
          variant="highlight"
          :active="link.to === route.path"
          :label="link.label"
          color="p1"
          :icon="link.icon"
          :to="link.to"
          :ui="{
            base: cn(
              'group/link h-8.5! w-full gap-2.5 px-2 text-sm font-medium',
              link.to === route.path ? '' : ''
            ),
            // label: 'active:text-nc! active:**:text-nc',
            leadingIcon: cn('size-4.5', link.ui?.leadingIcon)
          }">
          {{ link.label }}

          <template #trailing>
            <div
              :class="
                cn(
                  'ms-auto grid size-4.5 -translate-x-0.5 place-items-center rounded-full',
                  link.to === route.path
                    ? '-translate-x-px bg-neutral/90 shadow-xs drop-shadow-sm'
                    : ''
                )
              ">
              <Icon
                :name="link.to === route.path ? 'i-tick-sm' : 'i-link'"
                :class="
                  cn(
                    'inline size-4! align-text-top group-hover/link:opacity-100',
                    link.to === route.path
                      ? 'scale-120 opacity-100 **:stroke-[1.6]! **:text-nc'
                      : 'opacity-50'
                  )
                " />
            </div>
          </template>
        </UButton>
      </menu>
    </div>
  </div>
</template>
