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
  type: string; // Assuming 'type' is a property in your JSON data
}

interface Champion {
  name: string;
  img: string;
  wiki: string;
  title: string;
  tags: string[]; // `tags` should be an array of strings
  type: string;
  pImg: string;
  qImg: string;
  wImg: string;
  eImg: string;
  rImg: string;
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

  function setSelectedChampion(champion: Champion) {
    selectedChampion.value = champion;
  }
  const items = ref<Item[]>([]);

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
          // Convert `tags` to an array of strings
          if (typeof object.tags === 'string') {
            object.tags = object.tags.split(',').map(tag => tag.trim());
          }
          champions.value.push(object as Champion);
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
