<script lang="ts" setup>
const { match, timeline } = defineProps<{
  timeline: PlayerTimeline
  match: MatchDataCurrentPlayer
}>()

const supportUpgrade = computed(() => {
  if (!timeline || match.player.teamPosition !== 'UTILITY')
    return null

  const supportItemIds = [3869, 3870, 3871, 3876, 3877]
  const matchItemsSet = new Set(match.items) // O(1) lookups

  const finalSupportItem = supportItemIds.find(id => matchItemsSet.has(id))

  return finalSupportItem ?? null
})
</script>

<template>
  <ul
    class="timeline mt-8 w-full! flex-wrap justify-items-stretch">
    <li
      v-for="transaction, i in timeline?.inventory"
      :key="i"
      class="my-0! h-32 max-h-32 grow">
      <hr
        v-if="i !== 0" />
      <div class="timeline-start flex items-center gap-2 timeline-box">
        <template
          v-for="event, ix in transaction.events"
          :key="ix">
          <div
            v-if="event.action === 'UPGRADE' || event.action === 'SUPPORT_UPGRADE'"
            class="relative size-12">
            <Item
              :id="event.action === 'SUPPORT_UPGRADE' ? supportUpgrade : event.to"
              :data-map="match.queue.map.id"
              :data-id="event.action === 'SUPPORT_UPGRADE' ? supportUpgrade : event.to"
              size="sq-12"
              class="tippy"
              data-label="item" />

            <Item
              v-for="item, idx in event.from"
              :id="item"
              :key="item"
              :data-map="match.queue.map.id"
              :data-id="item"
              size="sq-5.5"
              :style="{
                marginLeft: `${14 * idx}px`,
              }"
              data-label="item"
              class="tippy absolute -top-1 -left-1 rounded-full ring-2 ring-b1" />
          </div>

          <!-- add event -->

          <div
            v-else
            :key="event.id"
            class="tippy relative size-12"
            data-label="item"
            :data-map="match.queue.map.id"
            :data-id="event.id">
            <Item
              :id="event.id"
              size="sq-12" />
            <div
              v-if="event.count > 1"
              class="absolute -right-1 -bottom-1 grid size-6 place-items-center rounded-full border-2 border-b1 bg-neutral font-medium text-nc"
              variant="neutral">
              {{ event.count }}
            </div>
          </div>
        </template>
      </div>

      <Icons
        size="c-4"
        wrapper-class="z-2 timeline-middle bg-tint-b2/40"
        name="dot"
        class="size-7 dss" />

      <div class="relative timeline-end mt-2 grid place-items-center rounded-md border border-b3 bg-b1 px-1.5 text-[0.86rem]! font-bold text-bc dxs">
        <Icon
          name="tabler:caret-up-filled"
          class="absolute -top-3 mx-auto size-5! mask-b-from-59% mask-b-to-60% text-b1 **:stroke-b3" />

        {{ formatHMS(transaction.timestamp) }}
      </div>

      <hr
        v-if="i !== timeline?.inventory.length - 1" />
    </li>
  </ul>
</template>