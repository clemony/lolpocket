<script lang="ts" setup>
import { VueDraggable } from 'vue-draggable-plus'

const { class: className, pocket: p } = defineProps<{
  pocket: Pocket
  class?: HTMLAttributes['class']
}>()

const pocket = computed(() => p)
</script>

<template>
  <Collapsible v-if="pocket" class="field-box w-full">
    <CollapsibleTrigger
      v-if="pocket.roles && pocket.roles?.[0]"
      class="group flex w-full items-center justify-start gap-1 p-3 text-start text-md capitalize"
    >
      <h3 class="grow dst">
        Roles
      </h3>

      <CaretRotate />
    </CollapsibleTrigger>

    <CollapsibleContent
      class="CollapsibleContent flex w-full flex-col justify-start gap-4 overflow-hidden px-4 pt-1 pb-4"
    >
      <VueDraggable
        class="relative flex h-fit w-full flex-wrap items-center gap-3"
        :model-value="pocket.roles"
        ghost-class="role-ghost"
        swap-class="role-swap"
        fallback-class="role-fallback"
        chosen-class="role-chosen"
        drag-class="role-drag"
        selected-class="role-select"
      >
        <RoleBadge
          v-for="role in pocket.roles"
          :key="role"
          :pocket="pocket"
          :role="role"
        />

        <Grow />
      </VueDraggable>
      <transition-slide
        class="relative flex h-fit w-full flex-wrap gap-3"
        :offset="{ enter: [10, 0], leave: [-10, 0] }"
        group
      >
        <template v-for="role in mapPositions" :key="role">
          <Label
            v-if="role"
            class="order-3 rounded-lg border-b3/80 bg-b1"
            variant="outline"
            size="8"
            :class="cn({ hidden: pocket.roles.includes(role.name) })"
            @click.stop
          >
            <input
              v-model="pocket.roles"
              class="peer absolute hidden"
              type="checkbox"
              :disabled="!role"
              :value="role.name"
              name="item-types"
              @change="handleRoles(pocket, role.name)"
            >

            <component
              :is="`i-roles-${role.name.toLowerCase()}`"
              class="h-3.75 w-auto shrink-0 text-bc/70 dst peer-checked:text-nc"
              :class="{ 'text-bc/80!': role.name.toLowerCase() === 'all' }"
            />
            {{ role.name }}
          </Label>
        </template>
      </transition-slide>
    </CollapsibleContent>
  </Collapsible>
</template>
