<script setup lang="ts">
const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
)
const championKey = computed(() => pocket.value?._champion ?? null)
const championTitle = computed(() =>
  championKey.value ? championToTitle[championKey.value] : undefined
)
</script>

<template>
  <div
    v-if="pocket"
    class="inset-0 z-auto grid grid-cols-[1fr_2.5fr] gap-22">
    <div class="grid w-full grid-cols-[2.5fr_1fr] gap-4 pt-22">
      <div class="flex w-full flex-col gap-3">
        <div class="mb-2 h-16">
          <h1 class="leading-10 tracking-tight dst">
            {{ championKey }}
          </h1>
          <div class="text-lg font-medium italic">
            {{ championTitle }}
          </div>
        </div>
        <UPopover mode="hover">
          <UButton>
            <Champion
              class="aspect-square h-auto w-full max-w-80 inset-shadow-sm inset-shadow-black/20 *:scale-[130%]"
              :k="championKey ?? undefined"
              type="tile" />
          </UButton>
          <div
            class="open:animate-in open:fade-in closed:fade-out closed:animate-out h-[calc(var(--reka-hover-card-trigger-height)+3px)] w-[calc(var(--reka-hover-card-trigger-width)+3px)] -translate-x-0.75 -translate-y-[calc(var(--reka-hover-card-trigger-height)+6px)] border-p3 shadow-none drop-shadow-none"
            align="start"
            side="bottom" />
        </UPopover>
        <ChampionAbilityTabs :k="championKey ?? undefined" />
      </div>

      <div
        class="grid-rows-max grid h-fit w-full place-items-center pt-20.5 *:w-full">
        <MainRuneSelect :pocket>
          <CoreRuneTrigger :pocket />
        </MainRuneSelect>
        <MainSpellSelect
          class="size-14"
          :pocket />
      </div>
    </div>
    <div class="flex w-full flex-col gap-4 pt-22">
      <div class="h-16">
        <h2 class="leading-10 tracking-tight dst">
          Pocket Stats
        </h2>
        <div class="text-lg font-medium italic" />
      </div>
      <div class="grid grid-cols-3 gap-8">
      </div>
    </div>
  </div>
</template>
