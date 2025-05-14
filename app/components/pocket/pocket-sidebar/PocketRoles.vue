<script lang="ts" setup>
const { pocket: p, class: className } = defineProps<{
  pocket: Pocket
  class?: HTMLAttributes['class']
}>()

const pocket = computed (() =>  p)
</script>

<template>


  <div v-if="pocket" class="w-full ">
    
<!--<div class="flex items-center mb-2  -ml-1">
      <label :class="{ 'pointer-events-none': ms.mf.role == 'ALL' }" class="btn btn-sm gap-2 font-medium rounded-lg px-2.5 place-self-center text-3  btn-ghost" @click="ms.mf.role = 'ALL'">
        <input
          v-model="ms.mf.role"
          class="peer hidden"
          aria-label="All"
          name="match-champion-filter"
          value="All" />
        {{ ms.mf.role != 'ALL' ? roleStats.find(r => r.role == ms.mf.role).displayName : 'Position' }}

        <icon v-if="ms.mf.role != 'ALL'" name="x-sm" class=" shrink-0 -mt-px" />

      </label>
    </div>
            v-if="pocket.roles.includes(role)"-->

    <div class="w-full  justify-start overflow-hidden px-2">
      <transition-slide :offset="{ enter: [10, 0], leave: [-10, 0] }" group class="flex flex-wrap gap-5 relative w-full h-fit">
        <template
        v-for="role in championPositions.concat(championRoles)" :key="role">
          <label
v-if="role"
            v-tippy="role"
            class="size-14 grid place-items-center border-b3/80 btn  size-14  mr-0 btn-square" :class="cn({ 'bg-neutral border-neutral shadow-neutral/20 shadow-sm order-2  ': pocket.roles.includes(role),  })">

            <input
              v-model="pocket.roles" class="peer hidden absolute"
              type="checkbox" :disabled="!role"
              :value="role"
              name="item-types" />

         <component
              :is="`i-roles-${role.toLowerCase().replace(' ', '-').replace('utility', 'support')}`"
              class="!h-5 w-auto dst shrink-0 peer-checked:text-nc" :class="{ '!text-bc/80': role.toLowerCase() == 'all' }" />

          </label>
        </template>
      </transition-slide>
    </div>
  </div>
</template>