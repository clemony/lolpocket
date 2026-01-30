<script setup lang="ts">
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const {
  filter,
  matches,
} = storeToRefs(s_matches())

const { summoner } = storeToRefs(s_session())
const roleStats = await useMatchRoles(summoner.value.puuid, matches.value)

const roleModel = computed({
  get: () => filter.value.role,
  set: val => s_matches().setFilter('role', val),
})
</script>

<template>
  <div class="w-full">
    <div class="mb-2 -ml-1 flex items-center">
      <Button
        class="gap-2 place-self-center rounded-lg px-2.5 text-md font-medium"
        size="sm"
        variant="ghost"
        :class="{ 'pointer-events-none': ms().filter.role === 'ALL' }"
        @click="s_matches().clearFilters()"
      >
        {{
          ms().filter.role !== "ALL"
            ? roleStats.find((r) => r.role === ms().filter.role).name
            : "Position"
        }}

        <icon
          v-if="ms().filter.role !== 'ALL'"
          class="-mt-px shrink-0"
          name="x-sm"
        />
      </Button>
    </div>

    <div class="h-15 w-full justify-start overflow-hidden px-2">
      <transition-slide
        class="relative flex w-full flex-wrap gap-5"
        :offset="{ enter: [10, 0], leave: [-10, 0] }"
        group
      >
        <template v-for="role in roleStats" :key="role.role">
          <label
            v-if="ms().filter.role === 'ALL' || ms().filter.role === role.role"
            v-tippy="{
              content: `${role.name} - ${role.games} game${role.games > 1 ? 's' : ''}`,
            }"
            class="grid size-14 place-items-center"
            for="item-types"
            :class="
              cn({
                'order-2 border-neutral bg-neutral shadow-sm shadow-neutral/20':
                  role.role === ms().filter.role,
                'btn mr-0 btn-square size-14 border-b3/80': role.games,
              })
            "
          >
            <input
              v-model="ms().filter.role"
              class="peer absolute hidden"
              type="radio"
              :disabled="!role.games"
              :value="role.role"
              name="item-types"
            >

            <component
              :is="`i-roles-${role.role.toLowerCase().replace(' ', '-').replace('utility', 'support')}`"
              class="h-5 w-auto shrink-0 dst peer-checked:text-nc"
              :class="{ 'text-bc/80!': role.name === 'ALL' }"
            />
          </label>
        </template>
      </transition-slide>
    </div>
  </div>
</template>

<style scoped></style>
