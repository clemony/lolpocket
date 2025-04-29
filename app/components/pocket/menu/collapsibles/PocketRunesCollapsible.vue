<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()
const ds = useDataStore()

const pocket = computed (() => {
  return props.pocket
})

const defaultSet = computed (() => {
  return pocket.value.runes.default || null
})
</script>

<template>
  <Collapsible>
    <CollapsibleTrigger class="group/state w-full">
      <RightbarButton>
        <RightbarIconWrapper :active="pocket.runes.default && defaultSet.primary && defaultSet.primary.runes[0] && defaultSet.primary.runes[0].name != 'empty' ">
          <Image
            v-if="pocket.runes.default && defaultSet.primary && defaultSet.primary.runes[0]"
            :image="`/img/runes/${defaultSet.primary.path}/${defaultSet.primary.runes[0].name.replace(/\s/g, '')}.webp`"
            :alt="defaultSet.primary.runes[0].name" class="!size-8.5 " />
          <i-rune-icon
            v-else
            class="h-5.5 w-auto dst shrink-0 peer-checked:text-nc" />
        </RightbarIconWrapper>
        <div class="capitalize truncate max-w-41">
          {{ pocket.runes.default && defaultSet.primary && defaultSet.primary.runes[0] ? pocket.runes.default.primary.runes[0].name : 'Runes' }}{{ pocket.runes.default && pocket.runes.default.secondary.path ? ` / ${pocket.runes.default.secondary.path}` : '' }}
        </div>
        <Grow />

        <RunesCounter :pocket="pocket" />&nbsp;

        <StateCaret />
      </RightbarButton>
    </CollapsibleTrigger>
    <CollapsibleContent class="CollapsibleContent w-full mb-3">
      <RightbarChildContent>
        <RightbarLi v-for="set in pocket.runes.sets" :key="set.key" class=" justify-start gap-3">
          <div class="!size-8 rounded-full shrink-0 aspect-square -ml-0.75">
            <Image
              v-if="set && set.primary && set.primary.path && set.primary.runes[0] && set.primary.runes[0].name != 'empty'"
              :image="`/img/runes/${set.primary.path}/${set.primary.runes[0].name.replace(/\s/g, '')}.webp`"
              :alt="set.primary.runes[0].name" class="!size-8 rounded-full aspect-square" />
            <Placeholder v-else class="size-8 rounded-full aspect-square" />
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