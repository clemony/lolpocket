<script setup lang="ts">
const listClass = 'flex flex-col gap-3  min-w-44'

const itemClass = 'flex items-center gap-2 hover:underline-offset-2 hover:underline'
</script>

<template>
  <div class="bg-b2 text-bc flex w-full items-center justify-center border-t border-t-b3/60 h-140 min-h-140 max-h-140">
    <div class="flex w-full flex-wrap justify-evenly gap-x-10 gap-y-16 px-12 pt-36 pb-40 [&_h3]:drop-shadow-sm [&_li]:drop-shadow-sm">
      <ul :class="listClass">
        <h3>Tools</h3>
        <li
          :class="itemClass"
        >
          Create a Pocket
        </li>
        <li
          v-for="link in pocketLinks" :key="link.name"
          class="flex items-center gap-2 capitalize"
        >
          <NuxtLink
            :to="{ path: link.url }"
            :class="itemClass"
          >
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>

      <template v-for="section in externalLinks" :key="section">
        <ul
          v-if="section.name"
          :class="listClass"
        >
          <h3>{{ section.name }}</h3>
          <li
            v-for="link in section.submenu"
            :key="link.name"
            :class="itemClass"
          >
            {{ link.name }}
          </li>
        </ul>
        <template v-else-if="section.submenu">
          <ul
            v-for="menu in section.submenu"
            :key="menu.name"
            :class="listClass"
          >
            <h3>{{ `${menu.name} Links` }}</h3>

            <li
              v-for="link in menu.items"
              :key="link.name"
              target="_blank"
              :href="link.url"
            >
              <a :class="itemClass">
                {{ link.name }}
                <icon name="mingcute:external-link-line" />
              </a>
            </li>
          </ul>
        </template>
      </template>

      <ul :class="listClass">
        <h3>Settings</h3>
        <li
          v-for="link in settingLinks"
          :key="link.name"
          class="flex items-center gap-2 capitalize"
        >
          {{ link.name }}
        </li>
      </ul>

      <ul :class="listClass">
        <h3>Info</h3>
        <li
          v-for="link in infoLinks"
          :key="link.name"
          class="flex items-center gap-2"
        >
          <NuxtLink
            v-if="link.type == 'i'"
            :to="{ path: link.url }"
          >
            {{ link.name }}
          </NuxtLink>

          <a
            v-else
            :key="link.name"
            target="_blank"
            :href="link.url"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
