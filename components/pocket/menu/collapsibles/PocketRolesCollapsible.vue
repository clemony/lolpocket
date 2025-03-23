<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const roles = computed (() => {
  const r = props.pocket.roles.filter(ro => ro != null)
  return r[0] ?? null
})
console.log('💠 - roles - roles:', roles)
</script>

<template>
  <Collapsible>
<RightbarDropdownTrigger>
      <RightbarIconWrapper :active="roles != null">
        <i-roles-all v-if="roles == null" class="size-3.5 text-bc/65" />

        <component
          :is="`i-roles-${roles.replace(' ', '-')}`"
          v-else
          class=" w-auto dst shrink-0 size-3.5 text-nc/94"
          :class="{ 'size-4': roles == 'jungle' }" />
      </RightbarIconWrapper>
      Roles

      <template #counter>
      <RoleCounter :pocket="pocket" />
</template>
</RightbarDropdownTrigger>
<FieldCollapsibleContent>
      <LazyRoleList :pocket="pocket" />

</FieldCollapsibleContent>
  </Collapsible>
</template>