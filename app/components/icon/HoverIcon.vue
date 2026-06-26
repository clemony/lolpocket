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
import type { AvatarPropsExt, DomainType, TooltipPropsExt } from "#shared/types"

import { getSummonerIcon } from "~/domain/utils/img"
import type { IconProps } from "~/types/ui.types"

interface ResolvedType {
  label?: string
  static?: boolean
  src?: string
  component?: Record<string, Component>
  avatar?: AvatarPropsExt
  pin?: boolean
  disabled?: boolean
  props?: Partial<Record<keyof IconProps, IconProps[keyof IconProps]>>
}

const {
  tooltip = {
    pin: true,
    interactive: true,
    effects: true,
    disabled: false,
  },
  avatar,
  summoner,
  type,
  map,
  id,
  k,
  winrates,
  style,
} = defineProps<IconProps>()

const tt = computed<TooltipPropsExt>(() => safeObject(tooltip))
const ap = computed<AvatarPropsExt>(() => safeObject(avatar))

const invisibleBg = {
  root: "bg-transparent shadow-none ring-0 inset-shadow-none noise-0",

  image:
    "bg-transparent drop-shadow-sm shadow-none ring-0 inset-shadow-none noise-0",
}

const types: Record<DomainType, ResolvedType> = {
  rune: {
    label: runeNameById(Number(id)) ?? "",
    component: LazyRuneTooltip,
    src: `/img/rune/${id}.webp`,
  },
  item: {
    label: itemNameById(Number(id)) ?? "",
    component: LazyItemTooltip,
    src: `/img/item/${id}.webp`,
    props: { map },
  },
  champion: {
    label: champNameById(Number(id)) ?? "",
    src: `/img/champion/${id}.webp`,
    component: LazyChampionWinrateTooltip,
    props: { winrates, k },
  },
  spell: {
    label: spellNameById(Number(id)) ?? "",
    component: LazySpellTooltip,
    src: `/img/spell/${id}.webp`,
  },
  ability: {
    label: abilityNameById(String(id)) ?? "",
    component: LazyAbilityTooltip,
    src: `/img/ability/${id}.webp`,
  },
  path: {
    label: pathNameById(Number(id)) ?? "",
    component: undefined,
    src: `/img/path/${id}.webp`,
    avatar: { ui: invisibleBg, round: true },
  },
  keystone: {
    label: runeNameById(Number(id)) ?? "",
    component: LazyRuneTooltip,
    src: `/img/rune/${id}.webp`,
    avatar: { ui: invisibleBg, round: true },
  },
  status: {
    label: summoner?.name ?? "",
    component: undefined,
    pin: false,
    src: getSummonerIcon(summoner?.icon) ?? "",
    props: { summoner },
  },
  summoner: {
    label: summoner?.name ?? "",
    pin: false,
    component: undefined,
    src: getSummonerIcon(summoner?.icon) ?? "",
    props: { summoner },
  },
}

const item = computed<ResolvedType>(() => safeObject(types[type as DomainType]))

/* const resolved = computed<ResolvedType>(() => ({
  ...item.value,
  ...item.value[variant || "default"]
})) */
const mergedTooltip = computed<TooltipPropsExt>(() => ({
  ...tt.value,
  label: tt.value.label ?? item.value.label,
  pin: item.value.pin ?? tt.value.pin,
  disabled: item.value.disabled ?? tt.value.disabled,
}))
</script>

<template>
  <Avatar
    :style
    v-bind="{
      tooltip: mergedTooltip,
      ...ap,
      ...item.avatar,
      src: ap.src ?? item.src,
      ui: {
        root: cn(
          { 'hover-3d': ap.effects !== false },
          item?.avatar?.ui?.root,
          ap.ui?.root
        ),
        image: cn(item?.avatar?.ui?.image, ap.ui?.image),
      },
    }"
    @click.stop>
    <template v-if="ap.effects !== false">
      <div v-for="i in 8" :key="i" />
    </template>
    <template v-if="item.component" #content>
      <component :is="item.component" :id v-bind="item.props" />
    </template>
  </Avatar>
</template>
