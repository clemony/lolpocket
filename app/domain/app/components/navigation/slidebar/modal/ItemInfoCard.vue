<script lang="ts" setup>
import type { ObjectDataReturn } from "~/domain/app/composables/useObjectData"
import { asItem } from "~/domain/app/types/typeAssert"

import { itemPrice } from "~~/shared/constants/items/itemPrice"
import { mapToItem } from "~~/shared/constants/items/mapToItem"
import { mapIndex } from "~~/shared/constants/misc/map-index"

const props = defineProps<{
  objectData: ObjectDataReturn
  map?: MaybeRefOrGetter<number | undefined>
}>()

const emit = defineEmits(["openObject"])
const open = shallowRef<boolean>(false)
const toggleOpen = useToggle(open)

const { data, idRef, typeRef, updateObject } = toRefs(props.objectData)
const mapRef = computed(() => toValue(props?.map))
const item = computed(() =>
  typeRef.value === "item" ? (data.value as Item | null | undefined) : null
)

const filteredFrom = computed<ItemComponent[]>(() => {
  if (!item.value?.buildsFrom) return []

  return item.value.buildsFrom.filter((i) =>
    mapRef.value ? mapToItem[mapRef.value]?.includes(i.id) : true
  )
})

const filteredInto = computed<ItemComponent[]>(() => {
  if (!item.value?.buildsInto) return []

  return item.value.buildsInto.filter((i) =>
    mapRef.value ? mapToItem[mapRef.value]?.includes(i.id) : true
  )
})

const has = computed(() => {
  const flags: string[] = []
  if (item.value?.buildsInto) flags.push("buildsInto")
  if (item.value?.passives) flags.push("passives")
  if (item.value?.active?.[0]) flags.push("actives")
  if (item.value?.buildsFrom) flags.push("buildsFrom")
  return flags
})
</script>

<template>
  <InfoCardWrapper :object-data="props.objectData">
    <!-- DESCRIPION -->
    <template #default>
      <!-- REQ CHAMP -->
      <div
        v-if="item?.requiredChampion"
        class="w-full border-b border-b-n3/80 pb-2 text-nc">
        <i
          >Unique to <b>{{ item.requiredChampion }}.</b></i
        >
      </div>

      <LazyItemStats
        class="**:text-nc"
        :item="asItem(data)"
        :stats="asItem(data).stats" />

      <span
        v-if="!item?.stats"
        class="whitespace-pre-line text-nc"
        v-html="item?.description" />
    </template>

    <template #footer>
      <div class="flex items-center gap-1 overflow-hidden">
        <UTooltip
          v-for="m in asItem(data)?.maps"
          :key="m"
          arrow
          as-child
          side="bottom"
          :text="mapIndex.find((i) => i.id === m)?.name">
          <div class="h-4 w-6">
            <Icon
              :name="`i-lp-${m}`"
              class="size-4 text-nc opacity-30 group-hover/tt:opacity-100" />
          </div>
        </UTooltip>
      </div>

      <span class="align-center inline-flex gap-1.5 font-medium">
        <Icon
          class="dst inline size-3.5 self-center stroke-pc/30 stroke-4 text-vanguard/90"
          name="i-lp-gold"
          alt="item price" />
        {{ itemPrice[Number(idRef)] }}
      </span>
    </template>

    <template #collapsible>
      <UCollapsible
        v-if="has.length"
        v-model:open="open"
        :ui="{
          root: 'inset-y-0 flex grow flex-row-reverse',
          content:
            'origin-left overflow-hidden py-3 data-[state=closed]:animate-[collapsible-width-close_300ms_ease-out] data-[state=open]:animate-[collapsible-width-open_300ms_ease-out]',
        }">
        <template #content>
          <div class="w-full shrink overflow-hidden">
            <div
              class="relative h-max w-[240px] min-w-[240px] shrink-0 overflow-hidden">
              <div
                v-if="has.length"
                class="flex w-full flex-col gap-y-4 px-2 pb-0 text-sm *:last:mb-3">
                <!-- RECIPE -->

                <template v-if="item?.buildsFrom">
                  <Separator
                    :ui="{
                      root: cn('hover:unset! pointer-events-none mt-3 h-0', {
                        'bg-transparent': has[0] === 'buildsFrom',
                      }),
                      label: 'font-semibold!',
                    }"
                    size="xs"
                    label="RECIPE"
                    color="neutral" />
                  <div
                    class="flex items-center gap-1 px-0.5 pt-px pb-1 font-medium text-n5">
                    <template v-for="(fromItem, i) in filteredFrom" :key="i">
                      <button @click="emit('openObject', fromItem.id)">
                        <LazyAvatar
                          :src="`/img/item/${fromItem.id}.webp`"
                          :alt="fromItem.name"
                          size="lg"
                          as="button"
                          :debug-delay-ms="2500"
                          :ui="{
                            root: 'hover:ring-1 hover:ring-n3/60 hover:ring-offset-1 hover:ring-offset-n1',
                          }"
                          :label="`${fromItem.name}  ${fromItem.gold}g`" />
                      </button>
                      <Icon
                        v-if="i !== item.buildsFrom.length - 1"
                        class="mx-1 size-3.5 text-nc"
                        name="i-add" />
                    </template>
                    <Icon
                      class="mx-1 size-3.5 text-n5 **:stroke-[12%]!"
                      name="i-add" />
                    <Icon
                      class="dst size-3.5 stroke-pc/30 stroke-4 text-vanguard/90"
                      name="i-lp-gold"
                      alt="coin" />
                    {{ item.gold?.base }}
                  </div>
                </template>

                <!-- EFFECTS -->
                <template v-if="item?.passives?.length && !item?.noEffects">
                  <Separator
                    class="my-0 opacity-0 **:bg-transparent! first:hidden"
                    color="neutral" />
                  <LazyItemEffect
                    v-for="(passive, i) in item.passives"
                    :key="i"
                    layout="command"
                    :class="cn('font-medium text-nc **:text-sm')"
                    unique="text-vanguard font-semibold"
                    :data="passive"
                    type="Passive" />
                </template>

                <!-- ACTIVES -->
                <template v-if="item?.active?.[0] && item?.noEffects !== true">
                  <Separator class="first:hidden" color="neutral" />
                  <LazyItemEffect
                    layout="command"
                    :class="cn('font-medium text-nc **:text-sm')"
                    :data="item.active[0]"
                    unique="text-vanguard font-semibold"
                    type="Active"
                    class="**:text-sm" />
                </template>

                <!-- component OF -->

                <template v-if="data && item?.buildsInto">
                  <Separator
                    :ui="{
                      root: 'hover:unset! pointer-events-none mt-3 h-0',
                      separator: cn({
                        'bg-transparent hidden opacity-0':
                          has[0] === 'buildsFrom',
                      }),
                      label: 'font-semibold!',
                    }"
                    size="xs"
                    label="BUILDS INTO"
                    color="neutral" />

                  <div
                    class="group grid w-full max-w-full grid-cols-[repeat(auto-fill,minmax(32px,1fr))] grid-rows-[repeat(auto-fill,minmax(32px,1fr))] items-center justify-start gap-1 overflow-hidden pt-px pb-1">
                    <button
                      v-for="(buildItem, i) in filteredInto"
                      :key="i"
                      @click="updateObject(buildItem.id)">
                      <LazyAvatar
                        :id="buildItem.id"
                        as="button"
                        size="lg"
                        :tooltip="{
                          arrow: true,
                        }"
                        :label="`${buildItem.name} ‑ ${buildItem.gold}g`"
                        :src="`/img/item/${buildItem.id}.webp`"
                        :alt="buildItem.name"
                        :ui="{
                          root: 'rounded-xl! ring ring-nc/10 hover:ring-offset-1 hover:ring-offset-nc/30',
                        }" />
                    </button>
                  </div>
                </template>
                <ItemExternalLinks v-if="item" :item="item" />
              </div>
            </div>
          </div>
        </template>
        <template #default>
          <div class="inset-y-0 mt-7 flex grow">
            <UButton
              variant="ghost"
              icon="i-right"
              :ui="{
                base: 'anchor h-full! max-h-full! min-h-full! w-6 max-w-6! min-w-6! grow overflow-visible rounded-lg rounded-br-4xl! after:absolute after:h-full after:w-10 after:place-self-center after:rounded-lg hover:bg-n4/60! hover:inset-ring-n4!',
                leadingIcon:
                  'transition-rotate text-nc/40 duration-200 ease-spring-soft group-hover/btn:text-nc open:rotate-180',
              }"
              aria-label="Close"
              :aria-describedby="`Collapse ${data?.name} additional info.`" />
          </div>
        </template>
      </UCollapsible>
    </template>
  </InfoCardWrapper>
</template>
