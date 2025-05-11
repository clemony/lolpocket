<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const route = useRoute()
const pocket = computed (() => {
  return props.pocket
})
const champTrigger = ref(null)
const cs = useChampStore()
//TODO DELEETE
</script>

<template>
  k
<!--   <Collapsible>
    <CollapsibleTrigger class="w-full group/state">
      <NavBtn>
        <span v-tippy="{ content: '', trigger: 'click', triggerRef: champTrigger, placement: 'left', arrow: true }" :active="pocket.champions.default && pocket.champions.default.id != null">
          <i-no-champ
            v-if="pocket.champions.default == null"
            class="h-6 w-auto dst shrink-0 peer-checked:text-nc opacity-64" />
          <span v-else class="size-full overflow-hidden rounded-full">
            <img :src="`/img/champion/${pocket.champions.default.id}.webp`" class="rounded-full scale-116 size-full aspect-square shadow-sm shrink-0" />
          </span>
        </span>
        <span class="capitalize">
          {{ pocket.champions.default && pocket.champions.default.key ? pocket.champions.default.key : 'Champions' }}

        </span>
        <Grow />

        <ChampionsCounter :pocket="pocket" />&nbsp;
        <StateCaret />
      </NavBtn>
    </CollapsibleTrigger>

    <ul>
      <li v-for="(champion, i) in pocket.champions.children" :key="i" :champ-key="champion.key">
        <img :src="`/img/champion/${champion.id}.webp`" class="rounded-full  size-8 aspect-square shadow-sm shrink-0" />
        <span class="grow">{{ champion.key }}</span>

        <RemoveButton tip="Remove Champion" @click="removeChamp(champion, pocket)" />
        <StarButton :model="pocket.champions.default" tip="Default Champion" :value="champion" @update:model="e => pocket.champions.default = e" />
      </li>
    </ul>
  </Collapsible> -->
</template>