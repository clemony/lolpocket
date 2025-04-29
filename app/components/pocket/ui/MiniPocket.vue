<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const pocket = ref(props.pocket)
const route = useRoute()

const isThis = computed (() => {
  return route.params.pocketKey == pocket.value.key
})
</script>

<template>
  <div class="w-full pl-2.5">
    <header class="  mb-5">
      <div class="justify-between w-full items-center flex flex-nowrap">
        <div class="w-full grow ">
          <p>Currently Selected</p>

          <h3 class="dst capitalize">
            {{ pocket.name }}
          </h3>
        </div>
        <button v-tippy="isThis ? 'Currently Active' : 'Edit Pocket'" class="-mr-3">
          <NuxtLink
            :disabled="isThis"
            :to="`/pocket/${pocket.key}`"

            class="btn btn-lg btn-ghost group  aspect-square px-2 relative " :class="{ '!rounded-full border-neutral border-2 size-6 mr-2.5': isThis }">
            <icon v-if="!isThis" name="iconamoon:edit-light" class="size-5 dst absolute " />
            <icon v-else-if="isThis" name="tick-sm" class="size-5 dst absolute stroke-[1.6]" />
          </NuxtLink>
        </button>
      </div>
    </header>

    <div class="">
      <div class="flex gap-2 h-21 items-center p-1">
        <Champion :champion="pocket.champions.default || pocket.champions.children[0]" class="size-20" />
      </div>

      <!--    <div v-if="pocket.items.default || pocket.items.sets[0]" class="flex gap-2">
        <div v-for="item in pocket.items.default || pocket.items.sets[0]" :key="item.name">
          <img :src="item.img" />
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped>

</style>