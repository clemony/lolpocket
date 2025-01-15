<script setup lang="ts">
  const as = useAccountStore()
  const ts = useTempStore()

  const db = [
    { name: 'Summoners', link: '/Summoners', icon: '' },
    {
      name: 'Champions',
      link: '/Champions',
      icon: '',
    },
    {
      name: 'Items',
      link: '/Items',
      icon: '',
    },
    {
      name: 'Runes',
      link: '/Runes',
      icon: '',
    },
    {
      name: 'Spells',
      link: '/Spells',
      icon: '',
    },
  ]

  const databaseCheck = ref(true)
</script>
<template>
  <li
    class="collapse group"
    key="database">
    <input
      v-model="databaseCheck"
      name="database"
      type="checkbox" />
    <div class="collapse-title flex items-center gap-4">
      <icon
        name="qlementine-icons:drive-16"
        class="size-4.75" />
      Database
      <ExpandIndicator />
    </div>
    <ul class="collapse-content">
      <li
        v-for="(submenu, i) in db"
        :key="i">
        <NuxtLink
          :to="{ path: submenu.link }"
          class="flex gap-4 items-center">
          <!--    <LittleIcon
            :icon="submenu.icon"
            class="size-5.5" /> -->
          {{ submenu.name }}
        </NuxtLink>
      </li>
    </ul>
  </li>
</template>
<style scoped></style>
