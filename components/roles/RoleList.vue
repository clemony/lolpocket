<script lang="ts" setup>
import { roles } from './handleRoles'

const props = defineProps<{
  pocket: pocket
}>()

const pocket = ref(props.pocket)

const to = ref([])

// Ensure rolesList is reactive and sorted initially
const rolesList = ref([...roles.sort((a, b) => a.localeCompare(b))])
const originalOrder = ref([...rolesList.value])

const sortedRoles = computed(() => {
  const checked = rolesList.value.filter(role => useArrayIncludes(pocket.value.roles, role))
  const unchecked = rolesList.value.filter(role => !useArrayIncludes(pocket.value.roles, role))
        console.log("💠 - pocket.role:", pocket.value.roles)
  return [...checked, ...unchecked]
})

function moveToTop(role: string) {
  const index = rolesList.value.findIndex((r) => r === role)
  if (index !== -1) {
    const [removed] = rolesList.value.splice(index, 1) // Remove role
    rolesList.value.unshift(removed) // Add it to the top
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
  <div class="field">
    <div class="field-legend">
      Roles
    </div>
    <p class="text-2 mb-3">Is your pocket for a specific role? Roles can be specified in addition to champions, or in place of them.</p>

 
      <transition-slide  tag="form" group class="filter gap-2">
      <input
        class="btn filter-reset bg-b1 text-6 !font-normal text-bc" type="checkbox"
        name="roles" aria-label="x" @click="pocket.roles = []"
      />
      <label
        v-for="role in sortedRoles"
        :key="role"
        :for="role"
        class="flex gap-4  capitalize text-2 btn bg-b1 !rounded-lg has-checked:!bg-neutral has-checked:!btn-neutral has-checked:text-nc"
        :class="{'first-of-type:!-ml-2': !pocket.roles.length}"
      >
        <input
          :id="role"
          v-model="pocket.roles"
    
          type="checkbox"
          name="roles"
          class="hidden peer"
          :value="role"
       @change="moveToTop(role)"
        />
      <component
          :is="`i-roles-${role.replace(' ', '-')}`"
          class="h-5 w-auto dst shrink-0 peer-checked:text-nc"
          :class="{'size-5': role == 'tiny-carrot'}"
        />
        {{ role }}
      </label>
      </transition-slide>

  </div>
</template>

<style scoped></style>
