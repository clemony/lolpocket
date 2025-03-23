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
          <img v-else :src="`/img/champion/${pocket.champions.default.id}.webp`" class="rounded-full  size-full aspect-square shadow-sm shrink-0" />
        </RightbarIconWrapper>
        Champions
        <Grow />

        <ChampionsCounter :pocket="pocket" />
      </RightbarLink>
      <RightbarSplitToggle route-name="champions" />
    </CollapsibleTrigger>

    <Motion as-child :layout="true">
      <CollapsibleContent class="CollapsibleContent w-full pl-8.5 pr-9.5 py-2 relative">
        <transition-slide group as="ul" class="before:w-px before:h-full  before:bg-b3/80 before:absolute before:left-7 before:top-3 flex flex-col-reverse gap-1  justify-center  pl-1 ">
          <li v-for="champion in pocket.champions.children" :key="champion.name" class=" group/cli has-[input:checked]:!order-1 btn btn-ghost text-start text-3 gap-3 font-medium">
            <img :src="`/img/champion/${champion.id}.webp`" class="rounded-full  size-8 aspect-square shadow-sm shrink-0" />
            <span class="grow">{{ champion.name }}</span>

            <button v-tippy="'Remove Champion'" class="btn group/btn btn-ghost btn-xs btn-square  opacity-0 group-hover/cli:opacity-100 transition-opacity dr-30" @click="removeChamp(champion, pocket)">
              <icon name="x-sm" class="size-6 dst shrink-0 group-hover/btn:text-bc/100 text-bc/50" />
            </button>
            <label v-tippy="'Default Champion'" class="rating rating-xs opacity-0 group-hover/cli:opacity-100 transition-opacity dr-30 mb-0.5 has-checked:opacity-100">
              <input :key="champion.id" v-model="pocket.champions.default" type="radio" name="default-champ" class="mask mask-star-2 bg-neutral" aria-label="make champion default" :value="champion" @change="console.log(pocket.champions.default)" />
            </label>
          </li>
        </transition-slide>
      </CollapsibleContent>
    </Motion>
  </Collapsible>
</template>