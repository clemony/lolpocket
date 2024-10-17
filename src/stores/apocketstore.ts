// src/stores/pocketStore.js
import { defineStore } from 'pinia';

export const usePocketStore = defineStore('pocketStore', {
  state: () => ({
    pockets: [
      { key: '1', name: 'Pocket A', type: 'Type 1' },
      { key: '2', name: 'Pocket B', type: 'Type 2' },
    ],
  }),
  actions: {
    addPocket(newPocket) {
      this.pockets.push(newPocket); // Directly mutating the state
    },
  },
});
import { type } from 'os';
