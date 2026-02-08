<script setup lang="ts">
/* import { AbilityTooltip, ChampionData, DataTooltip, ItemTooltip, RuneTooltip, SpellTooltip, StatTooltip } from '#components' */

const {
  id,
  name,
  class: className,
  icon,
  payload,
  size,
  tag,
  text,
  type,
} = defineProps<{
  id?: string
  type: string
  icon?: string
  img?: string
  name?: string
  tag?: string
  text?: string
  size?: "default" | "md" | "lg"
  class?: HTMLAttributes["class"]
  map?: string
  payload?: Record<string, number> | unknown
}>()
console.log("🥸 - type:", type)

watch(
  () => type,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)
const color = computed(() =>
  type === "item" ? itemColorByTier(Number(id)) : "var(--color-nc)"
)

/* const typeIndex = {
  ability: AbilityTooltip,
  champion: ChampionData,
  data: DataTooltip,
  item: ItemTooltip,
  rune: RuneTooltip,
  spell: SpellTooltip,
  stat: StatTooltip
} */

const staticSize = ["data", "stat"]

function itemName(type: string, id: string) {
  return (
    type === "item" ? itemNameById(Number.parseFloat(id))
    : type === "champion" ? champNameById(Number.parseFloat(id))
    : type === "rune" ? runeNameById(Number.parseFloat(id))
    : type === "spell" ? spellNameById(Number.parseFloat(id))
    : type === "shard" ? shardById(Number.parseFloat(id)).description
    : type === "path" ? id
    : type === "ability" ? abilityNameById(id)
    : null
  )
}

function iconSource(type: string, id: string) {
  return type === "player" ? getSummonerIcon(id) : `/img/${type}s/${id}.webp`
}
</script>

<template>
  <div
    :class="
      cn('flex cursor-pointer flex-nowrap items-center **:text-start', {
        'gap-3 px-2 py-1.5': size !== 'lg',
      })
    ">
    <!--  <Suspense v-if="(size === 'lg' || staticSize.includes(type)) && type">
      <component
        :is="typeIndex[type]"
        :id="type === 'ability' ? id : parseFloat(id)"
        :payload
        :map="parseFloat(map)" />
      <template #fallback>
        <Spinner />
      </template>
    </Suspense>
 -->

    <!--  <template v-else> IMG -->

    <!--       :size="size === 'md' ? 'c-8' : 'c-5'" -->
    <Img
      v-if="id && type"
      :src="iconSource(type, id)"
      loading-type="spinner"
      :alt="`${name || itemName(type, id)} Image`"
      :class="
        cn(
          'origin-left scale-110 overflow-hidden rounded-full shadow-sm drop-shadow-sm',
          { 'scale-100 object-contain': type === 'path' }
        )
      " />

    <!-- ICON -->
    <Icon
      v-if="icon"
      class=""
      :name="typeof icon === 'string' ? icon : icon[0]" />
    <div
      :class="
        cn('flex flex-nowrap **:text-start', {
          'items-center gap-3': !size || size === 'default',
          'flex-col items-start! gap-px': size === 'md',
        })
      ">
      <!-- PLAYER -->
      <span
        v-if="type === 'player'"
        class="inline-flex h-5 w-fit items-center align-baseline leading-none"
        :style="{ color }">
        {{ name }}

        <span class="ml-1 inline text-2xs!">#{{ tag }}</span>
      </span>

      <div
        v-else-if="type === 'default'"
        :style="{ color }"
        :class="
          cn(
            'inline w-full pl-1 leading-5 text-pretty whitespace-pre-line first-letter:capitalize',
            { 'justify-self-center text-center': !icon && !img },
            className
          )
        ">
        {{ text }}
      </div>
      <span
        v-else-if="type && id"
        class="h-4 text-start leading-4 opacity-80"
        :style="{ color }">
        {{ itemName(type, id) }}
      </span>
      <span
        v-if="!name"
        class="-ml-1 inline align-baseline text-xs first-letter:capitalize">
        {{ tag }}
      </span>
      <p
        v-if="text && size === 'md'"
        :class="
          cn('text-sm! leading-4 text-pretty whitespace-pre-line', {
            '': icon || (id && type),
          })
        ">
        {{ text }}
      </p>
    </div>
  </div>
</template>
