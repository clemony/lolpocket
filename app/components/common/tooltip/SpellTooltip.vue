<script setup lang="ts">
import { spells } from "#shared/constants/misc/spells"

const { id, class: className } = defineProps<{
  id: number
  class?: HTMLAttributes["class"]
}>()

const spell = computed(() => spells[id])
</script>

<template>
  <div
    v-if="spell"
    :class="
      cn(
        'relative flex size-full flex-col justify-center overflow-hidden',
        className
      )
    ">
    <div class="= flex w-full items-center gap-4 **:select-none">
      <Spell
        :id="spell.id"
        class="size-10 shrink-0 bg-transparent!"
        no-tip
        :alt="`${spell.name} Image`" />

      <div class="flex size-full flex-col justify-center gap-1">
        <div class="flex items-center justify-between">
          <h2 class="dst grow text-xl leading-none">
            {{ spell.name }}
          </h2>
          <!--          <a
            :key="spell.id"
            :title="`Official LoL Wiki - ${spell.name}`"
            :href="wikiLink(spell.name)"
            target="_blank"
            alt="link to league wiki"
          >
            <img
              class="size-5 shrink-0 rounded-sm"
              src="/img/logos/wiki.webp"
              alt="wiki"
            >
          </a> -->
        </div>

        <div
          class="flex w-full items-center justify-start gap-4 *:inline-flex *:w-fit *:items-center *:gap-1 *:align-baseline *:leading-4 **:text-sm **:font-medium *:first:-ml-1">
          <Tooltip
            v-if="spell?.cd || spell?.recharge"
            class="badge-tooltip-hover"
            :label="spell?.cd ? 'Cooldown' : 'Recharge'">
            <Icon
              class="inline size-3.25 **:stroke-[2.6]"
              name="hugeicons:hourglass" />
            {{ spell.cd || spell.recharge }}
          </Tooltip>
          <Tooltip
            v-if="spell?.charges"
            label="charges"
            class="badge-tooltip-hover">
            <Icon
              class="inline size-3.25 **:stroke-[2.2]"
              :name="`charge-${spell.charges}`" />
            {{ spell.charges }}
          </Tooltip>
          <Tooltip v-if="spell.range" label="Range" class="badge-tooltip-hover">
            <Icon
              class="inline size-3.75 translate-y-[0.45px] **:stroke-[2.2]"
              name="stat:rangeCenter" />
            {{ spell.range }}
          </Tooltip>
        </div>
      </div>
    </div>

    <USeparator class="my-2 w-full" color="p3" />

    <div
      :key="spell.id"
      class="flex h-max w-full max-w-105 flex-col justify-between gap-8 overflow-y-auto">
      <span class="font-medium text-pretty whitespace-pre-line">
        {{ spell.description }}
      </span>
    </div>
  </div>
</template>
