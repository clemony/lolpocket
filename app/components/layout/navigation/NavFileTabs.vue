<script lang="ts" setup>
import { useScrollInject } from "~~/layers/lib/app/composables/navigation/useElementScroll"
import { useRouteNavigation } from "~~/layers/lib/app/composables/navigation/useRouteNavigation"

const route = useRoute()
const { childRoutes, targetRoutes } = useRouteNavigation()
const { scrollY } = useScrollInject()
</script>

<template>
  <nav
    v-if="childRoutes"
    role="tablist"
    :class="
      cn(
        'relative z-3 flex h-15 w-fit items-end place-self-end border-b-0! transition-none *:select-none **:text-sm'
      )
    ">
    <button
      v-for="item in childRoutes.sort((a, b) => a.meta?.order - b.meta?.order)"
      :key="item.name"
      role="tab"
      tabindex="0"
      :class="
        cn(
          'group/tab pointer-events-auto tabs-lift relative tabs flex w-max min-w-22 grow origin-bottom cursor-pointer items-start self-end border-b-0! tabs-lg transition-none *:pointer-events-none'
        )
      "
      @click="navigateTo(targetRoutes[String(item.name)])">
      <FakeTab />

      <div
        :class="
          cn(
            'tab absolute bottom-0! left-0 w-full grow origin-bottom border-b-0!',
            {
              'bg-p0/90': item.name === route.name,
              'tab-active': item.name === route.name
            }
          )
        " />

      <div
        :class="
          cn(
            'd z-3 flex h-10 w-full grow flex-nowrap items-center justify-center text-sm font-medium text-pc/90 capitalize transition-[opacity,transform] duration-100 ease-out group-hover/tab:underline',
            {
              'opacity-60': item.name !== route.name,
              'opacity-100': item.name === route.name
            }
          )
        ">
        <Icons
          v-if="route.fullPath.match(/backpack.*/)"
          :name="item?.meta?.icon"
          :class="
            cn('mr-4 size-3.75 **:stroke-2', {
              'size-3.75': item.meta.icon === 'folder'
            })
          " />
        {{ item?.meta?.title || item?.name?.toString() }}
      </div>

      <FakeTab />
    </button>
  </nav>
</template>
