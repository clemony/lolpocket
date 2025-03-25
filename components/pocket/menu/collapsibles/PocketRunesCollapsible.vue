<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()
const ds = useDataStore()
console.log(ds.paths)
const route = useRoute()

const pocket = computed (() => {
  return props.pocket
})

const defaultSet = computed (() => {
  return pocket.value.runes.default || null
})
console.log('💠 - defaultSet - defaultSet:', defaultSet)
</script>

<template>
  <Collapsible>
    <CollapsibleTrigger class="join w-full" :disabled="!pocket.runes.sets.length">
      <NuxtLink :to="`/pocket/${pocket.key}/runes`" class="btn grow gap-4 items-center capitalize btn-ghost btn-lg truncate group/btn justify-start text-3 font-medium join-item" :class="{ 'btn-active [&_span]:border-b1 [&_span]:inset-shadow-black/16 [&_span]:first-of-type:bg-b1/60  border-r-b2': route.name == 'runes' }" @click.stop>
        <RightbarIconWrapper :active="defaultSet.primary.runes[0] && defaultSet.primary.runes[0].name != 'empty' ">
          <Image
            v-if="defaultSet"
            :image="`/img/runes/${defaultSet.primary.path}/${defaultSet.primary.runes[0].name.replace(/\s/g, '')}.webp`"
            :alt="defaultSet.primary.runes[0].name" class="!size-8.5 " />
          <i-rune-icon
            v-else
            class="h-5.5 w-auto dst shrink-0 peer-checked:text-nc" />
        </RightbarIconWrapper>
        <div class="capitalize truncate max-w-41">
          {{ `${pocket.runes.default.primary.runes[0].name} / ${pocket.runes.default.secondary.path}` || 'Runes' }}
        </div>
        <Grow />

        <RunesCounter :pocket="pocket" />
      </NuxtLink>
      <div class="btn btn-square btn-lg join-item  items-center  btn-ghost btn-lg group/btn cursor-pointer " :class="{ 'btn-active  border-l-none': route.name == 'runes' }">
        <icon name="up-sm" class="group-data-[state=open]/btn:rotate-180 size-4.5" />
      </div>
    </CollapsibleTrigger>
    <CollapsibleContent class="CollapsibleContent w-full mb-3">
      <RightbarChildContent>
        <RightbarLi v-for="set in pocket.runes.sets" :key="set.key" class=" justify-start gap-3">
          <div class="!size-8 rounded-full shrink-0 aspect-square">
            <Image
              :image="`/img/runes/${set.primary.path}/${set.primary.runes[0].name.replace(/\s/g, '')}.webp`"
              :alt="set.primary.runes[0].name" class="!size-8 rounded-full aspect-square" />
          </div>
          <span class="grow capitalize truncate text-nowrap">{{ set.primary.runes[0].name }}</span>

          <RemoveButton tip="Delete Set" @click="deleteRuneSet(set, pocket)" />
          <StarButton :model="pocket.runes.default" tip="Default Rune Set" :value="set" @update:model="e => pocket.runes.default = e" />
        </RightbarLi>
      </RightbarChildContent>
      <div class="w-full flex pr-9 pl-10 mt-2 ">
        <button class="btn btn-sm px-5 w-full btn-neutral justify-end text-2 *:text-nc/80 hover:!bg-neutral/85" @click="newRuneSet(pocket.key)">
          <icon name="add-sm" class="stroke-[1.5] size-6" />Rune Set
        </button>
      </div>
    </CollapsibleContent>
  </Collapsible>
</template>