<script lang="ts" setup>
const { match, player, timeline } = defineProps<{
  match: MatchData
  player: Player
  timeline: PlayerTimeline
}>()

const supportUpgrade = computed(() => {
  if (!timeline || player.role !== "support") return null

  const finalSupportItem = supportnumbers.find((id) =>
    Object.values(player.items.slots).includes(id)
  )

  return finalSupportItem ?? null
})
</script>

<template>
  <ul
    class="timeline relative mx-0 flex min-h-40 w-full flex-wrap items-center justify-around gap-y-3">
    <li
      v-for="(eventGroup, i) in timeline?.items"
      :key="i"
      class="max-w-1/3 grow grid-rows-[51px_14px_24px] items-center">
      <hr v-if="i !== 0" class="bg-p3/60" />
      <div
        class="timeline-start mx-3 flex h-full items-center gap-2.25 justify-self-center timeline-box">
        <template v-for="(event, ix) in eventGroup?.events" :key="ix">
          <div
            v-if="
              event.action === 'UPGRADE' ||
                event.action === 'S1_UPGRADE' ||
                event.action === 'S2_UPGRADE'
            "
            class="relative size-12">
            <Item
              :id="
                event.action === 'S2_UPGRADE' ?
                  (supportUpgrade ?? null)
                  : (event.to ?? null)
              "
              class="size-12"
              :map="match.mapId" />

            <template
              v-if="
                event.action === 'S1_UPGRADE' || event.action === 'S2_UPGRADE'
              ">
              <Item
                :id="event.from ?? null"
                :key="event.from ?? ix"
                class="absolute -top-1 -left-1.5 size-5.5 rounded-full border border-p0 ring-1 ring-p0"
                :map="match.mapId"
                data-type="item" />

              <Item
                v-if="event.action === 'S2_UPGRADE'"
                :id="3867"
                :key="3867"
                class="absolute -top-1 -left-1.5 ml-[10px] size-5.5 rounded-full border border-p0 ring-1 ring-p0"
                :map="match.mapId" />
            </template>
            <template v-else>
              <Item
                v-for="(item, idx) in event.from"
                :id="item ?? null"
                :key="item"
                class="absolute -top-1 -left-1.5 size-5.5 rounded-full border border-p0 ring-1 ring-p0"
                :map="match.mapId"
                :style="{
                  marginLeft: `${10 * idx}px`,
                }" />
            </template>
          </div>

          <!-- add event -->

          <div
            v-else-if="event.action === 'ADD'"
            :key="event.id"
            class="relative size-12">
            <Item :id="event.id ?? null" :map="match.mapId" class="size-12" />
            <div
              v-if="(event.count ?? 0) > 1"
              class="absolute -right-1 -bottom-1 grid size-6 place-items-center rounded-full border-2 border-p0 bg-neutral font-semibold text-nc"
              variant="neutral">
              {{ event.count }}
            </div>
          </div>
        </template>
      </div>

      <div class="relative z-1 timeline-middle grid w-full place-items-center">
        <Icons
          class="size-7 ds-sm"
          size="sq-4"
          wrapper-class="z-2 bg-tint-p2/40 absolute "
          name="dot" />
      </div>

      <div
        class="relative timeline-end mt-2 grid place-items-center justify-self-center rounded-md border border-p3 bg-p0 px-1.5 text-[0.86rem]! font-bold text-pc ds-xs">
        <Icon
          class="absolute -top-3 mx-auto size-5! mask-b-from-60% mask-b-to-61% text-p0 **:stroke-p3"
          name="tabler:caret-caret-uped" />

        {{ formatHMS(eventGroup.timestamp) }}
      </div>
      <hr v-if="i !== timeline?.items.length - 1" class="bg-p3/60" />
    </li>
    <li class="grow" />
  </ul>
</template>
