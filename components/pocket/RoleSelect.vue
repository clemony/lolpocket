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
  <Button
    variant="ghost"
    popovertarget="popover-1"
    style="anchor-name: --anchor-1"
    class="flex px-2 absolute top-1.5 right-2 max-h-54 hover:bg-neutral/50"
  >
    <transition-slide
      group
      class="h-full flex flex-col   justify-around items-center gap-3"
    >
      <template v-if="pocket.roles.length">
        <component
          :is="`i-${role.icon}`"
          v-for="role in pocket.roles"
          :key="role.name"
          v-tippy="role.name"
          class="size-6.5 drop-shadow-text focus:outline-0 shrink-0 !text-3 text-white/70"
        />
      </template>
      <i-all-lanes
        v-else
        class="size-6 shrink-0 dst text-white/80"
      />
    </transition-slide>
  </Button>
  <ul
    id="popover-1"
    class="dropdown menu w-52 rounded-md bg-b1 mt-1 shadow-sm"
    popover
    style="position-anchor: --anchor-1"
  >
    <li>
      <label
        for="all"
        class="flex gap-4 text-2 hover:!bg-b2/60"
      >
        <input
          id="all"
          v-model="pocket.roles"
          type="checkbox"
          class="hidden peer"
          value="all"
          checked="true"
          @change="console.log(pocket.roles)"
        />
        <icon
          name="tick-sm"
          class="size-5 opacity-0 peer-checked:opacity-100"
        />
        All
      </label>
    </li>

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
</template>

<style scoped></style>
