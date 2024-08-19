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

interface Ability {
  key: string;
  name: string;
  context: string;
  img: string;
  data: Record<string, string>;
}

interface Champion {
  name: string;
  img: string;
  wiki: string;
  title: string;
  tags: string[];
  type: string;
  abilities: {
    passive: Ability;
    q: Ability; 
    w: Ability; 
    e: Ability; 
    r: Ability; 
  };
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

  function parseAbilityString(abilityString: string): { name: string; context: string; data: Record<string, string> } {
    if (typeof abilityString !== 'string') {
      return { name: '', context: '', data: {} };
    }
  
    const lines = abilityString.split('\n').filter(line => line.trim() !== '');
  
    if (lines.length > 0) {
      const name = lines[0].trim();
      let text = lines.slice(1).join('\n').trim();
      
      // Initialize categories
      const data: Record<string, string> = {};
      
      // Extract and remove specific lines from context
      const dataPrefixes = [
        "COOLDOWN:", 
        "TARGET RANGE:", 
        "COST:", 
        "CAST TIME:", 
        "RECHARGE:", 
        "EFFECT RADIUS:",
        "STATIC COOLDOWN:",
        "RANGE:",
        "WIDTH:",
        "SPEED:",
        "TARGET IMMUNITY:",
        "ANGLE:",
        "COLLISION RADIUS:"
      ];
  
      // Separate lines into categories and context
      const contextLines: string[] = [];
      
      lines.slice(1).forEach(line => {
        const trimmedLine = line.trim();
        let categorized = false;
        
        dataPrefixes.forEach(prefix => {
          if (trimmedLine.startsWith(prefix)) {
            data[prefix] = trimmedLine.substring(prefix.length).trim();
            categorized = true;
          }
        });
  
        if (!categorized) {
          contextLines.push(trimmedLine);
        }
      });
      
      const context = contextLines.join('\n').trim().replace('Innate:', '').replace('Active:', '');
  
      return { name, context, data };
    }
  
    return { name: '', context: '', data: {} };
  }
  
  function transformChampionData(data: any): Champion {
    return {
      name: data.name,
      img: data.img,
      wiki: data.wiki,
      title: data.title,
      tags: typeof data.tags === 'string' ? data.tags.split(',').map(tag => tag.trim()) : data.tags || [],
      type: data.type,
      abilities: {
        passive: {
          key: "P",
          ...parseAbilityString(data.passive),
          img: data.pImg,
        },
        q: {
          key: "Q",
          ...parseAbilityString(data.q),
          img: data.qImg,
        },
        w: {
          key: "W",
          ...parseAbilityString(data.w),
          img: data.wImg,
        },
        e: {
          key: "E",
          ...parseAbilityString(data.e),
          img: data.eImg,
        },
        r: {
          key: "R",
          ...parseAbilityString(data.r),
          img: data.rImg,
        }
      }
    };
  }

  const fetchData = async () => {
    try {
      const response = await fetch("/patchData/14.15.1.json");
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
  
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new TypeError("Received non-JSON response");
      }
  
      const json: DataObject[] = await response.json();
  
      json.forEach((object: DataObject) => {
        if (object.type === "rune") {
          runes.value.push(object as Rune);
        } else if (object.type === "champion") {
          // Use the transformChampionData function to transform and add the champion
          const transformedChampion = transformChampionData(object);
          champions.value.push(transformedChampion);
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