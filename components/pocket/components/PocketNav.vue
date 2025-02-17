<script lang="ts" setup>
const props = defineProps<{
  pocket?: pocket
}>()

const emit = defineEmits(['update:selected'])

const pocket = ref(props.pocket)

function update(event, i) {
  console.log(event)
  pocket.value.spells[i] = event
}

const selectedRuneSet = ref()
</script>

<template>
  <div class=" h-full min-h-full max-h-full w-full border-b2 border-x pt-[5.5vh] pl-15 pr-10">
   
      <PocketHeader :pocket="pocket" />
 <div class="flex flex-col gap-8">
      <div class="w-full h-54  shadow-sm  rounded-lg relative size-fit ">
        <div
          class="rounded-lg size-full relative shrink-0  overflow-hidden  justify-end items-start flex pr-2 pt-2"
          :style="{
            backgroundImage: `url(${pocket.icon == '/img/champion/centered/1.webp' ? '' : pocket.icon})`,
            backgroundSize: pocket.icon == '/img/champion/centered/1.webp' ? '0' : '350%',
            backgroundPosition: 'center 20%' }"
         :class="{'bg-gradient-to-br from-neutral/70 to-neutral': pocket.icon == '/img/champion/centered/1.webp'}">
          <LazyRoleSelect
            :pocket="pocket"
          />

          <div v-if="pocket.icon == '/img/champion/centered/1.webp'" class="absolute size-full top-[45%] left-[44%] text-nc">
            <h1>LP</h1>
          </div>
        </div>
      </div>

      <div class="rounded-lg font-medium p-3">
        <!-- Champions -->
      <SelectedChampions
        :pocket="pocket"
        class="mt-3"
      />
</div>
<Separator  />

<div class="font-medium">
<!-- <span class="pl-3">
      Summoner Spells
</span> -->
      <div class=" gap-3 grid grid-cols-3 h-auto items-center  rounded-lg p-3 mt-3">
        <SpellPicker
          :model="0"
          :pocket="pocket"
          @update:model="update($event, 0)"
       
        />
      

        <SpellPicker
          :model="1"
          :pocket="pocket"
          @update:model="update($event, 1)"
        />
      </div>
</div>

 
<Separator  />

      <RuneSets
        v-model:selected="selectedRuneSet"
        :pocket="pocket"
        @update:selected="(e) => (emit('update:selected', e))"
      />
 <Separator  />

    </div>
  </div>
</template>

<style></style>
