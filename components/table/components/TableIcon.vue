<script lang="ts" setup>
const props = defineProps<{
  params: any
}>()

const p = ref(props.params)

const item = computed (() => {
  const keys = p.value.data.items.sets.map(set => set.key)
  const find = keys.findIndex(key => key == p.value.data.items.default)
  return p.value.data.items.sets[find].items[p.value.index]
})

const rune = computed (() => {
  const keys = p.value.data.runes.sets.map(set => set.key)
  console.log('💠 - rune - p.value:', p.value)
  const find = keys.findIndex(key => key == p.value.data.runes.default)

  return p.value.colDef.field == 'Keystone' ? p.value.data.runes.sets[find].runes.primary : p.value.colDef.field == 'Secondary' ? p.value.data.runes.sets[find].runes.secondary.path : ''
})
console.log('💠 - rune - rune:', rune)

const field = computedAsync (() => {
  return p.value.column.colDef.cellClass == 'ti-pocket-icon'
    ? 'icon'
    : p.value.column.colDef.cellClass == 'ti-champ'
      ? 'champ'
      : p.value.column.colDef.cellClass == 'ti-item'
        ? 'item'
        : p.value.column.colDef.cellClass == 'ti-rune' ? 'rune'
        : p.value.column.colDef.cellClass == 'ti-spell' ? 'spell' : ''
})

const containerClass = 'rounded-lg shadow-sm'
const wrapperClass = 'overflow-hidden aspect-square rounded-lg **:rounded-lg bg-b2/40  inset-shadow-sm  size-18 '
</script>

<template>
  <div class="items-center size-full flex">

    <div  v-if="field == 'icon'" :class="containerClass">
      <div :class="wrapperClass">
        <img :src="props.params.value" class="size-full object-cover scale-250 mt-4" />
      </div>
    </div>

        <div  v-else-if="field == 'champ' && props.params.value != undefined" v-tippy="props.params.value.name" :class="containerClass">
      <div :class="wrapperClass">
          <img  :src="`/img/champion/${props.params.value.apiname}.webp`" class="size-full scale-115" />
      </div>
    </div>

        <div  v-else-if="field == 'item' && props.params.data != undefined" v-tippy="item.name" :class="containerClass">
      <div :class="wrapperClass">
        <img  :src="`/img/item/${item.id}.webp`" class="size-full " />
      </div>
    </div>

        <div v-else-if="field == 'rune' && props.params.data != undefined && p.colDef.field == 'Keystone'" v-tippy="rune.keystone.name"  :class="containerClass">
      <div :class="wrapperClass">
       <img  :src="`/img/runes/${rune.path.name}/${rune.keystone.name.replace(' ', '')}.webp`" class="size-full " />
      </div>
    </div>

            <div v-else-if="field == 'rune' && props.params.data != undefined && p.colDef.field == 'Path'" v-tippy="rune.name"  :class="containerClass">
      <div :class="wrapperClass">
       <img  :src="`/img/runes/${rune.name}.webp`" class="size-full " />
      </div>
    </div>

    <!--  <div v-else-if="field == 'spell' && props.params.data != undefined" v-tippy="p.spell[p.index].name"  :class="containerClass">
      <div :class="wrapperClass">
       <img  :src="`/img/spells/${p.spell[p.index].name.toLowerCase()}.webp`" class="size-full " />
      </div>
    </div> -->
  </div>
  
  

        

        
</template>

<style scoped>

</style>