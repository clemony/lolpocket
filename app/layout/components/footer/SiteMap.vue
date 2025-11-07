<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
const listClass = 'flex flex-col gap-3 w-80 h-full  [&_li]:px-1 [&_li]:drop-shadow-sm'

const itemClass
  = 'flex items-center font-medium gap-2 hover:underline-offset-2 hover:underline'

const router = useRouter()
const route = useRoute()
const pages = router.getRoutes()

const items = computed (() => pages.filter(r => !r.meta?.search && r.path.split('/').length === 2))
const groups = computed (() => {
  const g = shallowRef([])
  pages.filter(r => r.meta?.search === 'children').forEach((parent) => {
    g.value.push({
      name: parent.meta?.title || parent.name,
      items: parent.children as RouteRecordRaw[],
      order: parent.meta?.order
    })
  })
  return g.value.sort((a, b) => (b.order - a.order))
})
</script>

<template>
  <div
    :class="
      cn(
        'bg-b2 relative before:size-full before:bg-b2 z-1 before:absolute before:z-0 text-bc flex w-full justify-center border-t border-t-b3/60 h-146 min-h-146 overflow-hidden max-h-146 z-1',
        className,
      )
    ">
    <div
      v-if="groups.length"
      class="grid auto-cols-max grid-flow-col h-full [&_h1]:dss items-start z-1 gap-x-10 gap-y-16 px-12 pt-30 pb-40">
      <ul
        v-for="group in groups"
        :key="group?.name"
        :class="listClass">
        <h1 class="capitalize">
          {{ group.meta?.title || group?.name }}
        </h1>
        <li
          v-for="item in group.items"
          :key="item?.name"
          :class="cn('capitalize', itemClass)">
          {{ item?.meta?.title || item?.name }}
        </li>
      </ul>

      <!-- <template v-for="section in externalLinks" :key="section">
        <ul
          v-if="section.name"
          :class="listClass">
          <h3>{{ section.name }}</h3>

          <li
            v-for="link in section.submenu"
            :key="link.name"
            :class="itemClass">
            {{ link.name }}
          </li>
        </ul>

        <template v-else-if="section.submenu">
          <ul
            v-for="menu in section.submenu"
            :key="menu.name"
            :class="listClass">
            <h3>{{ `${menu.name} Links` }}</h3>

            <li
              v-for="link in menu.items"
              :key="link.name"
              target="_blank"
              :href="link.url">
              <a :class="itemClass">
                {{ link.name }}
                <icon name="mingcute:external-link-line" />
              </a>
            </li>
          </ul>
        </template>
      </template> -->
    </div>
  </div>
</template>

<style scoped></style>
