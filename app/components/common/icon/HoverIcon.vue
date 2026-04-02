<script lang="ts" setup>
import {
  LazyAbilityTooltip,
  LazyChampionTooltip,
  LazyItemTooltip,
  LazyRuneTooltip,
  LazySpellTooltip
} from "#components"
import type { AvatarProps } from "@nuxt/ui"
import { TooltipContent } from "reka-ui"

type DomainType =
  | "rune"
  | "item"
  | "champion"
  | "spell"
  | "ability"
  | "path"
  | "keystone"

const props = withDefaults(
  defineProps<
    AvatarProps & {
      id: number | null
      k?: string | null
      class?: HTMLAttributes["class"]
      loadingIcon?: LoadingStyle
      map?: number
      side?: Side
      disabled?: boolean
      pin?: boolean
      ui?: AvatarProps["ui"]
      effects?: boolean
      type: DomainType
    }
  >(),
  {
    effects: true,
    pin: true,
    interactive: true
  }
)

const delegated = reactiveOmit(props, "class")

const types = {
  rune: {
    label: (id: number) => runeNameById(id),
    component: LazyRuneTooltip
  },
  item: {
    label: (id: number) => itemNameById(id),
    component: LazyItemTooltip
  },
  champion: {
    label: (id: number) => champNameById(id),
    component: LazyChampionTooltip
  },
  spell: {
    label: (id: number) => spellNameById(id),
    component: LazySpellTooltip
  },
  ability: {
    label: (id: number) => abilityNameById(String(id)),
    component: LazyAbilityTooltip
  },
  path: {
    label: (id: number) => pathNameById(id),
    component: ""
  },
  keystone: {
    label: (id: number) => runeNameById(id),
    component: LazyRuneTooltip
  }
}
</script>

<template>
  <Avatar
    v-bind="delegated"
    :ui="{
      ...props.ui,
      image: cn('shadow-sm drop-shadow-sm drop-shadow-black/10', {
        'bg-transparent shadow-none inset-shadow-none ring-0 noise-0': [
          'path',
          'keystone'
        ].includes(props.type)
      }),
      root: cn(
        {
          'hover-3d': props.effects !== false,
          'bg-transparent shadow-none inset-shadow-none ring-0 noise-0': [
            'path',
            'keystone'
          ].includes(props.type)
        },
        props.ui?.root,
        props?.class
      )
    }"
    :src="
      props.id
        ? `/img/${props.type === 'keystone' ? 'rune' : props.type}/${props.id}.webp`
        : ''
    "
    :label="props.id ? types[props.type]?.label(props.id) : ''">
    <template v-if="props.effects !== false">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </template>
    <template v-if="props.pin && props.type !== 'path'" #content>
      <component
        :is="types[props.type]?.component"
        v-if="props.id"
        :id="props.id"
        :map="props?.map" />
    </template>
  </Avatar>
</template>
