<script lang="ts" setup>
const { class: className, pocket } = defineProps<{
  class?: HTMLAttributes["class"]
  pocket: Pocket
}>()

interface MaskBadge {
  maskKey: string
  headline: string
  icon: string
  label: string
  maskSize?: number // as percent
  ui?: {
    leadingIcon?: string
  }
}

const position = computed(() => pocket._position || pocket.positions?.[0])

const roleKey = computed(() => String(pocket._role || "all").toLowerCase())

const positionKey = computed(() =>
  String(position.value || "all").toLowerCase()
)

const icons = computed<Record<string, MaskBadge>>(() => ({
  map: {
    maskKey: pocket._map.toString(),
    headline: "Map",
    icon: `i-lp-${pocket._map.toString()}`,
    label: mapNameById(pocket._map) || "All Maps",
    maskSize: 80
  },
  role: {
    maskKey: roleKey.value,
    headline: "Role",
    icon: `i-lp-${roleKey.value}`,
    label: pocket._role || "All Roles"
  },
  position: {
    maskKey: positionKey.value,
    icon: `i-lp-${positionKey.value}`,
    headline: "Lane",
    label: position.value || "All Positions"
  }
}))
</script>

<template>
  <div class="absolute top-2.5 right-3 inline-flex">
    <div class="flex flex-col items-center justify-center gap-2">
      <SvgMask
        v-for="(icon, i) in icons"
        :key="i"
        invert
        as-child
        :label="icon.label"
        :icon="icon.icon"
        class="transition-scale rounded-full duration-500 ease-spring-soft hover:scale-120 hover:bg-white/80"
        :mask-key="icon.maskKey">
        <div class="flex h-11 items-center gap-2">
          <Icon :name="icon.icon" class="size-8 object-center text-nc" />
          <div class="flex flex-col -space-y-1 pr-2 pb-0.5">
            <p class="text-xs">
              {{ icon.headline }}
            </p>
            <h5>{{ icon.label }}</h5>
          </div>
        </div>
      </SvgMask>
    </div>
  </div>
</template>
