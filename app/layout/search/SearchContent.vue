<script setup lang="ts">
import { useFilter } from 'reka-ui'

const { class: className, query } = defineProps<{
  query: string
  class?: HTMLAttributes['class']
}>()

/* 'pockets', 'champions', 'summoners', 'items', 'runes' */

const router = useRouter()
const route = useRoute()
const user = useSupabaseUser()

const { contains } = useFilter({ sensitivity: 'base' })
const pages = computed (() => router.getRoutes().filter(p => contains(String(p.name), query)))

const items = computed (() => pages.value.filter(r => !r.meta?.search && r.path.split('/').length === 2))
const groups = computed (() => {
  const g = shallowRef([])
  pages.value.filter(r => r.meta?.search === 'children').forEach((parent) => {
    g.value.push({
      name: parent.meta?.title || parent.name,
      items: parent.children,
      order: parent.meta?.order
    })
  })
  return g.value.sort((a, b) => (a.order - b.order))
})
</script>

<template>
  <ComboboxList
    :class="cn(' max-h-120', className)">
    <TabForTag />

    <ComboboxItem
      v-for="item in items"
      :key="item.name"
      class="p-0"
      :value="item.path"
      as-child>
      <BtnLink
        size="md"
        variant="link"
        class="capitalize shrink-0 px-3 h-8 py-1.25 justify-start font-normal size-full"
        :to="item.path">
        <hicon
          v-if="item.meta?.icon"
          :class="item.meta?.iconClass"
          :name="String(item.meta?.icon)" />
        {{ item.meta?.title || item.name }}
      </BtnLink>
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
        <BtnLink
          size="md"
          variant="link"
          class="capitalize shrink-0 px-3 h-8 py-1.25 justify-start font-normal size-full"
          :to="item.path">
          <hicon
            v-if="item.meta?.icon"
            :class="item.meta?.iconClass"
            :name="item.meta?.icon" />
          {{ item.meta?.title || item.name }}
        </BtnLink>
      </ComboboxItem>
    </ComboboxGroup>
  </ComboboxList>
</template>