<script setup lang="ts">
const props = defineProps<{
  pocket: Pocket
  role: string
}>()

const pocket = computed (() => props.pocket)
</script>

<template>
  <Label
    variant="neutral"
    size="xs"
    class="justify-start !text-2 rounded-lg  gap-2   group/role   capitalize relative overflow-hidden"
    @click.stop>
    <input
      v-model="pocket.roles"
      class="peer hidden absolute"
      type="checkbox"
      :value="role"
      name="item-types"
      @click.stop
      @change="handleRoles(pocket)" />

    <component
      :is="`i-roles-${role.toLowerCase().replace(' ', '-').replace('utility', 'support')}`"
      class="!h-3.75  w-auto dst shrink-0 text-nc" />

    <span class="group-hover/role:opacity-0 transition-opacity duration-200">{{ role }}</span>

    <span class=" right-0 size-full px-2 group-hover/role:opacity-100 transition-opacity absolute items-center  opacity-0 flex justify-end duration-200">
      <icon
        name="x"
        class="size-4 text-nc/90" />
    </span>

  </Label>
</template>