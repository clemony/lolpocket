<script setup lang="ts">
  const as = useAccountStore()
  const ts = useTempStore()

  const db = [
    {
      name: 'Champions',
      link: 'Champions',
      icon: '',
    },
    {
      name: 'Items',
      link: 'Items',
      icon: '',
    },
    {
      name: 'Runes',
      link: 'Runes',
      icon: 'i-rune',
    },
    {
      name: 'Spells',
      link: 'Spells',
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
      name="database"
      v-model="databaseCheck"
      type="checkbox" />
    <div class="collapse-title flex items-center gap-4">
      <icon
        name="ph:computer-tower-light"
        class="size-6.5 -ml-1.25" />
      Game Data
      <ExpandIndicator />
    </div>
    <ul class="collapse-content">
      <li
        v-for="submenu in db"
        :key="submenu.name">
        <NuxtLink
          :to="{ name: submenu.link }"
          class="flex gap-4 items-center">
          <!-- <component
            :key="submenu.name"
            :is="submenu.icon"
            class="size-5.5 text-bc stroke-1" /> -->
          {{ submenu.name }}
        </NuxtLink>
      </li>
    </ul>
  </li>
</template>
<style scoped></style>
