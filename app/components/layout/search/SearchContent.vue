<script setup lang="ts">
import type { RouteRecordRaw } from "vue-router"
import { useFilter } from "reka-ui"

const { class: className, query } = defineProps<{
  query: string
  class?: HTMLAttributes["class"]
}>()

/* 'pockets', 'champions', 'summoners', 'items', 'runes' */

const router = useRouter()
const route = useRoute()
const user = useSupabaseUser()

const { contains } = useFilter({ sensitivity: "base" })
const pages = computed(() =>
  router.getRoutes().filter((p) => contains(String(p.name), query))
)

const items = computed(() =>
  pages.value.filter((r) => !r.meta?.search && r.path.split("/").length === 2)
)
type RouteGroup = {
  name: string
  items: RouteRecordRaw[]
  order?: number
}

const groups = computed(() => {
  const g = shallowRef<RouteGroup[]>([])
  pages.value
    .filter((r) => r.meta?.search === "children")
    .forEach((parent) => {
      g.value.push({
        name: String(parent.meta?.title || parent.name),
        items: parent.children,
        order: parent.meta?.order as number | undefined,
      })
    })
  return g.value.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
})
</script>

<template>
  <ComboboxList :class="cn('max-h-120', className)">
    <TabForTag />

    <ComboboxItem
      v-for="item in items"
      :key="item.name"
      class="p-0"
      :value="item.path"
      as-child>
      <!--
        variant="link" -->
      <UButton
        class="size-full h-8 shrink-0 justify-start px-3 py-1.25 font-normal capitalize"
        size="md"
        :to="item.path">
        <Icon
          v-if="item.meta?.icon"
          :class="item.meta?.iconClass"
          :name="String(item.meta?.icon)" />
        {{ item.meta?.title || item.name }}
      </UButton>
    </ComboboxItem>

    <ComboboxGroup
      v-for="group in groups"
      :key="group.name"
      :heading="group.name">
      <ComboboxItem
        v-for="item in group.items"
        :key="item.name"
        class="p-0"
        :value="item.path"
        as-child>
        <!--
          variant="link" -->
        <UButton
          class="size-full h-8 shrink-0 justify-start px-3 py-1.25 font-normal capitalize"
          size="md"
          :to="item.path">
          <Icon
            v-if="item.meta?.icon"
            :class="item.meta?.iconClass"
            :name="String(item.meta?.icon)" />
          {{ item.meta?.title || item.name }}
        </UButton>
      </ComboboxItem>
    </ComboboxGroup>
  </ComboboxList>
</template>
