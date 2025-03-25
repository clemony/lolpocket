<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const route = useRoute()
const pocket = computed (() => {
  return props.pocket
})
</script>

<template>
  <Collapsible>
    <CollapsibleTrigger class="join w-full group/trig" :disabled="!pocket.champions.children.length">
      <RightbarLink :to="`/pocket/${pocket.key}`">
        <RightbarIconWrapper :active="pocket.champions.default && pocket.champions.default.id != null">
          <i-no-champ
            v-if="pocket.champions.default == null"
            class="h-6 w-auto dst shrink-0 peer-checked:text-nc opacity-64" />
          <span v-else class="size-full overflow-hidden rounded-full">
            <img :src="`/img/champion/${pocket.champions.default.id}.webp`" class="rounded-full scale-116 size-full aspect-square shadow-sm shrink-0" />
          </span>
        </RightbarIconWrapper>
        <span class="capitalize">
          {{ pocket.champions.default.name || 'Champions' }}

        </span>
        <Grow />

        <ChampionsCounter :pocket="pocket" />
      </RightbarLink>
      <RightbarSplitToggle route-name="champions" />
    </CollapsibleTrigger>

    <RightbarChildContent>
      <RightbarLi v-for="champion in pocket.champions.children" :key="champion.name">
        <img :src="`/img/champion/${champion.id}.webp`" class="rounded-full  size-8 aspect-square shadow-sm shrink-0" />
        <span class="grow">{{ champion.name }}</span>

        <RemoveButton tip="Remove Champion" @click="removeChamp(champion, pocket)" />
        <StarButton :model="pocket.champions.default" tip="Default Champion" :value="champion" @update:model="e => pocket.champions.default = e" />
      </RightbarLi>
    </RightbarChildContent>
  </Collapsible>
</template>