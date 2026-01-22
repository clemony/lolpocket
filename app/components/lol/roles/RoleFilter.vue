<script setup lang="ts">
const { class: className, summoner } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
}>()

const { clearFilters, filter, matches, setFilter, summoner: s } = useSummonerInject()

const roleStats = await useMatchRoles(
  s.value.puuid,
  matches,
)

const roleModel = computed({
  get: () => filter.value.role,
  set: val => setFilter('role', val),
})
</script>

<template>
  <div class="w-full">
    <div class="mb-2 -ml-1 flex items-center">
      <Button
        size="sm"
        variant="ghost"
        :class="{ 'pointer-events-none': ms().filter.role === 'ALL' }"
        class="gap-2 place-self-center rounded-lg px-2.5 text-md font-medium"
        @click="clearFilters()">
        {{
          ms().filter.role !== "ALL"
            ? roleStats.find((r) => r.role === ms().filter.role).name
            : "Position"
        }}

        <icon
          v-if="ms().filter.role !== 'ALL'"
          name="x-sm"
          class="-mt-px shrink-0" />
      </Button>
    </div>

    <div class="h-15 w-full justify-start overflow-hidden px-2">
      <transition-slide
        :offset="{ enter: [10, 0], leave: [-10, 0] }"
        group
        class="relative flex w-full flex-wrap gap-5">
        <template
          v-for="role in roleStats"
          :key="role.role">
          <label
            v-if="ms().filter.role === 'ALL' || ms().filter.role === role.role"
            v-tippy="{
              content: `${role.name} - ${role.games} game${role.games > 1 ? 's' : ''}`,
            }"
            for="item-types"
            class="grid size-14 place-items-center"
            :class="
              cn({
                'bg-neutral border-neutral shadow-neutral/20 shadow-sm order-2  ':
                  role.role === ms().filter.role,
                'border-b3/80 btn  size-14  mr-0 btn-square': role.games,
              })
            ">
            <input
              v-model="ms().filter.role"
              class="peer absolute hidden"
              type="radio"
              :disabled="!role.games"
              :value="role.role"
              name="item-types" />

            <component
              :is="`i-roles-${role.role.toLowerCase().replace(' ', '-').replace('utility', 'support')}`"
              class="h-5 w-auto shrink-0 dst peer-checked:text-nc"
              :class="{ 'text-bc/80!': role.name === 'ALL' }" />
          </label>
        </template>
      </transition-slide>
    </div>
  </div>
</template>

<style scoped></style>
