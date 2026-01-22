<script setup lang="ts">
import { spells } from '~~/layers/domain/records/spells';

const {
  id,
  class: className,
} = defineProps<{
  id: number
  class?: HTMLAttributes['class']
}>()

const spell = computed (() => spells[id])
</script>

<template>
  <div
    v-if="spell"
    :key="spell.id"
    :class="
      cn('relative flex size-full flex-col justify-center overflow-hidden py-3',
         className,
      )
    ">
    <div class="flex w-full items-center gap-4 px-4 **:select-none">
      <Spell
        :id="spell.id"
        no-tip
        :alt="`${spell.name} Image`"
        class="size-10 shrink-0 bg-transparent!" />

      <div class="flex size-full flex-col justify-center gap-1">
        <div class="flex items-center justify-between">
          <h2 class="grow text-lg! leading-none dst">
            {{ spell.name }}
          </h2>
          <a
            :key="spell.id"
            :title="`Official LoL Wiki - ${spell.name}`"
            :href="wikiLink(spell.name)"
            target="_blank"
            alt="link to league wiki">
            <img
              src="/img/logos/wiki.webp"
              alt="wiki"
              class="size-5 shrink-0 rounded-sm" />
          </a>
        </div>

        <div class="flex w-full items-center justify-start gap-4 *:flex *:w-fit *:items-center *:gap-0.25">
          <span
            v-if="spell.cd || spell.recharge"
            :title="spell.cd ? 'Cooldown' : 'Recharge'"
            class="font-medium">
            <Icons
              name="stat:abilityHaste"
              class="inline size-3" />
            {{ spell.cd || spell.recharge }}s
          </span>
          <span
            v-if="spell.charges"
            title="Charges"
            class="font-medium">
            <Icons
              size="4"
              wrapper-class="w-fit relative grid place-items-center"
              :name="`lp:charge-${spell.charges}`"
              class="absolute inline size-5.25 **:stroke-[1.3]" />
            {{ spell.charges }}
          </span>
          <span
            v-if="spell.range"
            title="Range"
            class="font-medium">
            <Icons
              name="stat:rangeCenter"
              class="inline size-3" />
            {{ spell.range }}
          </span>
        </div>
      </div>
    </div>

    <Separator
      color="neutral"
      class="w-full px-4"
      :size="3" />

    <div
      :key="spell.id"
      class="flex h-max w-full max-w-105 flex-col justify-between gap-8 overflow-y-auto px-4.5">
      <span
        class="text-pretty whitespace-pre-line">
        {{ spell.description }}
      </span>
    </div>
  </div>
</template>