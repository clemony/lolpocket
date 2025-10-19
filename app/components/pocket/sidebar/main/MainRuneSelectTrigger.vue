<script setup lang="ts">
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
      class="overflow-hidden relative size-20  grid place-items-center   **:pointer-events-none ">
      <RuneAndPathImg

        placement="left"
        variant="ghost"
        class=" group/btn  fx-0 z-10  rounded-full !cursor-pointer !pointer-events-auto **:pointer-events-none !size-16  hover:shadow-sm hover:shadow-black/4"

        :set="mainSet" />
      <div class="@6xl:block @6xl:animate-in @6xl:slide-in-from-right @6xl:fade-in hidden flex flex-col overflow-hidden shrink">
        <h3
          v-memo="[mainSet]"
          :class="cn('truncate  leading-7', {
            'dss group-hover/c:underline': mainSet?.keystone,
            '!font-normal  opacity-10': !mainSet?.keystone,
          })">
          {{ ix().runeNameById(mainSet?.keystone) || 'Keystone' }}
        </h3>

        <p
          v-memo="[mainSet?.secondary?.path]"
          :class="cn('text-3 truncate italic  leading-none', {
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