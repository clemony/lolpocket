<script setup lang="ts">
const { champion } = defineProps<{
  champion: Champion
}>()
const route = useRoute()

const wrapperClass =
  "flex h-12  items-center justify-between border-b border-b-p3/60 capitalize *:first:opacity-50"
</script>

<template>
  <aside
    class="sticky top-0 scrollbar-hidden flex w-120 shrink-0 flex-col gap-10 overflow-y-auto px-1 py-22">
    <menu class="space-y-2">
      <h3 class="mb-4 dst">
        Abilities
      </h3>
      <BtnLink
        v-for="ability in champion.abilities"
        :key="ability.name"
        as="li"
        size="xl"
        :class="
          cn('justify-start gap-4! rounded-xl', {
            'btn-active bg-tint-p2/70! drop-shadow-sm drop-shadow-black/6':
              route.hash === `#${ability.key}`,
          })
        "
        :to="{ path: route.path, hash: `#${ability.key}` }"
        variant="ghost">
        <span
          class="size-10 overflow-hidden rounded-lg shadow-sm drop-shadow-sm">
          <Img :src="ability.icon" :alt="ability.name" />
        </span>
        {{ ability.name }}
      </BtnLink>
    </menu>

    <ChampionStats v-if="champion?.stats" :champion />

    <Collapsible
      v-model:open="ui().collapseStates.championInfo[1]"
      class="field-box data">
      <CollapsibleTrigger
        class="flex h-16 min-h-16 w-full items-center justify-between px-5 open:border-b open:border-b-p3">
        <h3>Data</h3>

        <CaretFlip />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <LazyChampionAsideData :champion :wrapper-class />
      </CollapsibleContent>
    </Collapsible>

    <Collapsible
      v-model:open="ui().collapseStates.championInfo[2]"
      class="field-box">
      <CollapsibleTrigger
        class="flex h-16 min-h-16 w-full items-center justify-between px-5 open:border-b open:border-b-p3">
        <h3>Bio</h3>

        <CaretFlip />
      </CollapsibleTrigger>
      <CollapsibleContent class="px-5 py-4">
        <div :class="wrapperClass">
          <p>Full name</p>
          {{ champion.fullName || champion.name }}
        </div>

        <p class="mt-4 pl-2 indent-2 leading-7 text-pretty">
          {{ champion.lore }}
        </p>
      </CollapsibleContent>
    </Collapsible>
  </aside>
</template>
