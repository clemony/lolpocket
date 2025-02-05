<script setup lang="ts">
const props = defineProps<{
  pocket: pocket
}>()

const pocket = ref(props.pocket)

const set = ref(pocket.value.runes.default.shards)
</script>

<template>
  <div class="">
    <icon
      name="game-icons:floating-crystal"
      class="text-nc-mb-2 size-5 shrink-0 opacity-80 drop-shadow-sm"
    />
    <!--         <template v-for="shard in set.shards" :key="shard.name">
            <div
                class="grid flex-nowrap place-items-center"
                :class="
                    cn(
                        shard.name != 'empty' ?
                            getShardClass(shard)
                                .toString()
                                .replace(/border.*/, '')
                        :   ''
                    )
                ">
                <icon
                    :name="getShardIcon(shard)"
                    class="size-6 shrink-0 rounded-full drop-shadow-sm"
                    :class="
                        cn(getShardClass(shard), {
                            'opacity-40': shard.name == 'empty',
                        })
                    " />
            </div>
        </template> -->
  </div>
</template>

<style scoped></style>
