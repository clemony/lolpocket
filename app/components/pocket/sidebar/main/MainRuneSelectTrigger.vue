<script setup lang="ts">
import type { Pocket } from '~~/shared/schema'

const {
  pocket: p,
} = defineProps<{
  class?: HTMLAttributes['class']
  pocket: Pocket
}>()

const pocket = computed(() => p)
const mainSet = computed(() =>
  pocket.value.runes.find(s => s.id === pocket.value.main?.runes)
)
</script>

<template>
  <SelectTrigger as-child>
    <Button
      variant="ghost"
      class="
        relative grid size-20 place-items-center overflow-hidden
        **:pointer-events-none
      ">
      <RuneAndPathImg

        placement="left"
        variant="ghost"
        class="
          group/btn !pointer-events-auto z-10 !size-16 !cursor-pointer
          rounded-full fx-0
          **:pointer-events-none
          hover:shadow-sm hover:shadow-black/4
        "

        :set="mainSet" />
      <div
        class="
          @6xl:animate-in @6xl:flex @6xl:slide-in-from-right @6xl:fade-in
          hidden shrink flex-col overflow-hidden
        ">
        <h3
          v-memo="[mainSet]"
          :class="cn('truncate leading-7', {
            'dss group-hover/c:underline': mainSet?.keystone,
            '!font-normal  opacity-10': !mainSet?.keystone,
          })">
          {{ ix().runeNameById(mainSet?.keystone) || 'Keystone' }}
        </h3>

        <p
          v-memo="[mainSet?.secondary?.path]"
          :class="cn('truncate text-3 leading-none italic', {
            'font-medium': mainSet?.secondary?.path,
            '!font-normal  opacity-20': !mainSet?.secondary?.path,
          })">
          {{ mainSet?.secondary.path || 'Secondary Path' }}
        </p>
      </div>
      <!--   <icon
            name="select"
            class=" size-4 absolute right-1.5" /> -->
    </Button>
  </SelectTrigger>
</template>