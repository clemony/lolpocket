import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/assets/index.css";
import "@/assets/common.css";
import "@/assets/grid.css";
import App from "@/pages/App.vue"; 
import { getCurrent, appWindow} from '../node_modules/@tauri-apps/api/window.js';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes';
import VueResizeText from 'vue3-resize-text';
import PrimeVue from "primevue/config";
import Aura from '@/assets/presets';
import Tree from "primevue/tree";

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App);

// Get the current webview window
const currentWindow = getCurrent();

document.addEventListener('DOMContentLoaded', () => {
  const minimizeButton = document.getElementById('titlebar-minimize');
  if (minimizeButton && currentWindow) {
    minimizeButton.addEventListener('click', () => currentWindow.minimize());
  }

  const maximizeButton = document.getElementById('titlebar-maximize');
  if (maximizeButton && currentWindow) {
    maximizeButton.addEventListener('click', () => currentWindow.toggleMaximize());
  }

  const closeButton = document.getElementById('titlebar-close');
  if (closeButton && currentWindow) {
    closeButton.addEventListener('click', () => currentWindow.close());
  }
});


app.component("Tree", Tree);
const components = import.meta.glob("@/components/ui/*.vue", { eager: true });

Object.entries(components).forEach(([path, definition]) => {
  const componentName = path.split("/").pop()?.replace(/\.\w+$/, "") ?? "UnknownComponent";
  
  const component = (definition as { default: any }).default;
  app.component(componentName, component);
});


type TitleBarStyle = 'visible' | 'transparent' | 'overlay'

interface WindowOptions {
  titleBarStyle?: TitleBarStyle
}

export type {
  TitleBarStyle,
  WindowOptions
}

app.use(VueResizeText);
app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  unstyled: true,
  pt: Aura
});


// Mount the app to the element with id "app" in your HTML
app.mount("#app");
