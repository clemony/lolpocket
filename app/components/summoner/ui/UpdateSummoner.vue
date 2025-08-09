<script lang="ts" setup>
const { summoner, class: className } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
  text?: boolean | null
}>()

function fakeFunction() {}
const { refreshMatches } = useSummoner(summoner.puuid)

const { throttled: refresh, cooldown, isLoading } = throttleFunction(
  () => fakeFunction(),
  120_000,
  summoner.puuid,
  'match-refresh',
)

const tip = computed (() =>
  `Updated:
        ${formatTimeAgo(summoner.matches?.lastUpdate, 'short')}
        ${cooldown.value?.seconds ? `${cooldown.value?.seconds} cd` : ''}`,
)
</script>

<template>
  <TransitionScalePop
    v-tippy="{ content: tip, placement: text ? 'top' : 'bottom' }"
    as="button"
    :class="cn('btn relative btn-shadow overflow-hidden grid place-items-center ', { 'btn-disabled': cooldown }, className)"
    @click="refresh()">
    <template v-if="text">
      <span
        v-if="!cooldown"
        class="flex items-center text-1 tracking-[0.24px]  antialiased font-semibold opacity-68 group-hover/load:opacity-100">update</span>
      <div
        v-if="cooldown"
        layout-id="update"
        :class="cn('size-full absolute grid place-items-center p-0  w-18 overflow-hidden z-0 pointer-events-none btn btn-shadow overflow-hidden ', className)"
        class="">
        <progress
          class=""
          :class="cn('progress rounded-none -scale-x-104 scale-y-104 inset-shadow-sm text-b3 btn btn-shadow p-0 size-full')"
          :value="cooldown?.seconds"
          max="120">
        </progress>

        <span class="absolute text-1  dst font-semibold opacity-80">

          {{ cooldown?.seconds }}s cd
        </span>
      </div>
      <slot />
    </template>

    <template
      v-else>
      <icon
        v-if="!cooldown"
        name="mingcute:refresh-2-line"
        :class="
          cn(' size-5   shrink-0 in-[.btn-neutral]:opacity-80 not-in-[.btn-neutral]:opacity-60 group-hover/load:opacity-100 dst transition-all duration-200', {
            'animate-rotate': isLoading,
          })
        " />

      <div
        v-if="cooldown"
        class="text-0 shadow-sm  border-neutral border-2 absolute bg-neutral text-nc **:text-nc radial-progress place-self-center font-semibold opacity-90  "
        :style="{
          '--value': cooldown?.seconds,
          '--size': '2rem',
          '--thickness': '2px',
        }"
        :aria-valuenow="cooldown?.percent"
        role="progressbar">
        <span class="bg-neutral size-full grid place-items-center rounded-full">
          {{ cooldown?.seconds }}
        </span>
      </div>
      <slot />
    </template>
  </TransitionScalePop>
</template>
