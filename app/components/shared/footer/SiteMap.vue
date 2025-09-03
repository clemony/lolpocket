<script setup lang="ts">
import { contactLinks, siteInfoLinks } from '~/routes'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']

}>()
const listClass = 'flex flex-col gap-3 py-20 min-w-44'

const itemClass = 'flex items-center gap-2 hover:underline-offset-2 hover:underline'

const { childRoutes: library } = useChildRoutes('library')
watch(() => library.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
</script>

<template>
  <div :class="cn('bg-b2 relative before:size-full before:bg-b2 z-1 before:absolute before:z-0 text-bc flex w-full items-center justify-center border-t border-t-b3/60 h-146 min-h-146 max-h-146 z-1', className)">
    <div class="flex size-full flex-wrap justify-evenly z-1 gap-x-10 gap-y-16 px-12 pt-36 pb-40 [&_h3]:drop-shadow-sm [&_li]:drop-shadow-sm">
      <div class=" min-w-110 w-110 size-full  flex flex-col gap-6 ">
        <h1 class="drop-shadow-sm">
          Looking for something?
        </h1>
        <SummonerSearchBox class=" !h-13 -mx-1">
        </SummonerSearchBox>

        <p class="flex text-bc flex-col gap-2 mt-2 pl-px">
          <span>  Browse your favorite players...</span>

          <span>
            <b>lol <i>pocket</i></b>&nbsp;their builds.
          </span>
        </p>
      </div>
      <ul :class="listClass">
        <h3>Tools</h3>

        <li
          :class="itemClass">
          Create a Pocket
        </li>
      </ul>

      <ul
        v-if="library"
        :class="listClass">
        <h3>Library</h3>
        <li
          v-for="item in library"
          :key="item.name"
          :class="itemClass">
          {{ item.meta.title }}
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

      <ul :class="listClass">
        <h3>Info</h3>

        <li
          v-for="link in siteInfoLinks.concat(contactLinks)"
          :key="link.name"
          class="flex items-center gap-2">
          <ULink
            v-if="link.external"
            external
            :to=" link.link">
            {{ link.name }}
          </ULink>

          <ULink
            v-else
            :key="link.name"
            :to="link.link">
            {{ link.name }}
          </ULink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
