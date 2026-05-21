<script lang="ts" setup>
import { useSortable } from "@dnd-kit/vue/sortable"
import { parseAbsoluteToLocal } from "@internationalized/date"
import { useTableInject } from "~/composables/ui/useTableProvider"
import { clickFriendlySensors } from "~/domain/pocket/helpers/sortableSensors"
import { getSplash, getSplashFromSkinKey } from "~/domain/utils/img"

const props = defineProps<{
  pocket: Pocket
  index?: number
}>()

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
const element = useTemplateRef<HTMLElement>("element")
const handle = useTemplateRef<HTMLElement>("handle")

useSortable({
  id: computed(() => props.pocket.key),
  type: "pocket",
  accept: "pocket",
  index: computed(() => props.index ?? 0),
  group: computed(() => props.pocket.location || "backpack"),
  element,
  handle,
  sensors: clickFriendlySensors,
  disabled: computed(() => editing.value || contextOpen.value),
  data: computed(() => props.pocket)
})

const { isRowSelected, setRowSelected } = useTableInject<Pocket>()
function onSelectionChange(event: Event, rowId: string) {
  setRowSelected(
    rowId,
    event.target instanceof HTMLInputElement && event.target.checked
  )
}
</script>

<template>
  <label ref="element">
    <input
      v-if="pocket"
      :checked="isRowSelected(pocket.key)"
      type="checkbox"
      class="peer hidden"
      :value="pocket.key"
      @change="onSelectionChange($event, pocket.key)" />

    <PerspectiveCard
      :class="
        cn({
          'w-full rounded-xl ring ring-pc ring-offset-4': isRowSelected(
            pocket.key
          )
        })
      ">
      <PocketContextMenu
        v-model:open="contextOpen"
        :item="pocket"
        :disabled="editing || !pocket"
        @toggle-edit="editPocketLabelDialog()">
        <UCard
          :ui="{
            root: 'divide group/card w-full divide-y drop-shadow-md transition-transform duration-200 ease-out',
            header: 'min-h-28 p-0!',
            body: 'relative pt-9! pb-4!'
          }">
          <UButton
            ref="handle"
            :ui="{ base: 'absolute top-1 right-1' }"
            label="drag" />
          <template #header>
            <div class="relative size-full grow bg-p2">
              <div
                class="pointer-events-none relative isolate aspect-20/9 size-full overflow-hidden object-cover">
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
              <!--       <div class="absolute top-1 right-1 size-10">
                <SvgMask v-if="position" class="size-full" :mask-key="position" />
              </div> -->

              <FoilLayer
                :disabled="!champion"
                :ui="{
                  root: 'group/card absolute -bottom-9 left-3 isolate z-2 size-22 overflow-hidden rounded-lg bg-p0 p-1.5 transition-all duration-500 ease-spring-soft group-hover/hover-card:scale-102'
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
              date: 'pointer-events-auto! inline-flex w-full items-center gap-1',
              meta: 'mb-0 w-full',
              title: 'truncate text-nowrap',
              authors: 'px-px pt-0.5'
            }">
            <template #date>
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
                Patch {{ date ?? "Hazy" }}
              </span>
            </template>

            <template #description>
              <PocketItemSet :pocket :position="computed(() => position)" />
              <Grow />
              <div
                class="pointer-events-auto size-fit transition-all duration-600 ease-spring-soft hover:scale-110"></div>
              <Grow />
              <PocketRunes :pocket />
            </template>
            <template #authors>
              <div
                class="mt-2 inline-flex flex-nowrap items-center gap-1 align-middle text-xs">
                <PocketAuthor :pocket="pocket" :author-id="accountId" />
                <template v-if="isPickedPocket">
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
  </label>
</template>
