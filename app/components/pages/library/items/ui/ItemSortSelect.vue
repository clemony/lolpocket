<script lang="ts" setup>
interface SortToggle {
  id: string
  icon: string
  labels: [string, string, string]
  values: [string, string, string]
  ui?: {
    leadingIcon?: string
  }
}

const store = is()
const { filters } = storeToRefs(store)

const toggles: SortToggle[] = [
  {
    id: "alpha",
    labels: [
      "Sort alphabetically (off)",
      "Sort alphabetically (A -> Z)",
      "Sort alphabetically (Z -> A)"
    ],
    icon: "i-bi-alphabet",
    values: ["", "alpha-asc", "alpha-desc"],
    ui: {
      leadingIcon: "scale-140"
    }
  },
  {
    id: "price",
    labels: [
      "Sort by price (off)",
      "Sort by price (low -> high)",
      "Sort by price (high -> low)"
    ],
    icon: "i-lp-gold",
    values: ["", "price-asc", "price-desc"],
    ui: {
      leadingIcon: "opacity-60"
    }
  }
]

const toggleModels = computed(() =>
  toggles.map((toggle) => {
    const index = toggle.values.indexOf(filters.value.sort)
    const state = index === -1 ? 0 : index

    return {
      ...toggle,
      state,
      label: toggle.labels[state]
    }
  })
)

function cycleToggle(toggle: SortToggle) {
  const currentIndex = toggle.values.indexOf(filters.value.sort)
  const nextIndex =
    currentIndex === -1 ? 1 : (currentIndex + 1) % toggle.values.length

  filters.value.sort = toggle.values[nextIndex] ?? ""
}
</script>

<template>
  <div class="flex items-center gap-1">
    <!--   <span class="pr-3 text-sm font-medium opacity-60">Sort:</span> -->
    <Tooltip
      v-for="item in toggleModels"
      :key="item.id"
      side="bottom"
      class=""
      :label="item.label">
      <UButton
        :active="item.state > 0"
        active-color="neutral"
        color="p0"
        size="sm"
        :ui="{
          base: cn(
            'w-18 justify-center drop-shadow-none',
            item.state === 0 ? 'border-p4/60 ' : '',
            item.state > 0 ? '**:text-nc' : '**:text-pc'
          )
        }"
        @click="cycleToggle(item)">
        <Icon
          :name="item.icon"
          :class="
            cn(
              'size-4',
              item.state > 0 ? 'opacity-100!' : 'opacity-90',
              item.ui?.leadingIcon
            )
          " />
        <Icon
          v-if="item.state > 0"
          :name="
            item.state === 1
              ? 'i-lucide-arrow-up'
              : item.state === 2
                ? 'i-lucide-arrow-down'
                : ''
          "
          :class="
            cn('size-3.5', item.state > 0 ? 'opacity-100' : 'opacity-60')
          " />
      </UButton>
    </Tooltip>
  </div>
</template>
