<script lang="ts" setup>
const { match, player, timeline } = defineProps<{
  match: MatchData
  player: Player
  timeline: PlayerTimeline
}>()

const supportUpgrade = computed(() => {
  if (!timeline || player.role !== 'support')
    return null

  const finalSupportItem = supportItemIds.find(id => Object.values(player.items.slots).includes(id))

  return finalSupportItem ?? null
})
</script>

<template>
  <ul class="timeline relative mx-0 flex min-h-40 w-full flex-wrap items-center justify-around gap-y-3">
    <li
      v-for="eventGroup, i in timeline?.items"
      :key="i"
      class="max-w-1/3 grow grid-rows-[51px_14px_24px] items-center">
      <hr
        v-if="i !== 0"
        class="bg-b3/60" />
      <div
        class="timeline-start timeline-box mx-3 flex h-full items-center gap-2.25 justify-self-center">
        <template
          v-for="event, ix in eventGroup?.events"
          :key="ix">
          <div
            v-if="event.action === 'UPGRADE' || event.action === 'S1_UPGRADE' || event.action === 'S2_UPGRADE'"
            class="relative size-12">
            <Item
              :id="event.action === 'S2_UPGRADE' ? supportUpgrade : event.to"
              :map="match.mapId"
              size="sq-12"
              class="tippy"
              data-type="item" />

            <template
              v-if="event.action === 'S1_UPGRADE' || event.action === 'S2_UPGRADE'">
              <Item
                :id="event.from"
                :key="event.from"
                :map="match.mapId"
                size="sq-5.5"
                data-type="item"
                class="border-b1 ring-b1 absolute -top-1 -left-1.5 rounded-full border ring-1" />

              <Item
                v-if="event.action === 'S2_UPGRADE'"
                :id="3867"
                :key="3867"
                :map="match.mapId"
                size="sq-5.5"
                data-type="item"
                class="border-b1 ring-b1 absolute -top-1 -left-1.5 ml-[10px] rounded-full border ring-1" />
            </template>
            <template v-else>
              <Item
                v-for="item, idx in event.from"
                :id="item"
                :key="item"
                :map="match.mapId"
                size="sq-5.5"
                :style="{
                  marginLeft: `${10 * idx}px`,
                }"
                data-type="item"
                class="border-b1 ring-b1 absolute -top-1 -left-1.5 rounded-full border ring-1" />
            </template>
          </div>

          <!-- add event -->

          <div
            v-else-if="event.action === 'ADD'"
            :key="event.id"
            class="relative size-12">
            <Item
              :id="event.id"
              :map="match.mapId"
              size="sq-12" />
            <div
              v-if="event.count > 1"
              class="border-b1 bg-neutral text-nc absolute -right-1 -bottom-1 grid size-6 place-items-center rounded-full border-2 font-semibold"
              variant="neutral">
              {{ event.count }}
            </div>
          </div>
        </template>
      </div>

      <div class="timeline-middle relative z-1 grid w-full place-items-center">
        <Icons
          size="sq-4"
          wrapper-class="z-2 bg-tint-b2/40 absolute "
          name="dot"
          class="dss size-7" />
      </div>

      <div class="timeline-end border-b3 bg-b1 text-bc dxs relative mt-2 grid place-items-center justify-self-center rounded-md border px-1.5 text-[0.86rem]! font-bold">
        <Icon
          name="tabler:caret-caret-uped"
          class="text-b1 **:stroke-b3 absolute -top-3 mx-auto size-5! mask-b-from-60% mask-b-to-61%" />

        {{ formatHMS(eventGroup.timestamp) }}
      </div>
      <hr
        v-if="i !== timeline?.items.length - 1"
        class="bg-b3/60" />
    </li>
    <li class="grow" />
  </ul>
</template>