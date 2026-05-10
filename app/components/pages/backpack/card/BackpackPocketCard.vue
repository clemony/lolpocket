<script lang="ts" setup>
import { parseAbsoluteToLocal } from "@internationalized/date"
import { getSplash, getSplashFromSkinKey } from "~/domain/utils/img"
import { bootIndex } from "~~/shared/constants/items/rankToItem"
import { roleItems } from "~~/shared/constants/items/roleItemIndex"

const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed(() => {
  return safeObject(props.pocket)
})

const { account, summoner } = storeToRefs(user())
const acc = safeObject(account.value)
const sum = safeObject(summoner.value)
const date = computedOnce(() => {
  const dateValue = parseAbsoluteToLocal(
    String(pocket.value.updated || pocket.value.created)
  )
  return getPatchForDate(dateValue)
})
const newLabel = shallowRef<string>("")
const editing = shallowRef<boolean>(false)
const toggleEditing = useToggle(editing)

function toggleEdit() {
  newLabel.value = props.pocket.label || ""
  toggleEditing()
}

const champion = computed(
  () => pocket.value._champion || pocket.value.champions?.[0]
)
const image = computed(() => {
  if (!pocket.value.skin && !champion.value) return null
  else {
    function champion(type: SplashType) {
      return pocket.value._champion
        ? getSplash(String(pocket.value._champion), type)
        : pocket.value.champions?.[0]
          ? getSplash(String(pocket.value.champions?.[0]), type)
          : null
    }
    return pocket.value.skin
      ? getSplashFromSkinKey(pocket.value.skin, "centered")
      : champion("centered")
  }
})

const menuOpen = shallowRef<boolean>(false)

const position = computed(() => {
  return pocket.value._position || pocket.value.positions?.[0]
})

async function editPocketLabelDialog() {
  const input = useInputModal()
  const returned = await input({
    title: "Edit Pocket Name",
    description: `Getting sick of "${props.pocket.label}"? Roll the dice with the randomizer or make it exactly what you want.`,
    defaultValue: props.pocket.label,
    input: {
      color: "neutral"
    }
  })
  console.log("🥸 - editPocketLabelDialog - returned:", returned)
  return returned
}

const items = computed(() => {
  if (!pocket.value.items?.length) return
  if (pocket.value._items)
    return pocket.value.items.find((set) => set.id === pocket.value._items)
      ?.items
  else if (pocket.value.items[0]?.items?.length)
    return pocket.value.items[0]?.items
  else return null
})

function roleItemId() {
  const item = roleItems[position.value as keyof typeof roleItems]
  return Array.isArray(item) ? (item[0] ?? null) : (item ?? null)
}

const posAndSr = computed(() =>
  ["all", 11].includes(pocket.value._map) && position.value === "bot"
    ? true
    : ["all", 11].includes(pocket.value._map)
      ? "sr"
      : false
)

interface QuestItemSet {
  quest?: number | null
  src?: string | null
  items?: number[] | null
}
const botQuest = computed<QuestItemSet | undefined>(() => {
  if (posAndSr.value !== true) return
  const boot = new Set(bootIndex)
  const boots = items.value ? items.value.filter((i) => boot.has(i))[0] : null
  return {
    quest: boots || roleItemId() || 0,
    src: boots ? `/img/item/${boots}.webp` : "/img/role/bot.webp",
    items: items.value ? items.value.filter((i) => !boot.has(i)) : items.value
  }
})

const itemSet = computed<QuestItemSet>(() => {
  if (posAndSr.value === true) {
    if (botQuest.value) return botQuest.value
  }
  if (posAndSr.value === "sr")
    return {
      quest: roleItemId() ?? 0,
      src: position.value ? `/img/role/${position.value}.webp` : "",
      items: items.value
    }
  return { quest: 0, src: "", items: items.value }
})
</script>

<template>
  <PerspectiveCard class="w-full">
    <PocketContextMenu
      v-model:open="menuOpen"
      :item="pocket"
      :disabled="editing || !pocket"
      @toggle-edit="editPocketLabelDialog()">
      <UCard
        :ui="{
          root: 'divide w-full divide-y drop-shadow-md transition-transform duration-200 ease-out',
          header: 'min-h-28 p-0!',
          body: 'relative pt-9! pb-4!'
        }">
        <template #header>
          <div class="relative size-full grow bg-p2">
            <div
              class="relative isolate aspect-20/9 size-full overflow-hidden object-cover">
              <FoilLayer>
                <NuxtImg
                  v-if="image"
                  :src="image"
                  width="500"
                  height="300"
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  format="webp"
                  fetchpriority="high"
                  loading="eager"
                  decoding="async"
                  preload
                  class="z-1 size-full shrink-0 translate-y-5 scale-180 rounded-none object-cover transition-all duration-500 ease-spring-soft group-hover/hover-card:scale-186!" />
              </FoilLayer>
            </div>
            <div class="absolute top-1 right-1 size-10">
              <SvgMask v-if="position" class="size-full" :mask-key="position" />
            </div>

            <FoilLayer
              :disabled="!champion"
              :ui="{
                root: 'absolute -bottom-9 left-3 isolate z-2 size-22 overflow-hidden rounded-lg bg-p0 p-1.5 transition-all duration-500 ease-spring-soft group-hover/hover-card:scale-102'
              }">
              <UAvatar
                icon="i-lp-champ"
                :src="
                  champion
                    ? `/img/champion/${champIdByKey(String(champion))}.webp`
                    : undefined
                "
                :title="champion ? champNameByKey(String(champion)) : undefined"
                width="80"
                height="80"
                sizes="80px"
                :ui="{
                  root: 'fx-noise z-0 size-full rounded-none! inset-ring inset-ring-p3 *:rounded-none',
                  icon: 'size-5.5 opacity-60',
                  image:
                    'shadow-sm drop-shadow-sm transition-all duration-500 ease-spring-soft group-hover/hover-card:scale-104!'
                }" />
            </FoilLayer>
          </div>
        </template>
        <UBlogPost
          orientation="vertical"
          size="sm"
          variant="naked"
          :title="pocket.label"
          :ui="{
            root: 'w-full grow items-start! gap-4! px-5! py-0',
            description:
              'mt-2 flex w-full grow items-center justify-between overflow-visible',
            header: 'overflow-visible',
            body: 'size-full grow justify-between! gap-y-0.5 pt-1! pb-1.5',
            date: 'inline-flex w-full items-center justify-between',
            meta: 'mb-0 w-full',
            title: 'truncate text-nowrap',
            authors: 'px-px pt-0.5'
          }">
          <template #date>
            <span class="text-xs font-semibold text-nowrap">
              Patch {{ date ?? "Hazy" }}
            </span>
          </template>

          <template #description>
            <PocketItemSet :items="itemSet?.items ?? items" />
            <Grow />
            <div
              class="pointer-events-auto size-fit transition-all duration-600 ease-spring-soft hover:scale-110">
              <Tooltip
                :disabled="!itemSet?.quest"
                :label="
                  itemSet?.quest ? itemNameById(itemSet.quest) : undefined
                "
                :avatar="itemSet?.src ?? ''">
                <FoilLayer
                  :disabled="!itemSet?.quest"
                  :ui="{
                    root: 'isolate z-2 size-fit overflow-hidden rounded-full bg-p0'
                  }">
                  <UAvatar
                    type="item"
                    size="lg"
                    :src="itemSet?.src ?? ''"
                    :ui="{
                      root: 'pointer-events-auto!',
                      image:
                        'pointer-events-none shadow-sm drop-shadow-sm transition-all duration-500 ease-spring-soft group-hover/hover-card:scale-104!'
                    }" />
                </FoilLayer>
              </Tooltip>
            </div>
            <Grow />
            <PocketRunes :pocket />
          </template>
          <template #authors>
            <div
              class="mt-2 inline-flex flex-nowrap items-center gap-1 align-middle text-xs">
              <PocketAuthor
                :pocket="pocket"
                :author-id="user().account?.uuid" />
              <template
                v-if="
                  user().account?.uuid && pocket.ouuid !== user().account?.uuid
                ">
                picked
                <PocketAuthor :pocket="pocket" :author-id="pocket.ouuid" />
              </template>
              pocket
            </div>
          </template>
        </UBlogPost>
      </UCard>
    </PocketContextMenu>
  </PerspectiveCard>
</template>
