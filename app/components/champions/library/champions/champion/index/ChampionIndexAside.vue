<script setup lang="ts">
const { champion } = defineProps<{
  champion: Champion
}>()
const route = useRoute()

const wrapperClass = 'flex h-12  items-center justify-between border-b border-b-b3/60 capitalize *:first:opacity-50'
</script>

<template>
  <aside
    class="flex flex-col px-1 shrink-0 gap-10 scrollbar-hidden py-22 w-120 overflow-y-auto sticky top-0">
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
          cn('justify-start  !gap-4 rounded-xl', {
            'btn-active !bg-tint-b2/70 drop-shadow-sm drop-shadow-black/6': route.hash === `#${ability.key}`,
          })
        "
        :to="{ path: route.path, hash: `#${ability.key}` }"
        variant="ghost">
        <span
          class="size-10 rounded-lg shadow-sm drop-shadow-sm overflow-hidden">
          <Img
            :img="ability.icon"
            :alt="ability.name" />
        </span>
        {{ ability.name }}
      </BtnLink>
    </menu>

    <ChampionStats
      v-model:open="ui().collapseStates.championInfo[0]"
      :champion />

    <Collapsible
      v-model:open="ui().collapseStates.championInfo[1]"
      class="data  field-box ">
      <CollapsibleTrigger
        class="flex  min-h-16 h-16 w-full px-5  data-[state=open]:border-b  data-[state=open]:border-b-b3 items-center justify-between">
        <h3>Data</h3>

        <CaretFlip />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <LazyChampionAsideData
          :champion
          :wrapper-class />
      </CollapsibleContent>
    </Collapsible>

    <Collapsible
      v-model:open="ui().collapseStates.championInfo[2]"
      class="field-box">
      <CollapsibleTrigger
        class="flex min-h-16 h-16 w-full  px-5  data-[state=open]:border-b  data-[state=open]:border-b-b3  items-center justify-between">
        <h3>Bio</h3>

        <CaretFlip />
      </CollapsibleTrigger>
      <CollapsibleContent
        class="px-5 py-4">
        <div :class="wrapperClass">
          <p>Full name</p>
          {{ champion.fullName || champion.name }}
        </div>
        <div :class="wrapperClass">
          <p>Faction</p>
          {{ champion.faction }}
        </div>
        <p class="mt-4 text-pretty indent-2 leading-7 pl-2">
          {{ champion.lore }}
        </p>
      </CollapsibleContent>
    </Collapsible>
  </aside>
</template>

<style scoped>
.data .label {
  padding-top: 8px;
  padding-bottom: 1px;
}
</style>