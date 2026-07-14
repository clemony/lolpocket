<script lang="ts" setup>
import { parseAbsoluteToLocal } from "@internationalized/date"
import { getSplash, getSplashFromSkinKey } from "~/domain/utils/img"

defineOptions({
  inheritAttrs: false
})
const props = defineProps<{
  pocket: SortablePocket
  index?: number
  isSelected?: ComputedRef<boolean>
}>()
console.log("🥸 - isSelected?:", props.isSelected)

const pocket = computed(() => {
  return safeObject(props.pocket)
})

const userStore = user()
const { account } = storeToRefs(userStore)
const accountId = computed(() => account.value?.uuid)
const isPickedPocket = computed(
  () => Boolean(accountId.value) && pocket.value.ouuid !== accountId.value
)
const date = computedOnce(() => {
  const dateValue = parseAbsoluteToLocal(
    String(pocket.value.updated || pocket.value.created)
  )
  return getPatchForDate(dateValue)
})
const newLabel = shallowRef<string>("")
const editing = shallowRef<boolean>(false)
const toggleEditing = useToggle(editing)

const champion = computed(
  () => pocket.value._champion || pocket.value.champions?.[0]
)
function championImage(type: SplashType) {
  return champion.value ? getSplash(String(champion.value), type) : undefined
}
const image = computed(() => {
  if (!pocket.value.splash && !champion.value) return null
  else {
    return pocket.value.splash
      ? getSplashFromSkinKey(pocket.value.splash, "centered")
      : championImage("centered")
  }
})

const splash = computed(() => championImage("centered"))

const contextOpen = shallowRef<boolean>(false)

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
  return returned
}

const position = computed(() => {
  return pocket.value._position || pocket.value.positions?.[0]
})

const loaded = shallowRef<boolean>(false)
</script>

<template>
  <label
    ref="element"
    :class="
      cn('animate-in fade-in relative grid size-full rounded-4xl p-3', {
        '': props.isSelected
      })
    ">
    <PerspectiveCard>
      <PocketContextMenu
        v-model:open="contextOpen"
        :pocket
        :disabled="editing || !pocket"
        @toggle-edit="editPocketLabelDialog()">
        <div
          :class="
            cn('relative size-full', {
              'before:absolute before:inset-0 before:z-0 before:size-full before:scale-110 before:rounded-2xl before:border before:border-p0 before:bg-p1/60 before:shadow-md before:ring before:ring-p2 before:drop-shadow-md before:backdrop-blur-sm':
                props.isSelected?.value
            })
          ">
          <UCard
            :ui="{
              root: 'group/card relative w-full drop-shadow-md transition-transform duration-200 ease-out',
              header: 'px-3!',
              body: 'w-full gap-0! bg-transparent px-0! pt-0! pb-2!',
              footer:
                'pointer-events-auto! flex w-full items-center justify-between gap-1 border-t border-border px-3! py-1!'
            }">
            <div
              class="relative h-34 w-full cursor-move bg-p1 *:pointer-events-none">
              <FoilLayer
                :disabled="!splash"
                :ui="{
                  root: 'h-34 overflow-hidden rounded-none!'
                }">
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
                  :class="
                    cn(
                      'animate-in fade-in z-1 size-full shrink-0 translate-y-5 scale-180 rounded-none object-cover transition-all duration-500 ease-spring-soft group-hover/hover-card:scale-184!',
                      { 'opacity-0': !loaded }
                    )
                  "
                  @load="loaded = true" />
              </FoilLayer>
              <FoilLayer
                :disabled="!champion"
                :ui="{
                  root: 'group/card absolute -bottom-9 left-4 z-2 size-18! overflow-hidden rounded-full ring-5 ring-p0'
                }">
                <UAvatar
                  icon="i-lp-champ"
                  :src="
                    champion
                      ? `/img/champion/${champIdByKey(String(champion))}.webp`
                      : undefined
                  "
                  :title="
                    champion ? champNameByKey(String(champion)) : undefined
                  "
                  width="80"
                  height="80"
                  sizes="80px"
                  :ui="{
                    root: 'fx-noise z-0 size-full rounded-full! *:rounded-full',
                    icon: 'size-5.5 opacity-60',
                    image:
                      'shadow-sm drop-shadow-sm transition-all duration-500 ease-spring-soft group-hover/hover-card:scale-104!'
                  }" />
              </FoilLayer>
            </div>

            <div class="w-full grow items-start! gap-4! px-3 pt-10">
              <div
                class="flex w-full max-w-full flex-col overflow-hidden pb-0.5">
                <h4 class="w-full truncate text-lg text-nowrap">
                  {{ pocket.label ?? "Entitled Pocket" }}
                </h4>
                <div
                  class="size-full grow justify-between! gap-y-0.5 pt-1! pb-1.5">
                  <div
                    class="flex w-full grow items-center justify-between overflow-visible">
                    <PocketItemSet
                      :pocket
                      :position="computed(() => position)" />
                    <Grow />
                    <PocketRunes :pocket />
                  </div>
                </div>
              </div>
            </div>
            <template #footer>
              <div
                class="inline-flex flex-nowrap items-center gap-1 px-px align-middle text-xs">
                <PocketAuthor :pocket="pocket" :author-id="accountId" />
                <template v-if="isPickedPocket">
                  picked
                  <PocketAuthor :pocket="pocket" :author-id="pocket.ouuid" />
                </template>
                pocket
              </div>
              <div class="inline-flex items-center gap-1 align-middle">
                <Tooltip
                  :disabled="!position"
                  :icon="`i-lp-${position}`"
                  :label="position"
                  :ui="{ content: 'capitalize' }"
                  as-child>
                  <div
                    class="relative size-3.25 after:absolute after:inset-0 after:size-full after:scale-200">
                    <Icon
                      :name="`i-lp-${position}`"
                      class="size-3.25! scale-110 text-pc" />
                  </div>
                </Tooltip>
                <span class="text-xs font-semibold text-nowrap">
                  {{ date ?? "???" }}
                </span>
              </div>
            </template>
          </UCard>
        </div>
      </PocketContextMenu>
    </PerspectiveCard>
  </label>
</template>
