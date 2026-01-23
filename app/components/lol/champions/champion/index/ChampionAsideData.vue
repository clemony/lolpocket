<script setup lang="ts">
const { champion, wrapperClass } = defineProps<{
  champion: Champion
  wrapperClass: string
}>()

const resource = computed(() =>
  abilityResources.find(
    r => r.name.toLowerCase() === champion?.resource.toLowerCase(),
  ),
)

const damageType = computed(() =>
  damageTypes.find(d => d.type === champion.adaptiveType),
)
</script>

<template>
  <div class="w-full px-5.5 py-3">
    <div :class="wrapperClass">
      <p>Position</p>
      <p class="flex items-center gap-2">
        <PositionBadge
          v-for="(pos, i) in champion.positions"
          :key="i"
          active
          :position="pos" />
      </p>
    </div>

    <div :class="wrapperClass">
      <p>Role</p>
      <p class="flex items-center">
        <span
          v-for="(role, i) in champion.roles"
          :key="i"
          :class="cn('font-medium italic')">
          {{ role
          }}<template v-if="i !== champion.roles.length - 1">,&nbsp;&thinsp;</template>
        </span>
      </p>
    </div>

    <div :class="wrapperClass">
      <p>Damage Style</p>
      <div
        class="flex items-center gap-3 *:flex *:items-center *:gap-1.5">
        <span class="font-medium">
          <Icon
            v-if="champion.attackType"
            :name="`lp:${champion.attackType.toLowerCase()}`"
            class="dst inline size-4.5! shrink-0 **:stroke-0" />
          {{ champion.attackType }}
        </span>
        <span v-if="champion.attackType && champion.adaptiveType"> + </span>
        <div class="font-medium">
          <Icons
            v-if="damageType?.icon"
            :name="damageType?.icon"
            :class="
              cn('dst absolute size-3.5! shrink-0', {
                'mt-0.5 mr-0.75': champion.adaptiveType === 'Magic damage',
              })
            " />
          {{ champion.adaptiveType?.replace("damage", "") }}
        </div>
      </div>
    </div>

    <div :class="wrapperClass">
      <p>Resource</p>
      <p class="flex items-center gap-2 font-medium">
        <Icon
          v-if="resource?.icon"
          :name="resource?.icon"
          class="dst inline size-3.5! shrink-0 opacity-90" />
        {{ champion.resource }}
      </p>
    </div>

    <div :class="wrapperClass">
      <p>Price</p>
      <div
        class="
          *:text-md flex items-center gap-4 overflow-hidden *:flex *:items-center
          *:gap-1
        ">
        <div class="font-medium">
          <Icon
            name="lp:be"
            class="text-platinum dst mr-0.5 size-4.25! shrink-0!" />
          <p>
            {{ champion.price.blueEssence }}
            <span class="pr-0.5 text-xs font-medium">BE</span>
          </p>
        </div>
        <div>
          <Icon
            name="lp:rp"
            class="text-gold dst mr-1 size-4.5! shrink-0!" />
          <p class="font-medium">
            {{ champion.price.rp }}
            <span class="pr-0.5 text-xs font-medium">RP</span>
          </p>
        </div>
      </div>
    </div>

    <div :class="wrapperClass">
      <p>Last Changed</p>
      <tippy
        :tag="null"
        :interactive="true">
        <BtnLink
          external
          :to="`https://wiki.leagueoflegends.com/en-us/V${champion.patchLastChanged}`"
          variant="link"
          class="decoration-bc/40 hover:decoration-bc gap-1! px-0 font-medium
              underline underline-offset-3 opacity-80
              hover:opacity-100">
          Patch {{ champion.patchLastChanged }}
          <template #content>
            <p class="flex items-center gap-1">
              View notes on wiki
              <icon
                name="link"
                class="mb-0.5 size-3 opacity-60 group-hover/l:opacity-100" />
            </p>
          </template>
        </BtnLink>
      </tippy>
    </div>

    <div class="flex h-12 w-full items-center justify-between">
      <p class="opacity-50">
        Release Date
      </p>
      <p class="font-medium">
        {{ useDateFormat(champion.releaseDate, "MMMM D, YYYY") }}
      </p>
    </div>
  </div>
</template>
