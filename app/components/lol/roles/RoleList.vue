<script lang="ts" setup>
import type { Pocket } from "~~/shared/schema";
import { roles } from "./handleRoles";

const props = defineProps<{
  pocket: Pocket;
}>();

const pocket = ref(props.pocket);

const to = ref([]);

// Ensure rolesList is reactive and sorted initially
const rolesList = ref([...roles.sort((a, b) => a.localeCompare(b))]);
const originalOrder = ref([...rolesList.value]);

const sortedRoles = computed(() => {
  const checked = rolesList.value.filter((role) =>
    useArrayIncludes(pocket.value.roles, role),
  );
  const unchecked = rolesList.value.filter(
    (role) => !useArrayIncludes(pocket.value.roles, role),
  );
  return [...checked, ...unchecked];
});

function moveToTop(role: string) {
  const index = rolesList.value.findIndex((r) => r === role);
  if (index !== -1) {
    const [removed] = rolesList.value.splice(index, 1); // Remove role
    rolesList.value.unshift(removed); // Add it to the top
  }
}

function resetCategories() {
  rolesList.value = [...originalOrder.value]; // Reset to the original order
}

function handleReset() {
  to.value = []; // Ensure proper ref reactivity
  resetCategories();
}
</script>

<template>
  <p class="mb-3 text-2">
    Is your pocket for a specific role? Roles can be specified in addition to
    champions, or in place of them.
  </p>

  <transition-slide tag="form" group class="filter gap-2">
    <input
      class="filter-reset peer btn bg-b1 text-7 font-normal! text-bc"
      type="checkbox"
      name="roles"
      aria-label="x"
      @click="pocket.roles = [null]"
    />

    <label
      v-for="role in sortedRoles"
      :key="role"
      :for="role"
      class="has-checked:!bgneutral btn flex gap-3 rounded-lg! bg-b1 text-2 capitalize peer-not-checked:first-of-type:-ml-2 has-checked:text-nc has-checked:btn-neutral!"
    >
      <input
        :id="role"
        v-model="pocket.roles"
        type="checkbox"
        name="roles"
        class="peer hidden"
        :value="role"
        @change="moveToTop(role)"
      />

      <component
        :is="`i-roles-${role.replace(' ', '-')}`"
        class="h-4.5 w-auto shrink-0 dst peer-checked:text-nc"
        :class="{ 'size-5': role === 'jungle' }"
      />
      {{ role }}
    </label>
  </transition-slide>
</template>

<style scoped></style>
