<script lang="ts" setup>
import { libraryNav } from "~/utils/routes"
</script>

<template>
  <ul class="menu w-50 gap-1 overflow-hidden p-1">
    <li v-for="item in libraryNav" :key="item.label">
      <UButton
        v-bind="item"
        :ui="{
          base: 'justify-start text-start text-sm font-semibold ',
        }"
        :avatar="{
          icon: item.avatar.icon,

          ui: {
            root: 'bg-p2! ring ring-p3 noise shadow-xs dst **:text-pc text-pc size-5.5',
            icon: cn('size-3.5', item?.ui?.icon),
          },
        }"
        variant="highlight">
        <!--
        <UUser
          :name="item.label"
          :ui="{
            description: 'font-normal',
            name: 'text-sm',
            avatar: 'size-10 *:size-10',
          }"
          :description="item.description.label"
          :avatar="item.avatar">
          <template #description>
            <span class="text-start">{{ item.description.label }}</span>
            <span class="text-end text-xs text-nowrap whitespace-nowrap italic">
              —{{ item.description.alt }}
            </span>
          </template>
        </UUser> -->
      </UButton>
    </li>
  </ul>
</template>
