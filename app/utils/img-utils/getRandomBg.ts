import { bgArt } from "~~/shared"

export function getRandomBg() {
  return getRandom(Object.values(bgArt))
}
