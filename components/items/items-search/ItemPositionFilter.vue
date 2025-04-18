<script setup lang="ts">

const is = useItemStore()

function handleReset(){
  is.dbItemRoles = null
    is.itemGridApi.setGridOption('rowData', filterDbItems())
}

function handleChange(){
  is.itemGridApi.setGridOption('rowData', filterDbItems())
}
</script>

<template>
  <transition-slide group class="flex flex-wrap gap-5 relative ">
    <button
      class="btn btn-square btn-xl  absolute  left-0  "
      type="reset"
      @click="handleReset()">
    <icon name="x-sm" class="size-6 dst"/>
    </button>

    <label
      v-for="role in itemRoles"
      :key="role.id"
      v-tippy="{content: role.id.charAt(0).toUpperCase() + role.id.slice(1)}"
      :aria-label="role.id" class="size-fit    btn !size-14  btn-xl  mr-0 btn-square  " :class="{ 'bg-neutral border-neutral shadow-neutral/20 shadow-sm order-first  ml-19': role.id == is.dbItemRoles, 'first-of-type:ml-19': !is.dbItemRoles }">

      <input
        v-model="is.dbItemRoles" class="peer hidden absolute"
        type="radio"
        :value="role.id"
        name="item-Rolesition" @change="handleChange()" />

      <component :is="`${role.icon}`" class="size-6.5 drop-shadow-sm" :class="{ '!text-nc ': role.id == is.dbItemRoles }" />

    </label>
  </transition-slide>
</template>

<style scoped></style>
