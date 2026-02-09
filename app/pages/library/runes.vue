<script setup lang="ts">
definePageMeta({
  title: 'Runes',
  icon: 'lol:runes',

  description: 'Rune paths and the runes within them.',
  listClass: 'size-5.5 !bg-transparent',
  navClass: 'size-6',
  path: '/library/runes',
})

const selectedPath = ref<number>(830)
const selectedRune = ref<number | null>(null)
</script>

<template>
  <transition-slide
    class="dr-2000 relative flex size-full justify-center gap-14 pt-54"
    group>
    <div
      v-if="selectedRune"
      class="tldr-80 relative z-0 mt-22 max-h-165 w-114 max-w-114 flex-col"
      :class="{ 'opacity-0': !selectedRune, 'opacity-100': selectedRune }">
      <RuneTooltip
        :id="selectedRune"
        :key="selectedRune" />

      <CloseButton
        class="absolute top-0 right-0 shadow-none! btn-ghost"
        tip="Close"
        @click="selectedRune = null" />
    </div>

    <transition-fade
      class="z-1 order-first flex w-114 max-w-114 flex-col gap-8"
      group>
      <RunesBlurb
        v-if="selectedPath"
        :key="selectedPath"
        :current-path="pathRecord[selectedPath]?.name ?? null" />

      <Tabs v-model:model-value="selectedPath">
        <TabsList
          class="field-box h-19 w-full grid-cols-5 items-center justify-evenly rounded-box! bg-p2/40 shadow-warm">
          <div
            class="absolute top-0 left-0 size-full overflow-hidden rounded-box opacity-28">
            <div
              class="gradient absolute top-0 left-0 size-full mask-bottom-right"
              :data-path="selectedPath" />
          </div>

          <PathTabTrigger
            v-for="path in pathIndex"
            :key="path.id"
            v-tippy="path"
            :value="path.name" />

          <TabIndicator round />
        </TabsList>
      </Tabs>

      <!--       <KeystoneSelect
        v-model:selected="selectedRune"
        :runes="Object.values(pathRecord[selectedPath]?.slots?.[0])"
        @update:rune="(e) => (selectedRune = e)" />

      <RunePanels
        v-model:selected="selectedRune"
        :runes="pathRecord[selectedPath]?.slots.slice(1)"
        @update:rune="(e) => (selectedRune = e)" /> -->
    </transition-fade>
  </transition-slide>
</template>

<style></style>
