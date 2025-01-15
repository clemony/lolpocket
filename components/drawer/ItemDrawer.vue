<script setup lang="ts">
  import { formatItemStats } from 'shared/supabase/supaIndex';

  const ds = useDataStore();
  const as = useAccountStore();

  const ts = useTempStore();

  const item = ref(ts.selectedItem);
  console.log('💠 - item:', item);

  const type = ref(item.value.type);
  const stats = ref(formatItemStats(item.value.stats));
  const effects = ref(item.value.effects);
  const id = ref(item.value.id);

  const recipe = ref(item.value.recipe);
  const recipeArray = asyncComputed(() => {
    return Array.isArray(recipe.value) ? true : false;
  });

  const isLiked = computed(() => {
    return as.favoriteItems.some((item) => item.name === item.name);
  });

  const itemId = (itemName) => {
    const a = ds.SRitems.find((item) => item.name == itemName);

    return a.id;
  };

  const itemBuy = (itemName) => {
    const a = ds.SRitems.find((item) => item.name == itemName);

    return a.buy;
  };

  watch(
    () => as.favoriteItems,
    (newVal) => {
      console.log('💠 - newVal:', newVal);
    }
  );
  onMounted(() => {
    console.log('💠 - item:', item);
  });

  function handleTooltip(item) {
    const a = itemBuy(item);
    if (itemBuy) {
      return item + ' ・ ' + a + 'g';
    } else if (!a) {
      return item;
    }
  }
</script>

<template>
  <Hide>
    <DrawerHeader>
      <DrawerTitle>Item</DrawerTitle>
      <DrawerDescription>Item</DrawerDescription>
    </DrawerHeader></Hide
  >
  <div
    :item="ts.selectedItem"
    class="relative h-full w-110 justify-self-center"
    key="id">
    <div class="rating absolute top-1 right-17 size-fit gap-1">
      <input
        type="checkbox"
        v-model="as.favoriteItems"
        :value="item"
        name="favorite-item"
        :aria-label="'favorite ' + item.name"
        class="mask mask-heart bg-[#dd5f61]" />
    </div>

    <div class="flex w-full gap-6 pb-5">
      <img
        :key="item.name"
        :url="`/img/item/${item.id}.webp`"
        :alt="item.name + ' Image'"
        class="border-b3/90 shadow-warm pointer-events-none size-20 rounded-lg border" />

      <div class="flex flex-col">
        <h1 class="flex flex-wrap items-start pt-1 leading-none tracking-tighter drop-shadow-sm">
          {{ item.name }}
        </h1>

        <template v-if="item.nickname">
          <p class="text-1 ml-0.5 italic">
            a.k.a.

            {{ item.nickname.toString().replace(/\[(.*)\]/g, '$1') }}
          </p>
        </template>

        <template v-if="type">
          <p class="group ml-0.5 font-semibold opacity-50">
            {{ type }}
            <span class="group-last:hidden">,&nbsp;</span>
          </p>
        </template>
      </div>
    </div>

    <template v-if="stats">
      <Separator
        class="mt-4 mb-10"
        label="STATS" />
      <div class="grid grid-cols-[1.5fr_2fr] gap-2 *:flex">
        <template v-for="stat in stats">
          <p class="col-start-1 items-end pt-[2px] font-medium tracking-tight">
            {{ stat.key }}
          </p>
          <p class="col-start-2 items-center">{{ stat.value }}</p>
        </template>
      </div>
    </template>

    <div v-if="effects && effects.pass">
      <Separator
        label="PASSIVES"
        class="mt-11 mb-9" />
      <p v-if="typeof effects.pass === 'string'"></p>
      <ItemEffect
        v-else
        v-if="effects.pass"
        :data="effects.pass" />
      <ItemEffect
        v-if="effects.pass2"
        :data="effects.pass2"
        class="mt-5" />
      <ItemEffect
        v-if="effects.pass3"
        :data="effects.pass3" />
    </div>

    <div
      v-if="item.itemlimit"
      class="mt-10 items-end self-end">
      <!-- <Separator class="mt-11 mb-3" /> -->

      Limited to one {{ item.itemlimit }} item.
    </div>

    <div v-if="effects && effects.act">
      <Separator
        v-if="effects && effects.act"
        label="ACTIVES"
        class="my-11" />

      <p v-if="typeof effects.act === 'string'"></p>
      <ItemEffect
        v-else
        v-if="effects.act"
        :data="effects.act" />
    </div>

    <template v-if="recipe">
      <Separator
        label="RECIPE"
        class="my-11" />

      <div class="group flex items-center justify-center gap-4">
        <template v-if="recipeArray">
          <template
            v-for="(item, i) in item.recipe"
            :key="i">
            <LittleTip :content="handleTooltip(item)">
              <button
                @click=""
                class="ring-neutral/80 ring-offset-b1 size-14 overflow-hidden rounded-lg shadow-sm hover:ring-1 hover:ring-offset-2">
                <LoadImg
                  v-if="itemId(item)"
                  :url="`/img/item/${itemId(item)}.webp`"
                  :alt="item + 'image'" />
              </button>
            </LittleTip>
            <icon
              name="teenyicons:add-outline"
              class="stroke-[1.5] last:hidden" />
          </template>
        </template>
        <LittleTip
          v-else
          :content="recipe[0] + item.buy ? item.buy + 'g' : ''">
          <button
            @click=""
            class="ring-neutral/80 ring-offset-b1 size-14 overflow-hidden rounded-lg shadow-sm hover:ring-1 hover:ring-offset-2">
            <LoadImg
              v-if="recipe"
              :url="`/img/item/${itemId(recipe[0])}.webp`"
              :alt="recipe + 'image'" />
          </button>
        </LittleTip>
      </div>
    </template>

    <div class="items-end self-end">
      <Separator class="mt-11 mb-3" />
      <div class="flex items-center px-2">
        <!--       <p
                    v-if="id"
                    class="flex grow items-end gap-3 pt-2 leading-none">
                    <span class="">Item ID:</span>
                    <span class="">{{ id }}</span>
                </p> -->

        <div class="flex grow items-center gap-3">
          <Tooltip content="Official Wiki">
            <a
              class="hover:ring-neutral/70 hover:ring-offset-b1 flex items-center gap-1 rounded-sm hover:ring-1 hover:ring-offset-2"
              :href="getWikiLink(item.name)"
              target="_blank"
              alt="link to league wiki">
              <img
                src="/img/logos/wikilogo.webp"
                class="size-6.5 rounded-sm" />
            </a>
          </Tooltip>
        </div>
        <p
          v-if="item.buy"
          class="flex items-center justify-end gap-2 self-end leading-none font-medium">
          <img
            src="/img/icons/Gold.png"
            class="h-4.5" />
          {{ item.buy.toString().replace(':>', '-> ') }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
