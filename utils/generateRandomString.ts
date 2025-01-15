import { generate, count } from 'random-words';
export default function generateRandomString(): string {
  const championNames = useDataStore().champions.flatMap((champion) => cleanName(champion.name));

  const itemNames = useDataStore().items.flatMap((item) => cleanName(item.name));

  const moreWords = ['Towers', 'Minions', 'Minion Block', 'Lucker Dog', 'Dongers'];

  const leagueWords = championNames.concat(itemNames).concat(moreWords);

  function getRandomElement(array: string[]): string {
    return array[Math.floor(Math.random() * array.length)];
  }
  const leagueWord = getRandomElement(leagueWords);
  const generatedWords = [word()];

  const allWords = [leagueWord, ...generatedWords];

  const shuffledWords = allWords.sort(() => Math.random() - 0.5);

  return shuffledWords.join(' ');
}

function word() {
  let key = '';
  while (key.length < 4 || key.length > 16) {
    key = generate({ exactly: 1, join: ' ' });
  }
  key = key.charAt(0).toUpperCase() + key.slice(1);
  return key;
}
