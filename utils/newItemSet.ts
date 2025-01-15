import { hexoid } from 'hexoid';
export default function newItemSet(pocketKey?) {
  if (pocketKey) {
    const pocket = getPocket(pocketKey);

    if (pocket) {
      const toID = hexoid();
      const newSet = reactive({
        key: toID(),
        name: generateRandomName() + ' Set',
        items: [],
        isDisabled: false,
        starred: 0,
      });

      pocket.items[0].itemSets.push(newSet);
    }
  } else {
    const toID = hexoid();
    return reactive({
      key: toID(),
      name: generateRandomName() + ' Set',
      items: [],
      isDisabled: false,
      starred: 0,
    });
  }
}
