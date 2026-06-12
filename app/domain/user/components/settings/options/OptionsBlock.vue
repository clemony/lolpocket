<script lang="ts" setup>
import type { AvatarProps } from "@nuxt/ui"

const {
  data: users,
  status,
  execute
} = await useLazyFetch("https://jsonplaceholder.typicode.com/users", {
  key: "typicode-users-email",
  transform: (data: { id: number; name: string; email: string }[]) => {
    return data?.map((user) => ({
      label: user.name,
      email: user.email,
      value: String(user.id),
      avatar: {
        src: `https://i.pravatar.cc/120?img=${user.id}`,
        loading: "lazy" as const,
        size: "sm" as AvatarProps["size"],
        icon: "i-ban",
        ui: {
          root: "bg-n2 ",
          image:
            "group-hover/item:opacity-0 transition-opacity duration-200 ease-spring-soft"
        }
      }
    }))
  },
  immediate: false
})

onMounted(() => {
  execute()
})
</script>

<template>
  <UListbox
    :items="users || []"
    :loading="status === 'pending'"
    :filter-fields="['label', 'email']"
    :filter="{
      icon: 'i-lucide-search',
      loading: status === 'pending',
      ui: {
        root: 'w-full',
        base: ' '
      }
    }"
    :ui="{
      root: 'w-full rounded-2xl border border-p4/60 ring-0 hover:border-pc/60! hover:inset-shadow-sm',
      itemLabel: 'text-sm',
      item: 'group/item flex cursor-pointer items-center rounded-xl hover:bg-p3 hover:inset-ring hover:inset-ring-p4/40',
      input: 'border-b-p4/60'
    }">
    <template #item-leading="{ item }">
      <div class="relative grid size-max place-items-center">
        <UAvatar v-bind="item.avatar" />
        <Icon
          name="i-ban"
          class="absolute size-4 text-nc opacity-0 **:stroke-[14%] group-hover/item:opacity-100" />
      </div>
    </template>
    <template #item-label="{ item }">
      {{ item.label }}

      <span class="text-n5">
        {{ item.email }}
      </span>
    </template>
  </UListbox>
</template>
