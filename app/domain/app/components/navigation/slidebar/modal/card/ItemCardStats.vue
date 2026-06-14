<script lang="ts" setup>
import { statIndex } from "#shared/constants/common/stat-index"

interface MasterworkStats {
  stats?: Record<string, number>
  bonusStats?: Record<string, number>
}
defineOptions({
  inheritAttrs: false,
})

const { class: className, item } = defineProps<{
  item: Item
  class?: HTMLAttributes["class"]
}>()

const mw = computed(() => {
  if (typeof item.masterwork === "object")
    return safeObject(item.masterwork?.stats)
  return null
})
const bonus = computed(() => {
  if (typeof item.masterwork === "object")
    return safeObject(item.masterwork?.bonusStats)
  return null
})

const masterwork = shallowRef<boolean>(false)
const toggleMasterwork = useToggle(masterwork)
</script>

<template>
  <template v-if="item.stats">
    <Separator
      label="STATS"
      class="my-0!"
      :ui="{
        label: 'text-2xs font-semibold',
      }"
      color="neutral">
      <template #trailing>
        <div class="anchor relative order-last ml-2 h-5 w-8">
          <UButton
            size="sm"
            icon="i-mdi-anvil"
            color="transparent"
            :ui="{
              base: cn(
                'anchor liquid-n2 absolute rounded-full hover:ring hover:ring-n3',
                {
                  'liquid-active ring ring-n3': masterwork,
                }
              ),
              leadingIcon: cn('size-4 text-nc/60 group-hover/btn:text-nc', {
                'text-nc': masterwork,
              }),
            }"
            :aria-label="
              masterwork ? 'Show Default Stats' : 'Show Masterwork Stats'
            "
            @click="toggleMasterwork()" />
        </div>
      </template>
    </Separator>
    <div
      v-for="[k, v] in Object.entries(item.stats)"
      :key="k"
      :class="
        cn(
          'grid h-max auto-rows-fr items-center gap-px truncate px-1.5 text-sm leading-4.25 text-nowrap',
          className
        )
      "
      :data-color="k">
      <div
        class="col-start-1 inline-flex items-center gap-1 align-baseline text-sm">
        <span class="font-medium">{{ v ?? "" }}</span>
        <Icon
          v-if="statIndex[k]?.unit === '%'"
          name="i-lucide-percent"
          class="-ml-1 inline size-3.5 self-center align-baseline" />
        <span v-else>{{ statIndex[k]?.unit ?? "" }}</span>
        <span class="font-medium">
          {{
            ["HSP", "APEN", "MPEN"].includes(statIndex[k]?.key ?? "")
              ? statIndex[k]?.abbr
              : statIndex[k]?.name
          }}
        </span>
      </div>
    </div>
  </template>
</template>
