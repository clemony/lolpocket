<script lang="ts" setup>
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
    <CollapsibleTrigger
      v-if="pocket.roles && pocket.roles?.[0]" class="w-full items-center gap-1 font-medium py-3 px-4  text-3 capitalize flex  group/state group">
      <transition-slide
        :offset="{ enter: [10, 0], leave: [-10, 0] }"
        class="flex flex-wrap gap-4 relative w-full h-fit items-center"
        group>
        <label
          v-for="role in pocket.roles" :key="role"
          class="btn btn-sm  btn-neutral !text-2 order-3  mr-0 '!bg-neutral gap-2 text-nc !border-neutral/60 !shadow-sm  !drop-shadow-sm  order-first capitalize" @click.stop>
          <div class="size-full ">
            <icon name="x-sm" />
          </div>

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

        <Grow />
      </transition-slide>
      <PlusMinusExpand />
    </CollapsibleTrigger>
    <CollapsibleContent class="CollapsibleContent flex flex-col gap-4 justify-start overflow-hidden  w-full px-4  pt-3 pb-6">
      <transition-slide :offset="{ enter: [10, 0], leave: [-10, 0] }" group class="flex flex-wrap gap-4 relative w-full h-fit">
        <button
          class="border-b3/80 btn btn-sm !text-2 order-2  mr-0 " @click="pocket.roles = ['all']">
          <i-roles-all
            class="!h-3.5 text-bc/70 w-auto dst shrink-0" />
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
    </CollapsibleContent>
  </Collapsible>
</template>