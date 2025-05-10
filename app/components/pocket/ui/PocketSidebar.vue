<script lang="ts" setup>
const route = useRoute()

const pocket = computedAsync (() => {
const a = getPocket(route.params.pocketKey)
console.log("💠 - pocket - a:", a)
return a
})


const rs = useRuneStore()

const pocketNav = ref()

onMounted (() => {
  pocketNav.value = route.path
})

const runesOpen = ref(false)

</script>

<template>
<div class="h-full mt-18 flex flex-col gap-6 pl-7 w-100">

<!--     <PocketHeader :pocket="pocket"  />
 -->




   <SidebarSelectedChampions :pocket="pocket" />

          <FieldTransition expand>
          <PocketItemsSidebarMenu :pocket="pocket" />
          </FieldTransition>

<!--           <FieldTransition expand>
          <PocketRunesCollapsible v-model:open="runesOpen" :pocket="pocket" />
</FieldTransition>
 -->
<!-- <FieldTransition expand>
        <PocketRolesCollapsible :pocket="pocket" />
          </FieldTransition> -->

<!--         <FieldTransition expand>
        <PocketSpellsCollapsible :pocket="pocket" />
          </FieldTransition> -->


<!--         <PocketSummaryButton :pocket="pocket" @click="pocketNav = null" /> -->

<!--         <Field>
        <PocketCardButton :pocket="pocket" @click="pocketNav = null" />
        
          </Field> -->


          <Field>
  <!--   <PocketSidebarFooter :pocket="pocket" /> -->

</Field>
</div>
</template>