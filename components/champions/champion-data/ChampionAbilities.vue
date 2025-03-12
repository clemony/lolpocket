<script setup lang="ts">
const props = defineProps<{
  champion: Champion
}>()

const keysToDisplay = ['COST:', 'COOLDOWN:', 'STATIC COOLDOWN:']
const modelValue = ref()
function filteredData(data: Record<string, string>) {
  return Object.fromEntries(Object.entries(data).filter(([key]) => keysToDisplay.includes(key)))
}

const tabModel = ref(0)
</script>

<template>
  hi
  <!-- <Tabs :default-value="0" class="mt-8 w-full">
        <TabsList
            class="ml-2px bg-b1 shadow-smooth !border-b3 mb-4 w-full justify-evenly rounded-lg">
            <TabsTrigger
                v-for="(ability, key, i) in champion.abilities"
                :key="key"
                :value="i"
                class="rounded-lg p-2"
                :class="{ 'bg-b1': tabModel == i }"
                as-child>
                <label>
                    <input
                        type="radio"
                        :value="key"
                        v-model="tabModel"
                        name="tabs"
                        class="hidden" />
                    <Tooltip
                        :content="
                            ability.key +
                            ' &nbsp;' +
                            '-> ' +
                            '  &nbsp;' +
                            ability.name
                        ">
                        <loadImg
                            :url="ability.img"
                            :alt="ability.name"
                            class="size-16 rounded-lg border shadow-xs" />
                    </Tooltip>
                </label>
            </TabsTrigger>
        </TabsList>

        <template v-for="(ability, key, i) in champion.abilities">
            <TabsContent :value="i" class="mt-3!" v-if="tabModel == i">
                <Card
                    class="overflow-hidden px-6 pt-0 pb-3 transition-all duration-1000">
                    <div
                        class="max-h-inherit flex items-center overflow-hidden py-5">
                        <loadImg
                            :url="ability.img"
                            :alt="ability.name"
                            class="border-b3 size-[45px] rounded-lg border shadow-xs" />

                        <div class="text-6 grow px-4 text-start font-thin">
                            {{ ability.name }}
                        </div>
                        <p
                            class="font-cursive kbd-sm text-3 mr-6 scale-x-125 font-mono capitalize not-italic! no-underline! hover:no-underline!">
                            {{ ability.key }}
                        </p>
                    </div>

                    <div class="flex flex-col gap-3 py-3">
                        <div
                            v-for="(value, key) in filteredData(ability.data)"
                            :key="key"
                            class="bg-b2/60 flex w-full flex-nowrap rounded-md px-2 py-1">
                            <div
                                class="text-medium text-2 capitalize opacity-80">
                                {{ key }}
                            </div>
                            <div
                                class="text-2 grow text-right text-nowrap opacity-80">
                                {{ value }}
                            </div>
                        </div>
                    </div>

                    <ScrollArea
                        class="text-3 overflow-auto p-1 text-balance whitespace-pre-line [scrollbar-color:bg-b3/20]">
                        {{ ability.context }}
                    </ScrollArea>
                </Card>
            </TabsContent>
        </template>
    </Tabs> -->
</template>

<style scoped>
  kbd {
  width: 1.5rem;
  font-family: var(--mono);
}
</style>
