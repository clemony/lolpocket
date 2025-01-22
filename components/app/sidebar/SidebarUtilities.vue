<script setup lang="ts">
  const as = useAccountStore()
  const ts = useTempStore()

  const utility = [
    {
      name: 'Table',
      link: '/pocket/PocketTables',
      icon: 'teenyicons:border-all-outline',
    },
    {
      name: 'Cards',
      link: '/pocket/PocketCards',
      icon: 'teenyicons:layers-outline',
    },
  ]

  const databaseCheck = ref(true)
</script>
<template>
  <li
    class="collapse has-[not(:checked)]:h-14 group"
    key="database">
    <input
      v-model="databaseCheck"
      name="database"
      type="checkbox"
      class="peer" />
    <div class="collapse-title flex items-center gap-4 -ml-0.5">
      <icon
        name="fluent:data-usage-28-regular"
        class="size-5.5" />
      Pocket Data
      <ExpandIndicator />
    </div>
    <ul class="collapse-content">
      <li
        v-for="item in utility"
        :key="item.name">
        <NuxtLink
          :to="{ path: item.link }"
          class="flex gap-4 items-center">
          <LittleIcon
            :icon="item.icon"
            class="size-4.5" />
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </li>
</template>
<style scoped></style>
