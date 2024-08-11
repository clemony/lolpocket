import { defineStore } from "pinia";
import { ref } from "vue";

// Define types for the JSON data
interface Rune {
  name: string;
  wiki: string;
  tier: number;
  type: string;
  img: string;
  stats: string;
  path: string;
}

interface Item {
  name: string;
  img: string;
  buy: number;
  sell: number;
  stats: string;
  passive: string;
  active: string;
  type: string;
}

interface Champion {
  name: string;
  img: string;
  wiki: string;
  title: string;
  tags: string[];
  type: string;
  pImg: string;
  qImg: string;
  wImg: string;
  eImg: string;
  rImg: string;
  passive: string;
  q: string; 
  w: string; 
  e: string; 
  r: string; 
  passiveName?: string;
  passiveContext?: string;
  qName?: string;
  qContext?: string; 
  wName?: string; 
  wContext?: string; 
  eName?: string; 
  eContext?: string; 
  rName?: string; 
  rContext?: string; 
}

interface DataObject {
  type: string;
  tags?: string | string[]; // `tags` can be either a string or an array of strings
  [key: string]: any;
}

export const useDataStore = defineStore("dataStore", () => {
  const runes = ref<Rune[]>([]);
  const champions = ref<Champion[]>([]);
  const selectedChampion = ref<Champion | null>(null);
  const items = ref<Item[]>([]);

  function setSelectedChampion(champion: Champion) {
    selectedChampion.value = champion;
  }

  function parseAbilityString(abilityString: string): { name: string, context: string } {
    // Ensure the input is a string
    if (typeof abilityString !== 'string') {
      return { name: '', context: '' };
    }
  
    // Split by new lines
    const lines = abilityString.split('\n').filter(line => line.trim() !== '');
    
    // Check if there's at least one line
    if (lines.length > 0) {
      const name = lines[0].trim();
      const context = lines.slice(1).join('\n').trim();
      return { name, context };
    }
    
    return { name: '', context: '' };
  }

  function isString(value: any): value is string {
    return typeof value === 'string';
  }
  
  function isArrayOfStrings(value: any): value is string[] {
    return Array.isArray(value) && value.every(item => typeof item === 'string');
  }

  const fetchData = async () => {
    try {
      const response = await fetch("/patchData/14.15.1.json");
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
  
      // Check content type
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new TypeError("Received non-JSON response");
      }
  
      // Parse JSON
      const json: DataObject[] = await response.json();
  
      // Initialize data arrays based on type
      json.forEach((object: DataObject) => {
        if (object.type === "rune") {
          runes.value.push(object as Rune);
        } else if (object.type === "champion") {
          const champion = object as Champion;
  
          // Ensure champion has ability properties
          if (typeof champion.passive === 'string') {
            const passiveParsed = parseAbilityString(champion.passive);
            champion.passiveName = passiveParsed.name;
            champion.passiveContext = passiveParsed.context;
          }
          if (typeof champion.q === 'string') {
            const qParsed = parseAbilityString(champion.q);
            champion.qName = qParsed.name;
            champion.qContext = qParsed.context;
          }
          if (typeof champion.w === 'string') {
            const wParsed = parseAbilityString(champion.w);
            champion.wName = wParsed.name;
            champion.wContext = wParsed.context;
          }
          if (typeof champion.e === 'string') {
            const eParsed = parseAbilityString(champion.e);
            champion.eName = eParsed.name;
            champion.eContext = eParsed.context;
          }
          if (typeof champion.r === 'string') {
            const rParsed = parseAbilityString(champion.r);
            champion.rName = rParsed.name;
            champion.rContext = rParsed.context;
          }
  
          if (isString(champion.tags)) {
            champion.tags = champion.tags.split(',').map(tag => tag.trim());
          } else if (!isArrayOfStrings(champion.tags)) {
            champion.tags = []; // Default to an empty array if `tags` is not a string or array of strings
          }
  
          champions.value.push(champion);
        } else if (object.type === "item") {
          items.value.push(object as Item);
        }
      });
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return { runes, champions, items, fetchData, selectedChampion, setSelectedChampion };
});