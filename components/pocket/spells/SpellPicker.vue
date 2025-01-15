<script setup lang="ts">
  import { useQuery } from '@pinia/colada';
  import { PopoverClose, PopoverPortal } from 'radix-vue';

  const ts = useTempStore();

  const props = defineProps<{
    model: spell | undefined;
    alignOffset?: number;
  }>();

  const { state, asyncStatus } = useQuery({
    key: ['spells'],
    query: () => fetch('/api/spells.json').then((res) => res.json()),
  });

  const emit = defineEmits(['update:model']);
  const model = ref(props.model as spell);

  //const arr = ref(props.arr)

  function onChange(e, spell) {
    model.value = spell;
    emit('update:model', model.value);
  }
  /* watch(
    () => arr,
    (newVal) => {
        console.log(newVal)
    }
) */
</script>
<template>
  <div v-if="asyncStatus === 'loading'">
    <Skeleton class="size-16" />
  </div>

  <div
    v-else-if="state.status === 'error'"
    class="flex gap-2">
    <span class="">hi i'm broke</span>
    <icon
      name="fluent:emoji-sad-slight-20-regular"
      class="size-8" />
  </div>

  <div v-else-if="state.data">
    <Popover>
      <PopoverTrigger
        class="grid items-center justify-items-end gap-3"
        as-child>
        <button>
          <Target
            v-if="!model || model.name == ''"
            class="size-[50px]" />
          <Label
            variant="outline"
            size="icon"
            v-else-if="model"
            class="shadow-standard hover:ring-neutral/60 data-[state=open]:ring-neutral/60 size-[50px] overflow-hidden rounded-lg p-0 ring-1 ring-transparent ring-offset-2 transition-all duration-300">
            <img
              :src="`/img/spells/Summoner${model.name}.webp`"
              class="size-full" />
          </Label>
        </button>
      </PopoverTrigger>

      <PopoverContent
        class="-ml-[22px] w-[300px] overflow-hidden rounded-xl! bg-transparent p-0 backdrop-blur-none"
        :sideOffset="-70"
        :alignOffset="props.alignOffset"
        align="end"
        side="bottom">
        <div class="h-24" />

        <div class="gap bg-b1 flex flex-wrap justify-end gap-x-8 gap-y-4 px-12 py-6 pb-8 backdrop-blur-md">
          <PopoverClose
            v-for="spell in state.data"
            :key="spell.name"
            :disabled="''">
            <label
              @click=""
              class="shadow-standard ring-neutral/40 rounded-lg ring-offset-2 hover:ring-1">
              <input
                type="radio"
                :value="spell"
                v-model="model"
                id="spells"
                @change="onChange($event, spell)"
                class="hidden"
                :disabled="false" />
              <div class="border-neutral/10 size-[50px] overflow-hidden rounded-lg border">
                <img
                  :src="`/img/spells/Summoner${spell.name}.webp`"
                  class="size-full" />
              </div>
            </label>
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  </div>
</template>
