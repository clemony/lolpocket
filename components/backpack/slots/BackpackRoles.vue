<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const pocket = computed (() => {
  return props.pocket
})

const roles = computed (() => {
  return props.pocket.roles.filter(r => r != '' && r != null)
})
</script>

<template>
  <p class="divider divider-start text-nowrap flex-nowrap mt-0 mb-3 divider-neutral after:opacity-40 grow" :class="{'opacity-20': !roles.length}">
    <span v-for="(role, i) in roles" :key="role" class="group/role capitalize">

      <template v-if="role">{{ role }}<span v-if="i == roles.length - 2 && roles.length != 1" class="-mr-2" > &</span><span v-else-if="i != roles.length - 1" >, </span>
      </template>

    </span>
  </p>
</template>