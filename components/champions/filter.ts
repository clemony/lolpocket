const ds = computedAsync(async () => {
  return await useDataStore();
}, null);

export const items = computedAsync(async () => {
  return await [...(ds.value.SRitems || [])];
}, null);

export const filteredItems = computed(() => {
  const ts = useTempStore();
  const as = useAccountStore();
  let filtered = [...items.value];

  if (ts.browseItemStats.length) {
    ts.browseItemStats.forEach((stat) => {
      filtered = filtered.filter((item) => Object.keys(item.stats ? item.stats : '').includes(stat));
    });
  }

  if (ts.browseItemCats.length) {
    ts.browseItemCats.forEach((cat) => {
      filtered = filtered.filter((item) => Object.keys(item.menu ? item.menu : '').includes(cat));
    });
  }

  if (ts.browseItemTypes && ts.browseItemTypes !== 'Favorites') {
    filtered = filtered.filter((item) => item.type.includes(ts.browseItemTypes));
  }

  if (ts.browseItemTypes && ts.browseItemTypes === 'Favorites') {
    filtered = filtered.filter((item) => as.favoriteItems.includes(item));
  }

  if (ts.biSearchResult) filtered = filtered.filter((item) => ts.biSearchResult.includes(item));
  return filtered;
});
