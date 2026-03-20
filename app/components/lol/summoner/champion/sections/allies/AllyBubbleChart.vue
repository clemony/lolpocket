<script setup lang="ts">
import type { AllyStatDetail } from "#shared/types"

interface BubblePoint {
  allyName: string
  allyPuuid: string
  allyTag: string
  championId: number
  championName: string
  delta: number
  games: number
  id: string
  imageHref: string
  r: number
  stroke: string
  winrate: number
  x: number
  y: number
}

const {
  allies,
  height = 560,
  width = 1080,
} = defineProps<{
  allies: AllyStatDetail[]
  height?: number
  width?: number
}>()

const palette = [
  "#8fa9d8",
  "#d58fa0",
  "#90b8a0",
  "#d2aa73",
  "#b596d7",
  "#82b9c6",
  "#d3977e",
  "#a7c48a",
]

const margin = {
  bottom: 52,
  left: 56,
  right: 24,
  top: 24,
}

const xDomain = {
  max: 100,
  min: 0,
}

const yDomain = {
  max: 100,
  min: -100,
}

const xTicks = [0, 20, 40, 60, 80, 100]
const yTicks = [-100, -50, 0, 50, 100]
const collisionIterations = 16
const collisionPadding = 3
const maxRadius = 34
const minRadius = 18

const plotWidth = computed(() =>
  Math.max(0, width - margin.left - margin.right)
)

const plotHeight = computed(() =>
  Math.max(0, height - margin.top - margin.bottom)
)

function scaleX(value: number) {
  if (xDomain.max === xDomain.min) return margin.left
  const t = (value - xDomain.min) / (xDomain.max - xDomain.min)
  return margin.left + t * plotWidth.value
}

function scaleY(value: number) {
  if (yDomain.max === yDomain.min) return margin.top + plotHeight.value / 2
  const t = (value - yDomain.min) / (yDomain.max - yDomain.min)
  return margin.top + plotHeight.value - t * plotHeight.value
}

function scaleRadius(value: number, maxValue: number) {
  if (maxValue <= 0) return minRadius
  return minRadius + (value / maxValue) * (maxRadius - minRadius)
}

function clampPoint(point: BubblePoint) {
  point.x = Math.min(
    margin.left + plotWidth.value - point.r,
    Math.max(margin.left + point.r, point.x)
  )
  point.y = Math.min(
    margin.top + plotHeight.value - point.r,
    Math.max(margin.top + point.r, point.y)
  )
}

function nudgeOverlaps(points: BubblePoint[]) {
  for (let iteration = 0; iteration < collisionIterations; iteration++) {
    for (let index = 0; index < points.length; index++) {
      const current = points[index]
      if (!current) continue

      for (let otherIndex = index + 1; otherIndex < points.length; otherIndex++) {
        const other = points[otherIndex]
        if (!other) continue

        const dx = other.x - current.x
        const dy = other.y - current.y
        const distance = Math.hypot(dx, dy) || 0.001
        const minimumDistance = current.r + other.r + collisionPadding

        if (distance >= minimumDistance) continue

        const overlap = minimumDistance - distance
        const offsetX = (dx / distance) * overlap * 0.5
        const offsetY = (dy / distance) * overlap * 0.5

        current.x -= offsetX
        current.y -= offsetY
        other.x += offsetX
        other.y += offsetY

        clampPoint(current)
        clampPoint(other)
      }
    }
  }

  return points
}

const chartPoints = computed<BubblePoint[]>(() => {
  const maxGames = Math.max(
    ...allies.flatMap((ally) =>
      Object.values(ally.champions).map((champion) => champion.games)
    ),
    0
  )

  const points = allies.flatMap((ally, allyIndex) =>
    Object.values(ally.champions).map((champion) => {
      const radius = scaleRadius(champion.games, maxGames)
      const allyName = ally.name ?? "Unknown ally"
      const allyPuuid = ally.puuid ?? `ally-${allyIndex}`
      const allyTag = ally.tag ?? ""

      return {
        allyName,
        allyPuuid,
        allyTag,
        championId: champion.championId,
        championName: champion.championName,
        delta: champion.delta,
        games: champion.games,
        id: `${allyPuuid}-${champion.championId}`,
        imageHref: `/img/champions/circle/${champion.championId}.webp`,
        r: radius,
        stroke: palette[allyIndex % palette.length] ?? palette[0] ?? "#8fa9d8",
        winrate: champion.winrate ?? 0,
        x: scaleX(champion.winrate ?? 0),
        y: scaleY(champion.delta),
      }
    })
  )

  return nudgeOverlaps(points)
})

const xAxisY = computed(() => margin.top + plotHeight.value)
const yAxisX = computed(() => margin.left)
const zeroLineY = computed(() => scaleY(0))
</script>

<template>
  <UCard class="w-full overflow-hidden p-0">
    <div class="border-b border-p3/70 px-5 py-4">
      <h4 class="text-lg font-semibold text-pc">
        Ally Delta by Winrate
      </h4>
      <p class="mt-1 text-sm text-n5">
        Bubble size represents games played. Bubbles are nudged to reduce overlap while preserving their chart position.
      </p>
    </div>

    <div
      v-if="!chartPoints.length"
      class="grid h-120 place-items-center px-6 text-sm text-n5">
      No ally champion data available.
    </div>

    <div
      v-else
      class="w-full overflow-x-auto px-3 py-4">
      <svg
        :viewBox="`0 0 ${width} ${height}`"
        class="h-auto w-full min-w-220"
        fill="none"
        role="img">
        <title>Ally bubble chart</title>

        <g aria-hidden="true">
          <line
            v-for="tick in yTicks"
            :key="`grid-y-${tick}`"
            :x1="margin.left"
            :x2="margin.left + plotWidth"
            :y1="scaleY(tick)"
            :y2="scaleY(tick)"
            stroke="var(--color-p3)"
            stroke-dasharray="4 6"
            stroke-opacity="0.6" />

          <line
            v-for="tick in xTicks"
            :key="`grid-x-${tick}`"
            :x1="scaleX(tick)"
            :x2="scaleX(tick)"
            :y1="margin.top"
            :y2="margin.top + plotHeight"
            stroke="var(--color-p3)"
            stroke-dasharray="4 6"
            stroke-opacity="0.35" />

          <line
            :x1="margin.left"
            :x2="margin.left + plotWidth"
            :y1="zeroLineY"
            :y2="zeroLineY"
            stroke="var(--color-pc)"
            stroke-opacity="0.3"
            stroke-width="1.5" />
        </g>

        <g aria-hidden="true">
          <line
            :x1="yAxisX"
            :x2="yAxisX"
            :y1="margin.top"
            :y2="margin.top + plotHeight"
            stroke="var(--color-pc)"
            stroke-opacity="0.5" />
          <line
            :x1="margin.left"
            :x2="margin.left + plotWidth"
            :y1="xAxisY"
            :y2="xAxisY"
            stroke="var(--color-pc)"
            stroke-opacity="0.5" />
        </g>

        <g aria-hidden="true">
          <g
            v-for="tick in xTicks"
            :key="`x-tick-${tick}`">
            <line
              :x1="scaleX(tick)"
              :x2="scaleX(tick)"
              :y1="xAxisY"
              :y2="xAxisY + 6"
              stroke="var(--color-pc)"
              stroke-opacity="0.6" />
            <text
              :x="scaleX(tick)"
              :y="xAxisY + 22"
              fill="var(--color-n5)"
              font-size="12"
              text-anchor="middle">
              {{ tick }}%
            </text>
          </g>

          <g
            v-for="tick in yTicks"
            :key="`y-tick-${tick}`">
            <line
              :x1="yAxisX - 6"
              :x2="yAxisX"
              :y1="scaleY(tick)"
              :y2="scaleY(tick)"
              stroke="var(--color-pc)"
              stroke-opacity="0.6" />
            <text
              :x="yAxisX - 12"
              :y="scaleY(tick) + 4"
              fill="var(--color-n5)"
              font-size="12"
              text-anchor="end">
              {{ tick }}
            </text>
          </g>

          <text
            :x="margin.left + plotWidth / 2"
            :y="height - 8"
            fill="var(--color-n4)"
            font-size="13"
            text-anchor="middle">
            Winrate
          </text>

          <text
            :x="18"
            :y="margin.top + plotHeight / 2"
            fill="var(--color-n4)"
            font-size="13"
            text-anchor="middle"
            transform-origin="18px 50%"
            :transform="`rotate(-90 18 ${margin.top + plotHeight / 2})`">
            Delta
          </text>
        </g>

        <g>
          <defs>
            <clipPath
              v-for="point in chartPoints"
              :id="`ally-bubble-clip-${point.id}`"
              :key="`clip-${point.id}`">
              <circle
                :cx="point.x"
                :cy="point.y"
                :r="point.r" />
            </clipPath>
          </defs>

          <g
            v-for="point in chartPoints"
            :key="point.id"
            class="transition-transform duration-150 ease-out hover:scale-102">
            <title>
              {{ `${point.allyName} #${point.allyTag} · ${point.championName} · ${point.games} games · ${point.winrate}% winrate · ${point.delta} delta` }}
            </title>

            <circle
              :cx="point.x"
              :cy="point.y"
              :r="point.r + 2"
              :fill="point.stroke"
              fill-opacity="0.18" />

            <image
              :href="point.imageHref"
              :x="point.x - point.r"
              :y="point.y - point.r"
              :width="point.r * 2"
              :height="point.r * 2"
              :clip-path="`url(#ally-bubble-clip-${point.id})`"
              preserveAspectRatio="xMidYMid slice" />

            <circle
              :cx="point.x"
              :cy="point.y"
              :r="point.r"
              fill="none"
              :stroke="point.stroke"
              stroke-width="3" />

            <circle
              :cx="point.x"
              :cy="point.y"
              :r="point.r - 1.5"
              fill="none"
              stroke="rgba(255,255,255,0.9)"
              stroke-width="1" />
          </g>
        </g>
      </svg>
    </div>
  </UCard>
</template>
