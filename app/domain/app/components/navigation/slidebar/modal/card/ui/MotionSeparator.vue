<script lang="ts" setup>
import { mapIndex } from "~~/shared/constants/misc/map-index"
const { item, class: className } = defineProps<{
  item: Item
  class?: HTMLAttributes["class"]
}>()
const masterwork = defineModel<boolean>("masterwork", { default: false })
const clicked = refAutoReset<boolean>(false, 150)
const toggleMasterwork = useToggle(masterwork)
function showMasterwork() {
  if (!clicked.value) clicked.value = true
  toggleMasterwork()
}

const hoveredMap = shallowRef<string>("")

const maps = computed(() =>
  item?.maps
    ?.map((map) => ({
      value: map,
      label: mapIndex.find((i) => i.id === map)?.name,
    }))
    .filter(Boolean)
)
</script>

<template>
  <div
    v-motion="{ layout: 'size' }"
    :class="cn('flex w-full flex-nowrap items-center', className)">
    <div
      v-if="item.stats"
      v-motion="{ layout: 'size' }"
      class="inline-flex shrink-0 items-center gap-1 align-baseline text-2xs font-semibold text-nc/60">
      <AnimatePresence>
        <span
          v-if="masterwork"
          v-motion="{
            layout: 'size',
            initial: {
              maxWidth: 0,
              width: 0,
              opacity: 0,
            },
            animate: {
              maxWidth: '100%',
              width: '100%',
              opacity: 1,
            },
            exit: {
              maxWidth: 0,
              width: 0,
              opacity: 0,
            },
            transition: {
              duration: 0.4,
              ease: 'easeOut',
            },
          }"
          class="origin-left"
          >MASTERWORK</span
        > </AnimatePresence
      ><span class="mr-1">STATS</span>
    </div>

    <div
      v-motion="{
        layout: 'size',
        transition: {
          duration: 0.4,
          ease: 'easeOut',
        },
      }"
      class="ml-2 flex h-px grow bg-nc/10" />
    <div class="flex items-center gap-2">
      <div v-if="item.masterwork" class="flex shrink-0 items-center">
        <div class="anchor relative h-5 w-6">
          <GlassTooltip
            :content="{ side: 'right', sideOffset: 30 }"
            :text="masterwork ? 'Show Base Stats' : 'Show Masterwork Stats'"
            arrow>
            <UButton
              size="xs"
              icon="i-mdi-anvil"
              :active="masterwork"
              color="transparent"
              :ui="{
                base: cn(
                  'anchor absolute rounded-full duration-100! hover:bg-p2! hover:inset-ring hover:inset-ring-n3',
                  {
                    'bg-p2 hover:bg-n5! hover:inset-shadow-xs   inset-ring inset-ring-n3':
                      masterwork,
                    'animate-click-sm': clicked,
                  }
                ),
                leadingIcon: cn('size-4 text-nc/80 group-hover/btn:text-pc', {
                  'text-pc group-hover/btn:text-nc!': masterwork,
                }),
              }"
              :aria-label="
                masterwork ? 'Show Base Stats' : 'Show Masterwork Stats'
              "
              @click="showMasterwork()" />
          </GlassTooltip>
        </div>
      </div>
      <div class="anchor relative h-5 w-6">
        <GlassTooltip
          :hide-on-click="false"
          arrow
          :content="{ side: 'right', sideOffset: 8 }"
          :ui="{ content: 'h-max!', surface: 'h-max!' }">
          <UButton
            :aria-label="`Available on ${maps?.map((map) => map.label).join(', ')}`"
            size="xs"
            color="transparent"
            :ui="{
              base: 'anchor absolute place-self-center rounded-full duration-100! hover:bg-p2! hover:inset-ring hover:inset-ring-n3',
              leadingIcon: 'size-4 text-nc/80 group-hover/btn:text-pc',
            }"
            icon="i-info" />
          <template #content>
            <ul class="flex h-max! flex-col gap-1">
              <li
                v-for="map in maps"
                :key="map.value"
                class="inline-flex items-center gap-2 align-baseline">
                <Icon
                  :name="`i-lp-${map.value}`"
                  class="inline size-4 text-nc opacity-80" />
                <span class="mr-2 grow text-start">{{ map.label }}</span>
                <Icon name="check" class="inline size-4 align-icon text-nc" />
              </li>
            </ul>
          </template>
        </GlassTooltip>
      </div>
    </div>
  </div>
</template>
