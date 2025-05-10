<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const roles = computed (() => {
  const r = props.pocket.roles.filter(ro => ro != null)
  return r[0] ?? null
})
</script>

<template>
  <Collapsible>
    <CollapsibleTrigger class="w-full group/state">
      <NavBtn field>
        <span :active="roles != null">
          <i-roles-all v-if="roles == null || roles == undefined" class="size-4 text-bc/65" />

          <component
            :is="`i-roles-${roles.replace(' ', '-')}`"
            v-else
            class=" w-auto dst shrink-0 size-4 text-nc/94"
            :class="{ 'size-4.5': roles == 'jungle' }" />
        </span>
        <span class="capitalize">
          {{ roles || 'Roles' }}
        </span>
        <Grow />
        <RoleCounter :pocket="pocket" />&nbsp;
        <StateCaret />
      </NavBtn>
    </CollapsibleTrigger>
    <FieldCollapsibleContent>
      <LazyRoleList :pocket="pocket" />
    </FieldCollapsibleContent>
  </Collapsible>
</template>