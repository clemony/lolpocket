<script setup lang="ts">
import { abilityResources } from '~~/shared/appdata/index/ability-resource-index'
import { damageTypes } from '~~/shared/appdata/index/damage-type-index'

const { champion, wrapperClass } = defineProps<{
  champion: Champion
  wrapperClass: string
}>()

const resource = computed (() => abilityResources.find(r => r.name.toLowerCase() == champion?.resource.toLowerCase()))

const damageType = computed (() => damageTypes.find(d => d.type == champion.adaptiveType))
</script>

<template>
  <div class=" py-3 px-5.5 w-full">
    <div :class="wrapperClass">
      <p>Position</p>
      <p class="flex gap-2 items-center">
        <PositionBadge
          v-for="pos, i in champion.positions"
          :key="i"
          :position="pos" />
      </p>
    </div>

    <div :class="wrapperClass">
      <p>Role</p>
      <p class="flex items-center">
        <span
          v-for="role, i in champion.roles"
          :key="i"
          :class="cn('italic font-medium')">
          {{ role }}<template v-if="i != champion.roles.length - 1">,&nbsp;&thinsp;</template>
        </span>
      </p>
    </div>

    <div :class="wrapperClass">
      <p>Damage Style</p>
      <div class="flex *:flex *:gap-1.5 *:items-center gap-3 items-center">
        <span class="font-medium">
          <component
            :is="`i-lol-${champion.attackType.toLowerCase()}`"
            v-if="champion.attackType"
            class="!size-4.5 shrink-0  dst **:stroke-0 " />
          {{ champion.attackType }}
        </span>
        <span v-if="champion.attackType && champion.adaptiveType">
          +
        </span>
        <div class="font-medium">
          <span class="size-4 grid place-items-center relative">
            <component
              :is="damageType?.icon"
              v-if="damageType?.icon"
              :class="cn('!size-3.5 shrink-0 absolute  dst', { 'mt-0.5 mr-0.75': champion.adaptiveType == 'Magic damage' })"
              :style="{
                /*  color: damageType.color, */
              }" />
          </span>
          {{ champion.adaptiveType?.replace('damage', '') }}
        </div>
      </div>
    </div>

    <div :class="wrapperClass">
      <p>Resource</p>
      <p class="flex gap-2 font-medium items-center">
        <img
          v-if="resource?.img"
          :src="resource.img"
          class="size-6 shrink-0 rounded-md drop-shadow-sm shadow-sm " />
        <component
          :is="resource?.icon"
          v-else-if="resource?.icon"
          :style="{
          /*   color: resource.color, */
          }"
          class="!size-3.5 opacity-90 shrink-0  dst " />
        {{ champion.resource }}
      </p>
    </div>

    <div :class="wrapperClass">
      <p>Price</p>
      <div
        class="flex gap-4 items-center overflow-hidden *:gap-1 *:text-sm *:flex *:items-center">
        <div class="font-medium">
          <i-lol-be class="!size-4.25 text-platinum !shrink-0 dst mr-0.5" />
          <p>
            {{ champion.price.blueEssence }}
            <span class="text-xxs font-medium pr-0.5">BE</span>
          </p>
        </div>
        <div>
          <i-lol-rp class="!size-4.5 mr-1  text-gold !shrink-0 dst" />
          <p class="font-medium">
            {{ champion.price.rp }}
            <span class="text-xxs font-medium pr-0.5">RP</span>
          </p>
        </div>
      </div>
    </div>

    <div :class="wrapperClass">
      <p>Last Changed</p>
      <tippy
        :tag="null"
        :interactive="true">
        <Blink
          external
          :to="`https://wiki.leagueoflegends.com/en-us/V${champion.patchLastChanged}`"
          variant="link"
          :class="cn('!gap-1 underline underline-offset-3 font-medium  group/l decoration-bc/40  hover:decoration-bc opacity-80 !text-nowrap hover:opacity-100')">
          Patch {{ champion.patchLastChanged }}
        </Blink>
        <template #content>
          <p class="flex gap-1 items-center">
            View notes on wiki
            <icon
              name="link"
              class="size-3 opacity-60 group-hover/l:opacity-100 mb-0.5" />
          </p>
        </template>
      </tippy>
    </div>

    <div class="flex h-12 w-full items-center justify-between">
      <p class="opacity-50">
        Release Date
      </p>
      <p class="font-medium">
        {{ useDateFormat(champion.releaseDate, 'MMMM D, YYYY') }}
      </p>
    </div>
  </div>
</template>