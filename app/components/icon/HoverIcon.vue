<script lang="ts" setup>
import {
  LazyAbilityTooltip,
  LazyChampionTooltip,
  LazyChampionWinrateTooltip,
  LazyItemTooltip,
  LazyRuneTooltip,
  LazySpellTooltip,
  MatchStatus,
} from "#components"
import type {
  AvatarPropsExt,
  ChampionWinrate,
  DomainType,
  TooltipPropsExt,
} from "#shared/types"
import type { AvatarProps } from "@nuxt/ui"

import { getSummonerIcon } from "~/domain/utils/img"
import type { IconProps } from "~/types/ui.types"

interface ResolvedType {
  text?: string
  static?: boolean
  src?: string
  component?: Record<string, Component>
  avatar?: AvatarPropsExt
  pin?: boolean
  disabled?: boolean
  props?: Partial<Record<keyof IconProps, IconProps[keyof IconProps]>>
}

const props = withDefaults(
  defineProps<
    AvatarProps & {
      id?: string | number
      type?: DomainType
      scale?: boolean
      shine?: boolean
      map?: string | number
      k?: string
      summoner?: Summoner
      winrates?: ChampionWinrate[]
      tooltip?: TooltipPropsExt
    }
  >(),
  {
    scale: true,
    shine: true,
  }
)

const delegated = reactiveOmit(
  props,
  "class",
  "tooltip",
  "id",
  "type",
  "scale",
  "shine",
  "map",
  "k",
  "summoner",
  "winrates"
)

const types: Record<DomainType, ResolvedType> = {
  rune: {
    text: runeNameById(Number(props.id)) ?? "",
    component: LazyRuneTooltip,
    src: `/img/rune/${props.id}.webp`,
  },
  item: {
    text: itemNameById(Number(props.id)) ?? "",
    component: LazyItemTooltip,
    src: `/img/item/${props.id}.webp`,
    props: { map: props?.map },
  },
  champion: {
    text: champNameById(Number(props.id)) ?? "",
    src: `/img/champion/${props.id}.webp`,
    component: LazyChampionWinrateTooltip,
    props: { winrates: props?.winrates, k: props?.k },
  },
  spell: {
    text: spellNameById(Number(props.id)) ?? "",
    component: LazySpellTooltip,
    src: `/img/spell/${props.id}.webp`,
  },
  ability: {
    text: abilityNameById(String(props.id)) ?? "",
    component: LazyAbilityTooltip,
    src: `/img/ability/${props.id}.webp`,
  },
  path: {
    text: pathNameById(Number(props.id)) ?? "",
    component: undefined,
    src: `/img/path/${props.id}.webp`,
  },
  keystone: {
    text: runeNameById(Number(props.id)) ?? "",
    component: LazyRuneTooltip,
    src: `/img/rune/${props.id}.webp`,
  },
  status: {
    text: props.summoner?.name ?? "",
    component: undefined,
    pin: false,
    src: getSummonerIcon(props.summoner?.icon) ?? "",
    props: { summoner: props?.summoner },
  },
  summoner: {
    text: props.summoner?.name ?? "",
    pin: false,
    component: undefined,
    src: getSummonerIcon(props.summoner?.icon) ?? "",
    props: { summoner: props?.summoner },
  },
  player: {
    text: champNameById(Number(props.id)) ?? "",
    src: `/img/champion/${props.id}.webp`,
    component: undefined,
  },
}

const item = computed<ResolvedType>(() =>
  safeObject(types[props.type as DomainType])
)

/* const resolved = computed<ResolvedType>(() => ({
  ...item.value,
  ...item.value[variant || "default"]
})) */
</script>

<template>
  <Tooltip
    v-bind="props.tooltip"
    :arrow="props.tooltip?.arrow || true"
    :avatar="{
      src: item.src,
      alt: item.text,
    }"
    :disabled="props.tooltip?.disabled"
    :text="item.text">
    <UAvatar
      v-bind="delegated"
      :src="item?.src"
      :ui="{
        root: cn(
          'transition-transform duration-300 ease-spring',
          {
            'hover:scale-108': props.scale !== false,
            'hover:brightness-115 ': props.shine,
          },
          props.ui?.root
        ),
        image: cn('', props.ui?.image),
      }"
      @click.stop />
    <!--  <template v-if="ap.effects !== false">
          <div v-for="i in 8" :key="i" />
        </template>
        <template v-if="item.component" #content>
          <component :is="item.component" :props.id v-bind="item.props" />
        </template>-->
  </Tooltip>
</template>
