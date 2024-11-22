<script setup lang="ts">

</script>


<template>

</template>

<style scoped>

</style>


 <div
                        v-if="set"
                        class="flex h-fit w-full flex-col items-center justify-items-center gap-x-2.5 gap-y-2 p-1.5">
                        <template v-for="rune in runes">
                            <div class="rounded-full">
                                <LoadImg
                                    v-if="rune.name != 'none'"
                                    :url="rune.img"
                                    class="col-start-1 size-[35px] overflow-auto rounded-full shadow-warm ring-1 ring-base-300" />
                                <Placeholder
                                    v-else
                                    :size="35"
                                    class="border-base-300/80 shadow-inset-sm"
                                    img="/img/runes/RunesIcon.svg"
                                    iClass="p-2 opacity-15" />
                            </div>
                        </template>
                    </div>