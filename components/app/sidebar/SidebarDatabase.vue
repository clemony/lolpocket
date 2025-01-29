<script setup lang="ts">
const as = useAccountStore()
const ts = useTempStore()

const db = [
  {
    name: 'Champions',
    link: 'Champions',
    icon: 'i-helmet',
  },
  {
    name: 'Items',
    link: 'Items',
    icon: 'teenyicons:shield-tick-outline',
  },
  {
    name: 'Runes',
    link: 'Runes',
    icon: 'i-rune',
  },
  {
    name: 'Spells',
    link: 'Spells',
    icon: 'shield',
  },
]

const databaseCheck = ref(true)
</script>

<template>
  <li
    key="database"
    class="collapse group"
  >
    <input
      v-model="databaseCheck"
      name="database"
      type="checkbox"
    />
    <div class="collapse-title flex items-center gap-4">
      <icon
        name="ph:computer-tower-light"
        class="size-6.5 -ml-1.25"
      />
      Game Data
      <ExpandIndicator />
    </div>
    <ul class="collapse-content">
      <li
        v-for="submenu in db"
        :key="submenu.name"
      >
        <NuxtLink
          :to="{ name: submenu.link }"
          class="flex gap-4 items-center"
        >
          <div
            v-if="submenu.name == 'Champions' || submenu.name == 'Runes' "
            class="size-5 relative"
          >
            <component
              :is="submenu.icon"
              :key="submenu.name"
              class="size-5.5 text-bc stroke-1 absolute -left-px"
            />
          </div>
          <icon v-else :name="submenu.icon" class="size-5" />
          {{ submenu.name }}
        </NuxtLink>
      </li>
    </ul>
  </li>
</template>

<style scoped></style>
