<script lang="ts" setup>
import type { ObjectDataReturn } from "~/domain/app/composables/useObjectData"
import { asRune } from "~/types/typeAssert"

const props = defineProps<{
  objectData: ObjectDataReturn
}>()

const { data } = props.objectData

const tier = computed(() => {
  const slot = asRune(data.value)?.tier
  return slot === 0 ? "Keystone" : slot
})
</script>

<template>
  <InfoCardWrapper :object-data="props.objectData">
    <Separator color="neutral" />
    <div
      class="w-full px-2 pt-1 pb-2 text-sm text-pretty whitespace-pre-line"
      v-html="asRune(data)?.description" />

    <template #footer>
      <div
        class="flex size-full items-center justify-between pr-3 pl-2 text-sm">
        <div class="inline-flex align-baseline">
          <NuxtImg
            :alt="`${asRune(data)?.path}-icon`"
            :src="`/img/path/${asRune(data)?.pathId}.webp`"
            :name="`i-lp-${asRune(data)?.path}`"
            class="size-4" />
        </div>

        <div class="flex items-center gap-1 text-sm text-n5">
          <Icon
            name="i-gravity-ui-layers-3-diagonal"
            class="size-3.5 text-n5" />
          {{ tier }}
        </div>
      </div>
    </template>
  </InfoCardWrapper>
</template>
