<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const pocket = ref(props.pocket)
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
    class="w-full "
  >
    <template v-if="pocket.roles.length">
      <Label
        v-for="role in pocket.roles"
        :key="role.name"
        variant="ghost"
        size="md"
        class="px-2 rounded-md w-full hover:border-b2 flex items-center gap-4"
      >
        <input
          :id="role.name"
          v-model="pocket.roles"
          type="checkbox"
          class="hidden peer"
          :value="role"
          @change="console.log(pocket.roles)"
        />
        <span class="size-7 flex items-center justify-center">
          <component
            :is="`i-${role.icon}`"
            :key="role.name"
            v-tippy="role.name"
            class="size-5.5 drop-shadow-text shrink-0 !text-3"
          />
        </span>
        <span class="capitalize"> {{ role.name }}</span>
      </Label>
    </template>
    <Button
      variant="ghost"
      size="md"
      popovertarget="popover-1"
      style="anchor-name: --anchor-1"
      class="flex gap-4.5 justify-start font-normal  pl-2.5  w-full  mt-1 "
    >
      <icon
        name="add-sm"
        class="size-6 shrink-0"
      />

      add
    </Button>
    <ul
      id="popover-1"
      class="dropdown menu w-52 rounded-md bg-b1 mt-1 shadow-sm"
      popover
      style="position-anchor: --anchor-1"
    >
      <li
        v-for="role in roles"
        :key="role.name"
        class=""
      >
        <label
          :for="role.name"
          class="flex gap-4 text-2 hover:!bg-b2/60"
        >
          <input
            :id="role.name"
            v-model="pocket.roles"
            type="checkbox"
            class="hidden peer"
            :value="role"
            @change="console.log(pocket.roles)"
          />
          <icon
            name="tick-sm"
            class="size-5 opacity-0 peer-checked:opacity-100"
          />
          {{ role.name }}
        </label>
      </li>
    </ul>
  </transition-slide>
</template>

<style scoped></style>
