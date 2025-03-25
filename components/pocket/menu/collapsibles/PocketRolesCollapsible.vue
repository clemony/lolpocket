<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const roles = computed (() => {
  const r = props.pocket.roles.filter(ro => ro != null)
  return r[0] ?? null
})
</script>

<template>
  <Collapsible>
    <RightbarDropdownTrigger>
      <RightbarIconWrapper :active="roles != null">
        <i-roles-all v-if="roles == null" class="size-4 text-bc/65" />

        <component
          :is="`i-roles-${roles.replace(' ', '-')}`"
          v-else
          class=" w-auto dst shrink-0 size-4 text-nc/94"
          :class="{ 'size-4.5': roles == 'jungle' }" />
      </RightbarIconWrapper>
      <span class="capitalize">
        {{ roles || 'Roles' }}
      </span>
      <template #counter>
        <RoleCounter :pocket="pocket" />
      </template>
    </RightbarDropdownTrigger>
    <FieldCollapsibleContent>
      <LazyRoleList :pocket="pocket" />
    </FieldCollapsibleContent>
  </Collapsible>
</template>