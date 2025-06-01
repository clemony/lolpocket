<script lang="ts" setup>
const isChecked = ref('all')
import TableTrash from './TableTrash.vue'

const ps = usePocketStore()

const component = shallowRef(null)

const isOpen = ref(false)

function handleClick(comp) {
  component.value = comp
  isOpen.value = true
}
const classObject = 'flex'
</script>

<template>
  <Tabs default-value="account" >
    <TabsList>

      <TabsTrigger value="password"  >
        <div  class="!flex gap-3 i-c px-2">
           <icon name="search" v-tippy="'Search & Filter'" class="size-4 mb-0.25" />
           Search
        </div>
      </TabsTrigger>

      <TabsTrigger value="trash" @click="component = TableTrash" >
        <div  class="!flex gap-3 i-c px-2">
       <icon name="trash" class="size-4.5" />
       Trash
        </div>
      </TabsTrigger>

      <TabsTrigger value="password" >
        <div  class="!flex gap-3 i-c px-2">
        <icon name="archive" class="size-3.75 overflow-hidden " />
        Archive
        </div>
      </TabsTrigger>
      
    </TabsList>
  </Tabs>

</template>

<style scoped>

</style>