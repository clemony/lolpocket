import PocketDrawer from 'components/drawer/PocketDrawer.vue';

export const useDrawer = (drawerType, pocket?, champion?: Champion, item?: Item, rune?: Rune) => {
  const ts = useTempStore();

  ts.drawerType = drawerType;

  if (pocket != null) {
    ts.drawerPocket = pocket;
  } else if (champion != null) {
    ts.selectedChampion = champion;
  } else if (item != null) {
    ts.selectedItem = item;
  } else if (rune != null) {
    ts.selectedRune = rune;
  }
  ts.drawerState = !ts.drawerState;

  if (!ts.drawerState) {
    ts.drawerPocket = null;
    ts.selectedChampion = null;
    ts.selectedItem = null;
    ts.selectedRune = null;
    ts.drawerType = null as drawer;
  }
};
