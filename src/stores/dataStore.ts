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
  tags: string[];
  type: string; // Assuming tags is an array of strings
}

interface DataObject {
  type: string;
  [key: string]: any;
}

export const useDataStore = defineStore("dataStore", () => {
  const runes = ref<Rune[]>([]);
  const champions = ref<Champion[]>([]);
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
          champions.value.push(object as Champion);
        } else if (object.type === "item") {
          items.value.push(object as Item);
        }
      });
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return { runes, champions, items, fetchData };
});
