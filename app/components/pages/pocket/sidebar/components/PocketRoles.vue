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
    class="w-full field-box">
    <CollapsibleTrigger
      v-if="pocket.roles && pocket.roles?.[0]"
      class="w-full items-center text-start justify-start gap-1 py-3 px-3 text-3 capitalize flex group">
      <h3 class="grow dst">
        Roles
      </h3>

      <CaretRotate />
    </CollapsibleTrigger>

    <CollapsibleContent
      class="CollapsibleContent flex flex-col gap-4 justify-start overflow-hidden w-full px-4 pt-1 pb-4">
      <VueDraggable
        :model-value="pocket.roles"
        ghost-class="role-ghost"
        swap-class="role-swap"
        fallback-class="role-fallback"
        chosen-class="role-chosen"
        drag-class="role-drag"
        selected-class="role-select"
        class="flex flex-wrap gap-3 relative w-full h-fit items-center">
        <RoleButton
          v-for="role in pocket.roles"
          :key="role"
          :pocket="pocket"
          :role="role" />

        <Grow />
      </VueDraggable>
      <transition-slide
        :offset="{ enter: [10, 0], leave: [-10, 0] }"
        group
        class="flex flex-wrap gap-3 relative w-full h-fit">
        <template
          v-for="role in championPositions"
          :key="role">
          <Label
            v-if="role"
            variant="shadow"
            size="xs"
            class="border-b3/80 bg-b1 rounded-lg order-3"
            :class="cn({ 'hidden ': pocket.roles.includes(role.name) })"
            @click.stop>
            <input
              v-model="pocket.roles"
              class="peer hidden absolute"
              type="checkbox"
              :disabled="!role"
              :value="role.name"
              name="item-types"
              @change="handleRoles(pocket, role.name)" />

            <component
              :is="`i-roles-${role.name.toLowerCase()}`"
              class="h-3.75 text-bc/70 w-auto dst shrink-0 peer-checked:text-nc"
              :class="{ '!text-bc/80': role.name.toLowerCase() === 'all' }" />
            {{ role.name }}
          </Label>
        </template>
      </transition-slide>
    </CollapsibleContent>
  </Collapsible>
</template>
