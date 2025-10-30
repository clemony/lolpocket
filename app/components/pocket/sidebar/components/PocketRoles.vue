<script lang="ts" setup>
import { championPositions } from '#shared/appdata'
import { VueDraggable } from 'vue-draggable-plus'

const { class: className, pocket: p } = defineProps<{
  pocket: Pocket
  class?: HTMLAttributes['class']
}>()

const pocket = computed(() => p)
</script>

<template>
  <Collapsible
    v-if="pocket"
    class="field-box w-full">
    <CollapsibleTrigger
      v-if="pocket.roles && pocket.roles?.[0]"
      class="text-3 group flex w-full items-center justify-start gap-1 px-3 py-3 text-start capitalize">
      <h3 class="dst grow">
        Roles
      </h3>

      <CaretRotate />
    </CollapsibleTrigger>

    <CollapsibleContent
      class="CollapsibleContent flex w-full flex-col justify-start gap-4 overflow-hidden px-4 pt-1 pb-4">
      <VueDraggable
        :model-value="pocket.roles"
        ghost-class="role-ghost"
        swap-class="role-swap"
        fallback-class="role-fallback"
        chosen-class="role-chosen"
        drag-class="role-drag"
        selected-class="role-select"
        class="relative flex h-fit w-full flex-wrap items-center gap-3">
        <RoleBadge
          v-for="role in pocket.roles"
          :key="role"
          :pocket="pocket"
          :role="role" />

        <Grow />
      </VueDraggable>
      <transition-slide
        :offset="{ enter: [10, 0], leave: [-10, 0] }"
        group
        class="relative flex h-fit w-full flex-wrap gap-3">
        <template
          v-for="role in championPositions"
          :key="role">
          <Label
            v-if="role"
            variant="outline"
            size="8"
            class="border-b3/80 bg-b1 order-3 rounded-lg"
            :class="cn({ 'hidden ': pocket.roles.includes(role.name) })"
            @click.stop>
            <input
              v-model="pocket.roles"
              class="peer absolute hidden"
              type="checkbox"
              :disabled="!role"
              :value="role.name"
              name="item-types"
              @change="handleRoles(pocket, role.name)" />

            <component
              :is="`i-roles-${role.name.toLowerCase()}`"
              class="text-bc/70 dst peer-checked:text-nc h-3.75 w-auto shrink-0"
              :class="{ '!text-bc/80': role.name.toLowerCase() === 'all' }" />
            {{ role.name }}
          </Label>
        </template>
      </transition-slide>
    </CollapsibleContent>
  </Collapsible>
</template>
