<script setup lang="ts">
const props = defineProps<{
  pocket: Pocket
  role: string
}>()

const pocket = computed (() => props.pocket)
</script>

<template>
  <label

    class="btn btn-sm justify-start btn-n1 !text-2   gap-2 text-nc  group/role   capitalize relative overflow-hidden" @click.stop>

    <input
      v-model="pocket.roles" class="peer hidden absolute"
      type="checkbox"
      :value="role"
      name="item-types" @change="handleRoles(pocket)" />

    <component
      :is="`i-roles-${role.toLowerCase().replace(' ', '-').replace('utility', 'support')}`"
      class="!h-3.75  w-auto dst shrink-0 text-nc" />

    <span class="group-hover/role:opacity-0 transition-opacity duration-200">{{ role }}</span>

    <span class=" right-0 size-full px-2 group-hover/role:opacity-100 transition-opacity absolute items-center  opacity-0 flex justify-end duration-200">
      <icon name="x-sm" class="size-6 text-nc/90" />
    </span>

  </label>
</template>