<script lang="ts" setup>
import { buildSummonerRootPath } from "~/domain/summoner/utils/route"
import { getSummonerIcon } from "~/domain/utils/img"

const emit = defineEmits(["update:open"])
const { summoner } = storeToRefs(sSession())
const s = safeObject(summoner)
</script>

<template>
  <UCard
    as="button"
    :ui="{
      body: 'grid grow! place-items-center pt-5! pb-3!',
      root: 'noise grid size-full cursor-pointer place-items-center gap-0 space-y-0! overflow-hidden bg-p0/40 p-0! shadow-none drop-shadow-none',
      footer: 'grid max-h-10! min-h-10 w-full items-center! gap-2 px-3! pt-0!'
    }">
    <UpdateSummoner
      v-slot="{ cooldown, disabled, timeRemaining, isLoading, text }"
      side="top"
      @update:open="emit('update:open', $event)">
      <UTooltip :text :content="{ side: 'bottom' }">
        <UButton
          :ui="{
            base: cn(
              'btn-custom group/label relative grid size-21 place-items-center overflow-visible! rounded-full ring-offset-p3 transition-all duration-200 ease-spring-soft hover:ring-1! hover:ring-pc/40! hover:ring-offset-3',
              {
                'pointer-events-none': disabled
              }
            )
          }"
          class="">
          <div
            class="noise radial-progress absolute border-3 border-neutral bg-neutral text-p0"
            :style="{
              '--value': cooldown?.percent ? 100 - (cooldown?.percent || 0) : 0,
              '--size': '4.5rem',
              '--thickness': '0.3rem'
            }"
            :aria-valuenow="
              cooldown?.percent ? 100 - (cooldown?.percent || 0) : 0
            "
            :aria-valuemax="100"
            role="progressbar">
            <div class="z-2 font-mono text-xs font-medium text-nc">
              {{ timeRemaining ? msToMinutesAndSeconds(timeRemaining) : "" }}
            </div>
          </div>
          <UAvatar
            :ui="{
              image: 'shadow-sm',
              root: cn(
                'absolute mx-auto grid size-21 place-items-center duration-400 ease-spring-soft',
                cooldown?.seconds
                  ? 'animate-out scale-out fade-out opacity-0'
                  : 'animate-in scale-in fade-in'
              )
            }"
            :src="getSummonerIcon(s?.icon)" />

          <div
            :class="
              cn(
                'absolute bottom-0 z-2 grid size-8.5 translate-x-8 -translate-y-1.5 place-items-center rounded-full bg-linear-to-br from-p3 to-p0 inset-shadow-sm duration-400 ease-spring-soft',
                cooldown?.seconds
                  ? 'animate-out scale-out fade-out opacity-0'
                  : 'animate-in scale-in fade-in'
              )
            ">
            <UButton
              as="div"
              size="xs"
              icon="i-refresh"
              color="neutral"
              :ui="{
                base: 'z-3 place-items-center gap-0 rounded-full border-0 transition-all duration-200 ease-spring-bouncy group-hover/label:scale-110',
                leadingIcon: cn(
                  'transition-[rotate_600ms_ease-out] duration-200 group-hover/label:rotate-360',
                  { 'animate-rotate repeat-infinite': isLoading }
                )
              }" />
          </div>
        </UButton>
      </UTooltip>
    </UpdateSummoner>

    <div class="mt-3 flex flex-col items-center">
      <div class="inline items-center align-baseline">
        <span class="font-serif text-3xl leading-none font-bold normal-case!">
          {{ s?.name }}
        </span>
        <span
          class="ml-1 inline-flex items-center gap-px text-sm font-medium normal-case!">
          <Icon name="i-hash" class="inline size-3!" />{{ s?.tag }}
        </span>
      </div>
      <!-- live -->
      <MatchStatus v-if="s?.puuid" :summoner="s" />
    </div>

    <template #footer>
      <SummonerCommunicationMenu />
    </template> </UCard
  ><!--    :disabled="s?.puuid === user().account?.puuid"  -->
</template>
