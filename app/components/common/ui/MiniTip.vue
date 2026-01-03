<script setup lang="ts">
import { AbilityTooltip, ChampionData, ItemTooltip, RuneData, SpellData } from '#components'

const { id, name, class: className, icon, label, size, tag, text } = defineProps<{
  id?: string
  label: string
  icon?: string
  name?: string
  tag?: string
  text?: string
  size?: 'default' | 'md' | 'lg'
  class?: HTMLAttributes['class']
}>()

const color = computed (() => label === 'item' ? itemColorByTier(Number(id)) : 'var(--color-nc)')

const labelIndex = {
  ability: AbilityTooltip,
  champion: ChampionData,
  item: ItemTooltip,
  rune: RuneData,
  spell: SpellData
}

function itemName(label: string, id: string) {
  return (
    label === 'item'
      ? itemNameById(Number.parseFloat(id))
      : label === 'champion'
        ? champNameById(Number.parseFloat(id))
        : label === 'rune'
          ? runeNameById(Number.parseFloat(id))
          : label === 'spell'
            ? spellNameById(Number.parseFloat(id))
            : label === 'shard'
              ? shardById(Number.parseFloat(id)).description
              : label === 'path'
                ? id
                : label === 'ability'
                  ? abilityNameById(id)
                  : null
  )
}

function iconSource(type: string, id: string) {
  return (
    type === 'player'
      ? getSummonerIcon(id)
      : `/img/${type}s/${id}.webp`
  )
}
</script>

<template>
  <div :class="cn('flex cursor-pointer flex-nowrap items-center **:text-start **:text-nc/70', { ' px-2  py-1.5 gap-3': size !== 'lg' })">
    <Suspense v-if="size === 'lg' && label">
      <component
        :is="labelIndex[label]"
        :id="label === 'ability' ? id : parseInt(id)" />
      <template #fallback>
        <Spinner />
      </template>
    </Suspense>

    <template v-else>
      <!-- IMG -->

      <Img
        v-if="id && label"
        :src="iconSource(label, id)"
        loading-style="spinner"
        :size="size === 'md' ? 'c-8' : 'c-5'"
        :alt="`${name || itemName(label, id)} Image`"
        :class="cn('origin-left scale-110 overflow-hidden rounded-full shadow-sm drop-shadow-sm', { 'scale-100 object-contain': label === 'path' })">
      </Img>

      <!-- ICON -->
      <Icon
        v-if="icon"
        :name="icon"
        class="" />
      <div
        :class="cn('flex flex-nowrap **:text-start',
                   {
                     'items-center gap-3 ': !size || size === 'default',
                     'flex-col items-start! gap-px': size === 'md' })">
        <!-- PLAYER -->
        <span
          v-if="label === 'player'"
          :style="{ color }"
          class="inline-flex h-5 w-fit items-center align-baseline leading-none">
          {{ name }}

          <span class="ml-1 inline text-0!">
            #{{ tag }}
          </span>
        </span>

        <!-- if value has no data id -->
        <div
          v-else-if="!id"
          :style="{ color }"
          :class="cn('inline w-full pl-1 leading-5 text-pretty whitespace-pre-line first-letter:capitalize', className)">
          {{ label }}
        </div>
        <span
          v-else-if="label && id"
          :style="{ color }"
          class="h-4 text-start leading-4 opacity-80">
          {{ itemName(label, id) }}
        </span>
        <span
          v-if="!name"
          class="-ml-1 inline align-baseline text-1 first-letter:capitalize">
          {{ tag }}
        </span>
        <p
          v-if="text && size === 'md'"
          :class="cn('text-2! leading-4 text-pretty whitespace-pre-line', { '': icon || (id && label) })">
          {{ text }}
        </p>
      </div>
    </template>
  </div>
</template>
