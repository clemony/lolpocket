<script lang="ts" setup>
import type {
  AvatarProps,
  BadgeProps,
  PageLinksProps,
  TabsItem,
} from "@nuxt/ui"
import Fuse from "fuse.js"
import type { SidebarSearchEntry } from "~/domain/app/utils/searchEntries"
import { searchEntries } from "~/domain/app/utils/searchEntries"

const emit = defineEmits(["openPopover"])

const query = shallowRef<string>()

const fuse = computed(
  () =>
    new Fuse(searchEntries.value, {
      includeScore: true,
      threshold: 0.3,
      ignoreLocation: true,
      keys: [
        { name: "title", weight: 4 },
        { name: "keys", weight: 2.5 },
        { name: "subtitle", weight: 1.5 },
        { name: "description", weight: 0.75 },
      ],
    })
)

const results = computed(() => {
  const term = query.value?.trim()
  return term ? fuse.value.search(term, { limit: 50 }).map((r) => r.item) : []
})

const groupedResults = computed(() =>
  Object.groupBy(results.value, (r) => r.group)
)

const groups: Record<
  string,
  Omit<BadgeProps, "label"> &
    AvatarProps & {
      tip?: string
      label: string
      id?: string
      description?: string
    }
> = {
  page: {
    label: "page",
    tip: "Go to page",
    description: "Navigate to a page",
    color: "neutral",
    icon: "i-lucide-file-input",
    ui: { icon: "scale-96 **:stroke-[10%]!" },
  },
  rune: {
    label: "rune",
    description: "Quickly view a rune's info.",
    color: "sorc",
    icon: "i-lp-rune",
    ui: { icon: "**:stroke-[4%]!" },
  },
  item: {
    label: "item",
    description: "Item information in compact form.",
    color: "insp",
    icon: "i-lp-sword-fill",
  },
  champion: {
    label: "champion",
    id: "champ",
    description: "Navigate to a champion's profile.",
    color: "res",
    icon: "i-lp-champ",
    ui: { icon: "scale-96" },
  },
  spell: {
    label: "spell",
    description: "Tiny spell cards with big info.",
    color: "dom",
    icon: "i-book-fill",
    ui: { icon: "scale-96" },
  },
}

const summoner = {
  label: "summoner",
  description: "Type a name, then ⇥ tab to add tag.",
  icon: "i-lp-minion", // i-lucide-lab-hat-bowler
  ui: { icon: "scale-96" },
}

function onClick(item: SidebarSearchEntry) {
  if (item.to) navigateTo(item.to)
  else emit("openPopover", item)
}
</script>

<template>
  <SlidebarWrapper title="Search" overlay="vertical">
    <template #subtitle> </template>

    <template #description>
      <div class="flex h-13 w-full shrink-0 items-center justify-start">
        <UInput
          v-model:model-value="query"
          variant="soft"
          size="lg"
          color="neutral"
          :ui="{
            root: 'w-full',
            base: 'rounded-4xl! ring-1! inset-ring-0 ring-n5',
          }"
          :model-modifiers="{ trim: true }"
          icon="i-search">
          <template #trailing>
            <LazyInputClear
              color="neutral"
              variant="outline"
              :ui="{
                base: 'ring-0 inset-ring-0 group-hover/label:**:text-nc! hover:bg-transparent! hover:fx-0!',
              }"
              @clear-input="query = ''" />
          </template>
        </UInput>
      </div>
    </template>
    <template #default>
      <div class="grid auto-rows-max grid-cols-1 gap-1 pt-36 pb-6">
        <template v-if="results.length">
          <UTooltip
            v-for="(item, i) in results"
            :key="i"
            arrow
            :text="groups[item.group]?.tip">
            <UButton
              variant="ghost"
              size="xl"
              :ui="{
                base: 'w-full! justify-between rounded-4xl shadow-none! inset-ring-p4/60! drop-shadow-none! hover:bg-p3/60!',
              }"
              @click="onClick(item)">
              <UUser
                :icon="item.icon"
                :avatar="item.avatar"
                :ui="{
                  root: 'w-full',
                  wrapper: 'w-full',
                  description: '',
                  name: 'flex w-full items-center justify-between text-start',
                }"
                size="lg"
                :name="item.label">
                <template #description>
                  <div class="relative">
                    <span
                      v-if="item.description"
                      :class="
                        cn('line-clamp-1 text-start group-hover/user:opacity-0')
                      ">
                      {{ item.description }}
                    </span>
                    <span
                      v-if="item.description"
                      :class="
                        cn(
                          'absolute inset-0 line-clamp-1 text-start transition-discrete duration-200 ease-spring-soft'
                        )
                      ">
                      {{ item.description }}
                    </span>
                  </div>
                </template>
              </UUser>
              <template #trailing>
                <UBadge
                  :color="groups[item.group]?.color"
                  :label="groups[item.group]?.id || item.group"
                  size="xs"
                  :ui="{
                    base: cn('gap-px rounded-md px-1.75 drop-shadow-xs', {
                      ' pr-1 !': groups[item.group]?.trailingIcon,
                      'bg-n2': groups[item.group]?.color === 'neutral',
                    }),
                    label: cn('text-xs font-medium capitalize', {
                      'text-p0': groups[item.group]?.color !== 'neutral',
                    }),
                    trailingIcon: cn('', {
                      'text-p0': groups[item.group]?.color !== 'neutral',
                    }),
                  }" />
              </template>
            </UButton>
          </UTooltip>
        </template>

        <template v-else>
          <ul class="mb-12 w-full space-y-12">
            <li class="flex w-full flex-col gap-14">
              <div class="px-2">
                <Separator label="Summoner Search" color="p4" />
              </div>
              <ul
                class="text-balanced inline-block w-fit justify-center self-center rounded-2xl px-6 py-4 text-center align-baseline text-sm leading-6.5 font-medium text-n3 inset-ring inset-ring-p4/60">
                <li>Start a text search with the</li>
                <li>
                  summoner's name, then
                  <UKbd value="tab" class="mx-px inline-flex bg-p0/60" />
                  to the
                </li>
                <li>tag field.</li>
              </ul>
            </li>
          </ul>
          <ul class="w-full space-y-6">
            <li class="w-full">
              <ul class="flex w-full flex-col gap-4">
                <li class="px-2">
                  <Separator label="Categories" color="p4" />
                </li>
                <UButton
                  v-for="(item, i) in Object.values(groups)"
                  :key="i"
                  size="xl"
                  block
                  :ui="{
                    base: 'rounded-xl shadow-none! drop-shadow-none! hover:bg-p2! hover:inset-ring! hover:inset-ring-p4/60',
                  }"
                  variant="ghost"
                  as="li"
                  @click="query = item.label">
                  <UUser
                    size="sm"
                    :ui="{
                      ...item.ui,
                      root: 'w-full gap-3',
                      name: 'capitalize',
                      wrapper: 'text-start',
                    }"
                    :avatar="{
                      icon: item.icon,
                      ui: {
                        ...item.ui,
                        icon: cn(
                          'z-3! size-4.5 text-nc! **:text-nc!',
                          item.ui?.icon
                        ),
                      },
                    }"
                    :name="item.label"
                    :description="item.description" />
                </UButton>
              </ul>
            </li>

            <li class="border-t border-p4/50 px-3 py-6 font-medium opacity-90">
              Know what you're looking for? Search directly by a name or
              keyword.
            </li>
          </ul>
        </template>
      </div>
    </template>
  </SlidebarWrapper>
</template>
