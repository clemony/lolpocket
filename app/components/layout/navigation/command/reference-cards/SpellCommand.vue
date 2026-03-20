<script lang="ts" setup>
import { spellIndex } from "~~/shared/constants/misc/spell-index"

const { id, class: className } = defineProps<{
  id: number
  class?: HTMLAttributes["class"]
}>()

const spell = computed(() => spellIndex[id])
const gridClass = "grid grid-cols-4 font-medium *:even:font-mono"
</script>

<template>
  <div class="grid h-max w-full pt-1 pb-2">
    <div class="grid h-max w-full grid-cols-[1fr_1.5fr] gap-4">
      <div class="flex w-full flex-col">
        <UCard
          variant="outline"
          :ui="{
            root: 'w-full divide-y divide-p3 bg-p0/50',
            header:
              'flex w-full shrink-0 flex-col items-center justify-center gap-3 overflow-hidden py-3!',
            body: 'p-3!',
            footer:
              'inline-flex w-full justify-between gap-1.5 px-3! py-1! align-baseline text-sm font-medium'
          }">
          <template #header>
            <!-- IMG -->

            <LazyAvatar
              v-if="id"
              size="12"
              :src="`/img/spells/${id}.webp`"
              :alt="`${spell?.name} Image`" />
            <!-- NAME / LINK -->

            <div class="text-center">
              <h4 class="text-xl leading-none font-bold text-nowrap">
                {{ spell?.name }}
              </h4>

              <!-- RANK -->
              <span class="text-sm font-semibold text-n5 italic opacity-90">
                lv. {{ spell?.level }}
              </span>
            </div>
          </template>
        </UCard>
      </div>

      <div
        class="flex w-full flex-col divide-y divide-p3/80 *:py-2 *:first:pt-1! *:last:pb-1!">
        <p class="inline-flex text-pretty">
          {{ spell?.description }}
        </p>
        <div v-if="spell?.charges" :class="gridClass">
          <span>Charges:</span>
          <span>{{ spell?.charges }}</span>

          <span>Recharge:</span>
          <span>{{ spell?.recharge }}</span>
        </div>

        <p v-else :class="gridClass"><span>Cooldown:</span>{{ spell?.cd }}</p>

        <p :class="gridClass"><span>Range:</span> {{ spell?.range }}</p>
      </div>
    </div>
  </div>
</template>
