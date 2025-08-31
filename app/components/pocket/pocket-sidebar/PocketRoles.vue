<script lang="ts" setup>
import { championPositions } from 'appdata'
import { VueDraggable } from 'vue-draggable-plus'

const { pocket: p, class: className } = defineProps<{
  pocket: Pocket
  class?: HTMLAttributes['class']
}>()

const pocket = computed (() => p)
</script>

<template>
  <Collapsible
    v-if="pocket"
    class="w-full field-box">
    <CollapsibleTrigger
      v-if="pocket.roles && pocket.roles?.[0]"
      class="w-full items-center gap-1 font-medium py-3 px-4  text-3 capitalize flex  group/state group">
      <VueDraggable
        :model-value="pocket.roles"
        class="flex flex-wrap gap-4 relative w-full h-fit items-center">
        <RoleButton
          v-for="role in pocket.roles"
          :key="role"
          :pocket="pocket"
          :role="role" />

        <Grow />
      </VueDraggable>

      <PlusMinusExpand />
    </CollapsibleTrigger>

    <CollapsibleContent class="CollapsibleContent flex flex-col gap-4 justify-start overflow-hidden  w-full px-4  pt-3 pb-6">
      <transition-slide
        :offset="{ enter: [10, 0], leave: [-10, 0] }"
        group
        class="flex flex-wrap gap-4 relative w-full h-fit">
        <button
          class="border-b3/80 btn btn-sm !text-2 order-2  mr-0 "
          @click="pocket.roles = ['all']">
          <i-roles-all
            class="h-3.75 text-bc/70 w-auto dst shrink-0" />
          All
        </button>

        <template
          v-for="role in championPositions"
          :key="role">
          <label
            v-if="role"
            class="border-b3/80 btn btn-sm order-3 font-medium   mr-0 "
            :class="cn({ 'hidden ': pocket.roles.includes(role.name) })">

            <input
              v-model="pocket.roles"
              class="peer hidden absolute"
              type="checkbox"
              :disabled="!role"
              :value="role"
              name="item-types"
              @change="handleRoles(pocket)" />

            <component
              :is="`i-roles-${role.name.toLowerCase().replace(' ', '-').replace('utility', 'support')}`"
              class="h-3.75 text-bc/70 w-auto dst shrink-0 peer-checked:text-nc"
              :class="{ '!text-bc/80': role.name.toLowerCase() == 'all' }" />
            {{ role }}
          </label>
        </template>
      </transition-slide>
    </CollapsibleContent>
  </Collapsible>
</template>