import { hexoid } from 'hexoid';
import { toast } from 'vue-sonner';
import PocketToast from 'components/toast/PocketToast.vue';

const toID = hexoid();

export default function addPocket(name: string, tags: Array<string>, icon: string, bgColor: string, iconColor: string, key?: string) {
  const aKey = toID();

  const pocketChampionsValue: pocketChampions = {
    key: key || aKey,
    champions: [],
    starred: '',
  };

  const pocketItemsValue: pocketItems = {
    key: key || aKey,
    itemSets: [],
    starred: 0,
    alts: {
      alt1: [createDefaultItem()],
      alt2: [createDefaultItem()],
      alt3: [createDefaultItem()],
      alt4: [createDefaultItem()],
      alt5: [createDefaultItem()],
      alt6: [createDefaultItem()],
    },
    start: undefined,
    core: undefined,
    final: undefined,
  };

  const pocketRunesValue: pocketRunes = {
    key: key || aKey,
    runeSets: [],
    starred: 0,
    selected: 0,
  };

  // Create the new pocket
  const newPocket: pocket = {
    name: name || generateRandomString(),
    tags: tags || [''],
    pinned: false,
    key: key || aKey,
    icon: icon || 'teenyicons:folder-outline',
    bgColor: bgColor || '#000',
    iconColor: iconColor || '#FFF',
    champions: [pocketChampionsValue],
    items: [pocketItemsValue],
    runes: [pocketRunesValue],
    spells: {
      spell1: createDefaultSpell(),
      spell2: createDefaultSpell(),
      alt1: createDefaultSpell(),
      alt2: createDefaultSpell(),
    },
    notes: '',
    dateCreated: [createDateObject()],
    dateUpdated: [createDateObject()],
    component: null,
    inFolder: [],
  };

  usePocketStore().pockets.push(newPocket);
  newItemSet(newPocket.key);
  newRuneSet(newPocket.key);

  toast(markRaw(PocketToast), {
    unstyled: true,
    //duration: Infinity,
    classes: {
      toast: 'bg-b1/95 border !border-b2 shadow-pretty mt-14   w-98 max-w-98 justify-start rounded-lg p-5  !h-40 backdrop-blur-md relative ',
    },
    componentProps: {
      pocket: newPocket,
    },
  });
}
