<script setup lang="ts">
import { contactLinks, siteInfoLinks } from '#shared/appdata'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
const listClass = 'flex flex-col gap-3 w-80 h-full  [&_li]:px-1 [&_li]:drop-shadow-sm'

const itemClass
  = 'flex items-center font-medium gap-2 hover:underline-offset-2 hover:underline'

const { childRoutes: library } = useChildRoutes('library')
watch(
  () => library.value,
  (newVal) => {
    console.log('💠 - watch - newVal:', newVal)
  }
)
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
      class="grid auto-cols-max grid-flow-col size-full [&_h1]:dss items-start z-1 gap-x-10 gap-y-16 px-12 pt-30 pb-40">
      <div class="min-w-110 w-110 size-full shrink-1 flex flex-col gap-6 ">
        <h1>
          Looking for something?
        </h1>
        <Search class="!h-13 -mx-1 w-100"></Search>

        <p class="flex text-bc flex-col gap-2 mt-2 pl-px">
          <span>Browse your favorite players...</span>

          <span><i>pocket</i>
            their builds.
          </span>
        </p>
      </div>
      <ul :class="listClass">
        <h1>Tools</h1>

        <li :class="itemClass">
          Create a Pocket
        </li>
      </ul>

      <ul
        v-if="library"
        :class="listClass">
        <h1>Library</h1>
        <li
          v-for="item in library"
          :key="item.name"
          :class="itemClass">
          {{ item.meta.title }}
        </li>
      </ul>
      <ul :class="listClass">
        <h1>Info</h1>

        <li
          v-for="link in siteInfoLinks.concat(contactLinks)"
          :key="link.name"
          class="flex *:font-medium *:dst items-center gap-2">
          <ULink
            v-if="link.external"
            external
            :to="link.link">
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
