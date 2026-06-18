<script lang="ts" setup>
import type { ObjectDataReturn } from "~/domain/app/composables/useObjectData"
import { asSpell } from "~/types/typeAssert"

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  objectData: ObjectDataReturn
}>()

const emit = defineEmits<{
  (e: "close"): void
}>()

const { data, idRef, color, subtitle, typeRef } = props.objectData
</script>

<template>
  <UCard
    variant="ghost"
    :ui="{
      root: 'relative w-full shrink-0 p-0!',
      header:
        'relative flex w-full shrink-0 flex-col items-center justify-center gap-4 overflow-hidden pt-5! pb-4! text-nc',
      body: 'mb-10 flex h-max! max-h-full grow flex-col gap-2 px-2.5! pb-3! text-nc',
      footer:
        'absolute inset-x-0 bottom-0 h-10 max-h-10 w-full self-end p-1! text-sm font-medium text-nc after:absolute after:inset-x-2.5 after:top-0 after:h-px after:bg-nc/10',
    }">
    <template #header>
      <!-- IMG -->

      <LazyUAvatar
        v-if="idRef"
        size="3xl"
        :ui="{ root: 'pointer-events-none bg-n3/70 ring! ring-n3/80' }"
        :src="`/img/${typeRef}/${idRef}.webp`"
        :alt="`${data?.name} Image`" />
      <!-- NAME / LINK -->

      <div class="text-center">
        <h4 class="text-lg leading-none font-bold text-nowrap">
          {{ data?.name }}
        </h4>

        <!-- SUBTITLE -->
        <span
          class="text-sm font-semibold text-n5 italic opacity-90"
          :style="{
            color,
          }">
          {{ typeRef === "spell" ? `lv. ${asSpell(data)?.level}` : subtitle }}
        </span>
      </div>
    </template>

    <slot :data />

    <template #footer>
      <slot name="footer" :data />
    </template>
  </UCard>
</template>
