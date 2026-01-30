<script setup lang="ts">
const { id, class: className } = defineProps<{
  id: number
  class?: HTMLAttributes['class']
}>()

const spell = computed(() => spells[id])
</script>

<template>
  <div
    v-if="spell"
    :key="spell.id"
    :class="
      cn(
        'relative flex size-full flex-col justify-center overflow-hidden py-3',
        className,
      )
    "
  >
    <div class="flex w-full items-center gap-4 px-4 **:select-none">
      <Spell
        :id="spell.id"
        class="size-10 shrink-0 bg-transparent!"
        no-tip
        :alt="`${spell.name} Image`"
      />

      <div class="flex size-full flex-col justify-center gap-1">
        <div class="flex items-center justify-between">
          <h2 class="dst grow text-lg! leading-none">
            {{ spell.name }}
          </h2>
          <a
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
          </a>
        </div>

        <div
          class="flex w-full items-center justify-start gap-4 *:flex *:w-fit *:items-center *:gap-0.25"
        >
          <span
            v-if="spell.cd || spell.recharge"
            class="font-medium"
            :title="spell.cd ? 'Cooldown' : 'Recharge'"
          >
            <Icons class="inline size-3" name="stat:abilityHaste" />
            {{ spell.cd || spell.recharge }}s
          </span>
          <span v-if="spell.charges" class="font-medium" title="Charges">
            <Icons
              class="absolute inline size-5.25 **:stroke-[1.3]"
              size="4"
              wrapper-class="w-fit relative grid place-items-center"
              :name="`lp:charge-${spell.charges}`"
            />
            {{ spell.charges }}
          </span>
          <span v-if="spell.range" class="font-medium" title="Range">
            <Icons class="inline size-3" name="stat:rangeCenter" />
            {{ spell.range }}
          </span>
        </div>
      </div>
    </div>

    <Separator class="w-full px-4" color="neutral" :size="3" />

    <div
      :key="spell.id"
      class="flex h-max w-full max-w-105 flex-col justify-between gap-8 overflow-y-auto px-4.5"
    >
      <span class="text-pretty whitespace-pre-line">
        {{ spell.description }}
      </span>
    </div>
  </div>
</template>
