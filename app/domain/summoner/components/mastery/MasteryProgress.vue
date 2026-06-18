<script lang="ts" setup>
const {
  class: className,
  current,
  mastery,
  progress: p
} = defineProps<{
  mastery: ChampionMastery
  class?: HTMLAttributes["class"]
  current?: number
  progress?: boolean
}>()
</script>

<template>
  <tippy
    placement="bottom"
    data-icon="i-lp-mastery"
    :offset="[0, 14]"
    :class="cn('', { 'pointer-events-none': !mastery }, className)"
    theme="neutral">
    <MasteryProgressBar :mastery />
    <template v-if="!p" #content>
      <div class="w-68 max-w-68!">
        <div class="flex items-center justify-between py-1">
          <span class="flex items-center gap-2">
            <Icon class="size-3.5" name="lp:mastery" />
            Lv. progress:
          </span>
          <span>
            {{ mastery?.pointsSinceLevel }}/
            {{ mastery.pointsSinceLevel + mastery.pointsUntilLevel }} points
          </span>
        </div>

        <p class="inline py-1 text-pretty italic opacity-80">
          *other milestones may be required
          <br />
          &nbsp;for progression
        </p>
      </div>
    </template>
  </tippy>
</template>
