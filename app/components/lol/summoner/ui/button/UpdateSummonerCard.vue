<script lang="ts" setup>
import { getSummonerIcon } from "~/domain/utils/img"

const { summoner } = storeToRefs(sSession())
const s = safeObject(summoner)
</script>

<template>
  <UpdateSummoner
    v-slot="{ cooldown, disabled, timeRemaining, isLoading }"
    side="bottom"
    as-child>
    <UCard
      as="button"
      :ui="{
        body: cn('group/label grid place-items-center py-5!', {
          'pointer-events-none': disabled
        }),
        root: 'grid size-full cursor-pointer place-items-center gap-0 space-y-0! divide-y overflow-hidden bg-p0/60 p-0!'
      }">
      <div class="relative grid size-21 place-items-center">
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
      </div>

      <div class="mt-3 flex flex-col items-center">
        <h1 class="font-serif text-2xl leading-none font-bold normal-case!">
          {{ s?.name }}
        </h1>
        <h5 class="flex items-center gap-px text-sm normal-case!">
          <Icon name="i-hash" class="size-3!" />{{ s?.tag }}
        </h5>
      </div>
    </UCard>
  </UpdateSummoner>
</template>
