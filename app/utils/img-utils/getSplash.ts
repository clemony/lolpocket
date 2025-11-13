// https://raw.communitydragon.org/plugins/rcp-be-lol-game-data/global/default/assets/characters/akshan/skins/base/images/akshan_splash_tile_0.jpg

import { skinIndex } from "~~/shared/indexes";

function cKey(keyOrId: string | number): string {
  const key = ref<string>();

  if (typeof keyOrId === "number") key.value = ix().champKeyById(keyOrId);
  else key.value = keyOrId;

  return key.value;
}
export function getSplash(
  keyOrId: string | number,
  type: SplashType,
  s?: Skin,
): string {
  const key = cKey(keyOrId);
  const champ = formatUrlChampKey(key);
  const skin = s || skinIndex[key][0];
  const folder = computed(() => {
    function id() {
      const a = skin.id.replace(/(\d+)\..*/, "$1");
      return a.length === 1 && key !== "Hwei" ? `0${a}` : a;
    }
    return skin.name === "Original" && key !== "Hwei" ? "base" : `skin${id()}`;
  });

  const partialUrl = skin.key.replace("<type", type);

  /* type === 'uncentered'
      ? `images/${champ}_splash_uncentered_${skin.id}`
      : type === 'centered'
        ? `images/${champ}_splash_centered_${skin.id}`
        : type === 'tile'
          ? `images/${champ}_splash_tile_${skin.id}`
          : type === 'load'
            ? `${champ}loadscreen_skin`
            : null */
  return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/${champ}/skins/${folder.value}/${partialUrl}.jpg`;
}

function getSkinDirectory(id: string, key: string) {
  const a = id?.replace(/(\d+)\..*/, "$1");
  return a?.length === 1 && key !== "Hwei" ? `0${a}` : a;
}
