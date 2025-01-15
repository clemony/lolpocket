<script setup lang="ts">
  const as = useAccountStore();
  const ts = useTempStore();

  const info = [
    {
      name: 'Docs',
      link: '/Docs',
      type: 'i',
      icon: 'qlementine-icons:book-16',
    },
    {
      name: 'About',
      link: '/About',
      type: 'i',
      icon: 'clarity:help-line',
    },
    {
      name: 'Github',
      link: 'https://github.com/clemony/lolpocket',
      type: 'ex',
      icon: 'ph:github-logo',
    },
    {
      name: 'contact@lolpocket.win',
      link: '',
      type: 'ex',
      icon: 'fluent:mail-48-regular',
    },
    {
      name: 'Discord',
      link: 'https://discord.gg/Jzuu7bYTZY',
      type: 'ex',
      icon: 'streamline:discord',
    },
  ];
</script>
<template>
  <li
    class="collapse group"
    key="database">
    <input
      name="database"
      type="checkbox" />
    <div class="hover:bg-b2/30 collapse-title flex items-center gap-4">
      <icon
        name="teenyicons:info-outline"
        class="size-5" />
      Info
      <ExpandIndicator />
    </div>
    <ul class="collapse-content">
      <li
        v-for="item in info"
        :key="item.name">
        <template v-if="item.type == 'i'">
          <NuxtLink
            :to="{ path: item.link }"
            class="flex gap-4 items-center">
            <LittleIcon
              :icon="item.icon"
              class="size-5.5" />
            {{ item.name }}
          </NuxtLink>
        </template>

        <template v-else-if="item.type == 'ex'">
          <a
            href="item.link"
            target="_blank"
            class="flex gap-4 items-center">
            <LittleIcon
              :icon="item.icon"
              class="size-5.5" />
            {{ item.name }}
          </a>
        </template>
      </li>
    </ul>
  </li>
</template>
<style scoped></style>
