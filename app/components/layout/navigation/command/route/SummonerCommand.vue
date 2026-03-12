<script lang="ts" setup>
import { LazyReport } from "#components"
import type { ButtonProps, DropdownMenuItem } from "@nuxt/ui"
import { getSummonerIcon } from "~/domain/utils/img"

const emit = defineEmits(["update:open"])
const { summoner } = storeToRefs(sSession())
const s = safeObject(summoner)

const route = useRoute()
const overlay = useOverlay()

const report = overlay.create(LazyReport, {
  props: {},
})
async function openReport(): Promise<void> {
  emit("update:open", false)
  report.open()
}

const toolbar = computed<DropdownMenuItem[]>(() => [
  {
    label: "Block",
    icon: "i-ban",
  },
  {
    label: "Report",
    icon: "i-warning",
    onClick: () => openReport(),
  },
])

const { settings } = storeToRefs(user())

const isFavorite = computed(() =>
  settings.value?.favorite_summoners.includes(String(s.value?.puuid)),
)

const { champions } = storeToRefs(sData())
const { matches } = storeToRefs(sMatches())
console.log("🥸 - matches:", matches)
</script>

<template>
  <div class="grid w-full grid-cols-[1fr_2fr] gap-2 self-start py-1">
    <UCard
      :content="{
        body: {
          as: 'label',
          for: 'update-summoner',
        },
      }"
      :ui="{
        footer:
          'grid w-full grid-cols-4 items-center overflow-hidden p-0.75! *:size-full',
        body: 'grow py-5!',
        root: 'flex -translate-x-2 flex-col gap-0 space-y-0! divide-y overflow-hidden bg-p0/60 p-0!',
      }">
      <UpdateSummoner
        id="update-summoner"
        size="xs"
        side="bottom"
        color="neutral"
        class="group/label relative inset-0 z-0 grid size-full! w-min cursor-pointer place-items-center justify-center"
        :ui="{
          base: 'absolute z-2 translate-x-8.5 place-items-center rounded-full transition-all duration-200 ease-spring-bouncy group-hover/label:scale-110',
          leadingIcon:
            'transition-rotate duration-600 ease-out group-hover/label:rotate-360',
        }">
        <UUser
          orientation="vertical"
          :name="s?.name"
          :description="`#&hairsp;${s?.tag}`"
          size="header"
          :ui="{
            root: 'mx-auto grid w-fit place-items-center before:absolute before:top-13 before:-right-3 before:z-1 before:size-8.5 before:rounded-full before:bg-p0',
            avatar: '',
            wrapper: 'text-center',
            description: 'normal-case!',
            name: 'font-serif text-2xl font-bold normal-case!',
          }"
          :avatar="{ src: getSummonerIcon(s?.icon) }" />
      </UpdateSummoner>

      <template #footer>
        <UDropdownMenu
          :content="{
            side: 'top',
            align: 'start',
            sideOffset: 4,
            alignOffset: -2,
          }"
          size="xs"
          :items="toolbar"
          :ui="{
            item: 'gap-2',
            content: 'rounded-lg shadow-sm drop-shadow-sm',
          }">
          <UButton
            size="xs"
            :ui="{
              base: 'size-full justify-center rounded-bl-xl',
              leadingIcon: 'size-4!',
            }"
            icon="i-more"
            variant="ghost" />
        </UDropdownMenu>
        <span />
        <Tooltip label="Message" side="bottom">
          <UButton
            size="xs"
            :ui="{ base: 'size-full', leadingIcon: 'size-4! opacity-90' }"
            icon="i-chat"
            variant="ghost" />
        </Tooltip>
        <Tooltip
          v-if="s?.puuid && settings?.favorite_summoners"
          side="bottom"
          :label="
            s?.puuid === user().account?.puuid
              ? 'This you. You like yourself.'
              : isFavorite
                ? 'Remove from faves'
                : 'Add to faves'
          ">
          <ToggleGroup v-model:model-value="settings.favorite_summoners">
            <ToggleGroupItem class="w-full!" :value="s.puuid" as-child>
              <UButton
                :disabled="s?.puuid === user().account?.puuid"
                :icon="
                  isFavorite || s?.puuid === user().account?.puuid
                    ? 'i-heart-sm'
                    : 'i-teenyicons-heart-small-outline'
                "
                variant="ghost"
                size="xs"
                :ui="{
                  base: 'size-full justify-center rounded-br-xl',
                  leadingIcon: cn(
                    '-translate-y-px scale-200 **:stroke-[0.7]!',
                    isFavorite || s?.puuid === user().account?.puuid
                      ? 'text-dom! animate-heartbeat'
                      : 'text-pc',
                  ),
                }" />
            </ToggleGroupItem>
          </ToggleGroup>
        </Tooltip>
      </template>
    </UCard>
    <div class="flex w-[calc(100%+var(--spacing)*3)] flex-col gap-y-1 pt-1">
      <div class="flex flex-col px-2.5 text-start">
        <h6 class="text-sm text-pc">Navigation</h6>

        <p class="text-n4">
          Deep dive into data analysis, pick {{ s?.name }}'s pockets, or see
          what they're up to right now.
        </p>
      </div>

      <menu class="flex flex-col gap-y-1 pt-px">
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
              'group/link h-8.5! w-full gap-2.5 px-3.5 text-sm font-medium',
              link.to === route.path ? '' : '',
            ),
            // label: 'active:text-nc! active:**:text-nc',
            leadingIcon: cn('size-4.5', link.ui?.trailingIcon),
          }">
          {{ link.label }}

          <template #trailing>
            <div
              :class="
                cn(
                  'ms-auto grid size-4.5 -translate-x-0.5 place-items-center rounded-full',
                  link.to === route.path
                    ? '-translate-x-px bg-neutral/90 shadow-xs drop-shadow-sm'
                    : '',
                )
              ">
              <Icon
                :name="link.to === route.path ? 'i-tick-sm' : 'i-link'"
                :class="
                  cn(
                    'inline size-3.5! align-text-top group-hover/link:opacity-100',
                    link.to === route.path
                      ? 'scale-120 opacity-100 **:stroke-[1.6]! **:text-nc'
                      : 'opacity-50',
                  )
                " />
            </div>
          </template>
        </UButton>
      </menu>

      <!--       <Separator size="xs" class="my-1" /> -->
    </div>
  </div>
</template>
