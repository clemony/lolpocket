<script setup lang="ts">
  const as = useAccountStore()
  const ts = useTempStore()
  const size = computed(() => {
    const open = ref(ts.sidebarOpen)
    return open ? 'lg' : !open ? 'icon' : 'default'
  })

  const ex = {
    name: 'Resources',
    icon: 'carbon:group-resource',
    open: false,
    submenu: [
      {
        name: 'Official',
        open: true,
        items: [
          {
            name: 'Dev Updates',
            link: 'https://www.leagueoflegends.com/en-us/news/dev/',
            icon: '/img/logos/fist.webp',
          },
          {
            name: 'Patch Notes',
            link: 'https://www.leagueoflegends.com/en-us/news/tags/patch-notes/',
            icon: '/img/logos/league2.webp',
          },
          {
            name: 'Wiki',
            link: 'https://wiki.leagueoflegends.com/en-us/',
            icon: '/img/logos/wiki.webp',
          },
        ],
      },
      {
        name: 'Statistics',
        open: true,
        items: [
          {
            name: 'Lolalytics',
            link: 'https://lolalytics.com',
            icon: '/img/logos/lolalytics.webp',
          },
          {
            name: 'op.gg',
            link: 'https://www.op.gg',
            icon: '/img/logos/opgg2.webp',
          },
          {
            name: 'u.gg',
            link: 'https://u.gg',
            icon: '/img/logos/ugg2.webp',
          },
          {
            name: 'League of Graphs',
            link: 'https://www.leagueofgraphs.com',
            icon: '/img/logos/LoG.webp',
          },
          {
            name: 'League of Items',
            link: 'https://leagueofitems.com',
            icon: '/img/logos/LoI.webp',
          },
        ],
      },
    ],
  }

  const resourceCheck = ref(false)
</script>
<template>
  <li
    class="collapse"
    key="resources">
    <input
      v-model="resourceCheck"
      name="resources"
      type="checkbox" />
    <div class="collapse-title flex items-center gap-4">
      <LittleIcon
        icon="carbon:group-resource"
        class="size-5" />
      Resources
      <ExpandIndicator v-model:check="resourceCheck" />
    </div>
    <ul class="collapse-content">
      <li
        v-for="(submenu, i) in ex.submenu"
        class="collapse group">
        <input
          :name="submenu.name"
          type="checkbox" />
        <div class="collapse-title flex items-center gap-4">
          {{ submenu.name }}
          <ExpandIndicator />
        </div>

        <ul class="collapse-content">
          <li v-for="item in submenu.items">
            <a
              href="item.link"
              target="_blank"
              class="flex gap-4 items-center">
              <img
                :src="item.icon"
                class="size-5.5 rounded-full shadow-sm" />
              {{ item.name }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</template>
<style scoped></style>
