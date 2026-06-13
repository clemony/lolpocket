<script lang="ts" setup>
import type { ObjectDataReturn } from "~/domain/app/composables/useObjectData"

const props = defineProps<{
  objectData: ObjectDataReturn
}>()

const emit = defineEmits<{
  (e: "close"): void
}>()

const { data, idRef, color, subtitle } = toRefs(props.objectData)
</script>

<template>
  <div
    class="flex pr-1 pl-3 transition-[height] delay-200 duration-300 ease-in-out">
    <UCard
      variant="ghost"
      :ui="{
        root: 'min-h-60 w-64 shrink-0 grow divide-y divide-nc/10 pr-2! pb-0!',
        header:
          'relative flex w-full shrink-0 flex-col items-center justify-center gap-4 overflow-hidden pt-5! pb-4! text-nc',
        body: 'flex h-full max-h-full grow flex-col p-3! text-nc',
        footer:
          'sticky bottom-0 left-0 inline-flex max-h-10 w-full justify-between gap-1.5 self-end border-t border-nc/10 px-3! pt-2! pb-3! align-baseline text-sm font-medium text-nc',
      }">
      <template #header>
        <!-- IMG -->

        <LazyUAvatar
          v-if="idRef"
          size="5xl"
          :ui="{ root: 'bg-n3/70 ring ring-nc/10' }"
          :src="`/img/item/${idRef}.webp`"
          :alt="`${data?.name} Image`" />
        <!-- NAME / LINK -->

        <div class="text-center">
          <h4 class="text-xl leading-none font-bold text-nowrap">
            {{ data?.name }}
          </h4>

          <!-- SUBTITLE -->
          <span
            class="text-sm font-semibold text-n5 italic opacity-90"
            :style="{
              color,
            }">
            {{ subtitle }}
          </span>
        </div>
      </template>

      <slot :data />

      <template #footer>
        <slot name="footer" :data />
      </template>
    </UCard>
    <slot name="collapsible" />
  </div>
</template>
