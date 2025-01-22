<script lang="ts" setup>
  const props = defineProps<{
    pocket: pocket
  }>()

  const roles = [
    { name: 'top', icon: 'top' },
    { name: 'jungle', icon: 'jungle' },
    { name: 'middle', icon: 'middle' },
    { name: 'bottom', icon: 'bottom' },
    { name: 'support', icon: 'support' },
    { name: 'tiny carrot', icon: 'tiny-carrot' },
  ]
</script>

<template>
  <transition-slide
    group
    class="p-0 w-full">
    <Label
      v-if="pocket.roles.length"
      variant="ghost"
      size="md"
      class="px-2 rounded-md w-full hover:border-b2 flex items-center gap-4"
      v-for="role in pocket.roles">
      <input
        type="checkbox"
        class="hidden peer"
        :id="role.name"
        :value="role"
        v-model="pocket.roles"
        @change="console.log(pocket.roles)" />
      <component
        v-tippy="role.name"
        :key="role.name"
        :is="'i-' + role.icon"
        class="size-5.5 drop-shadow-text shrink-0 !text-3" />
      <span class="capitalize"> {{ role.name }}</span>
    </Label>

    <Button
      variant="ghost"
      size="md"
      popovertarget="popover-1"
      style="anchor-name: --anchor-1"
      class="flex gap-3.5 !w-full !tracking-normal !font-normal text-3 items-center justify-start pl-2 pr-3 mt-1">
      <icon
        name="add-sm"
        class="size-8 shadow-sm border p-0.5 border-b3 rounded-[5px] bg-neutral text-nc/90" />
      Role
    </Button>
    <ul
      class="dropdown menu w-52 rounded-md bg-b1 mt-1 shadow-sm"
      popover
      id="popover-1"
      style="position-anchor: --anchor-1">
      <li
        v-for="role in roles"
        :key="role.name"
        class="">
        <label
          :for="role.name"
          class="flex gap-4 text-2 hover:!bg-b2/60">
          <input
            type="checkbox"
            class="hidden peer"
            :id="role.name"
            :value="role"
            v-model="pocket.roles"
            @change="console.log(pocket.roles)" />
          <icon
            name="tick-sm"
            class="size-5 opacity-0 peer-checked:opacity-100" />
          {{ role.name }}
        </label>
      </li>
    </ul>
  </transition-slide>
</template>

<style scoped></style>
