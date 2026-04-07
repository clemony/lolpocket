<script lang="ts" setup>
import {
  LazyAbilityTooltip,
  LazyChampionTooltip,
  LazyItemTooltip,
  LazyRuneTooltip,
  LazySpellTooltip,
  MatchStatus
} from "#components"
import type {
  AvatarPropsExt,
  DomainType,
  HoverIcon as HoverIconProps,
  TooltipPropsExt
} from "#shared/types"
import { getSummonerIcon } from "~/domain/utils/img"

interface ResolvedHoverIcon {
  label?: string
  src?: string
  component?: Component | null
  avatar?: AvatarPropsExt
  pin?: boolean
}

interface HoverIconWrapperProps {
  id?: HoverIconProps["id"]
  k?: HoverIconProps["k"]
  type?: HoverIconProps["type"]
  summoner?: HoverIconProps["summoner"]
  tooltip?: TooltipPropsExt
  avatar?: AvatarPropsExt
}

const {
  tooltip = {
    pin: true,
    interactive: true,
    effects: true,
    map: 0
  },
  avatar = { round: false },
  summoner,
  type,
  id
} = defineProps<HoverIconWrapperProps>()

const tt = computed<TooltipPropsExt>(() => safeObject(tooltip))
const ava = computed<AvatarPropsExt>(() => safeObject(avatar))

const invisibleBg = {
  root: "bg-transparent shadow-none ring-0 inset-shadow-none noise-0",

  image:
    "bg-transparent drop-shadow-sm shadow-none ring-0 inset-shadow-none noise-0"
}

const types: Record<DomainType, ResolvedHoverIcon> = {
  rune: {
    label: runeNameById(Number(id)) ?? "",
    component: LazyRuneTooltip,
    src: `/img/rune/${id}.webp`
  },
  item: {
    label: itemNameById(Number(id)) ?? "",
    component: LazyItemTooltip,
    src: `/img/item/${id}.webp`
  },
  champion: {
    label: champNameById(Number(id)) ?? "",
    component: LazyChampionTooltip,
    src: `/img/champion/${id}.webp`
  },
  spell: {
    label: spellNameById(Number(id)) ?? "",
    component: LazySpellTooltip,
    src: `/img/spell/${id}.webp`
  },
  ability: {
    label: abilityNameById(String(id)) ?? "",
    component: LazyAbilityTooltip,
    src: `/img/ability/${id}.webp`
  },
  path: {
    label: pathNameById(Number(id)) ?? "",
    component: null,
    src: `/img/path/${id}.webp`,
    avatar: { ui: invisibleBg, round: true }
  },
  keystone: {
    label: runeNameById(Number(id)) ?? "",
    component: LazyRuneTooltip,
    src: `/img/rune/${id}.webp`,
    avatar: { ui: invisibleBg, round: true }
  },
  status: {
    label: summoner?.name ?? "",
    component: MatchStatus,
    pin: false,
    src: getSummonerIcon(summoner?.icon) ?? ""
  },
  summoner: {
    label: summoner?.name ?? "",
    pin: false,
    component: null,
    src: getSummonerIcon(summoner?.icon) ?? ""
  }
}

const item = computed<ResolvedHoverIcon>(() =>
  safeObject(types[type as DomainType])
)
const mergedTooltip = computed<TooltipPropsExt>(() => ({
  ...tt.value,
  label: tt.value.label ?? item.value.label,
  pin: item.value.pin ?? tt.value.pin
}))
</script>

<template>
  <Avatar
    v-bind="{
      tooltip: mergedTooltip,
      ...ava,
      ...item.avatar,
      src: ava.src ?? item.src,
      ui: {
        root: cn(
          { 'hover-3d': ava.effects !== false },
          item?.avatar?.ui?.root,
          ava.ui?.root
        ),
        image: cn(item?.avatar?.ui?.image, ava.ui?.image)
      }
    }"
    @click.stop>
    <Ping
      v-if="type === 'status' && summoner"
      :color="summoner?.color ?? 'insp'"
      :size="ava?.status?.size ?? 'md'"
      inset
      :class="cn('right-0 bottom-0', ava?.status?.class)" />
    <template v-if="ava.effects !== false">
      <div v-for="i in 8" :key="i" />
    </template>
    <template v-if="item.component" #content>
      <component :is="item.component" :id :map="tt?.map" :summoner />
    </template>
  </Avatar>
</template>
