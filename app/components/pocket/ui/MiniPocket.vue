<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = ref(props.pocket)
//const route //TODO DELETE = useRoute()

</script>

<template>
  <div class="w-full pl-2.5">


    <div class="">
  

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