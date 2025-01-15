export default () => {
  const lolImgCdn = computed(() => {
    return 'https://ddragon.leagueoflegends.com/cdn/img/';
  });

  const getItemImage = (id: number) => {
    return 'https://ddragon.leagueoflegends.com/cdn/' + useDataStore().currentPatch + '/img/item/' + id + '.png';
  };

  const getChampionImage = (id: number) => {
    return 'https://ddragon.leagueoflegends.com/cdn/' + useDataStore().currentPatch + '/img/champion/' + id + '.png';
  };
};
