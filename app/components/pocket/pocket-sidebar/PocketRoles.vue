<script lang="ts" setup>
import { vDraggable } from 'vue-draggable-plus'

const { pocket: p, class: className } = defineProps<{
  pocket: Pocket
  class?: HTMLAttributes['class']
}>()

const pocket = computed (() => p)

function handleRoles() {
  if (pocket.value.roles && pocket.value.roles.length > 1 && pocket.value.roles.includes('all')) {
    const a = pocket.value.roles.findIndex(r => r == 'all')
    pocket.value.roles.splice(a, 1)
  }
  else if (pocket.value.roles && pocket.value.roles.length <= 0) {
    pocket.value.roles.push('all')
  }
}
</script>

<template>
  <Collapsible v-if="pocket" class="w-full field-box">
    <CollapsibleTrigger class="w-full group/state group">
      <Btn
        v-if="pocket.roles && pocket.roles?.[0]" class="w-full items-center gap-3 font-medium pr-2">
        <component
          :is="`i-roles-${pocket.roles?.[0].toLowerCase().replace(' ', '-').replace('utility', 'support')}`"
          class="!h-3.5 text-bc/70 w-auto dst shrink-0" />
        {{ pocket.roles?.[0] }}

        <Grow />
        <PlusMinusExpand />
      </Btn>
    </CollapsibleTrigger>

    <CollapsibleContent class="CollapsibleContent  w-full px-3  pt-3 pb-6">
      <div class="w-full flex flex-col gap-4 justify-start overflow-hidden px-2">
        <transition-slide
          v-if="pocket.roles[0] != 'all'"
          v-draggable="[
            pocket.roles,
            {
              ghostClass: 'role-ghost',
              chosenClass: 'role-chosen',
              dragClass: 'role-drag',
              target: 'role-target',
            },
          ]"

          :offset="{ enter: [10, 0], leave: [-10, 0] }"
          class="flex flex-wrap gap-4 relative w-full h-fit"
          group>
          <label
            v-for="role in pocket.roles" :key="role"
            class="btn btn-sm cursor-move btn-neutral !text-2 order-3  mr-0 '!bg-neutral text-nc !border-neutral/60 !shadow-sm !drop-shadow-sm  order-first">

            <input
              v-model="pocket.roles" class="peer hidden absolute"
              type="checkbox"
              :value="role"
              name="item-types" @change="handleRoles()" />

            <component
              :is="`i-roles-${role.toLowerCase().replace(' ', '-').replace('utility', 'support')}`"
              class="!h-3.5  w-auto dst shrink-0 text-nc" />
            {{ role }}
          </label>
        </transition-slide>
        <transition-slide :offset="{ enter: [10, 0], leave: [-10, 0] }" group class="flex flex-wrap gap-4 relative w-full h-fit">
          <button
            class="border-b3/80 btn btn-sm !text-2 order-2  mr-0 "
            :class="cn({ '!bg-neutral text-nc b !border-neutral/60  !shadow-sm !drop-shadow-sm  ': pocket.roles.includes('all') })" @click="pocket.roles = ['all']">
            <i-roles-all
              class="!h-3.5 text-bc/70 w-auto dst shrink-0" :class="{ 'text-nc': pocket.roles.includes('all') }" />
            All
          </button>

          <template
            v-for="role in championPositions" :key="role">
            <label
              v-if="role"
              class="border-b3/80 btn btn-sm !text-2 order-3  mr-0 " :class="cn({ 'hidden ': pocket.roles.includes(role) })">

              <input
                v-model="pocket.roles" class="peer hidden absolute"
                type="checkbox" :disabled="!role"
                :value="role"
                name="item-types" @change="handleRoles()" />

              <component
                :is="`i-roles-${role.toLowerCase().replace(' ', '-').replace('utility', 'support')}`"
                class="!h-3.5 text-bc/70 w-auto dst shrink-0 peer-checked:text-nc" :class="{ '!text-bc/80': role.toLowerCase() == 'all' }" />
              {{ role }}
            </label>
          </template>
        </transition-slide>
      </div>
    </CollapsibleContent>
  </Collapsible>
</template>