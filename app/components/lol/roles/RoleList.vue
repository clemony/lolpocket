<script lang="ts" setup>
import { roles } from "./handleRoles"

const props = defineProps<{
  pocket: Pocket
}>()

const pocket = toRef(props, 'pocket')
const pocketRoles = computed<string[]>({
  get: () => pocket.value.roles ?? [],
  set: (value) => {
    pocket.value.roles = value
  },
})

const to = ref([])

// Ensure rolesList is reactive and sorted initially
const rolesList = ref([...roles.sort((a, b) => a.localeCompare(b))])
const originalOrder = ref([...rolesList.value])

const sortedRoles = computed(() => {
  const checked = rolesList.value.filter((role) =>
    useArrayIncludes(pocketRoles, role)
  )
  const unchecked = rolesList.value.filter(
    (role) => !useArrayIncludes(pocketRoles, role)
  )
  return [...checked, ...unchecked]
})

function moveToTop(role: string) {
  const index = rolesList.value.findIndex((r) => r === role)
  if (index !== -1) {
    const [removed] = rolesList.value.splice(index, 1) // Remove role
    if (removed) rolesList.value.unshift(removed) // Add it to the top
  }
}

function resetCategories() {
  rolesList.value = [...originalOrder.value] // Reset to the original order
}

function handleReset() {
  to.value = [] // Ensure proper ref reactivity
  resetCategories()
}
</script>

<template>
  <p class="mb-3 text-sm">
    Is your pocket for a specific role? Roles can be specified in addition to
    champions, or in place of them.
  </p>

  <transition-slide class="filter gap-2" tag="form" group>
    <input
      class="filter-reset peer btn bg-p0 text-3xl font-normal! text-pc"
      type="checkbox"
      name="roles"
      aria-label="x"
      @click="pocketRoles = []" />

    <label
      v-for="role in sortedRoles"
      :key="role"
      class="has-checked:!bgneutral btn flex gap-3 rounded-lg! bg-p0 text-sm capitalize peer-not-checked:first-of-type:-ml-2 has-checked:text-nc has-checked:btn-neutral!"
      :for="role">
      <input
        :id="role"
        v-model="pocketRoles"
        class="peer hidden"
        type="checkbox"
        name="roles"
        :value="role"
        @change="moveToTop(role)" />

      <component
        :is="`i-roles-${role.replace(' ', '-')}`"
        class="h-4.5 w-auto shrink-0 dst peer-checked:text-nc"
        :class="{ 'size-5': role === 'jungle' }" />
      {{ role }}
    </label>
  </transition-slide>
</template>
